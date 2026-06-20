/**
 * WakaTime API Proxy - Vercel Serverless Function
 *
 * Endpoint: /api/wakatime
 * Method: GET
 *
 * This serverless function acts as a proxy between your frontend and WakaTime API
 * to bypass CORS restrictions and keep your API key secure.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

// 🔑 API KEY - MUST be set in Vercel Environment Variables
const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1';

// Validate API key exists
if (!WAKATIME_API_KEY) {
  console.error('⚠️ WAKATIME_API_KEY not found in environment variables');
}

interface WakaTimeStats {
  start_date: string;
  end_date: string;
  daily_average: string;
  this_week_coding: string;
  today_coding: string;
  today_change_percent: number;
  today_change_type: 'increase' | 'decrease' | 'same';
  best_day_coding: string;
  best_day_date: string;
  top_3_languages: Array<{ name: string; percent: number; time: string }>;
  top_1_category: { name: string; percent: number; time: string };
  top_2_os: Array<{ name: string; percent: number; time: string }>;
}

// Helper: Format seconds to human readable time
function formatTime(seconds: number): string {
  if (!seconds || seconds < 0) return '0 mins';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0 && minutes > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
  return '0 mins';
}

// Helper: Calculate percentage
function calculatePercentage(value: number, total: number): number {
  return total > 0 ? Math.round((value / total) * 100) : 0;
}

// Helper: Format date
function formatDate(dateStr: string): string {
  if (!dateStr) return 'N/A';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// Main handler
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Calculate date range (last 7 days)
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 6);

    const startDate = sevenDaysAgo.toISOString().split('T')[0];
    const endDate = today.toISOString().split('T')[0];

    // Fetch from WakaTime API with timeout and retry
    const summariesUrl = `${WAKATIME_BASE_URL}/users/current/summaries?start=${startDate}&end=${endDate}&api_key=${WAKATIME_API_KEY}`;

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout

    let response;
    try {
      response = await fetch(summariesUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === 'AbortError') {
        throw new Error('Request timeout - WakaTime API took too long to respond');
      }
      throw err;
    }

    if (!response.ok) {
      throw new Error(`WakaTime API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Process data (similar to Python calculator)
    const dailyData = data.data || [];
    const cumulativeTotal = data.cumulative_total?.seconds || 0;

    // Aggregate data
    let categoryTotalSeconds = 0;
    const languageTotals: Record<string, number> = {};
    const osTotals: Record<string, number> = {};

    dailyData.forEach((day: any) => {
      // Categories
      day.categories?.forEach((cat: any) => {
        categoryTotalSeconds += cat.total_seconds || 0;
      });

      // Languages
      day.languages?.forEach((lang: any) => {
        const name = lang.name || 'Unknown';
        languageTotals[name] = (languageTotals[name] || 0) + (lang.total_seconds || 0);
      });

      // Operating Systems
      day.operating_systems?.forEach((os: any) => {
        const name = os.name || 'Unknown';
        osTotals[name] = (osTotals[name] || 0) + (os.total_seconds || 0);
      });
    });

    // Top languages
    const top3Languages = Object.entries(languageTotals)
      .map(([name, seconds]) => ({
        name,
        percent: calculatePercentage(seconds, cumulativeTotal),
        time: formatTime(seconds),
      }))
      .sort((a, b) => b.percent - a.percent)
      .slice(0, 3);

    // Top OS
    const top2OS = Object.entries(osTotals)
      .map(([name, seconds]) => ({
        name,
        percent: calculatePercentage(seconds, cumulativeTotal),
        time: formatTime(seconds),
      }))
      .sort((a, b) => b.percent - a.percent)
      .slice(0, 2);

    // Find most active day
    const mostActiveDay = dailyData.reduce(
      (max: any, day: any) =>
        (day.grand_total?.total_seconds || 0) > (max.grand_total?.total_seconds || 0) ? day : max,
      dailyData[0] || {}
    );

    // Today's data
    const todayData = dailyData[dailyData.length - 1] || {};
    const todayCodingSeconds = todayData.grand_total?.total_seconds || 0;
    const dailyAverageSeconds = data.daily_average?.seconds || 0;

    // Calculate today's change
    let todayChangePercent = 0;
    let todayChangeType: 'increase' | 'decrease' | 'same' = 'same';
    if (dailyAverageSeconds > 0) {
      const changeRatio = ((todayCodingSeconds - dailyAverageSeconds) / dailyAverageSeconds) * 100;
      todayChangePercent = Math.abs(Math.round(changeRatio * 10) / 10);
      todayChangeType = changeRatio > 0 ? 'increase' : changeRatio < 0 ? 'decrease' : 'same';
    }

    // Construct response
    const stats: WakaTimeStats = {
      start_date: formatDate(data.start),
      end_date: formatDate(data.end),
      daily_average: formatTime(dailyAverageSeconds),
      this_week_coding: formatTime(cumulativeTotal),
      today_coding: formatTime(todayCodingSeconds),
      today_change_percent: todayChangePercent,
      today_change_type: todayChangeType,
      best_day_coding: formatTime(mostActiveDay.grand_total?.total_seconds || 0),
      best_day_date: formatDate(mostActiveDay.range?.date),
      top_3_languages: top3Languages,
      top_1_category: {
        name: 'Coding',
        percent: calculatePercentage(categoryTotalSeconds, cumulativeTotal),
        time: formatTime(categoryTotalSeconds),
      },
      top_2_os: top2OS,
    };

    // Cache for 5 minutes
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');

    return res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error('WakaTime API Error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    // Return dummy data as fallback with error flag
    return res.status(200).json({
      success: false,
      error: errorMessage,
      data: {
        start_date: 'April 23, 2026',
        end_date: 'April 29, 2026',
        daily_average: '44 minutes',
        this_week_coding: '4 hours 29 minutes',
        today_coding: '4 minutes',
        today_change_percent: 90.1,
        today_change_type: 'decrease' as const,
        best_day_coding: '1 hour 51 minutes',
        best_day_date: 'April 25, 2026',
        top_3_languages: [
          { name: 'Python', percent: 76, time: '3 hours 25 minutes' },
          { name: 'HTML', percent: 11, time: '29 minutes' },
          { name: 'TOML', percent: 5, time: '13 minutes' },
        ],
        top_1_category: { name: 'Coding', percent: 100, time: '4 hours 29 minutes' },
        top_2_os: [
          { name: 'Windows', percent: 100, time: '4 hours 29 minutes' },
        ],
      },
      message: 'Using fallback data due to API error'
    });
  }
}
