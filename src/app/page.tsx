"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChefHat,
  Leaf,
  Clock,
  Star,
  ArrowRight,
  Flame,
  Cookie,
  Hand
} from "lucide-react";
import { assets } from "@/assets";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const whyCards = [
  {
    icon: ChefHat,
    title: "Traditional Since 2000",
    description: "Over two decades of perfecting the art of authentic chaat, passed down through generations."
  },
  {
    icon: Leaf,
    title: "Authenticity You Can Crunch",
    description: "Freshly made in-house every day, using a time-honored blend of ingredients."
  },
  {
    icon: Clock,
    title: "Fresh & Sourced Daily",
    description: "We source the freshest ingredients every morning from local markets for the best taste."
  }
];

const howItsMadeSteps = [
  {
    icon: Cookie,
    title: "Mix Dough",
    description: "Hand-kneaded semolina dough with precise water ratio"
  },
  {
    icon: Hand,
    title: "Roll & Shape",
    description: "Rolled to uniform thickness and cut into perfect circles"
  },
  {
    icon: Flame,
    title: "Deep Fry",
    description: "Fried at precise temperature until golden and crispy"
  },
  {
    icon: Star,
    title: "Quality Check",
    description: "Each puri inspected for perfect crunch and hollow center"
  }
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = window.innerHeight * 0.4;
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className={`curtain ${scrolled ? 'active' : ''}`}>
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
          <Image
            src={assets.logo}
            alt="Vinayak Foods Inc"
            width={600}
            height={600}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-contain mb-2 sm:mb-3"
            priority
            loading="eager"
          />

          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-cream mb-4 sm:mb-5 md:mb-6 text-center drop-shadow-xl px-3 sm:px-4 leading-tight">
            Where Every Bite Tells a Story
          </h2>

          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-cream/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl text-center drop-shadow-lg px-4 sm:px-6">
            Authentic Pani Puri & traditional chaat crafted with love since 2000. Experience the taste of tradition at Vinayak Foods Inc.
          </p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full px-4 max-w-sm sm:max-w-none">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-full px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-xl transition-all hover:scale-105 sm:hover:scale-110 w-full sm:w-auto font-semibold"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-cream/20 hover:bg-cream/30 text-cream border-2 border-cream/40 backdrop-blur-xl rounded-full px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-xl transition-all hover:scale-105 sm:hover:scale-110 w-full sm:w-auto"
              >
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
      <div className={`reveal-main ${scrolled ? 'activetwo' : ''}`}></div>
      <div className={`main-content ${scrolled ? 'active' : ''}`}>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${assets.whyChooseUsBg})`,
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-charcoal font-medium tracking-wider uppercase text-xs sm:text-sm md:text-base"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3 px-2"
              >
                Authentic Chaat Experience
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            >
              {whyCards.map((card, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white">
                    <CardContent className="p-5 sm:p-6 md:p-7 lg:p-8 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 rounded-full bg-saffron/10 flex items-center justify-center">
                        <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-saffron" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-charcoal mb-2 md:mb-3">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grain" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-saffron font-medium tracking-wider uppercase text-xs sm:text-sm md:text-base"
              >
                Our Heritage
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mt-2 md:mt-3 px-2"
              >
                Two Decades of Tradition
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                variants={staggerContainer}
                className="order-2 lg:order-1"
              >
                <motion.p
                  variants={fadeInUp}
                  className="text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 text-justify"
                >
                  Since 2000, Vinayak Foods Inc has been serving authentic pani puri and traditional Indian chaat to our community. What started as a small family venture has grown into a beloved destination for food lovers seeking genuine flavors and time-honored recipes.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 text-justify"
                >
                  Our commitment to quality and authenticity has remained unchanged through the years. We continue to prepare every dish with the same care and attention that made us a household name.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-saffron hover:bg-saffron-dark text-white rounded-full px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-lg transition-transform hover:scale-105 sm:hover:scale-110 w-full sm:w-auto"
                  >
                    <Link href="/about" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none"
              >
                <div className="relative aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={assets.homePanipuri}
                    alt="Authentic Pani Puri"
                    fill
                    sizes="(max-width: 768px) 90vw, 50vw"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-saffron text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl">
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">24+</p>
                    <p className="text-[10px] sm:text-xs md:text-sm opacity-90 whitespace-nowrap">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-saffron font-medium tracking-wider uppercase text-xs sm:text-sm md:text-base"
              >
                The Process
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3 px-2"
              >
                How It&apos;s Made
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            >
              {howItsMadeSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center relative"
                >
                  {index < howItsMadeSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-saffron/50 to-transparent" />
                  )}
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-saffron" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:top-0 sm:right-0 md:-top-1 md:-right-1 lg:-top-2 lg:-right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-green text-white flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold text-charcoal mb-1 sm:mb-1.5 md:mb-2 px-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-snug md:leading-normal px-1">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-saffron to-saffron-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grain" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2"
              >
                Ready to Experience Authentic Taste?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-2xl mx-auto px-2 sm:px-4"
              >
                Join thousands of happy customers who have made Vinayak Foods Inc their
                go-to destination for authentic Indian chaat.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 px-4 max-w-md sm:max-w-none mx-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-saffron hover:bg-cream rounded-full px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 sm:hover:scale-110 w-full sm:w-auto font-semibold"
                >
                  <Link href="/menu">View Menu</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-xl rounded-full px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 sm:hover:scale-110 w-full sm:w-auto"
                >
                  <Link href="/contact">Visit Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}