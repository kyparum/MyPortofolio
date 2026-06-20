# 🖼️ Assets Images - Portfolio

Folder ini berisi semua gambar lokal untuk portfolio.

## 📂 Struktur Folder

```
src/assets/images/
├── profile/          → Foto profil
├── logos/           → Logo perusahaan, institusi, sekolah
├── projects/        → Thumbnail project
├── certificates/    → Thumbnail sertifikat
└── icons/          → Icon UI (menggantikan Lucide icons)
```

📚 Dokumentasi lengkap (setup guide & syntax reference) ada di
[`/docs/images-guide`](../../../docs/images-guide).

## 🚀 Quick Start

### 1. Upload Gambar

Upload semua gambar sesuai dengan nama file yang ada di
[`docs/images-guide/SETUP-GUIDE.md`](../../../docs/images-guide/SETUP-GUIDE.md)

**Priority Upload (Wajib):**
- `profile/profile.png` - Foto profil utama
- `icons/` folder - Semua icon UI
- `logos/` folder - Logo education & career

**Optional (bisa nanti):**
- `projects/` - Thumbnail project
- `certificates/` - Thumbnail sertifikat

### 2. Verify Imports

Cek apakah semua komponen sudah menggunakan import yang benar:

**✅ Sudah Updated:**
- `AboutMe.tsx` - Icons & Logos sudah pakai local images
- `Sidebar.tsx` - Profile & Menu icons sudah pakai local images

**⏳ Perlu Update:**
- `Experience.tsx` - Project thumbnails
- `Certificate.tsx` - Certificate images
- `Contact.tsx` - Social media icons  
- `Home.tsx` - Check jika ada images
- `WakaTime.tsx` - Icons

Buka file [`docs/images-guide/QUICK-SYNTAX-REFERENCE.md`](../../../docs/images-guide/QUICK-SYNTAX-REFERENCE.md) untuk copy-paste sintaks yang sudah siap.

### 3. Test

Jalankan dev server dan buka di browser:
```bash
npm run dev
```

Cek console untuk error "Cannot find module" atau "Failed to load resource"

## 📝 File Naming Convention

**Format:** `lowercase-with-dashes.extension`

**Examples:**
```
✅ profile.png
✅ creative-studio.png
✅ graduation-cap.png
✅ project-1.jpg
✅ cert-webdev.jpg

❌ Profile.PNG
❌ Creative Studio.png
❌ graduationCap.png
❌ Project 1.jpg
```

## 🎨 Image Specs

### Profile
- Format: PNG atau JPG
- Size: 400x400px (minimum)
- Aspect ratio: 1:1 (square)

### Logos
- Format: PNG (dengan transparansi)
- Size: 200x200px (minimum)
- Aspect ratio: 1:1 (square)
- Background: Transparan

### Icons
- Format: PNG (dengan transparansi) atau SVG
- Size: 64x64px atau 128x128px
- Aspect ratio: 1:1 (square)
- Background: Transparan
- Color: Bisa hitam atau putih (CSS akan override dengan filter/color)

### Projects
- Format: JPG atau PNG
- Size: 800x600px atau 1200x900px
- Aspect ratio: 4:3 atau 16:9
- Quality: 80-90% (compressed untuk web)

### Certificates
- Format: JPG atau PNG
- Size: 800x600px atau 1200x900px (landscape)
- Aspect ratio: 4:3 atau 16:9
- Quality: 80-90%

## 🔗 Import Path Pattern

Dari komponen di `src/app/components/`:
```tsx
import image from '../../assets/images/FOLDER/file.png';
```

Path breakdown:
- `../` = keluar dari `components/`, masuk ke `app/`
- `../../` = keluar dari `app/`, masuk ke `src/`
- `../../assets/images/` = masuk ke `assets/images/`

(Untuk komponen di subfolder seperti `components/ui/` atau `components/figma/`, tambahkan satu `../` lagi.)

## ⚡ Tips & Best Practices

1. **Compress images**: Gunakan [TinyPNG](https://tinypng.com/) atau [Squoosh](https://squoosh.app/) sebelum upload
2. **Consistent naming**: Stick to kebab-case lowercase
3. **Optimize for web**: Jangan upload gambar raw dari camera (file size besar)
4. **Use WebP** (optional): Bisa convert ke WebP untuk better compression
5. **Alt text**: Selalu sertakan alt attribute untuk accessibility

## 📚 Documentation

- **[docs/images-guide/SETUP-GUIDE.md](../../../docs/images-guide/SETUP-GUIDE.md)** - Panduan lengkap setup dengan checklist
- **[docs/images-guide/QUICK-SYNTAX-REFERENCE.md](../../../docs/images-guide/QUICK-SYNTAX-REFERENCE.md)** - Copy-paste sintaks untuk setiap komponen

## ❓ FAQ

**Q: Kenapa gambar tidak muncul setelah upload?**
A: 
1. Cek nama file exact match (case-sensitive)
2. Cek path import benar
3. Restart dev server
4. Hard refresh browser (Ctrl+Shift+R)

**Q: Bisa pakai .svg untuk icons?**
A: Ya bisa! Import sama seperti PNG:
```tsx
import icon from '../../../assets/images/icons/icon.svg';
```

**Q: Apakah harus ukuran exact?**
A: Tidak, tapi ukuran yang disebutkan adalah ukuran minimum yang disarankan untuk kualitas bagus.

**Q: Bisa pakai JPG untuk logo?**
A: Bisa, tapi PNG lebih baik karena support transparansi.

---

## 📊 Status Tracking

Last updated: 2026-04-29

**Komponen Status:**
| Komponen | Status | Notes |
|----------|--------|-------|
| AboutMe.tsx | ✅ Done | Icons & logos updated |
| Sidebar.tsx | ✅ Done | Profile & menu icons updated |
| Experience.tsx | ⏳ Pending | Perlu update project thumbnails |
| Certificate.tsx | ⏳ Pending | Perlu update cert images |
| Contact.tsx | ⏳ Pending | Perlu update social icons |
| Home.tsx | ⏳ Pending | Check if any images needed |
| WakaTime.tsx | ⏳ Pending | Perlu update icons |

**Upload Progress:**
- [ ] Profile images
- [ ] Icons (priority!)
- [ ] Logos - Education
- [ ] Logos - Career
- [ ] Project thumbnails
- [ ] Certificate images

---

Made with 💖 by Kips
