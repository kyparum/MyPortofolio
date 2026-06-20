import { motion } from 'motion/react';
import { ExternalLink, Activity, HelpCircle, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WakaTimeProps {
  darkMode: boolean;
}

// 🔑 GANTI USERNAME DI SINI
const WAKATIME_USERNAME = 'kyparum'; // Ganti dengan username WakaTime Anda
const GITHUB_USERNAME = 'kyparum'; // Ganti dengan username GitHub Anda

// 📊 DATA STATISTIK - Edit sesuai data WakaTime Anda
const wakatimeData = {
  start_date: 'June 8, 2026',
  end_date: 'June 17, 2026',
  today_coding: '11 mins',
  this_week_coding: '12 hrs 19 mins',
  daily_average: '2 hrs 3 mins',
  best_day_coding: 'Sat Jun 13th (Top day)',
  totalTimeSince: 'JUN 8 2026',
  totalTime: '12 hrs 19 mins',
  dailyAverage: '2 hrs 3 mins',
  languages: [
    { name: 'Other / Browsing', percentage: 98.12, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Markdown', percentage: 0.77, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'Bash', percentage: 0.47, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { name: 'JavaScript', percentage: 0.37, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'HTML', percentage: 0.20, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
  ],
  editors: [
    { name: 'Chrome', percentage: 97.67, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'VS Code', percentage: 2.33, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
  ],
  operatingSystems: [
    { name: 'Windows', percentage: 100.0, color: 'bg-gradient-to-r from-fuchsia-600 to-pink-600' },
  ],
  categories: [
    { name: 'Coding', percentage: 100, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
  ],
};

// 🐙 DATA GITHUB - Edit sesuai GitHub stats Anda
const githubData = {
  followers: 2,
  following: 4,
  public_repos: 13,
  totalContributions: 64,
  totalContributionsDateRange: 'in the last year',
  thisWeekContributions: 0,
  currentStreak: 0,
  currentStreakDate: 'Jun 18',
  longestStreak: 4,
  longestStreakDateRange: 'Feb 7 - Feb 10',
};

// Progress Bar Component
const ProgressBar = ({ item, darkMode }: { item: { name: string; percentage: number; color: string }; darkMode: boolean }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1.5">
      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {item.percentage.toFixed(2)}%
      </span>
    </div>
    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div
        className={`h-full ${item.color} transition-all duration-500`}
        style={{ width: `${item.percentage}%` }}
      />
    </div>
  </div>
);

export function WakaTime({ darkMode }: WakaTimeProps) {
  const [wakatimeStats, setWakatimeStats] = useState<any>(null);
  const [githubStats, setGithubStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Server (api/wakatime.ts & api/github.ts) cache responses for 5 minutes
  // (s-maxage=300) to stay under GitHub's unauthenticated rate limit (60 req/hour).
  // Polling faster than this won't get fresher data, just wastes requests.
  const AUTO_REFRESH_MS = 5 * 60 * 1000; // 5 minutes

  const fetchData = async () => {
    try {
      // Fetch WakaTime stats
      const wakatimeRes = await fetch('/api/wakatime');
      const contentType = wakatimeRes.headers.get('content-type');

      // Only parse JSON if response is actually JSON (deployed on Vercel)
      if (contentType && contentType.includes('application/json')) {
        const wakatimeJson = await wakatimeRes.json();
        if (wakatimeJson.success) {
          setWakatimeStats(wakatimeJson.data);
        }

        // Fetch GitHub stats
        const githubRes = await fetch('/api/github');
        const githubJson = await githubRes.json();
        if (githubJson.success) {
          setGithubStats(githubJson.data);
        }

        setLastUpdated(new Date());
      }
      // If HTML is returned (local dev), silently use fallback data
    } catch (error) {
      // Silently fall back to demo data
      // API endpoints only work when deployed to Vercel
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Auto-refresh in the background so WakaTime + GitHub stats update
    // without the visitor needing to reload the page or click Refresh.
    const interval = setInterval(fetchData, AUTO_REFRESH_MS);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData();
  };

  // Transform API data to match expected format
  const getLanguageColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-purple-500 to-pink-500',
      'bg-gradient-to-r from-blue-500 to-cyan-500',
      'bg-gradient-to-r from-green-500 to-emerald-500',
      'bg-gradient-to-r from-orange-500 to-red-500',
      'bg-gradient-to-r from-yellow-500 to-orange-500',
    ];
    return colors[index % colors.length];
  };

  // Use fetched data if available, otherwise fallback to static data
  let displayWakatime = wakatimeStats ? {
    ...wakatimeStats,
    languages: wakatimeStats.top_3_languages?.map((lang: any, idx: number) => ({
      name: lang.name,
      percentage: lang.percent,
      color: getLanguageColor(idx),
    })) || [],
    editors: [{ name: 'VS Code', percentage: 100.0, color: 'bg-gradient-to-r from-purple-600 to-pink-600' }],
    operatingSystems: wakatimeStats.top_2_os?.map((os: any, idx: number) => ({
      name: os.name,
      percentage: os.percent,
      color: idx === 0 ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600',
    })) || [],
    categories: [
      { name: wakatimeStats.top_1_category?.name || 'Coding', percentage: wakatimeStats.top_1_category?.percent || 100, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    ],
  } : wakatimeData;

  const displayGithub = githubStats || githubData;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Activity
              className={
                darkMode
                  ? 'w-6 h-6 sm:w-8 sm:h-8 text-pink-400'
                  : 'w-6 h-6 sm:w-8 sm:h-8 text-pink-600'
              }
            />
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl ${
                darkMode
                  ? 'bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent'
                  : 'text-gray-900'
              }`}
            >
              Dashboard
            </h2>
          </div>
          {/* Refresh Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`p-2 rounded-lg transition-all ${
              darkMode
                ? 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
                : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
            } ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Refresh data"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </motion.button>
        </div>
        <p
          className={`text-sm sm:text-base ml-9 sm:ml-11 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          Coding statistics and GitHub activity {isLoading && '(Loading...)'}
          {lastUpdated && !isLoading && (
            <span className="ml-1">
              · Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </p>
      </div>

      {/* WakaTime Statistics Section */}
      <div className={`rounded-3xl p-6 sm:p-8 ${darkMode ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]' : 'bg-white/80 backdrop-blur-sm border border-pink-200 shadow-xl'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={darkMode ? 'text-white' : 'text-gray-900'}>
            WakaTime <span className={darkMode ? 'text-pink-400' : 'text-pink-600'}>Statistics</span>
          </h2>
          <motion.a
            href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`text-sm flex items-center gap-1 ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'}`}
          >
            Live Trace <ExternalLink className="w-3 h-3" />
          </motion.a>
        </div>

        {/* Activity Last Year - PALING ATAS */}
        <div className="mb-6">
          <h3 className={`text-xs sm:text-sm mb-3 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Activity Last Year
          </h3>
          <div className={`rounded-xl overflow-x-auto ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className="min-w-[600px] p-4">
              <img
                src={`https://wakatime.com/share/@${WAKATIME_USERNAME}/de5d1c08-c3d5-4db4-9a71-8035bb80b828.svg`}
                alt="WakaTime Activity"
                className="w-full"
                style={{
                  filter: darkMode ? 'invert(0.9) hue-rotate(180deg) brightness(1.2) contrast(0.9)' : 'none'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x150/1f2937/ec4899?text=Setup+embeddable+chart';
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats Summary Cards — paired 2 columns: Begin/End, Current/Total, Daily/Peak */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Begin Trace */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Begin Trace</div>
            <div className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.start_date || wakatimeData.start_date}
            </div>
          </div>

          {/* End Trace */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>End Trace</div>
            <div className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.end_date || wakatimeData.end_date}
            </div>
          </div>

          {/* Current Day */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Current Day</div>
            <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.today_coding || wakatimeData.today_coding}
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Today</div>
          </div>

          {/* Total This Week */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total This Week</div>
            <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.this_week_coding || displayWakatime.totalTime}
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>over the Last 7 Days</div>
          </div>

          {/* Daily Average */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Daily Average</div>
            <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.daily_average || displayWakatime.dailyAverage}
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>over 6 days</div>
          </div>

          {/* Peak Day */}
          <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
            <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Peak Day</div>
            <div className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              {displayWakatime.best_day_date || wakatimeData.best_day_coding}
            </div>
            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Top day</div>
          </div>
        </div>

        {/* Two Column Layout for Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Languages */}
            <div>
              <h3 className={`text-xs sm:text-sm mb-3 uppercase tracking-wider flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Languages <HelpCircle className="w-3 h-3" />
              </h3>
              <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
                {displayWakatime.languages.map((lang: any, idx: number) => (
                  <ProgressBar key={idx} item={lang} darkMode={darkMode} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Editors */}
            <div>
              <h3 className={`text-xs sm:text-sm mb-3 uppercase tracking-wider flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Editors <HelpCircle className="w-3 h-3" />
              </h3>
              <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
                {displayWakatime.editors.map((editor: any, idx: number) => (
                  <ProgressBar key={idx} item={editor} darkMode={darkMode} />
                ))}
              </div>
            </div>

            {/* Categories & OS (merged) */}
            <div>
              <h3 className={`text-xs sm:text-sm mb-3 uppercase tracking-wider flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Categories & OS <HelpCircle className="w-3 h-3" />
              </h3>
              <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
                {displayWakatime.categories.map((cat: any, idx: number) => (
                  <ProgressBar key={`cat-${idx}`} item={cat} darkMode={darkMode} />
                ))}
                {displayWakatime.operatingSystems.map((os: any, idx: number) => (
                  <ProgressBar key={`os-${idx}`} item={os} darkMode={darkMode} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Statistics Section */}
      <div className={`rounded-3xl p-6 sm:p-8 ${darkMode ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]' : 'bg-white/80 backdrop-blur-sm border border-pink-200 shadow-xl'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={darkMode ? 'text-white' : 'text-gray-900'}>
            GitHub <span className={darkMode ? 'text-pink-400' : 'text-pink-600'}>Statistics</span>
          </h2>
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`text-sm flex items-center gap-1 ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'}`}
          >
            @{GITHUB_USERNAME} <ExternalLink className="w-3 h-3" />
          </motion.a>
        </div>

        {/* GitHub Stats Summary Cards */}
        <div className="space-y-3 mb-6">
          {/* Row 1: Followers, Following, Repositories */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Followers</div>
              <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.followers !== undefined ? displayGithub.followers : githubData.followers}
              </div>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Following</div>
              <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.following !== undefined ? displayGithub.following : githubData.following}
              </div>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Repositories</div>
              <div className={`text-2xl sm:text-3xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.public_repos !== undefined ? displayGithub.public_repos : githubData.public_repos}
              </div>
            </div>
          </div>

          {/* Row 2: Total Contributions + This Week */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Contributions</div>
              <div className={`text-2xl sm:text-3xl mb-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.total_contributions ?? displayGithub.totalContributions ?? githubData.totalContributions}
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {displayGithub.totalContributionsDateRange || githubData.totalContributionsDateRange}
              </div>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>This Week</div>
              <div className={`text-2xl sm:text-3xl mb-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.thisWeekContributions ?? githubData.thisWeekContributions}
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Over the last 7 days</div>
            </div>
          </div>

          {/* Row 3: Streaks */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Current Streak</div>
              <div className={`text-2xl sm:text-3xl mb-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.current_streak ?? displayGithub.currentStreak ?? githubData.currentStreak} <span className="text-base">days</span>
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {displayGithub.currentStreakDate || githubData.currentStreakDate}
              </div>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? 'bg-gray-900/30 border border-pink-500/5' : 'bg-gray-50/50 border border-gray-100'}`}>
              <div className={`text-xs mb-1 uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Longest Streak</div>
              <div className={`text-2xl sm:text-3xl mb-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {displayGithub.longest_streak ?? displayGithub.longestStreak ?? githubData.longestStreak} <span className="text-base">days</span>
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {displayGithub.longestStreakDateRange || githubData.longestStreakDateRange}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
<div className={`rounded-xl overflow-x-auto ${darkMode ? 'bg-gray-900/50 border border-pink-500/10' : 'bg-gray-50 border border-gray-200'}`}>
  <div className="min-w-[600px] p-4">
    <img
      src={`https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`}
      alt="GitHub Contributions"
      className="w-full mb-3"
      style={{
        filter: darkMode ? 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(0.95)' : 'none'
      }}
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/800x150/1f2937/39d353?text=GitHub+contributions';
      }}
    />
            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 text-xs">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Less</span>
              <div className={`w-2.5 h-2.5 ${darkMode ? 'bg-[#ebedf0] border border-[#ebedf0]' : 'bg-[#ebedf0] border border-[#ebedf0]'}`} />
              <div className="w-2.5 h-2.5 bg-[#9be9a8] border border-[#9be9a8]" />
              <div className="w-2.5 h-2.5 bg-[#40c463] border border-[#40c463]" />
              <div className="w-2.5 h-2.5 bg-[#30a14e] border border-[#30a14e]" />
              <div className="w-2.5 h-2.5 bg-[#216e39] border border-[#216e39]" />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>More</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}