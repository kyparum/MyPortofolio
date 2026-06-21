import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

// Ganti URL di bawah dengan link Imgur kamu (upload 128×128px atau 256×256px)
const socialMedia = [
  {
    name: "Instagram",
    iconUrl: "https://i.imgur.com/1BLIkys.png", // ganti Imgur
    url: "https://www.instagram.com/kyparum/",
    handle: "@kyparum",
    bgColor: "#E4405F",
  },
  {
    name: "LinkedIn",
    iconUrl: "https://i.imgur.com/QvkFgey.png", // ganti Imgur
    url: "https://www.linkedin.com/in/okkypuspaningrum/",
    handle: "Okky Puspa Ningrum",
    bgColor: "#0A66C2",
  },
  {
    name: "GitHub",
    iconUrl: "https://i.imgur.com/fhktnRm.png", // ganti Imgur
    url: "https://github.com/kyparum",
    handle: "@kyparum",
    bgColor: "#181717",
  },
  {
    name: "X",
    iconUrl: "https://i.imgur.com/YfP0lD4.png", // ganti Imgur
    url: "https://x.com/kyparum",
    handle: "@kyparum",
    bgColor: "#000000",
  },
  {
    name: "Threads",
    iconUrl: "https://i.imgur.com/GWT8oHx.png", // ganti Imgur
    url: "https://www.threads.net/@kyparum",
    handle: "@kyparum",
    bgColor: "#000000",
  },
  {
    name: "Facebook",
    iconUrl: "https://i.imgur.com/T7jiaXo.png", // ganti Imgur
    url: "https://www.facebook.com/okky.puspa.3/",
    handle: "Okky Puspa Ningrum",
    bgColor: "#1877F2",
  },
];

export function Contact({ darkMode }: ContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Mail
            className={
              darkMode
                ? "w-6 h-6 sm:w-8 sm:h-8 text-pink-400"
                : "w-6 h-6 sm:w-8 sm:h-8 text-pink-600"
            }
          />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl ${
              darkMode
                ? "bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
          >
            Contact
          </h2>
        </div>
        <p
          className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Let's connect and create something amazing together
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`rounded-3xl p-5 sm:p-6 md:p-8 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]"
            : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-xl"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {socialMedia.map((social, index) => (
            <motion.a
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl transition-all ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
                  : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden flex-shrink-0 transition-transform group-hover:scale-110">
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-base sm:text-lg mb-1 ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                >
                  {social.name}
                </h3>
                <p
                  className={`text-sm sm:text-base truncate ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {social.handle}
                </p>
              </div>
              <ExternalLink
                className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 ${
                  darkMode ? "text-pink-400" : "text-pink-600"
                }`}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}