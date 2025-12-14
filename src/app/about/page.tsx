"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, Sparkles } from "lucide-react";
import { assets } from "@/assets";

const timeline = [
  {
    year: "2000",
    title: "The Beginning",
    description:
      "Generations of Indian street food tradition, now serving Sayreville."
  },
  {
    year: "2005",
    title: "Bridge Between Continents",
    description:
      "Where ancestral recipes meet American spirit."
  },
  {
    year: "2015",
    title: "Guardians of Authenticity",
    description:
      "Keeping heritage alive, one pani puri at a time."
  },
  {
    year: "2024",
    title: "Years of Authentic Heritage",
    description:
      "24 years of authentic flavor, unchanged and unforgettable."
  },
  {
    year: "2025",
    title: "Growing Stronger",
    description:
      "Growing even stronger with the same authentic flavours."
  }
];

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with the same care as a home-cooked meal."
  },
  {
    icon: Users,
    title: "Family Recipe",
    description: "Passed down through three generations, our recipes are our heritage."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on ingredients or preparation methods."
  },
  {
    icon: Sparkles,
    title: "Fresh Daily",
    description: "All our ingredients are sourced fresh every single morning."
  }
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-24 md:py-32 bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.aboutPanipuri}
            alt="Vintage kitchen atmosphere"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-cream mt-3 md:mt-4 mb-4 md:mb-6">
              A Legacy of <span className="text-saffron">Tradition</span>
            </h1>
            <p className="text-base md:text-xl text-cream/80 max-w-2xl mx-auto !whitespace-pre-line px-2">
              Rooted in India's vibrant street food legacy, we honor centuries of chaat tradition, preserving authentic flavors — one Pani puri at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                Our Beginning
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal mt-2 md:mt-3 mb-4 md:mb-6">
                Tradition Through Generations
              </h2>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-snug text-justify space-y-3 md:space-y-4">
                <p>
                  In the year 2000, a dream crossed oceans to take root in Sayreville, New Jersey. Our founders brought generations of culinary wisdom and authentic Indian street food traditions, with an unwavering commitment to preserve heritage in every bite.
                </p>
                <p>
                  For over two decades, Vinayak Food Inc has been a bridge between continents. Each dish honors ancestral techniques while embracing the vibrant spirit of our new home, telling stories of heritage preserved and passion sustained.
                </p>
                <p>
                  Today, we stand proud as guardians of authenticity. Our mission remains unchanged: to transport you through flavor, honor the past while serving the present, and prove that true tradition knows no boundaries.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={assets.aboutPanipuri}
                  alt="Founders of Vinayak Food"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-saffron text-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-xl">
                <p className="text-3xl md:text-5xl font-serif font-bold">2000</p>
                <p className="text-xs md:text-sm opacity-90 mt-1">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
              The Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3 mb-6 md:mb-8">
              History of Pani Puri
            </h2>
            <div className="text-cream/80 text-base md:text-lg leading-relaxed text-left max-w-4xl mx-auto space-y-4">
              <p>
                Pani Puri, also known as Golgappa, traces its origins to North India, particularly the region of Uttar Pradesh. This beloved street food possibly evolved from Raj-Kachori, where an accidentally-made smaller puri gave birth to what we now know as panipuri. The dish spread across India during the 20th century, carried by people migrating from one part of the country to another.
              </p>
              
              <div className="mt-6">
                <h3 className="text-cream font-semibold text-lg mb-3">The Evolution:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span>The dish consists of a small, hollow, fried wheat and/or semolina shell filled with spiced mashed potatoes and served with flavored water (diluted chutney)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span>Over time, variations emerged reflecting regional preferences and ingredient availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span><strong>Khatta Meetha Pani</strong> (sweet and sour water): Made with tamarind and jaggery, known as the brown water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span><strong>Theeka Pani</strong> (spicy water): The green water made with mint, coriander, and green chillies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span>Both waters can include boondi (fried chickpea flour) garnishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span>Regional variations include sweet flavors like fruit juices or dates, and toppings like sev</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-saffron shrink-0 mt-2" />
                    <span>Some regions feature distinctive variations, such as white-colored pani that retains a spicy kick, traditionally handed down through generations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3">
              Milestones Through Time
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30 md:-translate-x-1/2" />

            <div className="space-y-6 md:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ml-10 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-charcoal/50 backdrop-blur p-5 md:p-8 rounded-xl md:rounded-2xl border border-cream/10">
                      <span className="text-saffron font-serif text-2xl md:text-3xl font-bold">
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-serif font-bold text-cream mt-1 md:mt-2 mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-cream/70 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:relative md:left-auto w-3 h-3 md:w-4 md:h-4 rounded-full bg-saffron ring-4 ring-saffron/30 z-10 shrink-0 -translate-x-1/2 md:translate-x-0" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3">
              What We Believe In
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-saffron/10 flex items-center justify-center group-hover:bg-saffron transition-colors">
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-saffron group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base md:text-xl font-serif font-bold text-charcoal mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green to-green-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
              Come Taste Our Story
            </h2>
            <p className="text-white/90 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-2">
              Experience the flavors that have brought joy to thousands. Visit us today and become part of the Vinayak family.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-green hover:bg-cream rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl transition-transform hover:scale-110 w-full sm:w-auto"
              >
                <Link href="/menu">
                  View Menu
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green hover:bg-cream rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl transition-transform hover:scale-110 w-full sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}