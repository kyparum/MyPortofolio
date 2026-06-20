# Setup Guide - Local Images untuk Portfolio

## 📁 Struktur Folder

```
src/assets/images/
├── profile/          # Foto profil
├── logos/           # Logo perusahaan, institusi
├── projects/        # Thumbnail project
├── certificates/    # Thumbnail sertifikat
└── icons/          # Icon UI (ganti Lucide icons)
```

## 🖼️ Daftar Gambar yang Harus Diupload

### 1. Profile Images (`src/assets/images/profile/`)
- `profile.png` atau `profile.jpg` - Foto profil utama (400x400px recommended)

### 2. Logos (`src/assets/images/logos/`)

**Education:**
- `university.png` - Logo Tiga Serangkai University
- `sma-batik.png` - Logo SMA Batik 2  
- `smp-batik.png` - Logo SMP Batik
- `sd-bratan.png` - Logo SD Negeri Bratan 3
- `tk-aisyiyah.png` - Logo TK Aisyiyah 20

**Career/Companies:**
- `creative-studio.png` - Logo Creative Studio Indonesia
- `digital-agency.png` - Logo Digital Marketing Agency
- `freelance.png` - Logo Freelance (bisa logo pribadi)

Format: PNG dengan background transparan, 200x200px minimum

### 3. Icons (`src/assets/images/icons/`)

**Main Icons:**
- `sparkles.png` - Icon About Me section
- `graduation-cap.png` - Icon Education
- `briefcase.png` - Icon Career/Experience  
- `award.png` - Icon Certificate
- `folder.png` - Icon Projects
- `activity.png` - Icon Dashboard/WakaTime
- `mail.png` - Icon Contact
- `home.png` - Icon Home
- `user.png` - Icon User/About

**UI Icons:**
- `map-pin.png` - Icon Location
- `external-link.png` - Icon External Link
- `moon.png` - Icon Dark Mode
- `sun.png` - Icon Light Mode
- `download.png` - Icon Download
- `chevron-down.png` - Icon Dropdown (optional, masih pakai Lucide)
- `chevron-up.png` - Icon Collapse (optional, masih pakai Lucide)

**Social Media Icons:**
- `github.png` - Icon GitHub
- `linkedin.png` - Icon LinkedIn
- `instagram.png` - Icon Instagram
- `email.png` - Icon Email

Format: PNG dengan background transparan atau SVG, 64x64px atau 128x128px

### 4. Projects (`src/assets/images/projects/`)
- `project-1.jpg` atau `project-1.png`
- `project-2.jpg` atau `project-2.png`
- `project-3.jpg` atau `project-3.png`
- dst...

Format: JPG/PNG, 800x600px (landscape) atau 600x800px (portrait)

### 5. Certificates (`src/assets/images/certificates/`)
- `cert-1.jpg` atau `cert-1.png`
- `cert-2.jpg` atau `cert-2.png`
- `cert-3.jpg` atau `cert-3.png`
- dst...

Format: JPG/PNG, 800x600px (landscape)

---

## 💻 Sintaks Import & Usage

### Contoh di AboutMe.tsx

```tsx
// Import Icons
import sparklesIcon from "../../assets/images/icons/sparkles.png";
import graduationCapIcon from "../../assets/images/icons/graduation-cap.png";
import briefcaseIcon from "../../assets/images/icons/briefcase.png";
import mapPinIcon from "../../assets/images/icons/map-pin.png";

// Import Logos - Education
import universityLogo from "../../assets/images/logos/university.png";
import smaBatikLogo from "../../assets/images/logos/sma-batik.png";
import smpBatikLogo from "../../assets/images/logos/smp-batik.png";

// Import Logos - Career
import creativeStudioLogo from "../../assets/images/logos/creative-studio.png";
import digitalAgencyLogo from "../../assets/images/logos/digital-agency.png";

// Usage di JSX
<img src={sparklesIcon} alt="Sparkles" className="w-6 h-6 sm:w-8 sm:h-8" />

// Usage di data array
const educationData = [
  {
    institution: "Tiga Serangkai University",
    logo: universityLogo, // <-- Pakai imported image
    // ...
  }
];
```

