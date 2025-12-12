import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream">
                  Vinayak Food
                </h3>
                <p className="text-saffron text-sm">Since 2000</p>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed">
              Where every bite tells a story. Authentic Pani Puri & traditional chaat crafted with love since 2000.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-saffron flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-saffron flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  123 Chaat Street, Food District
                  <br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-cream/70 hover:text-saffron transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0" />
                <a
                  href="mailto:hello@vinayakfood.com"
                  className="text-cream/70 hover:text-saffron transition-colors"
                >
                  hello@vinayakfood.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-saffron shrink-0" />
                <div className="text-cream/70">
                  <p className="font-medium text-cream">Mon - Fri</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-saffron shrink-0" />
                <div className="text-cream/70">
                  <p className="font-medium text-cream">Sat - Sun</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Vinayak Food Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-cream/50 hover:text-saffron transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-cream/50 hover:text-saffron transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}