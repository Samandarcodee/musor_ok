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
    app.post("/api/webhook", async (req, res) => {
      try {
        await bot.handleUpdate(req.body);
        res.sendStatus(200);
      } catch (error) {
        console.error("Webhook error:", error);
        res.sendStatus(500);
      }
    });

    // Bot info endpoint
    app.get("/api/bot-info", async (_req, res) => {
      try {
        if (!bot) {
          return res.status(503).json({ error: "Bot not configured" });
        }
        const botInfo = await bot.api.getMe();
        res.json({
          username: botInfo.username,
          id: botInfo.id,
          first_name: botInfo.first_name,
        });
      } catch (error) {
        res.status(500).json({ error: "Failed to get bot info" });
      }
    });
  }

  const httpServer = createServer(app);

  return httpServer;
}