### Contoh di Sidebar.tsx

```tsx
// Import profile
import profileImage from '../../assets/images/profile/profile.png';

// Import menu icons
import homeIcon from '../../assets/images/icons/home.png';
import userIcon from '../../assets/images/icons/user.png';
import briefcaseIcon from '../../assets/images/icons/briefcase.png';

// Usage di profile
<img
  src={profileImage}
  alt="Okky Puspa Ningrum"
  className="w-full h-full object-cover"
/>

// Usage di menu items
const menuItems = [
  { id: 'home', label: 'Home', icon: homeIcon },
  { id: 'about', label: 'About Me', icon: userIcon },
  // ...
];

// Render
<img src={item.icon} alt={item.label} className="w-5 h-5" />
```

### Contoh di Experience.tsx (Projects)

```tsx
// Import project thumbnails
import project1 from '../../assets/images/projects/project-1.jpg';
import project2 from '../../assets/images/projects/project-2.jpg';
import project3 from '../../assets/images/projects/project-3.jpg';

// Usage
const projectsData = [
  {
    title: "E-Commerce Platform",
    thumbnail: project1, // <-- Pakai imported image
    // ...
  },
  {
    title: "Portfolio Website",
    thumbnail: project2,
    // ...
  }
];

// Render
<img
  src={project.thumbnail}
  alt={project.title}
  className="w-full h-48 object-cover"
/>
```

### Contoh di Certificate.tsx

```tsx
// Import certificate images
import cert1 from '../../assets/images/certificates/cert-1.jpg';
import cert2 from '../../assets/images/certificates/cert-2.jpg';

// Usage
const certificatesData = [
  {
    title: "React Developer Certification",
    image: cert1,
    // ...
  }
];

// Render
<img
  src={cert.image}
  alt={cert.title}
  className="w-full h-auto"
/>
```

---

## ✅ Checklist Setup

- [ ] Upload foto profil ke `src/assets/images/profile/profile.png`
- [ ] Upload semua logo education ke `src/assets/images/logos/`
- [ ] Upload semua logo career/companies ke `src/assets/images/logos/`
- [ ] Upload semua icons ke `src/assets/images/icons/`
- [ ] Upload social media icons ke `src/assets/images/icons/`
- [ ] Upload project thumbnails ke `src/assets/images/projects/`
- [ ] Upload certificate images ke `src/assets/images/certificates/`
- [ ] Verify semua komponen sudah menggunakan imported images
- [ ] Test di browser, pastikan semua gambar muncul

---

## 🔧 Tips

1. **Format file**: Gunakan PNG untuk gambar dengan transparansi (logo, icon), JPG untuk foto/thumbnail
2. **Naming**: Gunakan kebab-case (lowercase dengan dash), contoh: `creative-studio.png`, `project-1.jpg`
3. **Ukuran**: Compress gambar untuk web performance (gunakan tools seperti TinyPNG)
4. **Path**: Selalu gunakan relative path dari lokasi file komponen
5. **Alt text**: Selalu sertakan alt attribute untuk accessibility

---

## 📝 Status Update

**Komponen yang sudah diupdate:**
- ✅ AboutMe.tsx - Icons & Logos
- ✅ Sidebar.tsx - Profile & Menu Icons
- ⏳ Experience.tsx - Perlu update untuk project thumbnails
- ⏳ Certificate.tsx - Perlu update untuk certificate images
- ⏳ Contact.tsx - Perlu update untuk social icons
- ⏳ Home.tsx - Perlu check jika ada gambar
- ⏳ WakaTime.tsx - Perlu update untuk icons

**Next Steps:**
1. Upload semua gambar sesuai checklist
2. Update komponen yang masih pending
3. Test & verify semua gambar loaded correctly
