import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vinayak Food Inc | Authentic Pani Puri Since 2000",
  description: "Where every bite tells a story. Authentic Pani Puri & traditional chaat crafted with love since 2000. Experience the taste of tradition at Vinayak Food Inc.",
  keywords: ["pani puri", "chaat", "indian food", "authentic", "traditional", "vinayak food"],
  openGraph: {
    title: "Vinayak Food Inc | Authentic Pani Puri Since 2000",
    description: "Where every bite tells a story. Authentic Pani Puri & traditional chaat crafted with love since 2000.",
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
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f8ae4c5b-5b81-492a-bdb0-f9f9a9db7191"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}