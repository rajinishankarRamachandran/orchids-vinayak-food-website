"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Clock, Star, Info } from "lucide-react"

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

const menuItem = {
  name: "Pani Puri",
  tagline: "Our Signature Dish Since 2000",
  description:
    "Crisp, hollow shells filled with spiced potato, crunchy sev, house chutneys & our signature tangy pani — handcrafted with love.",
  longDescription:
    "Experience the perfect balance of flavors in every bite. Our pani puri features hand-made crispy puris filled with a delicious mixture of spiced potatoes, chickpeas, and topped with our house-special tamarind and mint chutneys. Served with three varieties of our signature pani.",
  image:
    "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&h=600&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
  ],
  prices: [
    { id: "single", name: "Single Plate (6 pcs)", price: 8 },
    { id: "double", name: "Double Plate (12 pcs)", price: 14 },
    { id: "family", name: "Family Pack (24 pcs)", price: 26 },
  ],
  spiceLevels: [
    { id: "mild", name: "Mild", icon: "🌶️" },
    { id: "medium", name: "Medium", icon: "🌶️🌶️" },
    { id: "hot", name: "Hot", icon: "🌶️🌶️🌶️" },
  ],
  waterTypes: [
    { id: "tangy", name: "Tangy (Imli)", description: "Sweet & sour tamarind" },
    { id: "spicy", name: "Spicy (Pudina)", description: "Mint with green chili" },
    { id: "sweet", name: "Sweet (Meetha)", description: "Dates & jaggery blend" },
  ],
  extras: [
    { id: "chutney", name: "Extra Chutney", price: 2 },
    { id: "sev", name: "Extra Sev", price: 1 },
    { id: "pani", name: "Extra Pani (any)", price: 1.5 },
  ],
  allergens: ["Gluten", "Dairy-free option available"],
  prepTime: "5-7 mins",
  rating: 4.9,
  reviews: 2847,
}

export default function MenuPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&h=600&fit=crop"
            alt="Pani Puri spread"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="text-saffron font-medium tracking-wider uppercase"
            >
              Our Menu
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-serif font-bold text-cream mt-4 mb-6"
            >
              Authentic <span className="text-saffron">Flavors</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/80 max-w-2xl mx-auto"
            >
              Handcrafted with traditional recipes passed down through
              generations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-28">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-6">
                  <Image
                    src={menuItem.image}
                    alt={menuItem.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-saffron text-white">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {menuItem.rating} ({menuItem.reviews.toLocaleString()} reviews)
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {menuItem.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden shadow-md"
                    >
                      <Image
                        src={img}
                        alt={`${menuItem.name} gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-saffron text-saffron"
              >
                {menuItem.tagline}
              </Badge>

              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
                {menuItem.name}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {menuItem.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-saffron" />
                  Prep: {menuItem.prepTime}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="w-4 h-4 text-green" />
                  Vegetarian
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-saffron" />
                  {menuItem.allergens.join(", ")}
                </div>
              </div>

              <Card className="border-2 border-border mb-6">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Portions & Pricing
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {menuItem.prices.map((price) => (
                        <div
                          key={price.id}
                          className="p-4 rounded-xl border-2 border-border bg-white shadow-sm"
                        >
                          <p className="font-medium text-charcoal text-sm">
                            {price.name}
                          </p>
                          <p className="text-saffron font-bold text-2xl">
                            ${price.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Spice Levels
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {menuItem.spiceLevels.map((spice) => (
                        <div
                          key={spice.id}
                          className="p-3 rounded-xl border-2 border-border bg-white text-center"
                        >
                          <p className="text-xl mb-1">{spice.icon}</p>
                          <p className="text-sm font-medium text-charcoal">
                            {spice.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Pani Options
                    </label>
                    <div className="space-y-3">
                      {menuItem.waterTypes.map((water) => (
                        <div
                          key={water.id}
                          className="p-3 rounded-xl border-2 border-border bg-white flex justify-between gap-3"
                        >
                          <div>
                            <p className="font-semibold text-charcoal">{water.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {water.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Add-ons
                    </label>
                    <div className="space-y-2">
                      {menuItem.extras.map((extra) => (
                        <div
                          key={extra.id}
                          className="flex items-center justify-between p-3 rounded-xl border-2 border-border bg-white"
                        >
                          <span className="font-medium text-charcoal">
                            {extra.name}
                          </span>
                          <span className="text-saffron font-semibold">${extra.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-charcoal rounded-2xl text-cream">
                <p className="text-lg font-serif font-bold">Visit Us to Order</p>
                <p className="text-cream/80 mt-2">
                  Menu is display-only. Pricing shown in USD for in-person and pickup orders. No online ordering.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-saffron to-saffron-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6"
            >
              More Items Coming Soon
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-xl mb-10"
            >
              We&apos;re expanding our menu with more authentic chaat items.
              Stay tuned!
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="bg-white text-saffron hover:bg-cream rounded-full px-8 py-6 text-lg"
              >
                <Link href="/contact">Get Notified</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}