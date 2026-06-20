import { User, GraduationCap, Coffee, FolderGit2, Briefcase, Code2, Award, Send, Download, Moon, Sun, Home, LayoutDashboard, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import kipsLogo from '../../assets/images/logos/kips-logo.png';

// Import profile image
import profileImage from '../../assets/images/profile/profile.jpeg';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Sidebar({ activeSection, setActiveSection, darkMode, toggleDarkMode }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'wakatime', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Project', icon: Coffee },
    { id: 'certificate', label: 'Certificate', icon: Award },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`hidden lg:flex fixed left-0 top-0 h-screen w-80 p-8 flex-col ${
          darkMode
            ? 'bg-gradient-to-b from-gray-900 to-black border-r border-pink-500/20'
            : 'bg-gradient-to-b from-white to-pink-50 border-r border-pink-200'
        } overflow-y-auto`}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-6 right-6 p-2 rounded-full transition-all ${
            darkMode
              ? 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
              : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 mt-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className={`w-32 h-32 rounded-full overflow-hidden mb-4 ${
              darkMode
                ? 'ring-4 ring-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]'
                : 'ring-4 ring-pink-300 shadow-xl'
            }`}
          >
            <img
              src={profileImage}
              alt="Okky Puspa Ningrum"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Profile Info */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={darkMode ? 'text-white mb-2' : 'text-gray-900 mb-2'}
            >
              Okky Puspa Ningrum
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={darkMode ? 'text-pink-400 text-sm' : 'text-pink-600 text-sm'}
            >
              @kyparum
            </motion.p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                      : 'bg-gradient-to-r from-pink-100 to-fuchsia-100 text-pink-600 shadow-md'
                    : darkMode
                    ? 'text-gray-400 hover:text-pink-400 hover:bg-pink-500/10'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <motion.div
                  whileTap={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Download CV Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={() => {
            // Open PDF in new tab for preview
            window.open('https://drive.google.com/file/d/1vFttwtypBdh8pcHtEOJKitQtnUZ3nIct/view?usp=sharing', '_blank');
          }}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all ${
            darkMode
              ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)]'
              : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl'
          } hover:scale-105`}
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-center"
        >
          <p className={`text-xs flex items-center justify-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2026 Powered by <img src={kipsLogo} alt="Kips" className="h-4 inline-block" />
          </p>
        </motion.div>
      </motion.aside>

      {/* Mobile Top Bar - Always on top with z-50 */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 ${
          darkMode
            ? 'bg-gradient-to-b from-black via-gray-900 to-gray-900/95 border-b border-pink-500/20'
            : 'bg-gradient-to-b from-white via-pink-50 to-pink-50/95 border-b border-pink-200'
        } px-4 py-3 shadow-lg backdrop-blur-lg`}
      >
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {/* Left: Avatar & Name */}
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full overflow-hidden ${
                darkMode
                  ? 'border-2 border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                  : 'border-2 border-pink-300 shadow-md'
              }`}
            >
              <img
                src={profileImage}
                alt="Okky Puspa Ningrum"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Okky Puspa Ningrum
              </h3>
              <p className={`text-xs ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>@kyparum</p>
            </div>
          </div>

          {/* Right: Dark Mode & Hamburger */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all ${
                darkMode
                  ? 'bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 text-pink-400 border border-pink-500/30'
                  : 'bg-gradient-to-br from-pink-100 to-fuchsia-100 text-pink-600 border border-pink-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Hamburger Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all ${
                darkMode
                  ? 'bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 text-pink-400 border border-pink-500/30'
                  : 'bg-gradient-to-br from-pink-100 to-fuchsia-100 text-pink-600 border border-pink-200'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Hamburger Menu Overlay & Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]"
            />

            {/* Sliding Menu from Left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] z-50 ${
                darkMode
                  ? 'bg-gradient-to-b from-gray-900 to-black border-r border-pink-500/20'
                  : 'bg-gradient-to-b from-white to-pink-50 border-r border-pink-200'
              } shadow-2xl overflow-y-auto`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-8 mt-4">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden mb-3 ${
                      darkMode
                        ? 'ring-4 ring-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]'
                        : 'ring-4 ring-pink-300 shadow-xl'
                    }`}
                  >
                    <img
                      src={profileImage}
                      alt="Okky Puspa Ningrum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Okky Puspa Ningrum
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    @kyparum
                  </p>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 space-y-2 mb-6">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleMenuItemClick(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? darkMode
                              ? 'bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                              : 'bg-gradient-to-r from-pink-100 to-fuchsia-100 text-pink-600 shadow-md'
                            : darkMode
                            ? 'text-gray-400 hover:text-pink-400 hover:bg-pink-500/10'
                            : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Download CV Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1vFttwtypBdh8pcHtEOJKitQtnUZ3nIct/view?usp=sharing', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    darkMode
                      ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)]'
                      : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.button>

                {/* Footer */}
                <div className="mt-6 text-center">
                  <p className={`text-xs flex items-center justify-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    © 2026 Powered by <img src={kipsLogo} alt="Kips" className="h-4 inline-block" />
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}