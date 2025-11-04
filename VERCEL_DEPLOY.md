# Vercel'ga Deploy Qo'llanmasi

## 🚀 Vercel Deploy Qadamlar

### 1. Vercel'ga Kirish

1. [vercel.com](https://vercel.com) ga kiring
2. GitHub bilan login qiling
3. "New Project" tugmasini bosing

### 2. Repository'ni Tanlash

1. GitHub repository'ni tanlang: `Samandarcodee/musor_ok`
2. "Import" tugmasini bosing

### 3. Build Settings

Vercel avtomatik quyidagilarni aniqlaydi:
- **Framework Preset:** Other
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`

### 4. Environment Variables (MUHIM!)

Vercel → Project Settings → Environment Variables bo'limiga quyidagilarni qo'shing:

```
BOT_TOKEN=8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM
```

```
DATABASE_URL=postgresql://neondb_owner:npg_X5AFuMhj4cdl@ep-round-glitter-ad2fxbre-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**Ixtiyoriy (avtomatik sozlanadi):**
```
NODE_ENV=production
```

**⚠️ Eslatma:** `WEBAPP_URL` qo'shish shart emas - Vercel avtomatik `VERCEL_URL` o'zgaruvchisini beradi.

### 5. Deploy

1. "Deploy" tugmasini bosing
2. Deploy tugaguncha kuting (2-3 daqiqa)

### 6. Webhook Sozlash

Deploy qilingandan keyin:

1. **Vercel URL'ni oling:**
   - Vercel Dashboard → Your Project → Domains
   - URL: `https://your-project.vercel.app` (yoki custom domain)

2. **Webhook'ni sozlang:**

   **Variant 1: API endpoint orqali (avtomatik)**
   ```
   https://your-project.vercel.app/api/setup-webhook
   ```
   Browser'da yoki curl bilan oching. Bu avtomatik webhook'ni sozlaydi.

   **Variant 2: Manual (Telegram API orqali)**
   ```
   https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/setWebhook?url=https://your-project.vercel.app/api/webhook
   ```

3. **Webhook'ni tekshiring:**
   ```
   https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/getWebhookInfo
   ```

### 7. Telegram Mini App Sozlash

1. [@BotFather](https://t.me/botfather) ga kiring
2. `/newapp` yoki `/myapps` buyrug'ini bering
3. Bot'ni tanlang
4. **Web App URL:** `https://your-project.vercel.app`
5. Saqlang

### 8. Menu Button Sozlash

1. [@BotFather](https://t.me/botfather) ga kiring
2. `/setmenubutton` buyrug'ini bering
3. Bot'ni tanlang
4. **Button text:** `Открыть приложение`
5. **Web App URL:** `https://your-project.vercel.app`
6. Saqlang

---

## ✅ Tekshirish

### 1. Bot'ni Test Qilish:

1. Telegram'da bot'ni toping
2. `/start` buyrug'ini yuboring
3. Bot javob berishi kerak va "🌐 Открыть приложение" tugmasi ko'rinishi kerak

### 2. Webhook Test:

1. Vercel Dashboard → Your Project → Functions
2. `/api/webhook` function'ni ko'ring
3. Bot'ga `/start` yuboring
4. Functions logs'da webhook request ko'rinishi kerak

### 3. API Endpoints:

- **Webhook:** `https://your-project.vercel.app/api/webhook`
- **Bot Info:** `https://your-project.vercel.app/api/bot-info`
- **Setup Webhook:** `https://your-project.vercel.app/api/setup-webhook`

---

## 🐛 Muammolar

### 1. Build xatosi:

**Xatolik:** "Build failed"

**Yechim:**
- Logs'ni tekshiring (Vercel Dashboard → Deployments → Logs)
- `npm run build` local'da ishlayotganini tekshiring
- Node.js versiyasini tekshiring (18+ kerak)

### 2. Bot ishlamayapti:

**Yechim:**
1. `BOT_TOKEN` to'g'ri sozlanganini tekshiring
2. Webhook to'g'ri sozlanganligini tekshiring:
   ```
   https://api.telegram.org/botYOUR_TOKEN/getWebhookInfo
   ```
3. Vercel Functions logs'ni tekshiring

### 3. Webhook xatosi:

**Xatolik:** "Webhook error" yoki "500 Internal Server Error"

**Yechim:**
1. Vercel Dashboard → Functions → `/api/webhook` → Logs
2. Xatolikni ko'ring
3. `BOT_TOKEN` to'g'ri ekanligini tekshiring
4. Function timeout'ni tekshiring (maxDuration: 10 seconds)

### 4. CORS xatosi:

Vercel'da CORS avtomatik sozlanadi, lekin agar muammo bo'lsa:
- Telegram domain'lari avtomatik ruxsat etiladi
- Vercel avtomatik CORS middleware qo'shadi

---

## 📋 API Endpoints

### POST `/api/webhook`
Telegram webhook'ni qabul qiladi.

### GET `/api/bot-info`
Bot haqida ma'lumot qaytaradi:
```json
{
  "username": "your_bot_username",
  "id": 123456789,
  "first_name": "Your Bot Name"
}
```

### GET `/api/setup-webhook`
Webhook'ni avtomatik sozlaydi (faqat bir marta ishlatish kerak).

---

## 🔄 Continuous Deployment

Vercel GitHub bilan integratsiya qilingan:
- Har bir `git push` avtomatik yangi deploy yaratadi
- Preview deployments avtomatik yaratiladi
- Production deployment `main` branch'ga push qilinganda avtomatik

---

## 💡 Maslahatlar

1. **Environment Variables:**
   - Production, Preview, va Development uchun alohida sozlash mumkin
   - Secrets'lar to'g'ri saqlang

2. **Function Timeout:**
   - Hobby plan: 10 seconds
   - Pro plan: 60 seconds
   - Telegram webhook'lar tez ishlashi kerak

3. **Logs:**
   - Vercel Dashboard → Functions → Logs
   - Real-time monitoring

---

## 📞 Yordam

- Vercel Docs: https://docs.vercel.com
- Telegram Bot API: https://core.telegram.org/bots/api
- Telegraf Docs: https://telegraf.js.org

