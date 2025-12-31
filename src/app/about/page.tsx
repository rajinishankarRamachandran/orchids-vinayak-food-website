"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, Sparkles } from "lucide-react";
import { assets } from "@/assets";
import { useEffect, useState } from "react";

const timeline = [
  {
    year: "2000",
    title: "Foundation of Excellence",
    description:
      "Established in Sayreville with a commitment to authentic quality and consistent delivery standards."
  },
  {
    year: "2005",
    title: "Scaling Operations",
    description:
      "Expanded production capacity while maintaining artisanal quality, serving growing regional demand."
  },
  {
    year: "2015",
    title: "Industry Recognition",
    description:
      "Became preferred supplier for restaurants and caterers seeking authentic Indian street food."
  },
  {
    year: "2024",
    title: "Trusted by Businesses",
    description:
      "24 years of proven reliability, serving partners who value consistency and authenticity."
  },
  {
    year: "2025",
    title: "Partnership-Ready Growth",
    description:
      "Enhanced capacity and streamlined supply chains to better serve wholesale and catering partners."
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

const chefs = [
  {
    name: "Deepak Gupta",
    role: "Production Lead & Quality Master",
    description: "With 15 years of expertise in traditional pani puri craftsmanship, Kaushal ensures every batch meets our uncompromising standards. His dedication to perfecting the hollow puri and maintaining consistency has made him the backbone of our production facility, bringing authentic taste to homes and businesses alike."
  },
  {
    name: "Kaushal Naik",
    role: "Distribution & Wholesale Manager",
    description: "Deepak's passion for connecting authentic flavors with communities drives our wholesale operations. With a decade of experience in food logistics, he ensures our fresh pani puri reaches homes and shops across the region while maintaining the quality and care that defines Vinayak Foods Inc."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className={`curtain ${scrolled ? 'active' : ''}`}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold tracking-wider uppercase text-base md:text-lg">
              Our Story
            </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-cream mt-3 md:mt-4 mb-4 md:mb-6">
                A Legacy of <span className="bg-gradient-to-br from-green to-green-dark bg-clip-text text-transparent">Tradition</span>
              </h1>
            <p className="text-base md:text-xl text-cream/80 max-w-2xl mx-auto !whitespace-pre-line px-2">
              Rooted in India's vibrant street food legacy, we honor centuries of chaat tradition, preserving authentic flavors — one Pani puri at a time.
            </p>
          </div>
        </div>
      </div>
      <div className={`reveal-main ${scrolled ? 'activetwo' : ''}`}></div>
      <div className={`main-content ${scrolled ? 'active' : ''}`}>
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="order-2 lg:order-1"
              >
                <motion.span variants={fadeInUp} className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                  Our Beginning
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal mt-2 md:mt-3 mb-4 md:mb-6">
                  Tradition Through Generations
                </motion.h2>
                <motion.div variants={fadeInUp} className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-snug text-justify space-y-3 md:space-y-4">
                  <p>
                    In the year 2000, a dream crossed oceans to take root in Sayreville, New Jersey. Our founders brought generations of culinary wisdom and authentic Indian street food traditions, with an unwavering commitment to preserve heritage in every bite.
                  </p>
                  <p>
                    For over two decades, Vinayak Foods Inc has been a bridge between continents. Each dish honors ancestral techniques while embracing the vibrant spirit of our new home, telling stories of heritage preserved and passion sustained.
                  </p>
                  <p>
                    Today, we stand proud as guardians of authenticity. Our mission remains unchanged: to transport you through flavor, honor the past while serving the present, and prove that true tradition knows no boundaries.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={assets.aboutPanipuri}
                    alt="Founders of Vinayak Foods Inc"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-saffron text-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-xl">
                  <p className="text-3xl md:text-5xl font-serif font-bold">2000</p>
                  <p className="text-xs md:text-sm opacity-90 mt-1">Year Founded</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-charcoal relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16"
            >
              <motion.span variants={fadeInUp} className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                The Story
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3">
                History of Pani Puri
              </motion.h2>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block sticky top-24 float-right w-80 ml-8 mb-8 bg-gradient-to-br from-saffron/10 to-saffron/5 border-2 border-saffron/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                  <span className="text-saffron font-semibold text-sm tracking-wider uppercase">
                    Ancient Origins
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-4">
                  The Puri's Heritage
                </h3>
                <div className="space-y-3 text-cream/80 text-sm leading-relaxed text-justify">
                  <p>
                    The puri traces its origins over 2,500 years to ancient Magadha, modern-day Bihar and Uttar Pradesh, along the banks of the Ganges River. Initially served cold to royalty during intense summer months, this delicacy became a symbol of resourcefulness and culinary artistry.
                  </p>
                  <p>
                    According to Mahabharata legend, Draupadi created the first puri when challenged by Kunti to feed five sons with limited wheat dough and leftover aloo sabzi—demonstrating ingenuity that defined generations.
                  </p>
                  <p className="pt-2 border-t border-saffron/20">
                    <span className="font-semibold text-cream">Traditional Craft:</span> Semolina (suji) mixed with all-purpose flour, kneaded firm, rested, rolled thin, and fried at precise temperatures until golden and hollow—a technique unchanged through millennia.
                  </p>
                </div>
              </div>

              <div className="space-y-12 md:space-y-20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="order-2 lg:order-1"
                  >
                    <motion.span variants={fadeInUp} className="inline-block bg-saffron/20 text-saffron px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      Origins
                    </motion.span>
                    <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4">
                      A Street Food Icon
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-cream/90 text-base md:text-lg leading-relaxed text-justify">
                      Pani Puri, known across India as Golgappa, originated in North India and has become one of the nation's most beloved street foods. This iconic delicacy combines crispy hollow shells with flavorful fillings and signature spiced waters, representing centuries of culinary evolution and regional adaptation.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={assets.streetFoodIcon}
                          alt="Traditional Pani Puri"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                    </div>
                  </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={assets.handRolledPuri}
                        alt="Handcrafted Puri"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="order-2"
                  >
                    <motion.span variants={fadeInUp} className="inline-block bg-saffron/20 text-saffron px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      Our Craft
                    </motion.span>
                    <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4">
                      Hand-Rolled Perfection
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-cream/90 text-base md:text-lg leading-relaxed text-justify">
                      At Vinayak Foods Inc, we honor this tradition by hand-rolling each puri from premium semolina flour. Our process maintains the authentic techniques that create the perfect golden, crispy sphere with a delicate hollow center—a craft passed down through generations of master artisans.
                    </motion.p>
                  </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="order-2 lg:order-1"
                  >
                    <motion.span variants={fadeInUp} className="inline-block bg-saffron/20 text-saffron px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      Signature Waters
                    </motion.span>
                    <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4">
                      Artisanal Flavor Profiles
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-cream/90 text-base md:text-lg leading-relaxed text-justify">
                      Our pani puri shells are delicately rolled and fried to perfect hollow spheres using traditional techniques. Light and crisp, with a gentle toasted aroma, each shell balances crunch and finesse. Every bite reflects the legacy and precision of authentic Indian chaat craftsmanship.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={assets.aboutPanipuri}
                        alt="Signature Waters"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={assets.homePanipuri}
                        alt="Fresh Daily Preparation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="order-2"
                  >
                    <motion.span variants={fadeInUp} className="inline-block bg-saffron/20 text-saffron px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      Daily Commitment
                    </motion.span>
                    <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-bold text-cream mb-4">
                      Fresh Every Morning
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-cream/90 text-base md:text-lg leading-relaxed text-justify">
                      Every element is crafted fresh each morning, ensuring you experience the authentic taste that has made Pani Puri a cherished part of Indian culinary heritage for generations. Our dedication to quality and tradition remains unwavering, from dawn preparation to the moment of service.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-charcoal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16"
            >
              <motion.span variants={fadeInUp} className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                Our Journey
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3">
                Milestones Through Time
              </motion.h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30 md:-translate-x-1/2" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-6 md:space-y-12"
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    variants={fadeInUp}
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
                        <p className="text-cream/70 text-sm md:text-base text-justify">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:relative md:left-auto w-3 h-3 md:w-4 md:h-4 rounded-full bg-saffron ring-4 ring-saffron/30 z-10 shrink-0 -translate-x-1/2 md:translate-x-0" />

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-terracotta">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16"
            >
              <motion.span variants={fadeInUp} className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                Our Values
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3">
                What We Believe In
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-saffron/10 flex items-center justify-center group-hover:bg-saffron transition-colors">
                    <value.icon className="w-6 h-6 md:w-8 md:h-8 text-saffron group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base md:text-xl font-serif font-bold text-charcoal mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-base">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-charcoal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16"
            >
              <motion.span variants={fadeInUp} className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                Meet Our Team
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3">
                The Masters Behind the Magic
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
              {chefs.map((chef, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-charcoal/80 to-charcoal border border-cream/10 p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:border-saffron/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl md:text-3xl font-serif font-bold text-white">
                        {chef.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-cream">
                        {chef.name}
                      </h3>
                      <p className="text-saffron text-sm md:text-base font-medium mt-1">
                        {chef.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-cream/80 text-sm md:text-base leading-relaxed text-justify">
                    {chef.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-green to-green-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
                Come Taste Our Story
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/90 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                Experience the flavors that have brought joy to thousands. Visit us today and become part of the Vinayak family.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}