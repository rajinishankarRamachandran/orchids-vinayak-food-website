"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
}];


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
}];


export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=600&fit=crop"
            alt="Vintage kitchen atmosphere"
            fill
            className="object-cover opacity-30"
            priority />

          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center">

            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase">

              Our Story
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-serif font-bold text-cream mt-4 mb-6">

              A Legacy of <span className="text-saffron">Tradition</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/80 max-w-2xl mx-auto !whitespace-pre-line">Rooted in India's vibrant street food legacy, we honor centuries of chaat tradition, preserving authentic flavors — one Pani puri at a time.



            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <span className="text-saffron font-medium tracking-wider uppercase">
                Our Beginning
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mt-3 mb-6 whitespace-nowrap">
                Tradition Through Generations
              </h2>
              <div className="text-muted-foreground text-lg leading-snug text-justify space-y-4">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative">

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pani-puri-1765517875697.jpg?width=8000&height=8000&resize=contain"
                  alt="Founders of Vinayak Food"
                  fill
                  className="object-cover" />

              </div>
              <div className="absolute -bottom-8 -right-8 bg-saffron text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-serif font-bold">2000</p>
                <p className="text-sm opacity-90 mt-1">Year Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16">

            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase">

              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-cream mt-3">

              Milestones Through Time
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) =>
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`
                }>

                  <div
                  className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"}`
                  }>

                    <div className="bg-charcoal/50 backdrop-blur p-8 rounded-2xl border border-cream/10">
                      <span className="text-saffron font-serif text-3xl font-bold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-cream mt-2 mb-3 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                        {item.title}
                      </h3>
                      <p className="text-cream/70">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-saffron ring-4 ring-saffron/30 z-10 shrink-0" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16">

            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase">

              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mt-3">

              What We Believe In
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value, index) =>
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow">

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-saffron/10 flex items-center justify-center group-hover:bg-saffron transition-colors">
                  <value.icon className="w-8 h-8 text-saffron group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green to-green-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">

              Come Taste Our Story
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">

              Experience the flavors that have brought joy to thousands. Visit
              us today and become part of the Vinayak family.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4">

              <Button
                asChild
                size="lg"
                className="bg-white text-green hover:bg-cream rounded-full px-8 py-6 text-lg shadow-xl transition-transform hover:scale-110">

                <Link href="/menu">
                  View Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green hover:bg-cream rounded-full px-8 py-6 text-lg shadow-xl transition-transform hover:scale-110">

                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>);

}