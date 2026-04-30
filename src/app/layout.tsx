import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import LanguageProvider from "@/contexts/LanguageContext";
import ScanlineOverlay from "@/components/core/ScanlineOverlay";
import CustomCursor from "@/components/core/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fendry Tonrate | Full Stack Developer",
  description:
    "Personal portfolio of Fendry Tonrate — Full Stack Developer building intuitive and scalable web applications.",
  keywords: ["Fendry Tonrate", "Full Stack Developer", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Fendry Tonrate | Full Stack Developer",
    description: "Personal portfolio of Fendry Tonrate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} bg-[#0a0a0f] text-[#e4e4e7]`}
        >
          <CustomCursor />
          <ScanlineOverlay />
          <Navbar />
          {children}
        </body>
      </LanguageProvider>
    </html>
  );
}
