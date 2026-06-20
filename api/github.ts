/**
 * GitHub API Proxy - Vercel Serverless Function
 *
 * Endpoint: /api/github
 * Method: GET
 *
 * Fetches GitHub user stats including followers, following, repos, etc.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

// 🔑 GitHub Username (no API key needed for public data)
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'kyparum';
const GITHUB_API_BASE = 'https://api.github.com';

interface GitHubStats {
  username: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  created_at: string;
  updated_at: string;
  total_contributions: number;
  current_streak: number;
  longest_streak: number;
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
    // Fetch user data from GitHub API
    const userUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    let response;
    try {
      response = await fetch(userUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Dashboard',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === 'AbortError') {
        throw new Error('Request timeout - GitHub API took too long to respond');
      }
      throw err;
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`);
    }

    const userData = await response.json();

    // Calculate contribution stats (simplified - would need GraphQL for accurate data)
    // For now using placeholder values that match current display
    const stats: GitHubStats = {
      username: userData.login,
      name: userData.name || userData.login,
      bio: userData.bio || '',
      avatar_url: userData.avatar_url,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      public_gists: userData.public_gists,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
      // These would need GitHub GraphQL API for accurate data
      // Using placeholder values for now
      total_contributions: 18,
      current_streak: 0,
      longest_streak: 2,
    };

    // Cache for 5 minutes
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');

    return res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error('GitHub API Error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    // Return fallback data
    return res.status(200).json({
      success: false,
      error: errorMessage,
      data: {
        username: GITHUB_USERNAME,
        name: 'Okky Puspa Ningrum',
        bio: '',
        avatar_url: '',
        followers: 0,
        following: 0,
        public_repos: 0,
        public_gists: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        total_contributions: 18,
        current_streak: 0,
        longest_streak: 2,
      },
      message: 'Using fallback data due to API error'
    });
  }
}
