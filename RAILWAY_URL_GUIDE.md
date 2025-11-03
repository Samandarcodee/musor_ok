# Railway URL Qanday Olish - Qo'llanma

## 🚀 Deploy URL Olish

### 1-usul: Railway Dashboard orqali (Eng oson)

1. **Railway'ga kiring:**
   - [railway.app](https://railway.app) ga kiring
   - Login qiling

2. **Project'ni oching:**
   - `musor_ok` project'ni tanlang

3. **Settings bo'limiga kiring:**
   - Yuqorida "Settings" tab'ni bosing
   - Yoki "Networking" bo'limiga kiring

4. **URL olish:**
   - **"Generate Domain"** tugmasini bosing (agar domain yaratilmagan bo'lsa)
   - Yoki **"Custom Domain"** qo'shing
   - Railway avtomatik URL beradi: `https://musor-ok-production.up.railway.app`

### 2-usul: Deployments bo'limidan

1. Railway → musor_ok → **"Deployments"** tab
2. Eng oxirgi deployment'ni tanlang
3. **"View"** yoki **"Open"** tugmasini bosing
4. URL avtomatik ko'rsatiladi

### 3-usul: Service Overview

1. Railway → musor_ok
2. Asosiy sahifada service kartasi ko'rinadi
3. O'ng burchakda **"..."** (three dots) menu
4. **"Open"** yoki **"Copy URL"** tanlang

---

## 📋 URL Ko'rinishi

Railway URL'lar quyidagicha ko'rinadi:

```
https://musor-ok-production.up.railway.app
```

Yoki:

```
https://[service-name]-[branch].up.railway.app
```

---

## 🔗 Custom Domain (ixtiyoriy)

1. Settings → **"Networking"**
2. **"Custom Domain"** bo'limiga kiring
3. Domain nomini kiriting (masalan: `ecovyvoz.com`)
4. DNS sozlamalarini qo'shing

---

## ✅ URL'ni Tekshirish

URL'ni browser'da ochib test qiling:

```bash
# Browser'da oching
https://your-railway-url.railway.app

# Yoki curl bilan
curl https://your-railway-url.railway.app
```

---

## 📱 Telegram Mini App'ga Qo'shish

URL olingandan keyin:

1. [@BotFather](https://t.me/botfather) ga kiring
2. `/newapp` yoki `/myapps` buyrug'ini bering
3. Bot'ni tanlang
4. **Web App URL:** Railway URL'ni kiriting
5. Saqlang

---

## 🐛 Muammo: URL ko'rinmayapti

Agar URL ko'rinmasa:

1. Service deploy qilinganini tekshiring
2. Deployments bo'limida "Active" status ko'rinishi kerak
3. Settings → Networking → "Generate Domain" tugmasini bosing
4. Bir necha daqiqa kutib, qayta tekshiring

