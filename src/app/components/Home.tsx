import { motion } from 'motion/react';
import { ArrowRight, Code, Presentation, FileText, Cloud, Chrome, Terminal, FileEdit, GitBranch, Sparkles, Bot, Brain, Pen, Server, BarChart, Beaker, Binary, Map, Network, Sheet, BookText } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDiscord,
  FaEdge,
  FaDocker
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiCanva,
  SiFramer,
  SiMendeley,
  SiR,
  SiGooglecolab,
  SiDiagramsdotnet,
  SiAnaconda,
  SiSupabase,
  SiVercel,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiKaggle
} from 'react-icons/si';

// Skill icon URLs — ganti dengan link Imgur kamu
const FigmaIconLocal   = 'https://i.imgur.com/DWkSZ8G.png';
const CanvaIconLocal = 'https://i.imgur.com/1M4DZAb.png'; 
const BalsamiqIconLocal = 'https://i.imgur.com/ChkfHdM.png'; 
const DrawioIconLocal = 'https://i.imgur.com/JxJDf4B.png'; 
const EdgeIconLocal    = 'https://i.imgur.com/4fc09MM.png';   
const ChromeIconLocal  = 'https://i.imgur.com/ersn8rm.png';  
const ClaudeIconLocal  = 'https://i.imgur.com/r9crkie.png';
const GeminiIconLocal  = 'https://i.imgur.com/vrITVqV.png'; 
const GPTIconLocal     = 'https://i.imgur.com/kZpfFkV.png';
const CopilotIconLocal = 'https://i.imgur.com/UNiJYHM.png';
const NotionIconLocal  = 'https://i.imgur.com/0yO1RCM.png';
const NotebooklmIconLocal = 'https://i.imgur.com/yHD7zVj.png';
const VSCodeIconLocal = 'https://i.imgur.com/BMQSFNW.png';
const GitHubIconLocal = 'https://i.imgur.com/SqFbJU8.png';
const LovableIconLocal = 'https://i.imgur.com/JbZDMvw.png'; 
const FigmaMakeIconLocal = 'https://i.imgur.com/InaMkOh.png';
const TraeIconLocal = 'https://i.imgur.com/UsYY8Ml.png';
const VercelIconLocal = 'https://i.imgur.com/ylMS2Cx.png';
const DiscordIconLocal = 'https://i.imgur.com/cypHzzr.png';
const TelegramIconLocal = 'https://i.imgur.com/lFdojUQ.png';
const htmlIconLocal    = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
const kaggleIconLocal  = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg';
const RStudioIconLocal = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg';
const SheetIconLocal = 'https://i.imgur.com/cW4TGvw.png';
const BookTextIconLocal = 'https://i.imgur.com/Col6mBG.png';
const BrainIconLocal = 'https://i.imgur.com/X7GxUYs.png'; // ganti dengan Imgur



interface HomeProps {
  darkMode: boolean;
  setActiveSection: (section: string) => void;
}

