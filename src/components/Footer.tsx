import Link from "next/link"
import Image from "next/image"
import { MapPin, Building2, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { assets } from "@/assets"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-saffron/50 shadow-lg">
                  <Image
                    src={assets.logo}
                    alt="Vinayak Foods Inc logo"
                    fill
                    className="object-contain"
                    sizes="50px"
                  />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-cream whitespace-nowrap">
                  Vinayak Foods Inc
                </h3>
                <p className="text-saffron text-sm">Since 2000</p>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed text-sm md:text-base">
              Where every bite tells a story. Authentic Pani Puri & traditional chaat crafted with love since 2000.
            </p>
            <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/vinayakfoods__/"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h4 className="font-serif text-lg font-semibold mb-4 md:mb-6 text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-saffron transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 md:mb-6 text-cream">
              Contact Info
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm md:text-base">
                  776 Jernee Mill Rd # 108
                  <br />
                  Sayreville, NJ 08872
                </span>
              </li>
                <li className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-saffron shrink-0" />
                  <a
                    href="tel:+17322574440"
                    className="text-cream/70 hover:text-saffron transition-colors text-sm md:text-base"
                  >
                    +1 (732) 257-4440
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-saffron shrink-0" />
                  <a
                    href="tel:+17328227935"
                    className="text-cream/70 hover:text-saffron transition-colors text-sm md:text-base"
                  >
                    +1 (732) 822-7935
                  </a>
                </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0" />
                <a
                  href="mailto:hello@vinayakfood.com"
                  className="text-cream/70 hover:text-saffron transition-colors text-sm md:text-base break-all"
                >
                  hello@vinayakfood.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 md:mb-6 text-cream">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-saffron shrink-0" />
                <div className="text-cream/70 text-sm md:text-base">
                  <p className="font-medium text-cream">Mon - Fri</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-saffron shrink-0" />
                  <div className="text-cream/70 text-sm md:text-base">
                    <p className="font-medium text-cream">Sat - Sun</p>
                    <p>Holiday</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-cream/10">
          <div className="flex justify-center items-center">
            <p className="text-cream/50 text-xs md:text-sm text-center">
              © {new Date().getFullYear()} Vinayak Foods Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}