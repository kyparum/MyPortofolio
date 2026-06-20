# 🚀 Deploy Guide - Dashboard Backend API

Panduan lengkap deploy backend **WakaTime** & **GitHub** API ke Vercel (GRATIS).

## ⚠️ Important Notes

- **Local Development**: Backend API (`/api/wakatime` & `/api/github`) hanya jalan setelah deploy ke Vercel
- **Demo Data**: Sebelum deploy, dashboard akan tampil dengan demo data
- **Auto-Fetch**: Otomatis aktif setelah deploy (disabled di local dev untuk avoid errors)
- **Manual Test**: Klik tombol "Refresh" di dashboard untuk test API connection
- **GitHub Stats**: Followers, Following, Contributions otomatis terupdate dari GitHub API
- **WakaTime Stats**: Languages, Editors, OS, Categories otomatis terupdate dari WakaTime API

## 📋 Persiapan

1. **Akun Vercel** (gratis)
   - Daftar di https://vercel.com
   - Connect dengan GitHub account Anda

2. **WakaTime API Key**
   - Login ke https://wakatime.com
   - Buka https://wakatime.com/settings/account
   - Copy **Secret API Key** Anda

3. **GitHub Username**
   - Username GitHub Anda (contoh: `kyparum`)
   - Untuk stats public (Followers, Following, dll)

## 🌐 Cara Deploy ke Vercel

### **Metode 1: Deploy via Vercel Dashboard (Paling Mudah)**

1. **Push code ke GitHub**
   ```bash
   git add .
   git commit -m "Add WakaTime backend API"
   git push origin main
   ```

2. **Import ke Vercel**
   - Buka https://vercel.com/new
   - Klik "Import Project"
   - Pilih repository GitHub Anda
   - Klik "Import"

3. **Tambahkan Environment Variables (PENTING!)**
   - Di Vercel dashboard, buka project settings
   - Klik "Environment Variables"
   - Tambahkan variable berikut:
     
     **WakaTime API Key:**
     ```
     Name: WAKATIME_API_KEY
     Value: <PASTE_YOUR_WAKATIME_API_KEY_HERE>
     ```
     
     ⚠️ **SECURITY WARNING:**
     - **JANGAN PERNAH** commit/push API key ke GitHub!
     - API key harus disimpan **HANYA** di Vercel Environment Variables!
     - Jangan hardcode di file `.ts` atau `.js`!
     
     **Cara mendapatkan WakaTime API Key:**
     1. Login ke https://wakatime.com
     2. Buka Settings → Account → API Key
     3. Copy "Secret API Key" Anda
     4. Paste HANYA di Vercel Environment Variables
     
     **GitHub Username:**
     ```
     Name: GITHUB_USERNAME
     Value: <YOUR_GITHUB_USERNAME>
     ```
     (contoh: kyparum)
     
   - Klik "Save" untuk masing-masing variable

4. **Deploy**
   - Klik "Deploy"
   - Tunggu sampai selesai (~1-2 menit)
   - ✅ Selesai! API Anda live di:
     - WakaTime: `https://your-project.vercel.app/api/wakatime`
     - GitHub: `https://your-project.vercel.app/api/github`

### **Metode 2: Deploy via Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variable**
   ```bash
   vercel env add WAKATIME_API_KEY
   ```
   Paste API key Anda, lalu enter

5. **Deploy Production**
   ```bash
   vercel --prod
   ```

## 🧪 Testing API

### **Test WakaTime API di Browser**
Buka: `https://your-project.vercel.app/api/wakatime`

Response akan seperti:
```json
{
  "success": true,
  "data": {
    "start_date": "April 23, 2026",
    "end_date": "April 29, 2026",
    "daily_average": "44 minutes",
    "this_week_coding": "4 hours 29 minutes",
    "today_coding": "4 minutes",
    "top_3_languages": [
      { "name": "Python", "percent": 76, "time": "3 hours 25 minutes" }
    ]
  }
}
```

### **Test GitHub API di Browser**
Buka: `https://your-project.vercel.app/api/github`

Response akan seperti:
```json
{
  "success": true,
  "data": {
    "username": "kyparum",
    "name": "Okky Puspa Ningrum",
    "followers": 12,
    "following": 8,
    "public_repos": 24,
    "total_contributions": 18
  }
}
```

### **Test dengan curl**
```bash
# Test WakaTime API
curl https://your-project.vercel.app/api/wakatime

# Test GitHub API
curl https://your-project.vercel.app/api/github
```

## ⚙️ Konfigurasi (Opsional)

### **Update API Key di Code (Jika tidak pakai Environment Variable)**

Edit `api/wakatime.ts` baris 10:
```typescript
const WAKATIME_API_KEY = 'waka_YOUR_REAL_API_KEY_HERE';
```

### **Custom Domain**
1. Buka Vercel dashboard
2. Settings → Domains
3. Tambahkan domain Anda
4. Update DNS records sesuai instruksi Vercel

## 🔄 Auto-Deploy

Setiap kali Anda push ke GitHub, Vercel akan otomatis deploy versi terbaru!

```bash
git add .
git commit -m "Update WakaTime dashboard"
git push origin main
```

## 🐛 Troubleshooting

### **Error: "Failed to fetch"**
- ✅ Cek API key sudah benar di Environment Variables
- ✅ Cek API endpoint: `https://your-project.vercel.app/api/wakatime`
- ✅ Lihat logs di Vercel dashboard → Functions → Logs

### **Error: "CORS"**
- ✅ CORS headers sudah diset di `api/wakatime.ts`
- ✅ Pastikan frontend fetch dari domain yang sama

### **Data tidak update**
- ✅ Klik tombol "Refresh" di dashboard
- ✅ Cache duration: 5 menit (bisa diubah di `api/wakatime.ts`)

## 📊 Monitoring

**Lihat Logs:**
- Vercel Dashboard → Project → Functions → Logs
- Lihat request count, errors, response times

**Usage Limits (Free Plan):**
- ✅ 100GB bandwidth/bulan
- ✅ 100 hours serverless execution/bulan
- ✅ Unlimited requests

## 🎉 Selesai!

Dashboard WakaTime Anda sekarang:
- ✅ Menggunakan data **real-time** dari WakaTime API
- ✅ Auto-update setiap kali refresh
- ✅ Hosted **GRATIS** di Vercel
- ✅ Auto-deploy setiap push ke GitHub

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- WakaTime API: https://wakatime.com/developers
