import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Award as AwardIcon } from 'lucide-react';

interface CertificateDetailProps {
  darkMode: boolean;
  certificate: {
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
    skills: string[];
    credentialUrl: string;
  };
  onBack: () => void;
}

export function CertificateDetail({ darkMode, certificate, onBack }: CertificateDetailProps) {
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
        <span>Back to Certificates</span>
      </motion.button>

      {/* Certificate Image */}
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
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </motion.div>

      {/* Certificate Content */}
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
        <div className={`space-y-6 text-sm sm:text-base`}>
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`p-3 rounded-2xl ${
                darkMode
                  ? 'bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 border border-pink-500/30'
                  : 'bg-gradient-to-br from-pink-100 to-fuchsia-100 border border-pink-200'
              }`}
            >
              <AwardIcon className={darkMode ? 'w-8 h-8 text-pink-400' : 'w-8 h-8 text-pink-600'} />
            </div>
            <div>
              <h2 className={`mb-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{certificate.title}</h2>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {certificate.issuer} • {certificate.date}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <h3 className={`mb-4 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>About This Certificate</h3>
            <p className="leading-relaxed whitespace-pre-line">{certificate.description}</p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className={`mb-4 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Skills Covered</h3>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    darkMode
                      ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                      : 'bg-pink-50 text-pink-600 border border-pink-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credential Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
              darkMode
                ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)]'
                : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Credential</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}