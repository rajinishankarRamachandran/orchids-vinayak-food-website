"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" },
{ href: "/menu", label: "Menu" },
{ href: "/contact", label: "Contact" }];


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ?
        "bg-cream/80 backdrop-blur-lg shadow-md" :
        "bg-transparent"}`
        }>

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg overflow-hidden ring-2 ring-saffron/50 group-hover:scale-105 transition-transform">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1765665334064.png?width=8000&height=8000&resize=contain"
                  alt="Vinayak Food Inc logo"
                  fill
                  className="object-contain bg-white"
                  sizes="48px"
                  priority />

              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold text-white drop-shadow-lg leading-tight">Vinayak Food Inc

                </span>
                <span className="text-[10px] md:text-xs text-white font-medium tracking-wider drop-shadow-lg">
                  Since 2000
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-white drop-shadow-lg hover:text-saffron transition-colors py-2 group">

                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Toggle menu">

                {isMobileMenuOpen ?
                <X className="w-6 h-6 text-white drop-shadow-lg" /> :

                <Menu className="w-6 h-6 text-white drop-shadow-lg" />
                }
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 md:hidden">

            <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)} />

            <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-gradient-to-b from-cream to-cream-dark shadow-2xl">

              <div className="flex items-center justify-between p-4 border-b border-charcoal/10">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-saffron/50">
                    <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1765665334064.png?width=8000&height=8000&resize=contain"
                    alt="Vinayak Food Inc logo"
                    fill
                    className="object-contain bg-white"
                    sizes="40px" />

                  </div>
                  <span className="font-serif text-lg font-bold text-charcoal">Vinayak Food</span>
                </div>
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-charcoal/5 hover:bg-charcoal/10 transition-colors"
                aria-label="Close menu">

                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) =>
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}>

                      <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-4 px-5 text-lg font-medium text-charcoal hover:text-saffron hover:bg-saffron/5 rounded-2xl transition-all active:scale-[0.98]">

                        {link.label}
                      </Link>
                    </motion.div>
                )}
                </div>
                <div className="mt-8 pt-6 border-t border-charcoal/10">
                  <p className="text-sm text-charcoal/60 text-center">
                    Authentic Chaat Since 2000
                  </p>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}