import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wintuner.dev'),
  title: {
    default: "Thanatphong Tarin — WinTuner | Backend & Infrastructure",
    template: "%s | WinTuner",
  },
  description:
    "Thanatphong Tarin (WinTuner) — Backend & Infrastructure enthusiast, CMU CAMT Digital Industry Integration. High-performance systems, Go, TypeScript, Kotlin, Linux. Portfolio, CV, projects & writing.",
  keywords: ["Thanatphong Tarin", "WinTuner", "Backend Developer", "Infrastructure", "Go", "TypeScript", "Kotlin", "Next.js", "Linux", "CMU", "CAMT", "Portfolio", "CV"],
  authors: [{ name: "Thanatphong Tarin", url: "https://github.com/WinTuner" }],
  creator: "Thanatphong Tarin",
  publisher: "Thanatphong Tarin",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Thanatphong Tarin — WinTuner | Backend & Infrastructure",
    description: "Backend & Infrastructure enthusiast. CMU CAMT Digital Industry Integration. Building high-performance systems with Go, TypeScript, Kotlin & Linux.",
    siteName: "WinTuner — Thanatphong Tarin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WinTuner — Thanatphong Tarin | Backend & Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanatphong Tarin — WinTuner | Backend & Infrastructure",
    description: "Backend & Infrastructure enthusiast. CMU CAMT. Building high-performance systems with Go, TypeScript, Kotlin & Linux.",
    creator: "@nut89189886",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="theme-mode">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
