import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { bot } from "./bot";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  // Health check endpoint for Railway
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Telegram Bot Webhook
  if (bot) {
    console.log("Setting up bot webhook and info endpoints");
    
    // Auto-setup webhook in production
    // Try to get URL from WEBAPP_URL, RAILWAY_PUBLIC_DOMAIN, or default
    let webappUrl = process.env.WEBAPP_URL;
    
    // If WEBAPP_URL is not set, try Railway's public domain
    if (!webappUrl && process.env.RAILWAY_PUBLIC_DOMAIN) {
      webappUrl = `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
      console.log(`Using Railway public domain: ${webappUrl}`);
    }
    
    // If still no URL, use default (should be set in production)
    if (!webappUrl) {
      webappUrl = "https://musorok-production.up.railway.app";
      console.log(`Using default URL: ${webappUrl}`);
    }
    
    if (process.env.NODE_ENV === "production") {
      try {
        const webhookUrl = `${webappUrl}/api/webhook`;
        console.log(`Setting up webhook: ${webhookUrl}`);
        await bot.telegram.setWebhook(webhookUrl);
        const webhookInfo = await bot.telegram.getWebhookInfo();
        console.log("Webhook configured:", webhookInfo.url);
      } catch (error) {
        console.error("Failed to set webhook:", error);
        console.error("Please manually set webhook using:");
        console.error(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${webappUrl}/api/webhook`);
      }
    } else {
      console.log("Development mode: Starting bot with polling...");
      try {
        // Use polling in development mode
        bot.launch().then(() => {
          console.log("Bot started with polling mode");
        }).catch((error) => {
          console.error("Failed to start bot with polling:", error);
        });
      } catch (error) {
        console.error("Error launching bot:", error);
      }
    }

    app.post("/api/webhook", async (req, res) => {
      console.log("Received webhook request:", req.body);
      try {
        await bot!.handleUpdate(req.body);
        console.log("Webhook handled successfully");
        res.sendStatus(200);
      } catch (error) {
        console.error("Webhook error:", error);
        res.sendStatus(500);
      }
    });

    // Bot info endpoint
    app.get("/api/bot-info", async (_req, res) => {
      console.log("Received bot-info request");
      try {
        if (!bot) {
          console.log("Bot not configured for bot-info");
          return res.status(503).json({ error: "Bot not configured" });
        }
        console.log("Fetching bot info from Telegram API");
        const botInfo = await bot!.telegram.getMe();
        console.log("Bot info fetched successfully:", botInfo);
        res.json({
          username: botInfo.username,
          id: botInfo.id,
          first_name: botInfo.first_name,
        });
      } catch (error) {
        console.error("Bot info error:", error);
        res.status(500).json({ error: "Failed to get bot info" });
      }
    });
  } else {
    console.log("Bot not available, skipping webhook and bot-info endpoints");
  }

  return httpServer;
}
