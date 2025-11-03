# Telegram Bot Sozlash - To'liq Qo'llanma

## 🤖 Bot Token

Bot token: `8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM`

## 📋 Qadamlar

### 1. Railway'da Environment Variable Qo'shish

1. Railway → musor_ok → Settings → Variables
2. "+ New Variable" tugmasini bosing
3. **Name:** `BOT_TOKEN`
4. **Value:** `8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM`
5. "Add" tugmasini bosing

### 2. WEBAPP_URL Qo'shish (ixtiyoriy)

Agar Railway URL'ni o'zgartirmoqchi bo'lsangiz:

1. "+ New Variable" tugmasini bosing
2. **Name:** `WEBAPP_URL`
3. **Value:** `https://musorok-production.up.railway.app` (yoki o'zingizning URL)
4. "Add" tugmasini bosing

### 3. Webhook Sozlash

**Webhook URL:**
```
https://musorok-production.up.railway.app/api/webhook
```

**Sozlash usuli:**

#### Variant 1: Browser orqali
Browser'da quyidagi URL'ni oching (BOT_TOKEN o'rniga o'zingizning token'ni kiriting):

```
https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/setWebhook?url=https://musorok-production.up.railway.app/api/webhook
```

#### Variant 2: curl orqali
```bash
curl -X POST "https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/setWebhook?url=https://musorok-production.up.railway.app/api/webhook"
```

#### Variant 3: PowerShell orqali
```powershell
Invoke-WebRequest -Uri "https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/setWebhook?url=https://musorok-production.up.railway.app/api/webhook"
```

### 4. Webhook'ni Tekshirish

Tekshirish uchun quyidagi URL'ni oching:

```
https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/getWebhookInfo
```

Javobda quyidagilar ko'rinishi kerak:
```json
{
  "ok": true,
  "result": {
    "url": "https://musorok-production.up.railway.app/api/webhook",
    "has_custom_certificate": false,
    "pending_update_count": 0
  }
}
```

### 5. Telegram Mini App Sozlash

1. [@BotFather](https://t.me/botfather) ga kiring
2. `/newapp` yoki `/myapps` buyrug'ini bering
3. Bot'ni tanlang
4. **Web App URL:** `https://musorok-production.up.railway.app`
5. Saqlang

### 6. Menu Button Sozlash

1. [@BotFather](https://t.me/botfather) ga kiring
2. `/setmenubutton` buyrug'ini bering
3. Bot'ni tanlang
4. **Button text:** `Открыть приложение`
5. **Web App URL:** `https://musorok-production.up.railway.app`
6. Saqlang

---

## ✅ Tekshirish

### Bot'ni Test Qilish:

1. Telegram'da bot'ni toping
2. `/start` buyrug'ini yuboring
3. Bot javob berishi kerak va "🌐 Открыть приложение" tugmasi ko'rinishi kerak

### Webhook Test:

1. Railway → musor_ok → Deployments → Logs
2. Bot'ga `/start` yuboring
3. Logs'da webhook request ko'rinishi kerak

---

## 🐛 Muammolar

### Webhook ishlamayapti:

1. **Tekshirish:**
   - Railway URL to'g'ri ekanligini tekshiring
   - `/api/webhook` endpoint mavjudligini tekshiring
   - `BOT_TOKEN` to'g'ri sozlanganligini tekshiring

2. **Logs tekshirish:**
   - Railway → Deployments → Logs
   - Webhook request'larni ko'ring

3. **Webhook info:**
   ```
   https://api.telegram.org/bot8294155296:AAHg37E0Lob8evx1V7Bbsg4ksqVonKRPtEM/getWebhookInfo
   ```

### Bot javob bermayapti:

1. `BOT_TOKEN` to'g'ri ekanligini tekshiring
2. Webhook to'g'ri sozlanganligini tekshiring
3. Railway'da server ishlayotganini tekshiring

---

## 📱 Bot Komandalari

- `/start` - Botni ishga tushirish va Mini App'ni ochish
- `/help` - Yordam ma'lumotlari

---

## 🔗 Foydali Linklar

- Bot API Docs: https://core.telegram.org/bots/api
- Telegraf Docs: https://telegraf.js.org
- Railway Docs: https://docs.railway.app

