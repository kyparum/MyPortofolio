# 🔌 WakaTime Backend API

Backend serverless API untuk fetch data dari WakaTime dan bypass CORS.

## 📁 Struktur

```
api/
└── wakatime.ts       # Serverless function untuk WakaTime API
```

## 🚀 Endpoint

### **GET /api/wakatime**

Fetch WakaTime statistics untuk 7 hari terakhir.

**Request:**
```bash
GET /api/wakatime
```

**Response:**
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
    "top_3_languages": [
      {
        "name": "Python",
        "percent": 76,
        "time": "3 hours 25 minutes"
      }
    ],
    "top_1_category": {
      "name": "Coding",
      "percent": 100,
      "time": "4 hours 29 minutes"
    },
    "top_2_os": [
      {
        "name": "Windows",
        "percent": 100,
        "time": "4 hours 29 minutes"
      }
    ]
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "WakaTime API returned 401"
}
```

## ⚙️ Environment Variables

```bash
WAKATIME_API_KEY=waka_your_api_key_here
```

## 🔧 Local Development

1. **Install dependencies:**
   ```bash
   npm install -g vercel
   ```

2. **Create `.env` file:**
   ```bash
   WAKATIME_API_KEY=waka_your_api_key_here
   ```

3. **Run locally:**
   ```bash
   vercel dev
   ```

4. **Test:**
   ```bash
   curl http://localhost:3000/api/wakatime
   ```

## 📝 Data Processing

API ini memproses data dari WakaTime API mirip dengan Python calculator:

1. **Fetch** dari WakaTime API (`/users/current/summaries`)
2. **Aggregate** languages, OS, categories
3. **Calculate** percentages, totals
4. **Format** waktu ke human-readable format
5. **Return** JSON response

## 🎯 Features

- ✅ CORS headers enabled (bisa diakses dari frontend)
- ✅ Caching (5 menit) untuk performance
- ✅ Error handling yang robust
- ✅ TypeScript untuk type safety
- ✅ Auto-format waktu (hours, minutes)
- ✅ Calculate trending (increase/decrease)

## 🔒 Security

- ✅ API key disimpan di environment variables (tidak di code)
- ✅ CORS policy configured
- ✅ No API key exposure ke frontend

## 📊 Performance

- **Cold start:** ~500ms
- **Warm response:** ~200ms
- **Cache duration:** 5 minutes
- **Timeout:** 10 seconds

## 🚀 Deploy

Lihat [DEPLOY.md](../docs/DEPLOY.md) untuk panduan lengkap deploy ke Vercel.

Quick deploy:
```bash
vercel --prod
```
