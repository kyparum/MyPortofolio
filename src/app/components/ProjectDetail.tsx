import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, Palette } from 'lucide-react';

interface ProjectDetailProps {
  darkMode: boolean;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    fullDescription: string;
    demoUrl: string;
    githubUrl?: string;
    toolUrl?: string;
    toolName?: string;
  };
  onBack: () => void;
}

export function ProjectDetail({ darkMode, project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onBack}
        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all text-sm sm:text-base ${
          darkMode
            ? 'bg-gray-800/50 text-pink-400 hover:bg-gray-800 border border-pink-500/20'
            : 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-200'
        }`}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Back to Projects</span>
      </motion.button>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className={`rounded-3xl overflow-hidden ${
          darkMode
            ? 'border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]'
            : 'border border-pink-200 shadow-xl'
        }`}
      >
        <img src={project.image} alt={project.title} className="w-full h-64 sm:h-80 md:h-96 object-cover" />
      </motion.div>

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`rounded-3xl p-5 sm:p-6 md:p-8 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]'
            : 'bg-white/80 backdrop-blur-sm border border-pink-200 shadow-xl'
        }`}
      >
        <div className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}>
          <div className={`whitespace-pre-line text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <h2 className={`mb-4 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{project.title}</h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    darkMode
                      ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                      : 'bg-pink-50 text-pink-600 border border-pink-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <h3 className={`mb-4 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>About This Project</h3>
              <p className="leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)]'
                    : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Demo</span>
              </motion.a>

              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    darkMode
                      ? 'bg-gray-800/50 text-pink-400 hover:bg-gray-800 border border-pink-500/20'
                      : 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-200'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </motion.a>
              )}

              {project.toolUrl && project.toolName && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.toolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    darkMode
                      ? 'bg-gray-800/50 text-pink-400 hover:bg-gray-800 border border-pink-500/20'
                      : 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-200'
                  }`}
                >
                  <Palette className="w-5 h-5" />
                  <span>View on {project.toolName}</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}