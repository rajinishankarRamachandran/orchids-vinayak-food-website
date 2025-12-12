"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-serif font-bold text-lg">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-charcoal leading-tight">
                  Vinayak Food
                </span>
                <span className="text-xs text-saffron font-medium tracking-wider">
                  Since 2000
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-charcoal hover:text-saffron transition-colors py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden sm:flex bg-saffron hover:bg-saffron-dark text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="/menu">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Now
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-charcoal" />
                ) : (
                  <Menu className="w-6 h-6 text-charcoal" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-cream shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-lg font-medium text-charcoal hover:text-saffron hover:bg-cream-dark rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Button
                      asChild
                      className="w-full bg-saffron hover:bg-saffron-dark text-white rounded-full"
                    >
                      <Link
                        href="/menu"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Order Now
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}