import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { bot } from "./bot";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Telegram Bot Webhook
  if (bot) {
    console.log("Setting up bot webhook and info endpoints");
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

  const httpServer = createServer(app);

  return httpServer;
}
