# Quick Syntax Reference - Import Local Images

## 📋 Copy-Paste Sintaks untuk Setiap Komponen

### Experience.tsx

```tsx
// Di bagian atas file, tambahkan imports:
import folderIcon from '../../assets/images/icons/folder.png';
import externalLinkIcon from '../../assets/images/icons/external-link.png';

// Import project thumbnails
import project1 from '../../assets/images/projects/project-1.jpg';
import project2 from '../../assets/images/projects/project-2.jpg';
import project3 from '../../assets/images/projects/project-3.jpg';
import project4 from '../../assets/images/projects/project-4.jpg';
import project5 from '../../assets/images/projects/project-5.jpg';

// Di projectsData array, ganti URL dengan imported image:
const projectsData = [
  {
    title: "Project Title 1",
    thumbnail: project1, // Ganti dari URL ke imported image
    // ...
  },
  {
    title: "Project Title 2",
    thumbnail: project2,
    // ...
  },
  // ...
];

// Icon usage:
<img src={folderIcon} alt="Projects" className="w-6 h-6 sm:w-8 sm:h-8" />
<img src={externalLinkIcon} alt="Link" className="w-4 h-4" />
```

---

### Certificate.tsx

```tsx
// Di bagian atas file:
import awardIcon from '../../assets/images/icons/award.png';
import externalLinkIcon from '../../assets/images/icons/external-link.png';

// Import certificate images
import cert1 from '../../assets/images/certificates/cert-1.jpg';
import cert2 from '../../assets/images/certificates/cert-2.jpg';
import cert3 from '../../assets/images/certificates/cert-3.jpg';
import cert4 from '../../assets/images/certificates/cert-4.jpg';

// Di certificatesData array:
const certificatesData = [
  {
    title: "Certificate Title 1",
    image: cert1, // Ganti dari URL ke imported image
    thumbnail: cert1, // Jika ada field thumbnail juga
    // ...
  },
  {
    title: "Certificate Title 2",
    image: cert2,
    thumbnail: cert2,
    // ...
  },
  // ...
];

// Icon usage:
<img src={awardIcon} alt="Certificates" className="w-6 h-6 sm:w-8 sm:h-8" />
```

---

### Contact.tsx

```tsx
// Di bagian atas file:
import mailIcon from '../../assets/images/icons/mail.png';
import githubIcon from '../../assets/images/icons/github.png';
import linkedinIcon from '../../assets/images/icons/linkedin.png';
import instagramIcon from '../../assets/images/icons/instagram.png';
import emailIcon from '../../assets/images/icons/email.png';

// Social links data:
const socialLinks = [
  {
    name: 'GitHub',
    icon: githubIcon, // Ganti dari component ke image path
    url: 'https://github.com/username',
  },
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    url: 'https://linkedin.com/in/username',
  },
  {
    name: 'Instagram',
    icon: instagramIcon,
    url: 'https://instagram.com/username',
  },
  {
    name: 'Email',
    icon: emailIcon,
    url: 'mailto:email@example.com',
  },
];

// Render:
<img src={link.icon} alt={link.name} className="w-6 h-6" />
```

---

### Home.tsx

```tsx
// Di bagian atas file:
import homeIcon from '../../assets/images/icons/home.png';
import profileImage from '../../assets/images/profile/profile.png';

// Jika ada hero image atau decorative images:
import heroImage from '../../assets/images/profile/hero.png'; // optional

// Usage:
<img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full" />
<img src={homeIcon} alt="Home" className="w-8 h-8" />
```

---

### WakaTime.tsx

```tsx
// Di bagian atas file:
import activityIcon from '../../assets/images/icons/activity.png';
import externalLinkIcon from '../../assets/images/icons/external-link.png';

// Icon usage:
<img src={activityIcon} alt="Activity" className="w-6 h-6 sm:w-8 sm:h-8" />
<img src={externalLinkIcon} alt="External" className="w-3 h-3" />
```

---

## 🎯 Pattern Umum

### 1. Import di atas file
```tsx
import namaVariable from '../../assets/images/FOLDER/nama-file.png';
```

### 2. Relative path dari lokasi file komponen
- Dari `src/app/components/NamaKomponen.tsx`
- Ke `src/assets/images/...`
- Path: `../../assets/images/...`

### 3. Usage di JSX
```tsx
// Simple
<img src={namaVariable} alt="Description" className="w-6 h-6" />

// Dengan props
<img 
  src={namaVariable} 
  alt="Description" 
  className="w-full h-auto object-cover"
/>

// Di data object
const data = {
  image: namaVariable,
  // ...
};
```

---

## ⚠️ Common Errors & Solutions

### Error: "Cannot find module"
✅ **Solution**: Cek path nya benar, hitung berapa `../` yang dibutuhkan

### Error: "Module not found"  
✅ **Solution**: Pastikan file gambar sudah diupload di folder yang benar

### Error: "Failed to load resource"
✅ **Solution**: Cek nama file exact match (case-sensitive), cek ekstensi file (.png, .jpg)

### Gambar tidak muncul
✅ **Solution**: 
1. Cek Network tab di browser DevTools
2. Pastikan path benar
3. Cek file size tidak terlalu besar
4. Verify file type supported (png, jpg, svg)

---

## 📦 Batch Import Example

Jika punya banyak images sejenis:

```tsx
// Projects
import project1 from '../../assets/images/projects/project-1.jpg';
import project2 from '../../assets/images/projects/project-2.jpg';
import project3 from '../../assets/images/projects/project-3.jpg';
import project4 from '../../assets/images/projects/project-4.jpg';
import project5 from '../../assets/images/projects/project-5.jpg';

const projects = [project1, project2, project3, project4, project5];

// Usage
projects.map((img, idx) => (
  <img key={idx} src={img} alt={`Project ${idx + 1}`} />
))
```

---

## ✨ Tips Pro

1. **Naming consistency**: Gunakan naming yang konsisten untuk mudah di-track
2. **Group imports**: Group imports berdasarkan tipe (icons, logos, images)
3. **Comment sections**: Beri comment untuk memisahkan import sections
4. **TypeScript**: Jika pakai TS, bisa buat interface untuk image objects

```tsx
// ====== Icons ======
import homeIcon from '...';
import userIcon from '...';

// ====== Logos ======  
import logo1 from '...';
import logo2 from '...';

// ====== Images ======
import img1 from '...';
import img2 from '...';
```
