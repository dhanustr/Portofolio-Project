/* ============================================================
   i18n.js — Bilingual Content (EN / ID)
   All translatable strings live here.
============================================================ */

const translations = {
  en: {
    // Navbar
    "nav.home":         "Home",
    "nav.about":        "About",
    "nav.experience":   "Experience",
    "nav.stack":        "Tech Stack",
    "nav.projects":     "Projects",
    "nav.certificates": "Certificates",
    "nav.contact":      "Contact",

    // Hero
    "hero.hi":            "Hello! 👋 I'm",
    "hero.welcome":       "Welcome to my portfolio!",
    "hero.available":     "Available for opportunities",
    "hero.rolePrefix":    "Specializing as a\u00A0",
    "hero.tagline":       "Transforming ideas into real, impactful digital solutions — crafted with clean code and genuine passion.",
    "hero.cta.projects":  "View Projects",
    "hero.cta.resume":    "Download CV",
    "hero.social.label":  "Find me on",

    // About
    "about.tag":        "Who I Am",
    "about.title":      "About Me",
    "about.badge1":     "Computer Engineering",
    "about.badge2":     "GPA 3.75 Cum Laude",
    "about.role":       "Computer Engineering Graduate · Software & IoT Developer",
    "about.bio":        "Computer Engineering graduate from Diponegoro University with a GPA of 3.75/4.00 (Cum Laude). Experienced in IT support, embedded systems, IoT development, and application development. Interested in IT Support, Software Development, Infrastructure Engineering, and IoT solutions.",
    "about.location":   "Bogor, Indonesia",
    "about.university": "Universitas Diponegoro",
    "about.resume":     "Download Resume",

    // Experience
    "exp.tag":   "My Journey",
    "exp.title": "Experience",
    "exp.badge.internship":   "Internship",
    "exp.badge.finalproject": "Final Year Project",

    "exp.intern1.role":    "IT Support Intern",
    "exp.intern1.company": "PT GS Battery – Karawang Site",
    "exp.intern1.date":    "Jul 2024 – Sep 2024",
    "exp.intern1.li1":     "Developed a weekly maintenance checklist and reporting dashboard using NocoBase for the Maintenance Division.",
    "exp.intern1.li2":     "Performed troubleshooting and maintenance of more than 40 employee devices to support daily IT operations.",
    "exp.intern1.li3":     "Created an opening video for a company event using Adobe Premiere Pro.",

    "exp.ta.role":    "Final Year Project — IoT Health Monitoring System",
    "exp.ta.company": "Universitas Diponegoro",
    "exp.ta.date":    "May 2026 – Jul 2026",
    "exp.ta.li1":     "Designed and developed an IoT-based health monitoring system for measuring blood pressure, blood glucose, and cholesterol levels.",
    "exp.ta.li2":     "Integrated blood pressure devices via UART and glucose/cholesterol devices via Bluetooth Low Energy (BLE).",
    "exp.ta.li3":     "Developed ESP32-S3 firmware to transmit measurement data to a web-based monitoring platform via HTTPS API.",
    "exp.ta.li4":     "Implemented OLED display for local readout and WiFi connectivity for data transmission.",

    // Tech Stack
    "stack.tag":          "What I Use",
    "stack.title":        "Technical Stack",
    "stack.fe.title":     "Frontend Engineer",
    "stack.be.title":     "Backend & API Engineer",
    "stack.mobile.title": "Mobile Development",
    "stack.iot.title":    "Computer Networks & IoT",
    "stack.data.title":   "Data Analysis & Programming",

    // Projects
    "projects.tag":      "What I've Built",
    "projects.title":    "Featured Projects",
    "projects.viewMore": "View Details",

    "projects.p1.type":  "Final Year Project · IoT",
    "projects.p1.title": "IoT Health Monitoring System",
    "projects.p1.desc":  "An IoT-based health monitoring system using ESP32-S3 to measure blood pressure, blood glucose, and cholesterol levels with BLE and UART integration.",

    "projects.p2.type":  "Personal Project · Web App",
    "projects.p2.title": "IT Asset & Maintenance Management System",
    "projects.p2.desc":  "A web application for IT asset management and maintenance ticket tracking with role-based access control for Admin and User roles.",

    "projects.p3.type":  "Community Service · Mobile App",
    "projects.p3.title": "UMKMKeuanganApp",
    "projects.p3.desc":  "A mobile financial management app for Terasi Pak Kempung MSME in Suradadi, built with React Native and SQLite for local data storage.",

    "projects.p4.type":  "Personal Project · Web App",
"projects.p4.title": "Life Dashboard",
"projects.p4.desc":  "A personal productivity dashboard featuring a Pomodoro timer, daily task management, and customizable quick links to help users organize their daily activities.",

    // Modal
    "modal.features": "Key Features",

    // Certificates
    "cert.tag":   "Credentials",
    "cert.title": "Certificates",
    "cert.view":  "View",

    "cert.c1.name": "CCNA: Enterprise Networking, Security, and Automation",
    "cert.c1.date": "2025",
    "cert.c2.name": "CCNAv7: Switching, Routing, and Wireless Essentials",
    "cert.c2.date": "2024",
    "cert.c3.name": "CCNAv7: Introduction to Networks",
    "cert.c3.date": "2024",
    "cert.c4.name": "Oracle Database Design",
    "cert.c4.date": "2024",
    "cert.c5.name": "Oracle Database Foundations",
    "cert.c5.date": "2024",
    "cert.c6.name": "Introduction to IoT and Digital Transformation",
    "cert.c6.date": "2024",
    "cert.c7.name": "Network Security",
    "cert.c7.date": "2026",
    "cert.c8.name": "IT Essentials: PC Hardware and Software",
    "cert.c8.date": "2022",

    // Footer
    "footer.desc":       "Open to new opportunities and collaborations. Let's build something great together.",
    "footer.quicklinks": "Quick Links",
    "footer.contact":    "Contact",
    "footer.social":     "Social",
    "footer.copy.pre":   "© 2026 Dhanu Satria Atmaja. Crafted with",
    "footer.copy.post":  "and lots of coffee.",
  },

  id: {
    // Navbar
    "nav.home":         "Beranda",
    "nav.about":        "Tentang",
    "nav.experience":   "Pengalaman",
    "nav.stack":        "Tech Stack",
    "nav.projects":     "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.contact":      "Kontak",

    // Hero
    "hero.hi":            "Halo! 👋 Saya",
    "hero.welcome":       "Selamat datang di portfolio saya!",
    "hero.available":     "Terbuka untuk peluang baru",
    "hero.rolePrefix":    "Berspesialisasi sebagai\u00A0",
    "hero.tagline":       "Mengubah ide menjadi solusi digital nyata yang berdampak — dibuat dengan kode bersih dan semangat tulus.",
    "hero.cta.projects":  "Lihat Proyek",
    "hero.cta.resume":    "Unduh CV",
    "hero.social.label":  "Temukan saya di",

    // About
    "about.tag":        "Siapa Saya",
    "about.title":      "Tentang Saya",
    "about.badge1":     "Teknik Komputer",
    "about.badge2":     "IPK 3.75 Cum Laude",
    "about.role":       "Lulusan Teknik Komputer · Software & IoT Developer",
    "about.bio":        "Lulusan S1 Teknik Komputer Universitas Diponegoro dengan IPK 3,75/4,00 (Cum Laude). Memiliki pengalaman di bidang IT Support, sistem embedded, pengembangan IoT, dan pengembangan aplikasi. Berminat pada IT Support, Software Development, Infrastructure Engineering, dan solusi IoT.",
    "about.location":   "Bogor, Indonesia",
    "about.university": "Universitas Diponegoro",
    "about.resume":     "Unduh Resume",

    // Experience
    "exp.tag":   "Perjalanan Saya",
    "exp.title": "Pengalaman",
    "exp.badge.internship":   "Magang",
    "exp.badge.finalproject": "Tugas Akhir",

    "exp.intern1.role":    "IT Support Intern",
    "exp.intern1.company": "PT GS Battery – Karawang Site",
    "exp.intern1.date":    "Jul 2024 – Sep 2024",
    "exp.intern1.li1":     "Mengembangkan dashboard Checklist Weekly Maintenance menggunakan NocoBase untuk mendukung proses pemantauan dan pelaporan pada Divisi Maintenance.",
    "exp.intern1.li2":     "Melakukan troubleshooting dan pemeliharaan terhadap lebih dari 40 perangkat karyawan untuk mendukung kelancaran operasional IT.",
    "exp.intern1.li3":     "Membuat video pembukaan acara POR perusahaan menggunakan Adobe Premiere Pro.",

    "exp.ta.role":    "Tugas Akhir — IoT Health Monitoring System",
    "exp.ta.company": "Universitas Diponegoro",
    "exp.ta.date":    "Mei 2026 – Jul 2026",
    "exp.ta.li1":     "Merancang dan mengembangkan sistem monitoring kesehatan berbasis IoT untuk mengukur tekanan darah, gula darah, dan kolesterol menggunakan ESP32-S3.",
    "exp.ta.li2":     "Mengintegrasikan perangkat pengukur tekanan darah melalui UART serta perangkat gula darah dan kolesterol melalui Bluetooth Low Energy (BLE).",
    "exp.ta.li3":     "Mengembangkan firmware ESP32-S3 untuk mengirimkan data pengukuran ke platform monitoring berbasis web melalui HTTPS API.",
    "exp.ta.li4":     "Mengimplementasikan OLED sebagai tampilan informasi lokal dan WiFi sebagai konektivitas sistem.",

    // Tech Stack
    "stack.tag":          "Yang Saya Gunakan",
    "stack.title":        "Tech Stack",
    "stack.fe.title":     "Frontend Engineer",
    "stack.be.title":     "Backend & API Engineer",
    "stack.mobile.title": "Pengembangan Mobile",
    "stack.iot.title":    "Jaringan Komputer & IoT",
    "stack.data.title":   "Analisis Data & Pemrograman",

    // Projects
    "projects.tag":      "Yang Sudah Saya Bangun",
    "projects.title":    "Proyek Unggulan",
    "projects.viewMore": "Lihat Detail",

    "projects.p1.type":  "Tugas Akhir · IoT",
    "projects.p1.title": "IoT Health Monitoring System",
    "projects.p1.desc":  "Sistem monitoring kesehatan berbasis IoT menggunakan ESP32-S3 untuk mengukur tekanan darah, gula darah, dan kolesterol dengan integrasi BLE dan UART.",

    "projects.p2.type":  "Proyek Personal · Web App",
    "projects.p2.title": "Sistem Manajemen Aset & Maintenance IT",
    "projects.p2.desc":  "Aplikasi web untuk manajemen aset IT dan pelacakan tiket pemeliharaan dengan kontrol akses berbasis peran Admin dan User.",

    "projects.p3.type":  "Pengabdian Masyarakat · Mobile App",
    "projects.p3.title": "UMKMKeuanganApp",
    "projects.p3.desc":  "Aplikasi mobile pencatatan keuangan untuk UMKM Terasi Pak Kempung di Desa Suradadi, dibangun dengan React Native dan SQLite.",
    
    "projects.p4.type":  "Proyek Personal · Web App",
    "projects.p4.title": "Life Dashboard",
    "projects.p4.desc":  "Dashboard produktivitas pribadi yang dilengkapi Pomodoro Timer, pengelolaan daftar tugas harian, dan Quick Links untuk membantu pengguna mengatur aktivitas sehari-hari.",
    
    // Modal
    "modal.features": "Fitur Utama",

    // Certificates
    "cert.tag":   "Kredensial",
    "cert.title": "Sertifikat",
    "cert.view":  "Lihat",

    "cert.c1.name": "CCNA: Enterprise Networking, Security, and Automation",
    "cert.c1.date": "2025",
    "cert.c2.name": "CCNAv7: Switching, Routing, and Wireless Essentials",
    "cert.c2.date": "2024",
    "cert.c3.name": "CCNAv7: Introduction to Networks",
    "cert.c3.date": "2024",
    "cert.c4.name": "Oracle Database Design",
    "cert.c4.date": "2024",
    "cert.c5.name": "Oracle Database Foundations",
    "cert.c5.date": "2024",
    "cert.c6.name": "Introduction to IoT and Digital Transformation",
    "cert.c6.date": "2024",
    "cert.c7.name": "Network Security",
    "cert.c7.date": "2026",
    "cert.c8.name": "IT Essentials: PC Hardware and Software",
    "cert.c8.date": "2022",

    // Footer
    "footer.desc":       "Terbuka untuk peluang dan kolaborasi baru. Mari bangun sesuatu yang luar biasa bersama.",
    "footer.quicklinks": "Tautan Cepat",
    "footer.contact":    "Kontak",
    "footer.social":     "Media Sosial",
    "footer.copy.pre":   "© 2026 Dhanu Satria Atmaja. Dibuat dengan",
    "footer.copy.post":  "dan banyak kopi.",
  }
};

