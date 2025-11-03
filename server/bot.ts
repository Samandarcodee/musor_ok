import { Bot, Context } from "telegraf";

if (!process.env.BOT_TOKEN) {
  console.warn("BOT_TOKEN not set - Telegram bot will be disabled");
}

export const bot = process.env.BOT_TOKEN ? new Bot(process.env.BOT_TOKEN) : null;

const webappUrl = process.env.WEBAPP_URL || "https://musorok-production.up.railway.app";

if (bot) {
  // Bot commands
  bot.command("start", async (ctx: Context) => {
    await ctx.reply(
      "👋 Добро пожаловать в ЭкоВывоз!\n\n" +
      "Современный сервис вывоза мусора по подписке в Санкт-Петербурге.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🌐 Открыть приложение",
                web_app: { url: webappUrl }
              }
            ]
          ]
        }
      }
    );
  });

  bot.command("help", async (ctx: Context) => {
    await ctx.reply(
      "📱 ЭкоВывоз - Сервис вывоза мусора по подписке\n\n" +
      "Команды:\n" +
      "/start - Начать работу\n" +
      "/help - Помощь\n\n" +
      "Используйте кнопку ниже, чтобы открыть приложение:",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🌐 Открыть приложение",
                web_app: { url: webappUrl }
              }
            ]
          ]
        }
      }
    );
  });

  // Handle errors
  bot.catch((err, ctx) => {
    console.error("Bot error:", err);
    ctx.reply("Произошла ошибка. Попробуйте позже.");
  });
}

export default bot;

