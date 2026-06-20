import { motion } from "motion/react";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

interface AboutMeProps {
  darkMode: boolean;
}

interface EducationItem {
  level: string;
  institution: string;
  year: string;
  description: string;
  logo: string;
  location: string;
}

interface CareerItem {
  position: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
  status: string; // Full Time / Part Time / Intern
  location: string; // Solo / Jogja / Jakarta, etc
}

export function AboutMe({ darkMode }: AboutMeProps) {
  const [expandedCareer, setExpandedCareer] = useState<
    number[]
  >([]);

  const toggleCareer = (index: number) => {
    if (expandedCareer.includes(index)) {
      setExpandedCareer(
        expandedCareer.filter((i) => i !== index),
      );
    } else {
      setExpandedCareer([...expandedCareer, index]);
    }
  };

  const educationData: EducationItem[] = [
    {
      level: "Information Systems",
      institution: "Tiga Serangkai University",
      year: "2023 - Present",
      description:
        "Menempuh pendidikan di program studi Sistem Informasi dengan fokus pada pengembangan perangkat lunak, analisis data, dan manajemen sistem informasi. Aktif mengikuti berbagai proyek dan organisasi kampus untuk mengembangkan soft skills dan technical skills.",
      logo: "https://i.imgur.com/HwihHsA.png",
      location: "Surakarta",
    },
    {
      level: "Senior High School (Natural Science)",
      institution: "SMA Batik 2",
      year: "2019 - 2022",
      description:
        "Menyelesaikan pendidikan menengah atas dengan jurusan IPA. Aktif dalam kegiatan ekstrakurikuler seperti komputer club dan english debate, yang membantu mengembangkan kemampuan problem-solving dan komunikasi.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkEH9-y7CIPQjZhcYaa8bZlPcrUwErJAaCA&s",
      location: "Surakarta",
    },
    {
      level: "Junior High School",
      institution: "SMP Batik",
      year: "2016 - 2019",
      description:
        "Masa pendidikan menengah pertama yang menjadi fondasi dalam mengembangkan minat di bidang teknologi dan sains. Mulai belajar dasar-dasar pemrograman dan desain grafis secara otodidak.",
      logo: "https://i.imgur.com/6rsOmaP.png",
      location: "Surakarta",
    },
    {
      level: "Elementary School",
      institution: "SD Negeri Bratan 3",
      year: "2010 - 2016",
      description:
        "Pendidikan dasar yang memberikan fondasi akademik yang kuat. Sejak dini sudah menunjukkan ketertarikan pada komputer dan teknologi melalui kegiatan pembelajaran berbasis digital.",
      logo: "https://i.imgur.com/BqWJ31M.png",
      location: "Surakarta",
    },
    {
      level: "Kindergarten",
      institution: "TK Aisyiyah 20",
      year: "2018 - 2010",
      description:
        "Pendidikan dasar yang memberikan fondasi akademik yang kuat. Sejak dini sudah menunjukkan ketertarikan pada komputer dan teknologi melalui kegiatan pembelajaran berbasis digital.",
      logo: "https://i.imgur.com/Orxobqz.png",
      location: "Surakarta",
    },
  ];

  const careerData: CareerItem[] = [
    {
      position: "UI/UX Designer",
      company: "Creative Studio Indonesia",
      period: "2024 - Sekarang",
      description: [
        "Bertanggung jawab dalam merancang user interface dan user experience untuk berbagai aplikasi web dan mobile",
        "Berkolaborasi dengan tim developer untuk memastikan implementasi desain yang optimal",
        "Menggunakan tools seperti Figma, Adobe XD, dan Sketch untuk membuat wireframe, prototype, dan design system",
        "Melakukan user research dan usability testing untuk meningkatkan kualitas produk"
      ],
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop",
      status: "Full Time",
      location: "Jakarta",
    },
    {
      position: "Graphic Designer Intern",
      company: "Digital Marketing Agency",
      period: "2023 - 2024",
      description: [
        "Membantu tim kreatif dalam membuat konten visual untuk media sosial, website, dan kampanye digital",
        "Belajar tentang design thinking, branding, dan visual communication",
        "Mengerjakan berbagai project mulai dari social media graphics, infographics, hingga banner advertisements",
        "Berkolaborasi dengan tim marketing untuk menciptakan konten yang engaging"
      ],
      logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop",
      status: "Intern",
      location: "Jakarta",
    },
    {
      position: "Freelance Web Designer",
      company: "Self-Employed",
      period: "2022 - 2023",
      description: [
        "Mengerjakan berbagai project web design untuk klien lokal dan internasional",
        "Fokus pada pembuatan landing page, portfolio website, dan company profile yang responsive",
        "Mengembangkan kemampuan dalam HTML, CSS, JavaScript, dan berbagai framework modern",
        "Mengelola komunikasi dengan klien dan memastikan project selesai tepat waktu"
      ],
      logo: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=100&h=100&fit=crop",
      status: "Freelance",
      location: "Jakarta",
    },
  ];

  const renderSkillRating = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-all ${
              dot <= level
                ? darkMode
                  ? "bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.6)]"
                  : "bg-pink-600"
                : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* About Me Content */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles
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
              About Me
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            A short story of me
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`rounded-3xl p-5 sm:p-6 md:p-8 ${
            darkMode
              ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]"
              : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-xl"
          }`}
        >
          <div
            className={`space-y-4 text-base sm:text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <p>
              Hello! I’m someone who turns curiosity into creation. I build meaningful digital experiences from interactive websites to clean, engaging interfaces by combining logic, creativity, and thoughtful design.
            </p>

            <p>
              I enjoy transforming complex ideas into simple, elegant solutions. For me, good design and good code should work together seamlessly to create impact.
            </p>

            <p>
              Beyond development, I’m a highly progressive AI tools explorer. I love diving deep into emerging technologies, experimenting with new platforms, and discovering smarter, more creative ways to build and design. I don’t just use AI I explore its potential, push its boundaries, and integrate it into my creative workflow.
            </p>

            <p>
              Behind the scenes is where I feel most at home. I prefer creating quietly rather than standing in the spotlight that’s simply part of who I am as an introvert. While others shine in front of the screen, I find my strength behind it, crafting visuals with intention and depth.
            </p>

            <p>
              For me, the magic happens behind the screen where ideas, design, technology, and imagination meet.
            </p>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 pointer-events-none">
            <div
              className={`w-full h-full rounded-full ${
                darkMode
                  ? "bg-gradient-to-br from-pink-500 to-fuchsia-500 blur-xl"
                  : "bg-gradient-to-br from-pink-300 to-fuchsia-300 blur-2xl"
              }`}
            />
          </div>
        </motion.div>
      </div>

      {/* Career Section */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase
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
              Career
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            My professional career journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-3 sm:left-6 top-4 bottom-4 w-0.5 ${
              darkMode
                ? "bg-gradient-to-b from-pink-500 to-fuchsia-500"
                : "bg-gradient-to-b from-pink-300 to-fuchsia-300"
            }`}
          />

          {careerData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.5,
              }}
              className="relative mb-6 last:mb-0"
            >
              <div className="flex items-start gap-3 sm:gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 mt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                      darkMode
                        ? "bg-gradient-to-br from-pink-400 to-fuchsia-400 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                        : "bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 rounded-2xl p-4 sm:p-6 ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                      : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg"
                  } transition-all hover:scale-105`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      {/* Logo */}
                      <img
                        src={item.logo}
                        alt={item.company}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 ${
                          darkMode
                            ? "border border-pink-500/30"
                            : "border border-pink-200"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base sm:text-lg md:text-xl mb-1 sm:mb-2 ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                        >
                          {item.position}
                        </h3>
                        <p
                          className={`text-base sm:text-lg break-words ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {item.company}
                        </p>
                        {/* Status and Location */}
                        <div className={`flex items-center gap-2 mt-2 text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            <span>{item.status}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                        darkMode
                          ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                          : "bg-pink-100 text-pink-600 border border-pink-200"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Expandable Description */}
                  <div
                    className={`mt-4 ${
                      expandedCareer.includes(index)
                        ? "max-h-96"
                        : "max-h-0"
                    } overflow-hidden transition-all duration-300`}
                  >
                    <ul className="space-y-2">
                      {item.description.map((point, idx) => (
                        <li
                          key={idx}
                          className={`text-base sm:text-lg flex items-start gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          <span className={`mt-1.5 ${darkMode ? "text-pink-400" : "text-pink-600"}`}>•</span>
                          <span className="flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toggle Button */}
                  <button
                    className={`mt-2 text-xs sm:text-sm flex items-center gap-1 ${
                      darkMode
                        ? "text-pink-400"
                        : "text-pink-600"
                    } hover:underline`}
                    onClick={() => toggleCareer(index)}
                  >
                    {expandedCareer.includes(index) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    <span>
                      {expandedCareer.includes(index)
                        ? "Hide"
                        : "Show"}{" "}
                      Description
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap
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
              Education
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            My academic journey and learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-3 sm:left-6 top-4 bottom-4 w-0.5 ${
              darkMode
                ? "bg-gradient-to-b from-pink-500 to-fuchsia-500"
                : "bg-gradient-to-b from-pink-300 to-fuchsia-300"
            }`}
          />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.5,
              }}
              className="relative mb-6 last:mb-0"
            >
              <div className="flex items-start gap-3 sm:gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 mt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                      darkMode
                        ? "bg-gradient-to-br from-pink-400 to-fuchsia-400 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                        : "bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 rounded-2xl p-4 sm:p-6 ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                      : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg"
                  } transition-all hover:scale-105`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      {/* Logo */}
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 ${
                          darkMode
                            ? "border border-pink-500/30"
                            : "border border-pink-200"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base sm:text-lg md:text-xl mb-1 sm:mb-2 ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                        >
                          {item.level}
                        </h3>
                        <p
                          className={`text-base sm:text-lg break-words ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {item.institution}
                        </p>
                        {/* Location */}
                        <div className={`flex items-center gap-1 mt-2 text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                        darkMode
                          ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                          : "bg-pink-100 text-pink-600 border border-pink-200"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Publication Section */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen
              className={darkMode ? "w-6 h-6 sm:w-8 sm:h-8 text-pink-400" : "w-6 h-6 sm:w-8 sm:h-8 text-pink-600"}
            />
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl ${
                darkMode
                  ? "bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            >
              Publication
            </h2>
          </div>
          <p className={`text-base sm:text-lg ml-9 sm:ml-11 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Research papers and journal publications
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Performa Logistic Regression dalam Klasifikasi Sentimen Opini Publik Pemilu di India",
              journal: "Pustaka AI, Jurnal Pustaka Galeri Mandiri",
              year: "Apr 30, 2026",
              authors: "Okky Puspa Ningrum, et al.",
              url: "https://jurnal.pustakagalerimandiri.co.id/index.php/pustakaai/article/view/1566",
            },
          ].map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-5 sm:p-6 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                  : "bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className={`text-base sm:text-lg md:text-xl mb-2 ${darkMode ? "text-pink-400" : "text-pink-600"}`}>
                    {pub.title}
                  </h3>
                  <p className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {pub.journal} · {pub.year}
                  </p>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                    darkMode
                      ? "bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30"
                      : "bg-pink-100 text-pink-600 border border-pink-200 hover:bg-pink-200"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Journal
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}