import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import thumbnailPresentasi from '../../assets/images/certificates/thumbnail-presentasi.png';

interface CertificateProps {
  darkMode: boolean;
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
  credentialUrl: string;
}

export function Certificate({ darkMode }: CertificateProps) {
  const certificates: CertificateItem[] = [
    {
      id: '1',
      title: 'Membangun Proyek Deep Learning Tingkat Mahir',
      issuer: 'Dicoding',
      date: 'April 2026',
      image: 'https://i.imgur.com/lX1Rtad.png',
      description: `This comprehensive UI/UX Design Fundamentals course provided a solid foundation in user interface and user experience design principles.

The course covered essential topics including:
- User research and persona development
- Information architecture and wireframing
- Visual design principles and color theory
- Prototyping and usability testing
- Design thinking methodology
- Accessibility and inclusive design

Through hands-on projects and real-world case studies, I gained practical experience in creating user-centered designs that balance aesthetics with functionality. The course emphasized the importance of understanding user needs and iterative design processes.`,
      skills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing'],
      credentialUrl: 'https://drive.google.com/file/d/16tBSC43w4z92k9lFFZQgySCxgKzT1Z8s/view?usp=sharing',
    },
    {
      id: '2',
      title: 'Belajar Fundamental Deep Learning',
      issuer: 'Dicoding',
      date: 'March 2026',
      image: 'https://i.imgur.com/MDQIdtt.png',
      description: `An intensive course focused on mastering Figma, the industry-leading collaborative design tool. This certification demonstrates proficiency in using Figma for professional design work.

Course highlights included:
- Advanced component creation and variants
- Auto-layout and responsive design techniques
- Design systems and style guides
- Prototyping and interactive animations
- Collaborative design workflows
- Figma plugins and integrations

The course provided extensive hands-on practice with real-world design scenarios, teaching efficient workflows and best practices used by top design teams. I learned to create scalable design systems and collaborate effectively with development teams.`,
      skills: ['Figma', 'Design Systems', 'Component Design', 'Prototyping', 'Collaboration'],
      credentialUrl: 'https://drive.google.com/file/d/11VGH2qUvupEe_XBS5TqMuPjs2Ys6CMMA/view?usp=sharing',
    },
    {
      id: '3',
      title: 'Belajar Machine Learning untuk Pemula',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/O46A6Mz.png',
      description: `A transformative workshop that introduced the Design Thinking methodology for creative problem-solving and innovation.

The workshop covered the five stages of Design Thinking:
- Empathize: Understanding user needs and pain points
- Define: Clearly articulating the problem statement
- Ideate: Generating creative solutions through brainstorming
- Prototype: Building quick, tangible representations of ideas
- Test: Gathering feedback and iterating on solutions

Through collaborative group exercises and case studies, I learned to approach complex problems with a human-centered mindset. The workshop emphasized the importance of empathy, experimentation, and iteration in the design process.`,
      skills: ['Design Thinking', 'Problem Solving', 'Ideation', 'User Empathy', 'Innovation'],
      credentialUrl: 'https://drive.google.com/file/d/1A7t6Jto3G0BxB-aMhWCA6aYcS8U0sWs3/view?usp=sharing',
    },
    {
      id: '4',
      title: 'Memulai Pemrograman dengan Python',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/1AthYco.png',
      description: `An intensive bootcamp focused on developing creative design skills across multiple disciplines and mediums.

The bootcamp curriculum included:
- Graphic design principles and composition
- Typography and layout design
- Brand identity development
- Digital illustration techniques
- Motion graphics basics
- Portfolio development and presentation

Over several weeks of intensive learning, I worked on various design projects that challenged my creativity and technical skills. The bootcamp fostered a collaborative environment where students could share ideas, receive feedback, and grow as designers.`,
      skills: ['Graphic Design', 'Typography', 'Branding', 'Illustration', 'Creative Thinking'],
      credentialUrl: 'https://drive.google.com/file/d/1EC6L3q4XEOqiYIMBNRfD485-afwZVNts/view?usp=sharing',
    },
    {
      id: '5',
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/txGp9j6.png',
      description: `A comprehensive masterclass in Adobe Illustrator, covering advanced vector graphics and illustration techniques.

Topics covered in this masterclass:
- Advanced pen tool and bezier curve manipulation
- Complex shape building and pathfinder operations
- Gradient meshes and advanced color techniques
- 3D effects and perspective drawing
- Pattern creation and swatches
- Logo design and brand assets
- Export optimization for various media

The course emphasized professional workflows and industry-standard techniques used by top illustrators and designers. Through practical projects, I developed proficiency in creating high-quality vector graphics for both digital and print media.`,
      skills: ['Adobe Illustrator', 'Vector Graphics', 'Logo Design', 'Illustration', 'Digital Art'],
      credentialUrl: 'https://drive.google.com/file/d/1zNDoQPuF6G61ULVds-nBkaqM3_UTlx6T/view?usp=sharing',
    },
    {
      id: '6',
      title: 'Belajar Dasar Git dengan GitHub',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/VNinu2g.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1MQb0MNGnmQ-U9WUxOOa6doU9_nm0s7Xl/view?usp=sharing',
    },
    {
      id: '7',
      title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/ITvhqmU.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/13R39n22vkHoj-8ND_fb6-PQT3Y65W-bj/view?usp=sharing',
    },
    {
      id: '8',
      title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      issuer: 'Dicoding',
      date: 'Februari 2026',
      image: 'https://i.imgur.com/hSLutcL.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1EJYCWsDFlyHNteJATW_jbQ7g5J9l9lbW/view?usp=sharing',
    },
    {
      id: '9',
      title: 'Product Roadmap and Introduction to PRD',
      issuer: 'MySkill Short Class',
      date: 'February 2023',
      image: 'https://i.imgur.com/eJxCvJv.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/14u1hbO9vW7TeetOFADsbUWsFup3o3dca/view?usp=sharing',
    },
    {
      id: '10',
      title: 'Interview Preparation for Scholarship',
      issuer: 'MySkill Short Class',
      date: 'February 2023',
      image: 'https://i.imgur.com/UvlNKDG.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/14u1hbO9vW7TeetOFADsbUWsFup3o3dca/view?usp=sharing',
    },
    {
      id: '11',
      title: 'Introduction to Frontend',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/fiWzFoH.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/14zazy2ga6J7cuNNy0RwF_uHbOpSxfarc/view?usp=sharing',
    },
    {
      id: '12',
      title: 'Social Media Research and Analytics',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/nMOm5PJ.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1mSWzWpmZZBZBjfOcGS-dmDpDRuko7EOG/view?usp=sharing',
    },
    {
      id: '13',
      title: 'Basic Statistics and Data Visualization',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/W7qIoB5.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1sMQVGqOhvEvkTLiQKR8VAGjwD8T944wD/view?usp=sharing',
    },
    {
      id: '14',
      title: 'Introduction to Figma',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/92KPLXb.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1_NqceDpCe0XRG531DJptJLU-qErzMN-t/view?usp=sharing',
    },
    {
      id: '14',
      title: 'Data Visualization',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/o20u79h.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1ioWd_hmt8xc3gof8M2NfTz1PpbVEQvn_/view?usp=sharing',
    },
    {
      id: '15',
      title: 'Product Vision and Strategy',
      issuer: 'MySkill Short Class',
      date: 'March 2023',
      image: 'https://i.imgur.com/XxSXpkg.png',
      description: `Professional certification in modern web design, covering both design principles and front-end implementation.

Course content included:
- Responsive web design principles
- CSS Grid and Flexbox layouts
- Modern UI frameworks and libraries
- Web accessibility standards (WCAG)
- Performance optimization
- Cross-browser compatibility
- Mobile-first design approach

This certification validates my ability to design and implement professional, accessible, and performant web interfaces. The course balanced theoretical knowledge with practical coding exercises and real-world project development.`,
      skills: ['Web Design', 'Responsive Design', 'HTML/CSS', 'Accessibility', 'UI Development'],
      credentialUrl: 'https://drive.google.com/file/d/1pjL-Djohao1j_auZJsyMok_LMRZ5KLP9/view?usp=sharing',
    },
  ];

  // Certificate grid
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Award className={darkMode ? 'w-6 h-6 sm:w-8 sm:h-8 text-pink-400' : 'w-6 h-6 sm:w-8 sm:h-8 text-pink-600'} />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl ${
              darkMode
                ? 'bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent'
                : 'text-gray-900'
            }`}
          >
            Certificates
          </h2>
        </div>
        <p className={`text-sm sm:text-base ml-9 sm:ml-11 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Professional certifications and achievements
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            onClick={() => window.open(cert.credentialUrl, '_blank', 'noopener noreferrer')}
            className={`group cursor-pointer rounded-2xl overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]'
                : 'bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg hover:shadow-xl'
            } transition-all`}
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent'
                    : 'bg-gradient-to-t from-black/60 via-black/10 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
              >
                <span className="text-white text-sm font-medium px-4 py-2 bg-pink-500/80 rounded-full">
                  View Credential
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className={`text-base sm:text-lg mb-1 sm:mb-2 line-clamp-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                {cert.title}
              </h3>
              <p className={`text-xs sm:text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {cert.issuer}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}