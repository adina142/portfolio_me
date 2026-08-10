import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/LayoutComponents"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-adina.vercel.app'),
  title: "Adina | Software Engineer & AI/ML Developer",
  description: "Adina Khalid is a Computer Science student and software developer specializing in full-stack development, MERN, AI/ML, and computer vision.",
  keywords: ["Software Engineer", "Full-Stack Developer", "MERN", "AI/ML", "Computer Vision", "Adina Khalid"],
  authors: [{ name: "Adina Khalid" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adina-portfolio.com",
    title: "Adina Khalid | Software Engineer & Full-Stack Developer",
    description: "Adina Khalid is a Computer Science student and software developer specializing in full-stack development, MERN, AI/ML, and computer vision.",
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
      <body className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