export function Home({ darkMode, setActiveSection }: HomeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hii, I'm Okky Puspa Ningrum";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    
    const interval = setInterval(() => {
      if (!isDeleting && index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Pause before deleting
        }
      } else if (isDeleting && index > 0) {
        index--;
        setDisplayedText(fullText.slice(0, index));
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, isDeleting ? 50 : 80); // Faster when deleting

    return () => clearInterval(interval);
  }, []);

  const allTools = [
    // Design & Prototyping
    { name: 'Canva', Icon: CanvaIconLocal, color: '#00C4CC', isImage: true },
    { name: 'Figma', Icon: FigmaIconLocal, color: '#F24E1E', isImage: true },
    { name: 'Balsamiq', Icon: BalsamiqIconLocal, color: '#CC0000', isImage: true },
    { name: 'Draw.io', Icon: DrawioIconLocal, color: '#F08705', isImage: true },
    /*{ name: 'Framer', Icon: SiFramer, color: '#0055FF' },
    { name: 'Wireframe', Icon: GitBranch, color: '#6B7280' },*/

    // Browsers & Communication
    { name: 'Chrome', Icon: ChromeIconLocal, color: '#4285F4', isImage: true },
    { name: 'Edge', Icon: EdgeIconLocal, color: '#0078D7', isImage: true },
    { name: 'Discord', Icon: DiscordIconLocal, color: '#5865F2', isImage: true },
    { name: 'Telegram', Icon: TelegramIconLocal, color: '#0088CC', isImage: true },

    // AI Tools
    { name: 'Claude', Icon: ClaudeIconLocal, color: '#D97757', isImage: true },
    { name: 'GPT', Icon: GPTIconLocal, color: '#10A37F', isImage: true },
    { name: 'Gemini', Icon: GeminiIconLocal, color: '#8E75F2', isImage: true },
    { name: 'Copilot', Icon: CopilotIconLocal, color: '#000000', isImage: true },
    { name: 'NotebookLM', Icon: NotebooklmIconLocal, color: '#F9AB00', isImage: true },
    { name: 'Notion', Icon: NotionIconLocal, color: '#000000', isImage: true },
    /*{ name: 'Quilbot', Icon: Pen, color: '#4B5563' },*/

    // Development Tools
    { name: 'Anaconda', Icon: SiAnaconda, color: '#44A833' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
    { name: 'VS Code', Icon: VSCodeIconLocal, color: '#007ACC', isImage: true },
    { name: 'Terminal', Icon: Terminal, color: '#000000' },
    { name: 'GitHub', Icon: GitHubIconLocal, color: '#181717', isImage: true },
    { name: 'Vercel', Icon: VercelIconLocal, color: '#000000', isImage: true },
    { name: 'Lovable', Icon: LovableIconLocal, color: '#FF6B9D', isImage: true },
    { name: 'Figma Make', Icon: FigmaMakeIconLocal, color: '#F24E1E', isImage: true },
    { name: 'Trae', Icon: TraeIconLocal, color: '#FF6B9D', isImage: true },

    // Frontend Development
    { name: 'HTML', Icon: htmlIconLocal, color: '#E34F26', isImage: true },
    { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },

    // Backend & Languages
    { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
    { name: 'Python', Icon: FaPython, color: '#3776AB' },
    { name: 'Java', Icon: FaJava, color: '#007396' },
    { name: 'Node JS', Icon: FaNodeJs, color: '#339933' },

    // Databases & Cloud
    { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'SQL Server Studio', Icon: Server, color: '#CC2927' },

    // Data Science & ML
    { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
    { name: 'Pandas', Icon: Beaker, color: '#150458' },
    { name: 'NumPy', Icon: Binary, color: '#013243' },
    { name: 'Matplotlib', Icon: BarChart, color: '#11557C' },
    { name: 'Scikit-learn', Icon: Brain, color: '#F7931E' },
    { name: 'Google Colab', Icon: SiGooglecolab, color: '#F9AB00' },
    { name: 'Kaggle', Icon: kaggleIconLocal, color: '#20BEFF', isImage: true },

    // Office & Productivity
    { name: 'Excel', Icon: SheetIconLocal, color: '#217346', isImage: true },
    { name: 'PowerPoint', Icon: Presentation, color: '#D04423' },
    { name: 'Word', Icon: BookTextIconLocal, color: '#2B579A', isImage: true },
    { name: 'WPS Office', Icon: FileText, color: '#D32F2F' },
    { name: 'Notepad', Icon: FileEdit, color: '#4B5563' },

    // Analysis & Research
    { name: 'R Studio', Icon: RStudioIconLocal, color: '#75AADB', isImage: true },
    { name: 'SPSS', Icon: BarChart, color: '#052FAD' },
    { name: 'QM For Windows', Icon: BarChart, color: '#0066CC' },
    { name: 'Maple', Icon: Binary, color: '#FF0000' },
    { name: 'Mendeley', Icon: SiMendeley, color: '#9D1620' },
    { name: 'Wireshark', Icon: Network, color: '#1679A7' },

    // Others
    { name: 'Google Maps', Icon: Map, color: '#4285F4' },
  ];

  // Split tools into two rows for animation
  const midPoint = Math.ceil(allTools.length / 2);
  const firstRowTools = allTools.slice(0, midPoint);
  const secondRowTools = allTools.slice(midPoint);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]'
            : 'bg-gradient-to-br from-white to-pink-50/50 border border-pink-200 shadow-xl'
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 sm:mb-6 flex flex-nowrap items-center gap-2 sm:gap-3"
          style={{
            fontSize: 'clamp(1.125rem, 4.5vw, 2.25rem)',
          }}
        >
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
            className="inline-block flex-shrink-0"
            style={{
              fontSize: 'clamp(1.5rem, 5.5vw, 2.5rem)',
            }}
          >
            👋
          </motion.span>
          <span className={`whitespace-nowrap ${
            darkMode
              ? 'bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent'
              : 'text-gray-900'
          }`}>
            {displayedText}
          </span>
          <span 
            className={`inline-block w-0.5 animate-pulse ml-1 flex-shrink-0 ${darkMode ? 'bg-pink-400' : 'bg-gray-900'}`}
            style={{
              height: 'clamp(1.25rem, 4.5vw, 2rem)',
            }}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-x-6 sm:gap-y-2 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.6)]' : 'bg-pink-600'
              }`}
            />
            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>I'm a remote worker</p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.6)]' : 'bg-pink-600'
              }`}
            />
            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Based in Surakarta, ID 📍</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mb-6 text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Creative Technologist & Visual Designer blending design, code, and AI to create meaningful 
          digital experiences built with precision, discipline, and a commitment to on-time delivery.
        </motion.p>

        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 opacity-20 pointer-events-none">
          <div
            className={`w-full h-full rounded-full ${
              darkMode
                ? 'bg-gradient-to-br from-pink-500 to-fuchsia-500 blur-3xl'
                : 'bg-gradient-to-br from-pink-300 to-fuchsia-300 blur-3xl'
            }`}
          />
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="space-y-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <Code className={darkMode ? 'w-6 h-6 sm:w-8 sm:h-8 text-pink-400' : 'w-6 h-6 sm:w-8 sm:h-8 text-pink-600'} />
            <h3 className={`text-xl sm:text-2xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Skills</h3>
          </div>
          <p className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            The tools I use
          </p>
        </motion.div>

        {/* First Row Tools */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-marquee w-fit">
            {[...firstRowTools, ...firstRowTools].map((tool, index) => (
              <div
                key={`row1-${index}`}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap flex-shrink-0 ${
                  darkMode
                    ? 'bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border border-pink-500/30'
                    : 'bg-gradient-to-r from-pink-100 to-fuchsia-100 border border-pink-300'
                }`}
              >
                {tool.Icon && (
                  typeof tool.Icon === 'string' ? (
                    <img
                      src={tool.Icon}
                      alt={tool.name}
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain"
                    />
                  ) : (
                    <tool.Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      style={{ color: tool.color }}
                    />
                  )
                )}
                <span className={`text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row Tools (reverse direction) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-marquee-reverse w-fit">
            {[...secondRowTools, ...secondRowTools].map((tool, index) => (
              <div
                key={`row2-${index}`}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap flex-shrink-0 ${
                  darkMode
                    ? 'bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30'
                    : 'bg-gradient-to-r from-fuchsia-100 to-pink-100 border border-fuchsia-300'
                }`}
              >
                {tool.Icon && (
                  typeof tool.Icon === 'string' ? (
                    <img
                      src={tool.Icon}
                      alt={tool.name}
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain"
                    />
                  ) : (
                    <tool.Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      style={{ color: tool.color }}
                    />
                  )
                )}
                <span className={`text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('about')}
          className={`group p-8 rounded-2xl text-left transition-all ${
            darkMode
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 hover:border-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
              : 'bg-white/80 backdrop-blur-sm border border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className={darkMode ? 'text-pink-400' : 'text-pink-600'}>Explore About Me</h3>
            <ArrowRight
              className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                darkMode ? 'text-pink-400' : 'text-pink-600'
              }`}
            />
          </div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover my journey, background, and what drives my passion for technology and design.
          </p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('experience')}
          className={`group p-8 rounded-2xl text-left transition-all ${
            darkMode
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 hover:border-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
              : 'bg-white/80 backdrop-blur-sm border border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className={darkMode ? 'text-pink-400' : 'text-pink-600'}>View My Projects</h3>
            <ArrowRight
              className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                darkMode ? 'text-pink-400' : 'text-pink-600'
              }`}
            />
          </div>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Check out my latest work and the projects I've built with passion and dedication.
          </p>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
