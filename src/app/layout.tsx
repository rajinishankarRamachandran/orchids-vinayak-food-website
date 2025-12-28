import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f8ae4c5b-5b81-492a-bdb0-f9f9a9db7191"
        />
          <Script
            id="orchids-browser-logs"
            src="https://eijqjpaciqzybkqsdtgy.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="lazyOnload"
            data-orchids-project-id="f8ae4c5b-5b81-492a-bdb0-f9f9a9db7191"
          />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
