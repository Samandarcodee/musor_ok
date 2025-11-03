# Railway Sozlamalari - To'liq Qo'llanma

## 📋 Kerakli Sozlamalar

### 1. **Source (Manba)** ✅
- **Repository:** `Samandarcodee/musor_ok` (GitHub)
- **Branch:** `main` (production)
- **Wait for CI:** O'chirib qo'ying (OFF)

### 2. **Build (Yaratish)**
- **Builder:** Nixpacks Default (avtomatik)
- **Custom Build Command:** `npm run build`
  - Bu `railway.json` orqali avtomatik sozlanadi
  - Qo'shish: Settings → Build → "+ Build Command" → `npm run build`

### 3. **Deploy (Joylashtirish)**
- **Custom Start Command:** `npm start`
  - Settings → Deploy → "+ Start Command" → `npm start`
  - Bu `railway.json` orqali avtomatik sozlanadi

### 4. **Variables (O'zgaruvchilar)** ⚠️ MUHIM!

Settings → Variables bo'limiga quyidagi variable'larni qo'shing:

```
DATABASE_URL=postgresql://neondb_owner:npg_X5AFuMhj4cdl@ep-round-glitter-ad2fxbre-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

**Yoki agar oddiy endpoint ishlatmoqchi bo'lsangiz:**

```
DATABASE_URL=postgresql://neondb_owner:npg_X5AFuMhj4cdl@ep-round-glitter-ad2fxbre.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
```

**Qo'shimcha (ixtiyoriy):**
```
NODE_ENV=production
```

**⚠️ Eslatma:** PORT o'zgaruvchisi Railway tomonidan avtomatik o'rnatiladi, qo'shish shart emas.

### 5. **Restart Policy (Qayta ishga tushirish)**
- **Policy:** "On Failure" ✅
- **Max Retries:** 10 ✅

### 6. **Networking (Tarmoq)**
- Deploy qilingandan keyin avtomatik sozlanadi
- Railway avtomatik HTTPS va domain beradi

---

## 🚀 Deploy Qadamlar

### 1. Repository'ni tekshiring:
✅ GitHub'da repository mavjud: https://github.com/Samandarcodee/musor_ok

### 2. Railway'da sozlang:

**a) Variables qo'shing:**
1. Railway → musor_ok → Settings
2. "Variables" tab ni oching
3. "+ New Variable" tugmasini bosing
4. **Name:** `DATABASE_URL`
5. **Value:** Neon connection string'ni yopishtiring
6. "Add" tugmasini bosing

**b) Start Command tekshiring:**
1. Settings → Deploy
2. "Custom Start Command" bo'limida
3. "+ Start Command" tugmasini bosing
4. `npm start` ni kiriting
5. Saqlang

**c) Build Command tekshiring:**
1. Settings → Build
2. "Custom Build Command" bo'limida
3. "+ Build Command" tugmasini bosing
4. `npm run build` ni kiriting
5. Saqlang

### 3. Deploy qilish:
- Railway avtomatik GitHub'dan yangi commit'larni oladi
- Yoki manual deploy: Deployments → "Deploy" tugmasi

---

## ✅ Deploy'dan keyin tekshirish

### 1. URL olish:
- Railway → musor_ok → Settings
- Yoki Deployments bo'limida
- URL: `https://musor-ok-production.up.railway.app` (yoki o'xshash)

### 2. Test qilish:
```bash
# Browser'da oching
https://your-app.railway.app

# Yoki curl bilan
curl https://your-app.railway.app
```

### 3. Logs tekshirish:
- Railway → musor_ok → Deployments
- Eng oxirgi deployment'ni tanlang
- "View Logs" tugmasini bosing

---

## 🐛 Muammolar va Yechimlar

### 1. Build xatosi:
**Xatolik:** "Build failed"
**Yechim:**
- Logs'ni tekshiring
- `npm run build` local'da ishlayotganini tekshiring
- Node.js versiyasini tekshiring (18+ kerak)

### 2. Start xatosi:
**Xatolik:** "Application failed to start"
**Yechim:**
- `DATABASE_URL` to'g'ri sozlanganini tekshiring
- Port 5000 default, Railway o'zgartirishi mumkin
- Logs'da xatolikni ko'ring

### 3. Database connection xatosi:
**Xatolik:** "DATABASE_URL must be set"
**Yechim:**
- Variables bo'limida `DATABASE_URL` borligini tekshiring
- Neon compute ACTIVE bo'lishi kerak
- Connection string to'g'ri bo'lishi kerak

### 4. 404 xatosi:
**Xatolik:** "Cannot GET /"
**Yechim:**
- Static files to'g'ri build qilinganini tekshiring
- `dist/public` papkasi mavjudligini tekshiring
- Server'da static file serving ishlayotganini tekshiring

---

## 📱 Telegram Mini App Sozlash

### URL olish:
1. Railway → musor_ok → Settings
2. "Domains" yoki "Networking" bo'limida
3. Railway URL'ni ko'ring (masalan: `https://musor-ok-production.up.railway.app`)

### BotFather'da sozlash:
1. [@BotFather](https://t.me/botfather) ga kiring
2. `/newapp` yoki `/myapps` buyrug'ini bering
3. Bot'ni tanlang
4. **Web App URL:** Railway URL'ni kiriting
5. Saqlang

---

## 🔄 Avtomatik Deploy

Railway avtomatik ravishda:
- ✅ GitHub'dan yangi commit'larni oladi
- ✅ Build qiladi
- ✅ Deploy qiladi
- ✅ Logs'ni ko'rsatadi

**To'xtatish:**
- Settings → Source → Branch disconnect

---

## 📊 Monitoring

### Metrics:
- Railway → musor_ok → Metrics
- CPU, Memory, Network usage

### Logs:
- Railway → musor_ok → Deployments
- Real-time logs ko'rish

---

## 💰 Pricing

- **Free Tier:** $5 credit/oy
- **Hobby Plan:** $20/oy (ko'proq resurslar)
- **Pro Plan:** $50/oy (production uchun)

---

## 📞 Yordam

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: https://github.com/railwayapp/railway/issues

