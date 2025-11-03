# GitHub'ga Push Qilish

## 1. Yangi Repository Yaratish (Tavsiya)

1. GitHub'ga kiring: https://github.com/new
2. Repository nomi: `EcoVyvoz` yoki `ecovyvoz-miniapp`
3. "Public" yoki "Private" tanlang
4. "Create repository" bosing

## 2. Remote Qo'shish va Push

```bash
# GitHub remote qo'shish
git remote add origin https://github.com/Samandarcodee/EcoVyvoz.git

# Yoki SSH bilan:
git remote add origin git@github.com:Samandarcodee/EcoVyvoz.git

# Commit qilish
git commit -m "Deploy ready: Telegram Mini App with Drizzle ORM and Neon DB"

# Push qilish
git push -u origin main
```

## 3. Mavjud Repository'ga Push (musor_ok)

Agar eski `musor_ok` repository'ni yangilashni xohlasangiz:

```bash
# GitHub remote qo'shish
git remote add github https://github.com/Samandarcodee/musor_ok.git

# Push qilish (force push kerak bo'lishi mumkin)
git push -u github main --force
```

**⚠️ Eslatma:** Force push eski kodni o'chirib yuboradi!

