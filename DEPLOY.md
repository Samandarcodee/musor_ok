# ЭкоВывоз - Deploy Qo'llanmasi (Telegram Mini App)

## 🚀 Deploy Variantlari

### 1. Railway (Tavsiya etiladi) ⭐

**Avantajlar:**
- Tez va oson deploy
- Free tier mavjud
- PostgreSQL integratsiyasi
- GitHub bilan avtomatik deploy

**Qadamlar:**

1. **Railway'ga kirish:**
   - [railway.app](https://railway.app) ga kiring
   - GitHub bilan login qiling

2. **Yangi project yaratish:**
   - "New Project" → "Deploy from GitHub repo"
   - EcoVyvoz repository'ni tanlang

3. **Environment Variables (MUHIM!):**
   - Settings → Variables → "+ New Variable"
   - Qo'shing:
     ```
     Name: DATABASE_URL
     Value: postgresql://neondb_owner:npg_X5AFuMhj4cdl@ep-round-glitter-ad2fxbre-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
     ```
   - **Eslatma:** PORT Railway tomonidan avtomatik o'rnatiladi

4. **Build va Deploy Settings:**
   - Build Command: `npm run build` (railway.json orqali avtomatik)
   - Start Command: `npm start` (railway.json orqali avtomatik)
   - Restart Policy: "On Failure" (10 retries)
   - Railway avtomatik build va deploy qiladi

5. **URL Olish:**
   - Railway → musor_ok → Settings → Networking
   - Yoki Deployments → eng oxirgi deployment → "View"
   - URL: `https://musor-ok-production.up.railway.app` (yoki o'xshash)
   - **Batafsil:** `RAILWAY_URL_GUIDE.md` faylini o'qing

6. **Telegram Bot'ga qo'shish:**
   - BotFather'da `/newapp` yoki `/setmenubutton`
   - URL: `https://your-app.railway.app`

---

### 2. Render

**Avantajlar:**
- Free tier
- Avtomatik SSL
- Neon integratsiyasi

**Qadamlar:**

1. **Render'ga kirish:**
   - [render.com](https://render.com) ga kiring
   - GitHub bilan login qiling

2. **Yangi Web Service:**
   - "New" → "Web Service"
   - Repository'ni tanlang

3. **Sozlamalar:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Environment:**
     ```
     NODE_ENV=production
     PORT=10000
     DATABASE_URL=your_neon_connection_string
     ```

4. **Deploy:**
   - "Create Web Service"
   - URL: `https://your-app.onrender.com`

---

### 3. Vercel (Serverless)

**Eslatma:** Vercel uchun server code'ni qayta yozish kerak bo'lishi mumkin.

---

## 📱 Telegram Mini App Sozlash

### BotFather orqali:

1. **Bot yaratish:**
   ```
   /newbot
   ```

2. **Mini App qo'shish:**
   ```
   /newapp
   ```
   - Bot'ni tanlang
   - App title: `ЭкоВывоз`
   - Short name: `ecovyvoz`
   - Description: `Сервис вывоза мусора по подписке`
   - Photo: Logo yuklang
   - **Web App URL:** `https://your-app.railway.app`

3. **Menu button:**
   ```
   /setmenubutton
   ```
   - Bot'ni tanlang
   - Button text: `Открыть приложение`
   - Web App URL: `https://your-app.railway.app`

---

## 🔧 Production Build

### Local'da test qilish:

```bash
npm run build
npm start
```

### Environment Variables:

```env
DATABASE_URL=postgresql://neondb_owner:password@ep-xxx.neon.tech/neondb?sslmode=require
NODE_ENV=production
PORT=5000
```

---

## ✅ Deploy'dan keyin tekshirish:

1. **URL'ni oching:** `https://your-app.railway.app`
2. **Telegram'da test qiling:**
   - Bot'ni oching
   - Menu button'ni bosing
   - Mini App ochilishi kerak

---

## 🐛 Muammolar:

### 1. CORS xatosi:
Server'da CORS middleware qo'shing:
```typescript
import cors from 'cors';
app.use(cors({
  origin: ['https://web.telegram.org', 'https://telegram.org']
}));
```

### 2. HTTPS kerak:
Telegram Mini App HTTPS talab qiladi. Railway va Render avtomatik SSL beradi.

### 3. Database connection:
Neon'da compute ACTIVE bo'lishi kerak. Idle bo'lsa, uyg'otish kerak.

---

## 📞 Yordam:

- Railway Docs: https://docs.railway.app
- Telegram Mini Apps: https://core.telegram.org/bots/webapps
- **Batafsil qo'llanma:** `RAILWAY_SETUP.md` faylini o'qing

