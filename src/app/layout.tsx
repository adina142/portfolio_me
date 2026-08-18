import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/LayoutComponents"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-adina.vercel.app'),
  title: "Adina Khalid | AI/ML Engineer & Computer Vision Developer",
  description: "Adina Khalid is a Computer Science student building machine learning, computer vision, and full-stack software systems.",
  keywords: ["AI/ML Engineer", "Computer Vision", "Software Engineer", "Full-Stack Developer", "Python", "Adina Khalid"],
  authors: [{ name: "Adina Khalid" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-adina.vercel.app",
    title: "Adina Khalid | AI/ML Engineer & Computer Vision Developer",
    description: "Adina Khalid is a Computer Science student building machine learning, computer vision, and full-stack software systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adina Khalid - Software Engineer",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-accent-foreground min-h-screen flex flex-col dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
