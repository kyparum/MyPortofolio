import { motion, AnimatePresence } from 'motion/react';
import { FolderOpen, ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface ExperienceProps {
  darkMode: boolean;
}

// ── Types ─────────────────────────────────────────────────────────────────────

type CategoryId = 'carousel' | 'poster' | 'app' | 'drawing' | 'uiux' | 'ppt';

interface Category {
  id: CategoryId;
  label: string;
  thumbnail: string;
  description: string;
}

interface CarouselProject {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

interface PosterProject {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

interface AppProject {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  longDesc: string;
  githubUrl?: string;
  figmaUrl?: string;
  figmaProtoUrl?: string;
}

interface DrawingProject {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

// ── Category list ─────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: 'carousel',
    label: 'Carousel',
    thumbnail: 'https://i.imgur.com/wjkg5SB.png',
    description: 'Social media carousel designs',
  },
  {
    id: 'poster',
    label: 'Poster',
    thumbnail: 'https://i.imgur.com/PczsKJC.png',
    description: 'Poster & graphic design works',
  },
  {
    id: 'app',
    label: 'Development',
    thumbnail: 'https://i.imgur.com/faQ2f3F.png',
    description: 'Real projects built with code',
  },
  {
    id: 'drawing',
    label: 'Coretan',
    thumbnail: 'https://i.imgur.com/Y7rxnJr.png',
    description: 'Hand-drawn illustrations & sketches',
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
    thumbnail: 'https://i.imgur.com/O4YgkBs.png',
    description: 'User interface & experience design',
  },
  {
    id: 'ppt',
    label: 'Design PPT',
    thumbnail: 'https://i.imgur.com/LVB3gTi.png',
    description: 'Presentation & slide deck designs',
  },
];

// ── Project data ──────────────────────────────────────────────────────────────

const carouselProjects: CarouselProject[] = [
  {
    id: 'c-madu',
    title: 'Madu Mara`i',
    thumbnail: 'https://i.imgur.com/c2ZXUWY.png',
    description: 'Carousel social media tentang produk madu. Berisi konten informatif seputar manfaat madu, dan promosi produk.',
    images: [
      'https://i.imgur.com/ygdI7xZ.png',
      'https://i.imgur.com/DiCR6Z1.png',
      'https://i.imgur.com/tBmKcQv.png',
      'https://i.imgur.com/Uj7kKEb.png',
      'https://i.imgur.com/vbVHtA9.png',
      'https://i.imgur.com/dEOqgFw.png',
    ],
  },
  {
    id: 'c-danbo',
    title: 'Danbo',
    thumbnail: 'https://i.imgur.com/idLFclj.png',
    description: 'Carousel kreatif bertema karakter Danbo. Menampilkan seri foto storytelling dengan karakter kardus ikonik dalam berbagai situasi.',
    images: [
      'https://i.imgur.com/qCy76jX.png',
      'https://i.imgur.com/oEhlJWP.png',
      'https://i.imgur.com/RErZpnM.png',
      'https://i.imgur.com/Vl8dSPJ.png',
      'https://i.imgur.com/wdJfM6u.png',
    ],
  },
  {
    id: 'c-pangan',
    title: 'Ubi Jalar',
    thumbnail: 'https://i.imgur.com/OS1ndVH.png',
    description: 'Carousel edukasi tentang ketahanan pangan. Menyajikan informasi resep dari bahan pangan lokal.',
    images: [
      'https://i.imgur.com/dzwUIJq.png',
      'https://i.imgur.com/S0tqdne.png',
      'https://i.imgur.com/19McEZR.png',
      'https://i.imgur.com/IHo66Oa.png',
      'https://i.imgur.com/iSuotEf.png',
      'https://i.imgur.com/yg4oSs0.png',
      'https://i.imgur.com/zIrPvER.png',
      'https://i.imgur.com/JlxVpWk.png',
      'https://i.imgur.com/78kLah2.png',
    ],
  },
  {
    id: 'c-ads',
    title: 'ADS Creative Kit',
    thumbnail: 'https://i.imgur.com/Hq5ap80.png',
    description: 'Promosi terkait Kit Creative dari sebuah iklan.',
    images: [
      'https://i.imgur.com/sWm1xrR.png',
      'https://i.imgur.com/lRVYYZ1.png',
      'https://i.imgur.com/XvV6dx0.png',
      'https://i.imgur.com/tUxLRMM.png',
      'https://i.imgur.com/f8meBm7.png',
      'https://i.imgur.com/AFSrpUc.png',
    ],
  },
];

const posterProjects: PosterProject[] = [
  {
    id: 'p-kemerdekaan',
    title: 'National Day Poster Campaign',
    thumbnail: 'https://i.imgur.com/6tPXrZZ.png',
    description: 'Poster kreatif untuk memperingati hari-hari nasional Indonesia.',
    images: ['https://i.imgur.com/1hEooPb.jpeg',
             'https://i.imgur.com/VW3HNE7.jpeg',
             'https://i.imgur.com/WBA6pht.png',
    ]
  },
  {
    id: 'p-birthday',
    title: 'Birthday Poster',
    thumbnail: 'https://i.imgur.com/uvV5rH3.jpeg',
    description: 'Poster kreatif untuk merayakan ulang tahun.',
    images: ['https://i.imgur.com/EpTnWGg.png'],
  },
  {
    id: 'p-school',
    title: 'Assignment Gallery',
    thumbnail: 'https://i.imgur.com/iiDmhJ8.png',
    description: 'Kumpulan desain poster kreatif yang dikembangkan sebagai bagian dari tugas sekolah.',
    images: ['https://i.imgur.com/D5oeW2c.png',
             'https://i.imgur.com/zmuVSKZ.jpeg',
             'https://i.imgur.com/NGb8xOz.png',
    ],
  },
];

const appProjects: AppProject[] = [
  {
    id: 'app-porto',
    title: 'My Portofolio Website',
    thumbnail: 'https://i.imgur.com/NbOlhSG.png',
    description: 'A modern personal portfolio website showcasing projects, skills, and professional experience..',
    tags: ['React', 'TypeScript', 'API Wakatime'],
    longDesc: 'A responsive personal portfolio website designed to showcase my projects, technical skills, and professional journey. This project was developed using a vibe coding approach, combining AI-assisted development with rapid prototyping to accelerate the design and implementation process. Built with Typescript, the website features a clean user interface, smooth animations, responsive layouts, and optimized performance, providing visitors with an engaging experience across desktop and mobile devices.',
    githubUrl: 'https://github.com/kyparum/MyPortofolio',
    figmaProtoUrl: 'https://kyparum.vercel.app/',
  },
  {
    id: 'app-tripwell',
    title: 'Capstone Tripwell',
    thumbnail: 'https://i.imgur.com/iip1ZtP.png',
    description: 'An inclusive tourism platform for West Bandung tailored for individuals with disabilities and the elderly, featuring a real-time AI model for sentiment analysis.',
    tags: ['React', 'Supabase', 'Railway'],
    longDesc: 'A specialized capstone project designed to promote inclusive tourism by showcasing accessible travel destinations in West Bandung for people with disabilities and the elderly. Built using React and Node.js, the platform offers data-driven insights through an interactive dashboard powered by Chart.js. A key innovation of this web application is its integrated machine learning model, which performs real-time sentiment analysis on user comments to measure customer satisfaction instantly, helping stakeholders continuously improve accessibility and service quality.',
    githubUrl: 'https://github.com/hasbiajaa/TripWell',
    figmaProtoUrl: 'https://tripwellcaps.vercel.app/',
  },
  {
    id: 'app-modelaitripwell',
    title: 'Model AI Tripwell',
    thumbnail: 'https://i.imgur.com/wL8PdqN.png',
    description: 'The production-ready deployment of the Tripwell real-time sentiment analysis AI model, hosted on Railway to power the inclusive tourism platform dashboard.',
    tags: ['Python', 'Machine Learning', 'Railway'],
    longDesc: 'This project focuses on the end-to-end deployment of the machine learning model that powers the Tripwell inclusive tourism ecosystem. Built as a dedicated backend service hosted on Railway, this deployment exposes a high-performance API that processes user feedback from the West Bandung tourism dashboard in real-time. It handles tokenization, preprocessing, and inference to deliver instant sentiment analysis. By isolating the AI model into its own scalable production environment on Railway, the system ensures seamless integration, low-latency analysis, and continuous tracking of customer satisfaction for users with disabilities and the elderly.',
    githubUrl: 'https://github.com/kyparum/tripwell',
  },
];

const drawingProjects: DrawingProject[] = [
  {
    id: 'd-sketsa1',
    title: 'Sketsa Karakter',
    thumbnail: 'https://i.imgur.com/DUz6pRs.jpeg',
    description: 'Kumpulan sketsa karakter tangan menggunakan pensil dan tinta.',
    images: [
      'https://i.imgur.com/LvHy2TC.png',
      'https://i.imgur.com/KOWFhrM.png',
    ],
  },
  /*{
    id: 'd-ilustrasi',
    title: 'Ilustrasi Alam',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    description: 'Ilustrasi pemandangan alam menggunakan teknik mixed media.',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?w=1200&q=80',
    ],
  },*/
];

const uiuxProjects: AppProject[] = [
  {
    id: 'ux-3role',
    title: 'Mindflow 3 Role App',
    thumbnail: 'https://i.imgur.com/4T5j7oV.png',
    description: 'Desain UI/UX untuk orderan atau tukar jasa yang di serahkan admin kepada worker dari pesanan customer.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    longDesc: 'Proyek desain web semester 5 yang mencakup user research, wireframing, hingga high-fidelity prototype. Dirancang menggunakan design system yang konsisten untuk memastikan kohesivitas visual di seluruh aplikasi.',
    figmaUrl: 'https://www.figma.com/design/wEW6JMeTx2uJr2dxdnWCXs/UI-UX-MINDFLOW-3-ROLE?node-id=0-1&t=ewJj6iN9H4SiYHOk-1',
    figmaProtoUrl: 'https://www.figma.com/proto/wEW6JMeTx2uJr2dxdnWCXs/UI-UX-MINDFLOW-3-ROLE?node-id=117-2&t=jg1YLKviCuZjzBf8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 'ux-warmindo',
    title: 'UI/UX Reservasi Warmindo',
    thumbnail: 'https://i.imgur.com/HLZrfvf.png',
    description: 'Desain antarmuka aplikasi reservasi warmindo yang user-friendly.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    longDesc: 'Desain UI/UX lengkap untuk aplikasi reservasi warmindo mulai dari user flow, wireframe, hingga prototype interaktif. Mengutamakan kemudahan penggunaan bagi semua kalangan.',
    figmaUrl: 'https://www.figma.com/design/VjZkDrfsKEByi5lN0zHH2l/IMK-Pelengkap?t=8xZzS1x2bwBlVQu0-1',
    figmaProtoUrl: 'https://www.figma.com/proto/VjZkDrfsKEByi5lN0zHH2l/IMK-Pelengkap?node-id=1-2834&t=f1TNYfqfKcfDLUO4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 'ux-mindflow',
    title: 'UI/UX Mindflow',
    thumbnail: 'https://i.imgur.com/2X6UXmP.png',
    description: 'Desain Mindflow sebagai web pemesanan untuk customer jika ingin tukar jasa dengan pilihan tugas yang tersedia.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    longDesc: 'Desain UI/UX lengkap untuk web pemesanan tukar jasa mulai dari user flow, wireframe, hingga prototype interaktif. Mengutamakan kemudahan penggunaan bagi semua kalangan.',
    figmaUrl: 'https://www.figma.com/design/1uoVbYQ1rDrJxpYmR3blAX/MindFlow?node-id=0-1&t=w7nalnv2uuot9kQu-1',
    figmaProtoUrl: 'https://www.figma.com/proto/1uoVbYQ1rDrJxpYmR3blAX/MindFlow?node-id=152-277&t=MLSu266RIMXTWJrF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=113%3A221',
  },
  {
    id: 'ux-kaitiket',
    title: 'KAI tiket',
    thumbnail: 'https://i.imgur.com/tNwt2df.png',
    description: 'Antarmuka web pemesanan tiket kereta api untuk memberikan pengalaman booking yang lebih cepat, intuitif, dan seamless',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    longDesc: 'Proyek UI/UX untuk platform pemesanan tiket kereta api online. Fokus utama proyek ini adalah mengoptimalkan alur pencarian rute, pemilihan kursi (seat selection), hingga proses pembayaran agar lebih user-friendly, bersih, dan meminimalisir kesalahan pengguna saat bertransaksi',
    figmaUrl: 'https://www.figma.com/design/DnU6rIFAn5Ltjc4J2w86cB/KAI-Tiket?node-id=0-1&t=WHu7EPALa1edsut1-1',
    /*figmaProtoUrl: 'https://www.figma.com/proto/1uoVbYQ1rDrJxpYmR3blAX/MindFlow?node-id=152-277&t=MLSu266RIMXTWJrF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=113%3A221',*/
  },
];

const pptProjects: AppProject[] = [
  {
    id: 'ppt-business',
    title: 'Business Presentation Template',
    thumbnail: 'https://images.unsplash.com/photo-1666148610265-5e64d889574b?w=600&q=80',
    description: 'Template presentasi bisnis profesional dengan 50+ variasi slide.',
    tags: ['Canva', 'Presentation', 'Business'],
    longDesc: 'Template presentasi bisnis yang komprehensif dengan lebih dari 50 variasi slide. Mencakup slide cover, isi, grafik, timeline, profil tim, dan penutup. Mudah dikustomisasi sesuai branding perusahaan.',
    figmaProtoUrl: 'https://www.canva.com/design/example-presentation/view',
  },
  {
    id: 'ppt-academic',
    title: 'Academic Presentation',
    thumbnail: 'https://images.unsplash.com/photo-1593501695590-e441e6170c2e?w=600&q=80',
    description: 'Desain slide presentasi akademik yang clean dan informatif.',
    tags: ['Canva', 'Academic', 'Design'],
    longDesc: 'Desain presentasi akademik untuk keperluan seminar dan sidang. Menggunakan layout yang bersih dan tipografi yang mudah dibaca, dengan elemen visual yang mendukung penyampaian data dan argumen secara efektif.',
    figmaProtoUrl: 'https://www.canva.com/design/example-academic/view',
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function BackButton({ onClick, darkMode }: { onClick: () => void; darkMode: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-sm sm:text-base mb-6 transition-colors ${
        darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700'
      }`}
    >
      <ArrowLeft className="w-4 h-4" />
      Kembali
    </button>
  );
}

// Image slideshow used by Carousel, Poster & Drawing detail
function ImageSlider({ images, darkMode, fullSize = false }: { images: string[]; darkMode: boolean; fullSize?: boolean }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="space-y-3">
      <div className={`relative rounded-2xl overflow-hidden border ${darkMode ? 'border-pink-500/20' : 'border-pink-200'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt={`slide-${idx}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className={fullSize ? 'w-full h-auto object-contain' : 'w-full aspect-video object-cover'}
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-pink-500/80 text-white flex items-center justify-center transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-pink-500/80 text-white flex items-center justify-center transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                i === idx
                  ? darkMode ? 'bg-pink-400 w-6' : 'bg-pink-500 w-6'
                  : darkMode ? 'bg-gray-600 w-2' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
          <span className={`text-xs ml-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{idx + 1}/{images.length}</span>
        </div>
      )}
    </div>
  );
}

// Card grid shared by all levels
function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{children}</div>;
}

function ProjectCard({
  title, thumbnail, description, onClick, darkMode, index,
}: {
  title: string; thumbnail: string; description: string;
  onClick: () => void; darkMode: boolean; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl overflow-hidden transition-all ${
        darkMode
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.08)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
          : 'bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg hover:shadow-xl'
      }`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className={`text-base sm:text-lg mb-1.5 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{title}</h3>
        <p className={`text-sm sm:text-base line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
    </motion.div>
  );
}

// ── Detail views ───────────────────────────────────────────────────────────────

function CarouselDetail({ project, darkMode, onBack }: { project: CarouselProject; darkMode: boolean; onBack: () => void }) {
  return (
    <div>
      <BackButton onClick={onBack} darkMode={darkMode} />
      <div className={`rounded-2xl p-5 sm:p-7 space-y-5 ${darkMode ? 'bg-gray-800/50 border border-pink-500/20' : 'bg-white/80 border border-pink-200 shadow-lg'}`}>
        <h3 className={`text-xl sm:text-2xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{project.title}</h3>
        <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
        <ImageSlider images={project.images} darkMode={darkMode} fullSize />
      </div>
    </div>
  );
}

function PosterDetail({ project, darkMode, onBack }: { project: PosterProject; darkMode: boolean; onBack: () => void }) {
  return (
    <div>
      <BackButton onClick={onBack} darkMode={darkMode} />
      <div className={`rounded-2xl p-5 sm:p-7 space-y-5 ${darkMode ? 'bg-gray-800/50 border border-pink-500/20' : 'bg-white/80 border border-pink-200 shadow-lg'}`}>
        <h3 className={`text-xl sm:text-2xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{project.title}</h3>
        <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
        <ImageSlider images={project.images} darkMode={darkMode} fullSize />
      </div>
    </div>
  );
}

function AppDetail({ project, darkMode, onBack }: { project: AppProject; darkMode: boolean; onBack: () => void }) {
  return (
    <div>
      <BackButton onClick={onBack} darkMode={darkMode} />
      <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/50 border border-pink-500/20' : 'bg-white/80 border border-pink-200 shadow-lg'}`}>
        <div className="aspect-video overflow-hidden">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5 sm:p-7 space-y-4">
          <h3 className={`text-xl sm:text-2xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className={`px-3 py-1 rounded-full text-xs sm:text-sm ${darkMode ? 'bg-pink-500/15 text-pink-400 border border-pink-500/20' : 'bg-pink-50 text-pink-600 border border-pink-200'}`}>{tag}</span>
            ))}
          </div>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.longDesc}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-all ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
            {project.figmaUrl && (
              <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-all ${darkMode ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30' : 'bg-pink-100 text-pink-600 border border-pink-200 hover:bg-pink-200'}`}>
                <ExternalLink className="w-4 h-4" /> Figma File
              </a>
            )}
            {project.figmaProtoUrl && (
              <a href={project.figmaProtoUrl} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-all ${darkMode ? 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 hover:bg-fuchsia-500/30' : 'bg-fuchsia-100 text-fuchsia-600 border border-fuchsia-200 hover:bg-fuchsia-200'}`}>
                <ExternalLink className="w-4 h-4" /> View Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DrawingDetail({ project, darkMode, onBack }: { project: DrawingProject; darkMode: boolean; onBack: () => void }) {
  return (
    <div>
      <BackButton onClick={onBack} darkMode={darkMode} />
      <div className={`rounded-2xl p-5 sm:p-7 space-y-5 ${darkMode ? 'bg-gray-800/50 border border-pink-500/20' : 'bg-white/80 border border-pink-200 shadow-lg'}`}>
        <h3 className={`text-xl sm:text-2xl ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{project.title}</h3>
        <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
        <ImageSlider images={project.images} darkMode={darkMode} fullSize />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

type View =
  | { level: 'categories' }
  | { level: 'projects'; categoryId: CategoryId }
  | { level: 'detail-carousel'; project: CarouselProject }
  | { level: 'detail-poster'; project: PosterProject }
  | { level: 'detail-app'; project: AppProject }
  | { level: 'detail-drawing'; project: DrawingProject };

export function Experience({ darkMode }: ExperienceProps) {
  const [view, setView] = useState<View>({ level: 'categories' });

  const currentCategory =
    view.level === 'projects' ? view.categoryId :
    view.level === 'detail-carousel' ? 'carousel' :
    view.level === 'detail-poster' ? 'poster' :
    view.level === 'detail-app' ? ('app' as CategoryId) :
    view.level === 'detail-drawing' ? 'drawing' : null;

  const catLabel = categories.find((c) => c.id === currentCategory)?.label;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen className={darkMode ? 'w-6 h-6 sm:w-8 sm:h-8 text-pink-400' : 'w-6 h-6 sm:w-8 sm:h-8 text-pink-600'} />
          <h2 className={`text-2xl sm:text-3xl md:text-4xl ${darkMode ? 'bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent' : 'text-gray-900'}`}>
            My Projects
          </h2>
        </div>

        {/* Breadcrumb */}
        <div className={`flex items-center gap-1.5 text-sm sm:text-base ml-9 sm:ml-11 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <span
            className={view.level !== 'categories' ? 'cursor-pointer hover:underline' : ''}
            onClick={() => view.level !== 'categories' && setView({ level: 'categories' })}
          >
            All Categories
          </span>
          {catLabel && (
            <>
              <span>/</span>
              <span
                className={view.level !== 'projects' ? 'cursor-pointer hover:underline' : ''}
                onClick={() => view.level !== 'projects' && currentCategory && setView({ level: 'projects', categoryId: currentCategory as CategoryId })}
              >
                {catLabel}
              </span>
            </>
          )}
          {(view.level === 'detail-carousel' || view.level === 'detail-poster' || view.level === 'detail-app' || view.level === 'detail-drawing') && (
            <>
              <span>/</span>
              <span>
                {view.level === 'detail-carousel' ? view.project.title :
                 view.level === 'detail-poster' ? view.project.title :
                 view.level === 'detail-app' ? view.project.title :
                 view.level === 'detail-drawing' ? view.project.title : ''}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={JSON.stringify(view)}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >

          {/* ── Level 1: Category grid ── */}
          {view.level === 'categories' && (
            <CardGrid>
              {categories.map((cat, i) => (
                <ProjectCard
                  key={cat.id}
                  title={cat.label}
                  thumbnail={cat.thumbnail}
                  description={cat.description}
                  onClick={() => setView({ level: 'projects', categoryId: cat.id })}
                  darkMode={darkMode}
                  index={i}
                />
              ))}
            </CardGrid>
          )}

          {/* ── Level 2: Project cards inside category ── */}
          {view.level === 'projects' && (
            <div>
              <BackButton onClick={() => setView({ level: 'categories' })} darkMode={darkMode} />

              {view.categoryId === 'carousel' && (
                <CardGrid>
                  {carouselProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-carousel', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}

              {view.categoryId === 'poster' && (
                <CardGrid>
                  {posterProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-poster', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}

              {view.categoryId === 'app' && (
                <CardGrid>
                  {appProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-app', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}

              {view.categoryId === 'drawing' && (
                <CardGrid>
                  {drawingProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-drawing', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}

              {view.categoryId === 'uiux' && (
                <CardGrid>
                  {uiuxProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-app', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}

              {view.categoryId === 'ppt' && (
                <CardGrid>
                  {pptProjects.map((p, i) => (
                    <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} description={p.description}
                      onClick={() => setView({ level: 'detail-app', project: p })}
                      darkMode={darkMode} index={i} />
                  ))}
                </CardGrid>
              )}
            </div>
          )}

          {/* ── Level 3: Detail views ── */}
          {view.level === 'detail-carousel' && (
            <CarouselDetail project={view.project} darkMode={darkMode}
              onBack={() => setView({ level: 'projects', categoryId: 'carousel' })} />
          )}
          {view.level === 'detail-poster' && (
            <PosterDetail project={view.project} darkMode={darkMode}
              onBack={() => setView({ level: 'projects', categoryId: 'poster' })} />
          )}
          {view.level === 'detail-app' && (
            <AppDetail project={view.project} darkMode={darkMode}
              onBack={() => {
                const cat = uiuxProjects.find((p) => p.id === view.project.id) ? 'uiux'
                  : pptProjects.find((p) => p.id === view.project.id) ? 'ppt' : 'app';
                setView({ level: 'projects', categoryId: cat as CategoryId });
              }} />
          )}
          {view.level === 'detail-drawing' && (
            <DrawingDetail project={view.project} darkMode={darkMode}
              onBack={() => setView({ level: 'projects', categoryId: 'drawing' })} />
          )}

        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}