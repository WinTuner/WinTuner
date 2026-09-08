"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"
import { useLanguage } from "./language-provider"

const projects = [
  {
    id: 1,
    title: "DotDoctor",
    description:
      "The ultimate config doctor & dependency checker for Hyprland and modular dotfiles. Go, AUR packaging.",
    longDesc: "Go CLI that audits Hyprland dotfiles, checks dependencies, verifies system state. Ships via AUR.",
    tags: ["Go", "Linux", "Hyprland"],
    status: "shipped" as const,
    year: "2025",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/DotDoctor",
    featured: true,
    highlight: true,
  },
  {
    id: 2,
    title: "Appointment Booking API",
    description:
      "RESTful appointment system with Kotlin/Ktor. CRUD, double-booking prevention, 49 tests passing.",
    tags: ["Kotlin", "Ktor", "REST"],
    status: "shipped" as const,
    year: "2025",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/Appointment-Booking-System-API-682110174",
    featured: true,
  },
  {
    id: 3,
    title: "AutoOS",
    description:
      "Native AOT WinUI 3 app that automates clean Windows migration to a separate partition for gaming & productivity.",
    tags: ["C#", "WinUI 3", "NativeAOT"],
    status: "shipped" as const,
    year: "2025",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/AutoOS",
    featured: false,
  },
  {
    id: 4,
    title: "ProjectPruta",
    description:
      "Municipal web app for Phlu Ta Luang Subdistrict. Real-world workflow support, TypeScript.",
    tags: ["TypeScript", "Next.js", "Municipal"],
    status: "in-progress" as const,
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/ProjectPruta",
    featured: true,
  },
  {
    id: 5,
    title: "CV — Portfolio",
    description:
      "This site. Next.js 16, React 19, Tailwind v4, bilingual EN/TH, live GitHub activity & Notion blog.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    status: "shipped" as const,
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/CV",
    featured: false,
  },
  {
    id: 6,
    title: "github-realtime-dashboard",
    description:
      "Live GitHub activity dashboard with real-time stats and visualization.",
    tags: ["TypeScript", "Vercel", "Dashboard"],
    status: "shipped" as const,
    year: "2025",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/github-realtime-dashboard",
    featured: false,
  },
  {
    id: 7,
    title: "OOP-Lab-2026",
    description: "Java OOP lab coursework — object-oriented programming practice & submissions.",
    tags: ["Java", "OOP"],
    status: "shipped" as const,
    year: "2026",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/OOP-Lab-2026",
    featured: false,
  },
  {
    id: 8,
    title: "linux-vs-windows-latency",
    description: "Kernel latency benchmarking: Linux vs Windows, C-level measurements.",
    tags: ["C", "Linux", "Benchmark"],
    status: "shipped" as const,
    year: "2025",
    stars: 0,
    forks: 0,
    url: "https://github.com/WinTuner/linux-vs-windows-latency",
    featured: false,
  },
]

const filters = ["all", "shipped", "in-progress", "archived"] as const

export function ProjectsGrid() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("all")

  const copy = {
    en: {
      kicker: "Artifacts",
      title: "Open Source Projects",
      subtitle: "26 public repos — selected highlights. Backend, infra, and tools I actually ship.",
      featured: "Featured",
      source: "source",
      live: "live",
      filters: {
        all: "all",
        shipped: "shipped",
        "in-progress": "in-progress",
        archived: "archived",
      },
    },
    th: {
      kicker: "ผลงาน",
      title: "โปรเจกต์โอเพนซอร์ส",
      subtitle: "26 รีโพสาธารณะ — ผลงานคัดเลือก สาย backend, infra และ tools ที่ส่งมอบจริง",
      featured: "แนะนำ",
      source: "ซอร์สโค้ด",
      live: "เว็บไซต์",
      filters: {
        all: "ทั้งหมด",
        shipped: "เผยแพร่แล้ว",
        "in-progress": "กำลังพัฒนา",
        archived: "เก็บถาวร",
      },
    },
  } as const
  const t = copy[language]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{t.kicker}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="max-w-xl text-sm sm:text-base text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {t.filters[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                "highlight" in project && project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    {t.featured}
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    (project.status as string) === "shipped" && "bg-primary shadow-sm shadow-primary/50",
                    (project.status as string) === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                    (project.status as string) === "archived" && "bg-muted-foreground",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {t.filters[project.status]}
                </span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {project.description}
              </p>

              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source`}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">{t.source}</span>
                </a>
                {(project as any).homepage && (
                  <a
                    href={(project as any).homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">{t.live}</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
