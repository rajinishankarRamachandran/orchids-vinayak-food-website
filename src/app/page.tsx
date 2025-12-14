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
  Droplets,
  Cookie,
  Hand } from
"lucide-react";
import { assets } from "@/assets";
import { useEffect, useState } from "react";

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

const whyCards = [
{
  icon: ChefHat,
  title: "Traditional Since 2000",
  description:
  "Over two decades of perfecting the art of authentic chaat, passed down through generations."
},
{
  icon: Leaf,
  title: "Authenticity You Can Crunch",
  description:
  "Freshly made in-house every day, using a time-honored blend of ingredients."
},
{
  icon: Clock,
  title: "Fresh & Sourced Daily",
  description:
  "We source the freshest ingredients every morning from local markets for the best taste."
}];


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
}];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Home page mounted successfully");
    
    const handleScroll = () => {
      if (window.scrollY > 320) {
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
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
          <Image
            src={assets.logo}
            alt="Vinayak Food Inc"
            width={600}
            height={600}
            className="w-64 h-64 md:w-96 md:h-96 object-contain mb-6"
            priority
          />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4 text-center drop-shadow-xl px-2">
            Where Every Bite Tells a Story
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-cream/90 mb-8 leading-relaxed max-w-3xl text-center drop-shadow-lg px-4">
            Authentic Pani Puri & traditional chaat crafted with love since 2000. Experience the taste of tradition at Vinayak Food Inc.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-4">
            <Button
              asChild
              size="lg"
              className="bg-saffron hover:bg-saffron-dark text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl transition-all hover:scale-110 w-full sm:w-auto">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-cream/20 hover:bg-cream/30 text-cream border-2 border-cream/40 backdrop-blur-xl rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl transition-all hover:scale-110 w-full sm:w-auto">
              <Link href="/about">
                Our Story
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 md:p-2 backdrop-blur-sm bg-white/5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`reveal-main ${scrolled ? 'activetwo' : ''}`}></div>
      <div className={`main-content ${scrolled ? 'active' : ''}`}>
        <section className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16">

              <motion.span
                variants={fadeInUp}
                className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">

                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3">

                Authentic Chaat Experience
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">

              {whyCards.map((card, index) =>
              <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white">
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-saffron/10 flex items-center justify-center">
                        <card.icon className="w-7 h-7 md:w-8 md:h-8 text-saffron" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif font-bold text-charcoal mb-2 md:mb-3">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grain" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="order-2 lg:order-1">

                <motion.span
                  variants={fadeInUp}
                  className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">

                  Our Signature
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3 mb-4 md:mb-6">

                  Pani Puri
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-cream/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">

                  Perfectly crisp, golden-brown hollow shells made from premium semolina — 
                  the authentic foundation of every great pani puri. Handcrafted daily since 
                  2000 using traditional techniques, our puris deliver that signature crunch 
                  with every bite.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <p className="text-cream flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-saffron shrink-0" />
                    Premium semolina flour sourced from certified mills
                  </p>
                  <p className="text-cream flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-saffron shrink-0" />
                    Perfectly uniform thickness for consistent crunch
                  </p>
                  <p className="text-cream flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-saffron shrink-0" />
                    Fried at optimal temperature to lock in freshness
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-saffron hover:bg-saffron-dark text-white rounded-full px-6 md:px-8 shadow-lg transition-transform hover:scale-110 w-full sm:w-auto">

                    <Link href="/menu" className="flex items-center justify-center">
                      View menu
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
                className="relative order-1 lg:order-2">

                <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={assets.homePanipuri}
                    alt="Pani Puri plate with chutneys and filling"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    priority />

                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-saffron text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                  <p className="text-2xl md:text-3xl font-serif font-bold">24+</p>
                  <p className="text-xs md:text-sm opacity-90">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-cream-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-10 md:mb-16">

              <motion.span
                variants={fadeInUp}
                className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">

                The Process
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3">

                How It&apos;s Made
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

              {howItsMadeSteps.map((step, index) =>
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative">

                {index < howItsMadeSteps.length - 1 &&
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-saffron/50 to-transparent" />
              }
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-saffron" />
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-green text-white flex items-center justify-center text-xs md:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-base md:text-xl font-serif font-bold text-charcoal mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-base leading-tight md:leading-normal">{step.description}</p>
              </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-saffron to-saffron-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grain" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">

                Ready to Experience Authentic Taste?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/90 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-2">

                Join thousands of happy customers who have made Vinayak Food their
                go-to destination for authentic Indian chaat.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-saffron hover:bg-cream rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-110 w-full sm:w-auto">

                  <Link href="/menu">View Menu</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-xl rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-110 w-full sm:w-auto">

                  <Link href="/contact">Visit Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}