# 📊 WakaTime Dashboard Integration

Dashboard WakaTime dengan auto-update data real-time dari WakaTime API.

## 🚀 Quick Start

### **Local Development**

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` dan isi `WAKATIME_API_KEY` Anda.

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Test backend API:**
   ```bash
   curl http://localhost:3000/api/wakatime
   ```

### **Deploy to Production**

Lihat [DEPLOY.md](./DEPLOY.md) untuk panduan lengkap.

Quick deploy:
```bash
git push origin main  # Auto-deploy jika sudah connect ke Vercel
```

## 🏗️ Architecture

```
┌─────────────────┐
│   React App     │
│   (Frontend)    │
└────────┬────────┘
         │ fetch('/api/wakatime')
         ↓
┌─────────────────┐
│ Vercel Function │
│  (Backend API)  │
└────────┬────────┘
         │ fetch with API key
         ↓
┌─────────────────┐
│  WakaTime API   │
│ (wakatime.com)  │
└─────────────────┘
```

## 📁 File Structure

```
├── api/
│   ├── wakatime.ts          # Serverless function
│   └── README.md            # API documentation
├── src/app/components/
│   └── WakaTime.tsx         # Frontend dashboard
├── docs/
│   ├── DEPLOY.md            # Deploy guide
│   └── WAKATIME.md          # This file
├── vercel.json              # Vercel config
└── .env.example             # Environment variables template
```

## ⚙️ Configuration

### **Environment Variables**

```bash
WAKATIME_API_KEY=waka_xxx  # Your WakaTime secret API key
```

Get your API key: https://wakatime.com/settings/account

### **Timeout Settings**

Default: 30 seconds (configured in `vercel.json`)

```json
{
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

## 🔧 Troubleshooting

### **Error 408: Request Timeout**

**Penyebab:**
- WakaTime API lambat merespons
- Network latency tinggi

**Solusi:**
1. ✅ Timeout sudah ditingkatkan ke 30 detik
2. ✅ Fallback data otomatis ditampilkan
3. ✅ Coba refresh beberapa saat lagi

### **Error 401: Unauthorized**

**Penyebab:**
- API key salah atau expired

**Solusi:**
1. Cek API key di https://wakatime.com/settings/account
2. Update environment variable di Vercel
3. Redeploy

### **Error 429: Rate Limit**

**Penyebab:**
- Terlalu banyak request dalam waktu singkat

**Solusi:**
1. Tunggu beberapa menit
2. Cache sudah aktif (5 menit)
3. Jangan spam tombol refresh

### **Data tidak update**

**Solusi:**
1. Klik tombol "Refresh"
2. Clear browser cache
3. Check WakaTime dashboard apakah ada data baru

## 📊 Features

- ✅ **Real-time data** dari WakaTime API
- ✅ **Auto-refresh** on page load
- ✅ **Manual refresh** button
- ✅ **Smart fallback** - Demo data jika API error
- ✅ **Loading states** - Clear UI feedback
- ✅ **Error handling** - User-friendly error messages
- ✅ **Caching** - 5 menit cache untuk performance
- ✅ **Timeout protection** - 30 detik timeout dengan fallback

## 🎨 Dashboard Stats

- Begin/End Trace (date range)
- Daily Focus (average per day)
- Week's Coding (total this week)
- Peak Day (most productive day)
- Today's Coding (with trend indicator)
- Top 3 Languages
- Category breakdown
- Operating Systems

## 📝 API Response

```json
{
  "success": true,
  "data": {
    "start_date": "April 23, 2026",
    "end_date": "April 29, 2026",
    "daily_average": "44 minutes",
    "this_week_coding": "4 hours 29 minutes",
    "today_coding": "4 minutes",
    "today_change_percent": 90.1,
    "today_change_type": "decrease",
    "best_day_coding": "1 hour 51 minutes",
    "best_day_date": "April 25, 2026",
    "top_3_languages": [...],
    "top_1_category": {...},
    "top_2_os": [...]
  }
}
```

## 🔒 Security

- ✅ API key stored in environment variables
- ✅ Never exposed to frontend
- ✅ CORS properly configured
- ✅ Rate limiting handled

## 📚 Resources

- [WakaTime API Docs](https://wakatime.com/developers)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Deploy Guide](./DEPLOY.md)

---

**Need help?** Check [DEPLOY.md](./DEPLOY.md) atau contact support.
