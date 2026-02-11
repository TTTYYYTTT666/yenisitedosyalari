import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SORUNSUZAL - Araç Güvenilirlik Rehberi",
  description: "Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin. Türkiye'nin en kapsamlı araç güvenilirlik veritabanı.",
  keywords: ["araç sorunları", "araba arızaları", "fiat egea sorunları", "passat sorunları", "civic sorunları", "ikinci el araç"],
  openGraph: {
    title: "SORUNSUZAL - Araç Güvenilirlik Rehberi",
    description: "Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-stone-50 dark:bg-[#0c0a09]`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
