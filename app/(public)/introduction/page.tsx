"use client"

import {
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Wrench,
  Download,
  Github,
  FileText,
  Cpu,
  Database,
  Globe,
  Server,
  Printer,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const education = {
  en: [
    {
      school: "Chiang Mai University — CAMT",
      period: "2025 — Present",
      detail: "B.Sc. Digital Industry Integration",
      gpa: "3.31",
      highlight: true,
      location: "Chiang Mai, TH",
    },
    {
      school: "Chiang Rai Provincial Administrative Organization School",
      period: "2019 — 2025",
      detail: "Software Engineer Program",
      gpa: "3.97",
      highlight: false,
      location: "Chiang Rai, TH",
    },
  ],
  th: [
    {
      school: "มหาวิทยาลัยเชียงใหม่ — CAMT",
      period: "2025 — ปัจจุบัน",
      detail: "วท.บ. สาขาการบูรณาการอุตสาหกรรมดิจิทัล",
      gpa: "3.31",
      highlight: true,
      location: "เชียงใหม่",
    },
    {
      school: "โรงเรียนองค์การบริหารส่วนจังหวัดเชียงราย",
      period: "2019 — 2025",
      detail: "แผนการเรียนวิศวกรรมซอฟต์แวร์",
      gpa: "3.97",
      highlight: false,
      location: "เชียงราย",
    },
  ],
} as const

const experiences = {
  en: [
    {
      title: "P'CAT HOUSE — Part-time Administrative Assistant",
      period: "Mar 2022 — Present",
      location: "Chiang Rai",
      points: [
        "Managed 40+ tenant records: personal data, rent status, utility tracking — zero missed billing cycles.",
        "Maintained monthly payment data in Excel & Google Sheets; built tracking templates that cut reconciliation time ~30%.",
        "Organized and versioned administrative documents; established filing system used office-wide.",
        "Designed notices & documents with Canva; improved communication clarity for residents.",
      ],
      stack: ["Excel", "Google Sheets", "Canva", "Operations"],
    },
  ],
  th: [
    {
      title: "P'CAT HOUSE — ผู้ช่วยงานธุรการ (พาร์ตไทม์)",
      period: "มี.ค. 2022 — ปัจจุบัน",
      location: "เชียงราย",
      points: [
        "ดูแลข้อมูลผู้เช่า 40+ ราย: ข้อมูลส่วนตัว สถานะค่าเช่า ค่าน้ำ/ไฟ — ไม่เคยพลาดรอบบิล",
        "ดูแลข้อมูลชำระเงินรายเดือนด้วย Excel & Google Sheets; สร้างเทมเพลตที่ลดเวลาตรวจสอบ ~30%",
        "จัดระเบียบและควบคุมเวอร์ชันเอกสารธุรการ ตั้งระบบจัดเก็บที่ใช้ทั่วสำนักงาน",
        "ออกแบบประกาศและเอกสารด้วย Canva ให้สื่อสารชัดเจนขึ้น",
      ],
      stack: ["Excel", "Google Sheets", "Canva", "Operations"],
    },
  ],
} as const

const projects = {
  en: [
    {
      name: "Municipality Web App — Phlu Ta Luang",
      status: "In Progress",
      description: "Real-time municipal ops web app. Next.js + Prisma + PostgreSQL. Spreadsheet → SQL real-time pipeline.",
      url: "https://github.com/farpinta/ProjectPruta",
      tags: ["TypeScript", "Next.js", "Prisma"],
    },
    {
      name: "DotDoctor — Hyprland Config Doctor",
      status: "Shipped",
      description: "Go CLI that audits Hyprland dotfiles, checks deps, verifies system. AUR packaged.",
      url: "https://github.com/WinTuner/DotDoctor",
      tags: ["Go", "Linux", "AUR"],
    },
    {
      name: "Appointment Booking API — Kotlin/Ktor",
      status: "Shipped",
      description: "REST API with double-booking prevention, 49 tests passing. Kotlin/Ktor + Exposed.",
      url: "https://github.com/WinTuner/Appointment-Booking-System-API-682110174",
      tags: ["Kotlin", "Ktor", "REST"],
    },
    {
      name: "DII Design — CAMT Open House 2025",
      status: "Delivered",
      description: "Slides explaining dev roles to prospective students at CAMT Open House.",
      tags: ["Design", "Education"],
    },
  ],
  th: [
    {
      name: "เว็บแอปเทศบาล — พลูตาหลวง",
      status: "กำลังพัฒนา",
      description: "เว็บแอประบบเทศบาลแบบเรียลไทม์ Next.js + Prisma จากสเปรดชีตสู่ SQL",
      url: "https://github.com/farpinta/ProjectPruta",
      tags: ["TypeScript", "Next.js", "Prisma"],
    },
    {
      name: "DotDoctor — เครื่องมือตรวจ Hyprland",
      status: "เผยแพร่แล้ว",
      description: "CLI Go ตรวจสอบ dotfiles Hyprland และ dependency แพ็กเกจ AUR",
      url: "https://github.com/WinTuner/DotDoctor",
      tags: ["Go", "Linux", "AUR"],
    },
    {
      name: "Appointment Booking API — Kotlin/Ktor",
      status: "เผยแพร่แล้ว",
      description: "REST API กันจองซ้อน 49 เทสผ่าน Kotlin/Ktor",
      url: "https://github.com/WinTuner/Appointment-Booking-System-API-682110174",
      tags: ["Kotlin", "Ktor", "REST"],
    },
    {
      name: "DII Design — CAMT Open House 2025",
      status: "ส่งมอบแล้ว",
      description: "สไลด์อธิบายบทบาทสายพัฒนาให้น้อง ๆ ในงาน Open House",
      tags: ["Design", "Education"],
    },
  ],
} as const

const skillGroups = {
  en: [
    { label: "Backend", icon: Server, skills: ["Go", "Kotlin / Ktor", "Java / Spring Boot", "Node.js", "Python"], level: 85 },
    { label: "Frontend", icon: Globe, skills: ["TypeScript", "Next.js / React 19", "Tailwind v4", "HTML/CSS"], level: 80 },
    { label: "Infra & Systems", icon: Cpu, skills: ["Linux (Arch)", "Docker / K8s", "PostgreSQL", "Git / Actions"], level: 82 },
    { label: "Data & Tools", icon: Database, skills: ["Prisma / SQL", "Notion API", "REST / gRPC basics", "Canva"], level: 75 },
  ],
  th: [
    { label: "Backend", icon: Server, skills: ["Go", "Kotlin / Ktor", "Java / Spring Boot", "Node.js", "Python"], level: 85 },
    { label: "Frontend", icon: Globe, skills: ["TypeScript", "Next.js / React 19", "Tailwind v4", "HTML/CSS"], level: 80 },
    { label: "Infra & Systems", icon: Cpu, skills: ["Linux (Arch)", "Docker / K8s", "PostgreSQL", "Git / Actions"], level: 82 },
    { label: "Data & Tools", icon: Database, skills: ["Prisma / SQL", "Notion API", "REST / gRPC", "Canva"], level: 75 },
  ],
} as const

const certifications = {
  en: ["HYLIFE Hackathon 2025 — 3rd Place (Smart Agriculture & Food Supply Chain)", "UX/UI Foundation 2025 — T.C.C. Technology Co., Ltd."],
  th: ["HYLIFE Hackathon 2025 — รางวัลอันดับ 3 (Smart Agriculture)", "UX/UI Foundation 2025 — บ. T.C.C. Technology"],
} as const

const interests = {
  en: ["IT Support & SysAdmin", "Hardware & OS internals", "Troubleshooting & optimization", "Open source & self-hosting"],
  th: ["IT Support & System Admin", "ฮาร์ดแวร์และระบบปฏิบัติการ", "การแก้ปัญหาและปรับจูนระบบ", "โอเพนซอร์สและ self-hosting"],
} as const

const activities = {
  en: ["Self-study: networking, system administration, Linux", "Hands-on: system setup & troubleshooting outside class", "Maintaining 26 public GitHub repos"],
  th: ["ศึกษาด้วยตนเอง: เน็ตเวิร์ก, System Admin, Linux", "ฝึกติดตั้งระบบและแก้ปัญหานอกเวลาเรียน", "ดูแล 26 รีโพสาธารณะบน GitHub"],
} as const

const mediumHighlights = {
  en: [
    { title: "AI and Software Dev: How to use it, not fear it", summary: "Treating AI as daily dev partner for ideation, coding & debugging — not a replacement." },
    { title: "Journey: From spreadsheet to real-time SQL", summary: "Build log turning a city-planning idea into real-time system; messy parts & lessons." },
    { title: "From Daily PC User to IT Support", summary: "Path from everyday computer use → hands-on IT support and system thinking." },
    { title: "Wellness Economy and how it changed my view", summary: "Noticing value in ordinary things and how it reshapes work & decisions." },
  ],
  th: [
    { title: "AI กับ Software Dev: ใช้ให้เป็น ไม่ต้องกลัว", summary: "ใช้ AI เป็นผู้ช่วยคิด เขียน และแก้ปัญหาในชีวิตประจำวันของ Dev" },
    { title: "Journey: จาก Spreadsheet สู่ SQL แบบ Real-time", summary: "เบื้องหลังโปรเจกต์วางผังเมืองดิจิทัลและบทเรียนจากงานพัฒนา" },
    { title: "From Daily PC User to IT Support", summary: "เส้นทางจากคนใช้คอมทั่วไปสู่ IT Support และการคิดเชิงระบบ" },
    { title: "Wellness Economy และมุมมองที่เปลี่ยนไป", summary: "การมองเห็นคุณค่าในสิ่งใกล้ตัวที่เปลี่ยนวิธีคิดเรื่องงานและชีวิต" },
  ],
} as const

const copy = {
  en: {
    pageLabel: "Resume / CV — Thanatphong Tarin",
    role: "Backend & Infrastructure Enthusiast · CMU CAMT · GMT+7",
    intro: "Backend & infrastructure-focused student (CMU CAMT, Digital Industry Integration, GPA 3.31). I turn messy ops into fast systems — recently: municipality app (spreadsheet → real-time SQL), Go CLI for Hyprland, Kotlin/Ktor booking API with 49 tests green. Seeking backend/infra internships where I can ship and learn quickly.",
    avail: "Available for internships",
    location: "Chiang Mai / Chiang Rai · Remote friendly",
    print: "Print / Save PDF",
    download: "Download PDF",
    contactTitle: "Contact",
    educationTag: "Education",
    educationTitle: "Education",
    skillsTag: "Stack",
    skillsTitle: "Tech Stack",
    experienceTag: "Experience",
    experienceTitle: "Experience",
    projectCardTitle: "Projects — Selected",
    viewAll: "View all on GitHub →",
    sourceCode: "Source",
    mediumProfile: "Medium →",
    writingTitle: "Writing",
    writingTag: "Selected articles",
    achievementsTitle: "Achievements",
    certTitle: "Certifications",
    achievementLine: "HYLIFE Hackathon 2025 — 3rd Place",
    achievementTheme: "Theme: Smart Agriculture and Food Supply Chain",
    languageTitle: "Languages",
    langThai: "Thai — Native",
    langEnglish: "English — CEFR B2 (professional working)",
    interestTitle: "Focus & Activities",
    gpaLabel: "GPA",
    keywords: "Go · Kotlin · Java · TypeScript · Next.js · PostgreSQL · Docker · Linux",
  },
  th: {
    pageLabel: "เรซูเม่ — ธนัตพงศ์ ตารินทร์",
    role: "Backend & Infrastructure · นักศึกษา CAMT มช. · GMT+7",
    intro: "นักศึกษา CAMT มช. สาขาบูรณาการอุตสาหกรรมดิจิทัล (GPA 3.31) สาย Backend & Infra ชอบเปลี่ยนงานยุ่ง ๆ ให้เป็นระบบเร็ว ๆ — ล่าสุด: เว็บเทศบาลจากสเปรดชีตสู่ SQL เรียลไทม์, CLI Go สำหรับ Hyprland, API Kotlin/Ktor เทสผ่าน 49 เคส มองหาโอกาสฝึกงาน backend/infra",
    avail: "เปิดรับฝึกงาน",
    location: "เชียงใหม่ / เชียงราย · ทำงานรีโมตได้",
    print: "พิมพ์ / บันทึก PDF",
    download: "ดาวน์โหลด PDF",
    contactTitle: "ติดต่อ",
    educationTag: "การศึกษา",
    educationTitle: "การศึกษา",
    skillsTag: "ทักษะ",
    skillsTitle: "Tech Stack",
    experienceTag: "ประสบการณ์",
    experienceTitle: "ประสบการณ์",
    projectCardTitle: "โปรเจกต์คัดเลือก",
    viewAll: "ดูทั้งหมดบน GitHub →",
    sourceCode: "ซอร์สโค้ด",
    mediumProfile: "Medium →",
    writingTitle: "งานเขียน",
    writingTag: "บทความคัดเลือก",
    achievementsTitle: "ผลงาน",
    certTitle: "ประกาศนียบัตร",
    achievementLine: "HYLIFE Hackathon 2025 — อันดับ 3",
    achievementTheme: "หัวข้อ: Smart Agriculture and Food Supply Chain",
    languageTitle: "ภาษา",
    langThai: "ไทย — ภาษาแม่",
    langEnglish: "อังกฤษ — CEFR B2",
    interestTitle: "ความสนใจและกิจกรรม",
    gpaLabel: "เกรดเฉลี่ย",
    keywords: "Go · Kotlin · Java · TypeScript · Next.js · PostgreSQL · Docker · Linux",
  },
} as const

export default function IntroductionPage() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <div className="print:bg-white">
      {/* ===== HERO ===== */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-12 print:pt-6 print:pb-4">
        <div className="mx-auto max-w-5xl">
          {/* Top bar: label + actions */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">{t.pageLabel}</p>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> {t.avail}
              </span>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 font-mono text-xs hover:bg-secondary transition-colors print:hidden"
                aria-label="Print resume"
              >
                <Printer className="h-3.5 w-3.5" /> {t.print}
              </button>
              <a
                href="/api/cv-pdf"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 font-mono text-xs text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="h-3.5 w-3.5" /> PDF
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            {/* Name & intro */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground">
                  Thanatphong <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">Tarin</span>
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.role}</p>
                <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {t.location}
                </p>
              </div>

              <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{t.intro}</p>

              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">{t.keywords}</p>

              {/* Contact grid */}
              <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                <a href="mailto:Thanatphong2719@gmail.com" className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-primary/40 hover:bg-card transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Mail className="h-4 w-4" /></span>
                  <span className="text-sm text-foreground truncate">Thanatphong2719@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span>
                  <span className="text-sm text-foreground">+66 91 876 3373</span>
                </div>
                <a href="https://github.com/WinTuner" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-primary/40 hover:bg-card transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Github className="h-4 w-4" /></span>
                  <span className="text-sm text-foreground">github.com/WinTuner</span>
                  <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                </a>
                <a href="https://www.linkedin.com/in/thanatphong-tarin-1b6619385/" target="_blank" rel="noopener noreferrer" className="group hidden sm:flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-primary/40 transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><ExternalLink className="h-4 w-4" /></span>
                  <span className="text-sm text-foreground truncate">linkedin.com/in/thanatphong-tarin</span>
                </a>
                <a href="https://medium.com/@thanatphong2719" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-primary/40 hover:bg-card transition-colors sm:col-span-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><FileText className="h-4 w-4" /></span>
                  <span className="text-sm text-foreground">{t.mediumProfile}</span>
                  <span className="ml-auto text-xs text-muted-foreground">medium.com/@thanatphong2719</span>
                </a>
              </div>
            </div>

            {/* Quick stats / highlights card */}
            <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 sm:p-6 space-y-5 print:border print:shadow-none">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">At a glance</p>
                <span className="font-mono text-[11px] text-muted-foreground">26 repos · 3.97 / 3.31 GPA</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-background/60 border border-border/50 p-3">
                  <p className="text-xl font-bold text-foreground">3+</p>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">years ops</p>
                </div>
                <div className="rounded-xl bg-background/60 border border-border/50 p-3">
                  <p className="text-xl font-bold text-foreground">49</p>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">tests pass</p>
                </div>
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3">
                  <p className="text-xl font-bold text-primary">B2</p>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">English</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-medium text-foreground flex items-center gap-2"><Trophy className="h-3.5 w-3.5 text-amber-500" /> {t.achievementLine}</p>
                <p className="text-xs text-muted-foreground">{t.achievementTheme}</p>
                <p className="text-xs text-muted-foreground">GPA 3.97 (High School SE) · 3.31 (CMU CAMT)</p>
              </div>
              <div className="pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                {["Go", "Kotlin", "Java", "TypeScript", "Next.js", "PostgreSQL", "Docker", "Linux"].map((k) => (
                  <span key={k} className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="px-4 sm:px-6 pb-6 print:pb-2">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-7 print:bg-white">
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight"><Code2 className="h-4 w-4 text-primary" /> {t.skillsTitle}</h2>
              <p className="hidden sm:block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t.skillsTag} — Backend & Infra first</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups[language].map((g) => (
                <div key={g.label} className="rounded-xl border border-border/50 bg-background/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                      <g.icon className="h-3.5 w-3.5 text-primary" /> {g.label}
                    </h3>
                    <span className="font-mono text-[11px] text-muted-foreground">{g.level}%</span>
                  </div>
                  <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${g.level}%` }} />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span key={s} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="px-4 sm:px-6 pb-6 print:pb-2">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-7">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-bold tracking-tight"><GraduationCap className="h-4 w-4 text-primary" /> {t.educationTitle}</h2>
            <div className="relative space-y-4 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border/60 print:before:hidden">
              {education[language].map((item) => (
                <article key={item.school} className={`relative ml-8 rounded-xl border p-4 sm:p-5 ${item.highlight ? "border-primary/30 bg-primary/[0.04]" : "border-border/50 bg-background/50"}`}>
                  <span className={`absolute -left-[29px] top-5 h-3 w-3 rounded-full border-2 bg-background ${item.highlight ? "border-primary bg-primary shadow" : "border-border"}`} />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground leading-tight">{item.school}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {item.location}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 font-mono text-xs ${item.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{item.period}</span>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs">
                    <span className="text-muted-foreground">{t.gpaLabel}</span> <span className="font-bold text-foreground">{item.gpa}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE + PROJECTS ===== */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Experience */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-7">
            <h2 className="mb-5 flex items-center gap-2 text-lg font-bold tracking-tight"><Briefcase className="h-4 w-4 text-primary" /> {t.experienceTitle}</h2>
            {experiences[language].map((exp) => (
              <div key={exp.title} className="rounded-xl border border-border/50 bg-background/50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary"><Briefcase className="h-5 w-5" /></div>
                <h3 className="font-semibold text-foreground leading-snug">{exp.title}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-primary">{exp.period} <span className="text-muted-foreground">· {exp.location}</span></p>
                <ul className="mt-4 space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" /> <span>{p}</span></li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-[11px] text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            ))}
            <a href="https://github.com/WinTuner" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-medium text-primary hover:underline">{t.viewAll}</a>
          </div>

          {/* Projects */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-7">
            <h3 className="mb-4 font-semibold text-foreground">{t.projectCardTitle}</h3>
            <div className="space-y-3">
              {projects[language].map((p) => (
                <article key={p.name} className="rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-semibold leading-snug text-foreground">{p.name}</h4>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">{p.status}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[11px] text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                  {(p as { url?: string }).url ? (
                    <a href={(p as { url?: string }).url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                      <Github className="h-3.5 w-3.5" /> {t.sourceCode} <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WRITING ===== */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{t.writingTag}</p>
                <h2 className="text-lg font-bold tracking-tight">{t.writingTitle}</h2>
              </div>
              <a href="https://medium.com/@thanatphong2719" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">Medium <ExternalLink className="h-3 w-3" /></a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {mediumHighlights[language].map((a) => (
                <article key={a.title} className="rounded-xl border border-border/50 bg-background/50 p-4">
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM GRID ===== */}
      <section className="px-4 sm:px-6 pb-16 print:pb-4">
        <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold"><Trophy className="h-4 w-4 text-amber-500" /> {t.achievementsTitle}</h3>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-foreground">{t.achievementLine}<br /><span className="text-xs font-normal text-muted-foreground">{t.achievementTheme}</span></p>
              <div>
                <p className="mb-1.5 font-medium text-foreground text-xs uppercase tracking-wider">{t.certTitle}</p>
                <ul className="space-y-1.5">
                  {certifications[language].map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground"><span className="text-primary">•</span><span>{c}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold"><Languages className="h-4 w-4 text-primary" /> {t.languageTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="flex justify-between"><span>{t.langThai}</span><span className="font-mono text-xs text-primary">Native</span></div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-secondary"><div className="h-full w-full rounded-full bg-primary" /></div>
              </li>
              <li>
                <div className="flex justify-between"><span>{t.langEnglish}</span><span className="font-mono text-xs text-primary">B2</span></div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-secondary"><div className="h-full w-[72%] rounded-full bg-primary" /></div>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">Reading docs, writing, daily standups</p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold"><Wrench className="h-4 w-4 text-primary" /> {t.interestTitle}</h3>
            <ul className="space-y-1.5">
              {interests[language].map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground"><span className="text-primary">•</span><span>{i}</span></li>
              ))}
            </ul>
            <ul className="mt-3 space-y-1.5 border-t border-border/50 pt-3">
              {activities[language].map((a) => (
                <li key={a} className="flex gap-2 text-sm text-muted-foreground"><span className="text-primary">•</span><span>{a}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-5xl text-center print:hidden">
          <p className="font-mono text-xs text-muted-foreground">Last updated Sep 2026 · Print this page for ATS-friendly PDF · References available on request</p>
        </div>
      </section>
    </div>
  )
}
