import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { WakaTime } from './components/WakaTime';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Certificate } from './components/Certificate';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (mainRef.current) {
      setShowScrollTop(mainRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Okky Puspa Ningrum';
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Render active section component
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home darkMode={darkMode} setActiveSection={setActiveSection} key="home" />;
      case 'wakatime':
        return <WakaTime darkMode={darkMode} key="wakatime" />;
      case 'about':
        return <AboutMe darkMode={darkMode} key="about" />;
      case 'experience':
        return <Experience darkMode={darkMode} key="experience" />;
      case 'certificate':
        return <Certificate darkMode={darkMode} key="certificate" />;
      case 'contact':
        return <Contact darkMode={darkMode} key="contact" />;
      default:
        return <Home darkMode={darkMode} setActiveSection={setActiveSection} key="home" />;
    }
  };

  return (
    // Z-INDEX HIERARCHY:
    // z-0:  Background decorative elements
    // z-10: Main scrollable content
    // z-40: Desktop sidebar
    // z-45: Mobile hamburger menu backdrop
    // z-50: Mobile header & hamburger menu (always on top)
    <div
      className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-black via-gray-900 to-black'
          : 'bg-gradient-to-br from-pink-50 via-white to-fuchsia-50'
      }`}
    >
      {/* Cartoon Landscape Background - z-index: 0 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden lg:ml-80 z-0">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            {/* Sky gradient */}
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              {darkMode ? (
                <>
                  <stop offset="0%"   stopColor="#0f0520" />
                  <stop offset="50%"  stopColor="#1a0533" />
                  <stop offset="100%" stopColor="#2d1045" />
                </>
              ) : (
                <>
                  <stop offset="0%"   stopColor="#fce4f6" />
                  <stop offset="50%"  stopColor="#fdf0fb" />
                  <stop offset="100%" stopColor="#fff0f9" />
                </>
              )}
            </linearGradient>
            {/* Ground gradient */}
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              {darkMode ? (
                <>
                  <stop offset="0%"   stopColor="#1a0a2e" />
                  <stop offset="100%" stopColor="#0d0618" />
                </>
              ) : (
                <>
                  <stop offset="0%"   stopColor="#f9d4f0" />
                  <stop offset="100%" stopColor="#f0b8e8" />
                </>
              )}
            </linearGradient>
            {/* Glow filter for moon/stars */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Sky */}
          <rect width="1440" height="900" fill="url(#skyGrad)" />

          {/* ── DARK MODE scene ── */}
          {darkMode && (<>
            {/* Moon */}
            <circle cx="1150" cy="120" r="70" fill="#fff8e7" opacity="0.12" filter="url(#softGlow)" />
            <circle cx="1150" cy="120" r="55" fill="#fef3c7" opacity="0.18" filter="url(#glow)" />
            <circle cx="1172" cy="108" r="42" fill="#1a0533" opacity="0.7" />

            {/* Stars scattered */}
            {[
              [80,60],[200,40],[340,80],[480,30],[620,55],[750,25],[900,70],[1050,45],[1300,35],[1400,80],
              [150,130],[420,110],[680,90],[950,120],[1250,100],[1380,140],
              [50,170],[310,155],[570,180],[830,160],[1100,175],[1420,165],
              [240,210],[500,200],[760,215],[1020,205],[1320,195],
              [100,250],[380,240],[640,255],[880,245],[1150,260],[1400,235],
            ].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.5}
                fill={i % 5 === 0 ? '#f9a8d4' : '#ffffff'}
                opacity={0.6 + (i % 3) * 0.15}
                style={{ animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`, animationDelay: `${(i * 0.3) % 3}s` }}
              />
            ))}

            {/* Shooting star */}
            <line x1="300" y1="80" x2="380" y2="110" stroke="#fff" strokeWidth="1.5" opacity="0.6"
              style={{ animation: 'shootingStar 6s ease-in-out infinite' }} />

            {/* Aurora-like glow bands */}
            <ellipse cx="400" cy="280" rx="300" ry="40" fill="#ec4899" opacity="0.04" style={{ animation: 'aurora 8s ease-in-out infinite' }} />
            <ellipse cx="900" cy="320" rx="350" ry="35" fill="#a855f7" opacity="0.05" style={{ animation: 'aurora 10s ease-in-out infinite', animationDelay: '2s' }} />
            <ellipse cx="650" cy="350" rx="280" ry="30" fill="#ec4899" opacity="0.04" style={{ animation: 'aurora 12s ease-in-out infinite', animationDelay: '4s' }} />

            {/* Far mountains - darkest */}
            <path d="M0,680 L120,480 L240,580 L360,420 L480,540 L600,380 L720,500 L840,360 L960,480 L1080,400 L1200,520 L1320,440 L1440,560 L1440,900 L0,900 Z"
              fill="#1e0a35" opacity="0.9" />
            {/* Mid mountains */}
            <path d="M0,750 L100,560 L200,650 L320,500 L440,620 L560,470 L680,590 L800,440 L920,560 L1040,490 L1160,600 L1280,520 L1440,640 L1440,900 L0,900 Z"
              fill="#2d0f4a" opacity="0.95" />
            {/* Close mountains */}
            <path d="M0,820 L80,650 L180,730 L280,600 L400,700 L520,560 L640,680 L760,580 L880,680 L1000,600 L1120,700 L1240,620 L1360,720 L1440,680 L1440,900 L0,900 Z"
              fill="#3d1560" opacity="1" />

            {/* Pine trees silhouette left */}
            {[0,60,120,180,240].map((x,i) => (
              <g key={`tl-${i}`} transform={`translate(${x}, ${820 - i*8})`}>
                <polygon points="25,0 0,80 50,80" fill="#1a0a2e" opacity="0.95" />
                <polygon points="25,30 5,90 45,90" fill="#150828" opacity="0.9" />
                <rect x="20" y="90" width="10" height="20" fill="#0f0618" opacity="0.9" />
              </g>
            ))}
            {/* Pine trees silhouette right */}
            {[1200,1260,1320,1380,1440].map((x,i) => (
              <g key={`tr-${i}`} transform={`translate(${x}, ${815 - i*6})`}>
                <polygon points="25,0 0,80 50,80" fill="#1a0a2e" opacity="0.95" />
                <polygon points="25,30 5,90 45,90" fill="#150828" opacity="0.9" />
                <rect x="20" y="90" width="10" height="20" fill="#0f0618" opacity="0.9" />
              </g>
            ))}

            {/* Ground */}
            <rect x="0" y="870" width="1440" height="30" fill="#0d0618" opacity="1" />

            {/* Fireflies */}
            {[[200,780],[450,760],[700,790],[950,770],[1200,785],[320,800],[600,810],[850,795]].map(([x,y],i) => (
              <circle key={`ff-${i}`} cx={x} cy={y} r="2.5" fill="#fbbf24" opacity="0.7"
                filter="url(#glow)"
                style={{ animation: `twinkle ${1.5 + (i%3)}s ease-in-out infinite`, animationDelay: `${i*0.4}s` }} />
            ))}

            {/* Reflection/lake at bottom */}
            <ellipse cx="720" cy="890" rx="400" ry="15" fill="#ec4899" opacity="0.06" />
          </>)}

          {/* ── LIGHT MODE scene ── */}
          {!darkMode && (<>
            {/* Sun */}
            <circle cx="1200" cy="120" r="80" fill="#fde68a" opacity="0.3" filter="url(#softGlow)" />
            <circle cx="1200" cy="120" r="55" fill="#fcd34d" opacity="0.5" filter="url(#glow)" />
            <circle cx="1200" cy="120" r="40" fill="#fbbf24" opacity="0.6" />
            {/* Sun rays */}
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => (
              <line key={i}
                x1={1200 + Math.cos(deg*Math.PI/180)*50}
                y1={120  + Math.sin(deg*Math.PI/180)*50}
                x2={1200 + Math.cos(deg*Math.PI/180)*75}
                y2={120  + Math.sin(deg*Math.PI/180)*75}
                stroke="#fbbf24" strokeWidth="2.5" opacity="0.4"
                style={{ animation: `spin-slow 20s linear infinite`, transformOrigin: '1200px 120px' }}
              />
            ))}

            {/* Clouds - fluffy cartoon style */}
            {[
              { x: 150, y: 100, scale: 1.2, delay: '0s' },
              { x: 500, y: 70,  scale: 0.9, delay: '3s' },
              { x: 820, y: 110, scale: 1.0, delay: '6s' },
              { x: 1050, y: 80, scale: 0.8, delay: '1s' },
              { x: 250, y: 200, scale: 0.7, delay: '4s' },
              { x: 680, y: 180, scale: 1.1, delay: '2s' },
              { x: 1250, y: 200,scale: 0.9, delay: '5s' },
            ].map((c,i) => (
              <g key={`cloud-${i}`} transform={`translate(${c.x},${c.y}) scale(${c.scale})`}
                style={{ animation: `cloudFloat 12s ease-in-out infinite`, animationDelay: c.delay }}>
                <ellipse cx="60" cy="40" rx="60" ry="35" fill="white" opacity="0.85" />
                <ellipse cx="110" cy="40" rx="50" ry="30" fill="white" opacity="0.85" />
                <ellipse cx="30" cy="45" rx="40" ry="28" fill="white" opacity="0.85" />
                <ellipse cx="85" cy="25" rx="45" ry="32" fill="white" opacity="0.9" />
                <ellipse cx="55" cy="50" rx="70" ry="20" fill="white" opacity="0.85" />
              </g>
            ))}

            {/* Rainbow */}
            <path d="M 0 500 Q 360 100 720 500" stroke="url(#rainbowGrad)" strokeWidth="0" fill="none" opacity="0" />
            <defs>
              <linearGradient id="rainbowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#f87171" />
                <stop offset="25%"  stopColor="#fbbf24" />
                <stop offset="50%"  stopColor="#34d399" />
                <stop offset="75%"  stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {[0,12,24,36,48].map((r,i) => (
              <path key={i} d={`M ${80+r} 550 Q ${400} ${120+r} ${730-r} 550`}
                stroke={['#f87171','#fbbf24','#34d399','#60a5fa','#a78bfa'][i]}
                strokeWidth="8" fill="none" opacity="0.18" />
            ))}

            {/* Far mountains - soft pink/purple */}
            <path d="M0,650 L120,450 L240,550 L360,390 L480,510 L600,360 L720,480 L840,340 L960,460 L1080,380 L1200,500 L1320,420 L1440,540 L1440,900 L0,900 Z"
              fill="#f3c6ea" opacity="0.7" />
            {/* Mid mountains */}
            <path d="M0,720 L100,530 L200,620 L320,470 L440,590 L560,450 L680,570 L800,420 L920,540 L1040,470 L1160,580 L1280,500 L1440,620 L1440,900 L0,900 Z"
              fill="#eaaee0" opacity="0.8" />
            {/* Close hills */}
            <path d="M0,800 L100,650 L220,720 L360,600 L500,690 L640,580 L780,660 L920,590 L1060,670 L1200,610 L1340,690 L1440,660 L1440,900 L0,900 Z"
              fill="#e090d4" opacity="0.9" />

            {/* Flowers on hills */}
            {[[100,830],[200,820],[350,825],[500,835],[650,828],[800,822],[950,830],[1100,825],[1300,832],[1400,826]].map(([x,y],i) => (
              <g key={`fl-${i}`} transform={`translate(${x},${y})`}
                style={{ animation: `wiggle ${3+i%3}s ease-in-out infinite`, animationDelay: `${i*0.3}s` }}>
                <circle cx="0" cy="-15" r="7" fill={['#f9a8d4','#fde68a','#c4b5fd','#86efac','#fb923c'][i%5]} opacity="0.8" />
                <rect x="-1.5" y="-8" width="3" height="18" fill="#4ade80" opacity="0.7" />
              </g>
            ))}

            {/* Trees */}
            {[50,150,1280,1380].map((x,i) => (
              <g key={`t-${i}`} transform={`translate(${x},760)`}>
                <ellipse cx="25" cy="30" rx="30" ry="40" fill="#86efac" opacity="0.6" />
                <ellipse cx="25" cy="15" rx="22" ry="30" fill="#4ade80" opacity="0.7" />
                <rect x="20" y="65" width="10" height="25" fill="#a16207" opacity="0.5" />
              </g>
            ))}

            {/* Butterflies */}
            {[[300,600],[600,550],[900,580],[1150,560]].map(([x,y],i) => (
              <g key={`bf-${i}`} transform={`translate(${x},${y})`}
                style={{ animation: `float ${4+i}s ease-in-out infinite`, animationDelay: `${i*0.8}s` }}>
                <ellipse cx="-12" cy="0" rx="12" ry="8" fill={['#f9a8d4','#c4b5fd','#93c5fd','#fde68a'][i]} opacity="0.5" transform="rotate(-20)" />
                <ellipse cx="12" cy="0" rx="12" ry="8" fill={['#f9a8d4','#c4b5fd','#93c5fd','#fde68a'][i]} opacity="0.5" transform="rotate(20)" />
                <ellipse cx="-8" cy="5" rx="8" ry="6" fill={['#f9a8d4','#c4b5fd','#93c5fd','#fde68a'][i]} opacity="0.4" transform="rotate(15)" />
                <ellipse cx="8" cy="5" rx="8" ry="6" fill={['#f9a8d4','#c4b5fd','#93c5fd','#fde68a'][i]} opacity="0.4" transform="rotate(-15)" />
                <ellipse cx="0" cy="2" rx="2" ry="7" fill="#78716c" opacity="0.4" />
              </g>
            ))}

            {/* Ground */}
            <path d="M0,870 Q360,850 720,870 Q1080,890 1440,870 L1440,900 L0,900 Z" fill="#d8b4e0" opacity="0.8" />
          </>)}

        </svg>

        {/* Soft overlay so content stays readable */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/40' : 'bg-white/25'}`} />
      </div>

      {/* Sidebar - Desktop only - z-index: 40 */}
      <div className="relative z-40">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>

      {/* Main Content - Scrollable Container - z-index: 10 */}
      <main ref={mainRef} onScroll={handleScroll} className="fixed lg:ml-80 inset-0 lg:top-0 lg:bottom-0 top-16 bottom-0 z-10 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {renderActiveSection()}

          {/* Mobile spacing - Bottom padding for content */}
          <div className="lg:hidden h-8" />
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-16 right-16 z-30 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            darkMode
              ? 'bg-pink-500 hover:bg-pink-400 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)]'
              : 'bg-pink-500 hover:bg-pink-600 text-white shadow-pink-300'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Add animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes cloudFloat {
          0%, 100% { transform: translateX(0px); }
          50%       { transform: translateX(18px); }
        }

        @keyframes aurora {
          0%, 100% { transform: scaleX(1) translateX(0);   opacity: 0.04; }
          50%       { transform: scaleX(1.15) translateX(30px); opacity: 0.09; }
        }

        @keyframes shootingStar {
          0%,85%,100% { opacity: 0; transform: translate(0,0); }
          87%          { opacity: 1; transform: translate(40px,15px); }
          92%          { opacity: 0; transform: translate(80px,30px); }
        }

        @keyframes fly {
          0%   { transform: translateX(0px) translateY(0px) rotate(-5deg); }
          25%  { transform: translateX(15px) translateY(-12px) rotate(0deg); }
          50%  { transform: translateX(30px) translateY(0px) rotate(5deg); }
          75%  { transform: translateX(15px) translateY(12px) rotate(0deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(-5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-6deg);
          }
          50% {
            transform: rotate(6deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-30px) rotate(-12deg);
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: rotate-slow 30s linear infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-rotate-reverse {
          animation: rotate-reverse 25s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes wave-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%);
          }
        }

        .animate-wave {
          animation: wave 20s linear infinite;
        }

        .animate-wave-slow {
          animation: wave-slow 30s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </div>
  );
}