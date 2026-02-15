import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://otoraporu.net'),
  title: {
    default: "OTORAPORU.NET - Araç Güvenilirlik Rehberi",
    template: "%s | OTORAPORU.NET"
  },
  description: "Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin. Türkiye'nin en kapsamlı araç güvenilirlik veritabanı.",
  keywords: ["araç sorunları", "araba arızaları", "kronik sorunlar", "ekspertiz raporu", "oto güvenilirlik", "ikinci el araç tavsiyesi"],
  authors: [{ name: "Otoraporu Ekibi" }],
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
  openGraph: {
    title: "OTORAPORU.NET - Araç Güvenilirlik Rehberi",
    description: "Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin.",
    url: 'https://otoraporu.net',
    siteName: 'OTORAPORU.NET',
    locale: 'tr_TR',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "OTORAPORU.NET",
    description: "Araç almadan önce kronik sorunları öğrenin.",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo-transparent.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <link rel="preconnect" href="https://cdn.simpleicons.org" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-stone-50 dark:bg-[#0c0a09]`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