/* ── Project detail data (modal content) ── */
const projectData = {
  en: [
    {
      icon: "fa-heartbeat",
      image: "assets/project-iot.jpg",
      type: "Final Year Project · IoT",
      title: "IoT Health Monitoring System",
      desc: "An IoT-based health monitoring system developed as a Final Year Project (Tugas Akhir). The system uses ESP32-S3 to measure blood pressure, blood glucose, and cholesterol, transmitting data to a web-based monitoring platform via HTTPS API.",
      features: [
        "Blood pressure measurement via UART communication",
        "Blood glucose & cholesterol via Bluetooth Low Energy (BLE)",
        "ESP32-S3 firmware for data processing and transmission",
        "HTTPS API integration with web monitoring platform",
        "OLED display for local measurement readout",
        "WiFi connectivity for real-time data transmission"
      ],
      tags: ["ESP32-S3", "BLE", "WiFi", "UART", "HTTPS API", "OLED", "C/C++"],
      github: "https://github.com/dhanustr/IoT-Health-Monitoring-system"  // Ganti dengan link GitHub project: https://github.com/dhanustr/...
    },
    {
      icon: "fa-tasks",
      image: "assets/project-asset.jpg",
      type: "Personal Project · Web App",
      title: "IT Asset & Maintenance Management System",
      desc: "A full-stack web application for IT asset management and maintenance ticket tracking. Built with React frontend and Express.js backend, featuring JWT authentication and role-based access control for Admin and User roles.",
      features: [
        "IT asset management and inventory tracking",
        "Maintenance ticket submission and approval workflow",
        "Maintenance history and reporting dashboard",
        "JWT authentication with role-based access control (Admin/User)",
        "REST API backend with Express.js and Prisma ORM",
        "PostgreSQL database for persistent storage"
      ],
      tags: ["React", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
      github: "https://github.com/dhanustr/IT-Asset-Management"  // Ganti dengan link GitHub project: https://github.com/dhanustr/...
    },
    {
      icon: "fa-mobile-alt",
      image: "assets/project-umkm.jpg",
      type: "Community Service · Mobile App",
      title: "UMKMKeuanganApp",
      desc: "A mobile financial management application developed as part of Community Service Program (KKN-T) for Terasi Pak Kempung, an MSME in Suradadi Village. Built with React Native and Expo, using SQLite for local offline data storage.",
      features: [
        "Financial transaction recording for MSME",
        "Income and expense tracking",
        "SQLite local database for offline use",
        "Simple and intuitive UI for non-tech users",
        "Built with React Native and Expo for cross-platform support"
      ],
      tags: ["React Native", "JavaScript", "SQLite", "Expo"],
      github: "https://github.com/dhanustr/UMKMKeuanganApp"  // Ganti dengan link GitHub project: https://github.com/dhanustr/...
    
    },
    
  {
  icon: "fa-clock",
  image: "assets/Project-todo.jpg",
  type: "Personal Project · Web App",
  title: "Life Dashboard",
  desc: "A personal productivity dashboard designed to help users organize daily activities and manage their time efficiently. The application combines a Pomodoro timer, daily task management, and customizable quick links in one dashboard.",
  features: [
    "Pomodoro timer with adjustable focus duration",
    "Daily task management",
    "Customizable quick links for frequently accessed websites",
    "Real-time digital clock and personalized greeting",
    "Dark and light mode"
  ],
  tags: ["JavaScript", "HTML", "CSS"],
  github: "https://github.com/dhanustr/CodingCamp-31September26-DhanuSatria"
  }

  ],
  id: [
    {
      icon: "fa-heartbeat",
      image: "assets/project-iot.jpg",
      type: "Tugas Akhir · IoT",
      title: "IoT Health Monitoring System",
      desc: "Sistem monitoring kesehatan berbasis IoT yang dikembangkan sebagai Tugas Akhir. Sistem menggunakan ESP32-S3 untuk mengukur tekanan darah, gula darah, dan kolesterol, mengirimkan data ke platform monitoring berbasis web melalui HTTPS API.",
      features: [
        "Pengukuran tekanan darah melalui komunikasi UART",
        "Pengukuran gula darah & kolesterol via Bluetooth Low Energy (BLE)",
        "Firmware ESP32-S3 untuk pemrosesan dan pengiriman data",
        "Integrasi HTTPS API dengan platform monitoring web",
        "Tampilan OLED untuk pembacaan pengukuran lokal",
        "Konektivitas WiFi untuk transmisi data real-time"
      ],
      tags: ["ESP32-S3", "BLE", "WiFi", "UART", "HTTPS API", "OLED", "C/C++"],
      github: "https://github.com/dhanustr/IoT-Health-Monitoring-system"
    },
    {
      icon: "fa-tasks",
      image: "assets/project-asset.jpg",
      type: "Proyek Personal · Web App",
      title: "Sistem Manajemen Aset & Maintenance IT",
      desc: "Aplikasi web full-stack untuk manajemen aset IT dan pelacakan tiket pemeliharaan. Dibangun dengan frontend React dan backend Express.js, dilengkapi autentikasi JWT dan kontrol akses berbasis peran Admin dan User.",
      features: [
        "Manajemen dan inventarisasi aset IT",
        "Alur pengajuan dan persetujuan tiket maintenance",
        "Riwayat pemeliharaan dan dashboard pelaporan",
        "Autentikasi JWT dengan kontrol akses berbasis peran (Admin/User)",
        "Backend REST API dengan Express.js dan Prisma ORM",
        "Database PostgreSQL untuk penyimpanan persisten"
      ],
      tags: ["React", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
      github: "https://github.com/dhanustr/IT-Asset-Management"
    },
    {
      icon: "fa-mobile-alt",
      image: "assets/project-umkm.jpg",
      type: "Pengabdian Masyarakat · Mobile App",
      title: "UMKMKeuanganApp",
      desc: "Aplikasi mobile pencatatan keuangan yang dikembangkan dalam rangka KKN-T untuk UMKM Terasi Pak Kempung di Desa Suradadi. Dibangun dengan React Native dan Expo, menggunakan SQLite untuk penyimpanan data lokal secara offline.",
      features: [
        "Pencatatan transaksi keuangan untuk UMKM",
        "Pemantauan pemasukan dan pengeluaran",
        "Database SQLite lokal untuk penggunaan offline",
        "Antarmuka sederhana dan intuitif untuk pengguna non-teknis",
        "Dibangun dengan React Native dan Expo untuk lintas platform"
      ],
      tags: ["React Native", "JavaScript", "SQLite", "Expo"],
      github: "ttps://github.com/dhanustr/UMKMKeuanganApp"
    },
    
{
  icon: "fa-clock",
  image: "assets/project-todo.jpg",
  type: "Proyek Personal · Web App",
  title: "Life Dashboard",
  desc: "Dashboard produktivitas pribadi yang dirancang untuk membantu pengguna mengatur aktivitas harian dan mengelola waktu secara efisien. Aplikasi ini menggabungkan Pomodoro Timer, pengelolaan daftar tugas harian, dan Quick Links dalam satu dashboard.",
  features: [
    "Pomodoro Timer dengan durasi fokus yang dapat diatur",
    "Pengelolaan daftar tugas harian",
    "Quick Links untuk menyimpan website yang sering diakses",
    "Jam digital dan sapaan personal secara real-time",
    "Dark mode dan light mode"
  ],
  tags: ["JavaScript", "HTML", "CSS"],
  github: "https://github.com/dhanustr/CodingCamp-31September26-DhanuSatria"
}

  ]
};

/* ── Typewriter roles ── */
const typewriterRoles = {
  en: ["Software Developer", "IT Support Engineer", "IoT Developer", "Frontend Engineer", "Problem Solver"],
  id: ["Software Developer", "IT Support Engineer", "IoT Developer", "Frontend Engineer", "Pemecah Masalah"]
};

/* ── i18n Engine ── */
let currentLang = localStorage.getItem("portfolio-lang") || "en";

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key  = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.lang = lang;

  applyTranslations(lang);

  const flag  = document.getElementById("langFlag");
  const label = document.getElementById("langLabel");
  if (flag && label) {
    flag.textContent  = lang === "en" ? "🇺🇸" : "🇮🇩";
    label.textContent = lang === "en" ? "EN" : "ID";
  }

  if (window.restartTypewriter) window.restartTypewriter(lang);
  if (window.refreshOpenModal)  window.refreshOpenModal(lang);
}

function toggleLanguage() {
  setLanguage(currentLang === "en" ? "id" : "en");
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);

  const flag  = document.getElementById("langFlag");
  const label = document.getElementById("langLabel");
  if (flag && label) {
    flag.textContent  = currentLang === "en" ? "🇺🇸" : "🇮🇩";
    label.textContent = currentLang === "en" ? "EN" : "ID";
  }

  document.getElementById("langToggle")?.addEventListener("click", toggleLanguage);
});
