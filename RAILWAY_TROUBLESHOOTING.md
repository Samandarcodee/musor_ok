# Railway Deploy Muammolari va Yechimlar

## 🐛 "Application failed to respond" Xatosi

### 1. Deploy Logs'ni Tekshirish

**Qadamlar:**
1. Railway → musor_ok → **"Deployments"** tab
2. Eng oxirgi deployment'ni tanlang
3. **"View Logs"** yoki **"Logs"** tugmasini bosing
4. Xatolikni ko'ring

### 2. Keng Tarqalgan Muammolar

#### Muammo 1: Port 5000 Noto'g'ri

**Xatolik:** Server ishlamayapti
**Yechim:**
- Railway'da port 5000 ni tekshiring
- Settings → Networking → Port: `5000`

#### Muammo 2: Path Resolution Xatosi

**Xatolik:** `TypeError [ERR_INVALID_ARG_TYPE]: paths[0] must be string`
**Yechim:**
- Kod yangilangan, lekin eski build bo'lishi mumkin
- Railway'da **"Redeploy"** qiling

#### Muammo 3: Build Xatosi

**Xatolik:** Build failed
**Yechim:**
- Logs'da build xatolikni ko'ring
- Local'da `npm run build` ishlayotganini tekshiring

#### Muammo 4: DATABASE_URL Xatosi

**Xatolik:** `DATABASE_URL must be set`
**Yechim:**
- Settings → Variables → `DATABASE_URL` mavjudligini tekshiring
- Connection string to'g'ri ekanligini tekshiring

### 3. Tekshirish Listi

✅ **Deploy Logs:**
- [ ] Logs'da xatolik bor yoki yo'q?
- [ ] Server "serving on port 5000" yozuvini ko'rsatayaptimi?

✅ **Build:**
- [ ] Build muvaffaqiyatli tugaganmi?
- [ ] `dist/` papkasi yaratilganmi?

✅ **Environment Variables:**
- [ ] `DATABASE_URL` mavjudmi?
- [ ] To'g'ri connection string kiritilganmi?

✅ **Port:**
- [ ] Railway'da port 5000 sozlanganmi?
- [ ] Network settings'da port to'g'rimi?

### 4. Redeploy Qilish

Agar kod yangilangan bo'lsa:

1. Railway → musor_ok → Deployments
2. **"Redeploy"** yoki **"Trigger Deploy"** tugmasini bosing
3. Yoki yangi commit qiling (GitHub avtomatik deploy qiladi)

### 5. Logs'ni Ko'rish

**Terminal orqali:**
```bash
railway logs
```

**Yoki Railway Dashboard:**
- Deployments → Eng oxirgi deployment → Logs

### 6. Tekshiruv Buyruqlari

**Local'da test qilish:**
```bash
# Build qilish
npm run build

# Production'da test qilish
npm start

# Browser'da ochish
# http://localhost:5000
```

---

## 🔍 Logs'da Qidirish

**Ijobiy belgilar:**
- ✅ `serving on port 5000`
- ✅ `Server is running`
- ✅ `Build completed successfully`

**Salbiy belgilar:**
- ❌ `TypeError`
- ❌ `Cannot find module`
- ❌ `ERR_INVALID_ARG_TYPE`
- ❌ `DATABASE_URL must be set`

---

## 📞 Yordam

Agar muammo hal bo'lmasa:
1. Railway Logs'ni to'liq nusxalang
2. GitHub Issues'ga yozing
3. Railway Help Station: https://railway.app/help

