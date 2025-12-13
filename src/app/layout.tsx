import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinayak Food Inc - Authentic Indian Chaat Since 2000",
  description:
    "Experience authentic Indian street food & chaat. Handcrafted pani puri with traditional recipes passed down through generations. Fresh ingredients, bold flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/logo.png" />
        <link rel="preload" as="image" href="/images/home-panipuri.jpg" />
        <link rel="preload" as="image" href="/images/menu-panipuri.jpg" />
        <link rel="preload" as="image" href="/images/about-panipuri.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
