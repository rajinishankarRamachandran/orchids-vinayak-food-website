"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChefHat,
  Leaf,
  Clock,
  Star,
  ArrowRight,
  Flame,
  Droplets,
  Cookie,
  Hand,
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const whyCards = [
  {
    icon: ChefHat,
    title: "Traditional Since 2000",
    description:
      "Over two decades of perfecting the art of authentic chaat, passed down through generations.",
  },
  {
    icon: Leaf,
    title: "House-Made Chutneys",
    description:
      "Our secret blend of tangy, sweet, and spicy chutneys made fresh daily in-house.",
  },
  {
    icon: Clock,
    title: "Fresh & Sourced Daily",
    description:
      "We source the freshest ingredients every morning from local markets for the best taste.",
  },
]

const howItsMadeSteps = [
  {
    icon: Cookie,
    title: "The Dough",
    description: "Hand-kneaded semolina dough, rolled to perfect thickness",
  },
  {
    icon: Flame,
    title: "Deep Fried",
    description: "Crispy golden puris fried at precise temperature",
  },
  {
    icon: Hand,
    title: "The Filling",
    description: "Spiced potato, chickpeas, and crunchy sev",
  },
  {
    icon: Droplets,
    title: "The Pani",
    description: "Our signature tangy mint water, served chilled",
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center liquid-glass-bg">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-pink-900/40 animate-gradient-shift" />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glass-orb"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full glass-orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full glass-orb-3"
            animate={{
              x: [-50, 50, -50],
              y: [30, -30, 30],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-10 glass-card p-6 rounded-3xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1765504740318.png?width=8000&height=8000&resize=contain"
                alt="Vinayak Food Inc logo"
                width={1400}
                height={500}
                className="h-56 sm:h-72 lg:h-80 w-auto max-w-[95vw]"
                priority
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 whitespace-nowrap drop-shadow-2xl"
            >
              Where Every Bite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Tells a Story</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl text-center drop-shadow-lg"
            >
              Authentic Pani Puri & traditional chaat crafted with love since
              2000. Experience the taste of tradition at Vinayak Food Inc.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="glass-button bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-xl rounded-full px-8 py-6 text-lg shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-button bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 backdrop-blur-xl rounded-full px-8 py-6 text-lg shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
              >
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mt-3"
            >
              The Vinayak Difference
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyCards.map((card, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-saffron/10 flex items-center justify-center group-hover:bg-saffron group-hover:scale-110 transition-all">
                      <card.icon className="w-8 h-8 text-saffron group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grain" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-saffron font-medium tracking-wider uppercase"
              >
                Our Signature
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-serif font-bold text-cream mt-3 mb-6"
              >
                Pani Puri
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream/70 text-lg leading-relaxed mb-8"
              >
                Crisp, hollow shells filled with spiced potato, crunchy sev,
                house chutneys & our signature tangy pani — handcrafted since
                2000. Each bite is an explosion of flavors that transport you to
                the streets of India.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                <p className="text-cream flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-saffron" />
                  Choose your spice level: Mild, Medium, or Hot
                </p>
                <p className="text-cream flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-saffron" />
                  Select your pani: Tangy, Sweet, or Spicy
                </p>
                <p className="text-cream flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-saffron" />
                  Add extra chutney upon request
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  className="bg-saffron hover:bg-saffron-dark text-white rounded-full px-8 shadow-lg"
                >
                  <Link href="/menu">
                    View Menu — Starting at $8
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&h=800&fit=crop"
                  alt="Pani Puri plate with chutneys and filling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-saffron text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-serif font-bold">24+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase"
            >
              The Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mt-3"
            >
              How It&apos;s Made
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-saffron" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-saffron to-saffron-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grain" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6"
            >
              Ready to Experience Authentic Taste?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-xl mb-10 max-w-2xl mx-auto"
            >
              Join thousands of happy customers who have made Vinayak Food their
              go-to destination for authentic Indian chaat.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-saffron hover:bg-cream rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                <Link href="/contact">Visit Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}