"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Flame,
  Leaf,
  Clock,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  Info,
} from "lucide-react"
import { toast } from "sonner"

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
    { id: "single", name: "Single Plate (6 pcs)", price: 80 },
    { id: "double", name: "Double Plate (12 pcs)", price: 150 },
    { id: "family", name: "Family Pack (24 pcs)", price: 280 },
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
    { id: "chutney", name: "Extra Chutney", price: 20 },
    { id: "sev", name: "Extra Sev", price: 15 },
    { id: "pani", name: "Extra Pani (any)", price: 10 },
  ],
  allergens: ["Gluten", "Dairy-free option available"],
  prepTime: "5-7 mins",
  rating: 4.9,
  reviews: 2847,
}

export default function MenuPage() {
  const [selectedSize, setSelectedSize] = useState(menuItem.prices[0])
  const [selectedSpice, setSelectedSpice] = useState(menuItem.spiceLevels[1])
  const [selectedWater, setSelectedWater] = useState(menuItem.waterTypes[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isAdded, setIsAdded] = useState(false)

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    )
  }

  const calculateTotal = () => {
    const basePrice = selectedSize.price * quantity
    const extrasPrice = selectedExtras.reduce((sum, extraId) => {
      const extra = menuItem.extras.find((e) => e.id === extraId)
      return sum + (extra?.price || 0) * quantity
    }, 0)
    return basePrice + extrasPrice
  }

  const handleAddToCart = () => {
    setIsAdded(true)
    toast.success("Added to cart!", {
      description: `${quantity}x ${selectedSize.name} - ₹${calculateTotal()}`,
    })
    setTimeout(() => setIsAdded(false), 2000)
  }

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
                    {menuItem.rating} ({menuItem.reviews.toLocaleString()}{" "}
                    reviews)
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
                      Select Size
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {menuItem.prices.map((price) => (
                        <button
                          key={price.id}
                          onClick={() => setSelectedSize(price)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            selectedSize.id === price.id
                              ? "border-saffron bg-saffron/5"
                              : "border-border hover:border-saffron/50"
                          }`}
                        >
                          <p className="font-medium text-charcoal text-sm">
                            {price.name}
                          </p>
                          <p className="text-saffron font-bold text-lg">
                            ₹{price.price}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Spice Level
                    </label>
                    <div className="flex gap-3">
                      {menuItem.spiceLevels.map((spice) => (
                        <button
                          key={spice.id}
                          onClick={() => setSelectedSpice(spice)}
                          className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                            selectedSpice.id === spice.id
                              ? "border-saffron bg-saffron/5"
                              : "border-border hover:border-saffron/50"
                          }`}
                        >
                          <p className="text-xl mb-1">{spice.icon}</p>
                          <p className="text-sm font-medium text-charcoal">
                            {spice.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Pani Type
                    </label>
                    <Select
                      value={selectedWater.id}
                      onValueChange={(val) =>
                        setSelectedWater(
                          menuItem.waterTypes.find((w) => w.id === val)!
                        )
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {menuItem.waterTypes.map((water) => (
                          <SelectItem key={water.id} value={water.id}>
                            <div className="flex flex-col">
                              <span>{water.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {water.description}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Extras
                    </label>
                    <div className="space-y-2">
                      {menuItem.extras.map((extra) => (
                        <button
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                            selectedExtras.includes(extra.id)
                              ? "border-saffron bg-saffron/5"
                              : "border-border hover:border-saffron/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                                selectedExtras.includes(extra.id)
                                  ? "border-saffron bg-saffron"
                                  : "border-border"
                              }`}
                            >
                              {selectedExtras.includes(extra.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className="font-medium text-charcoal">
                              {extra.name}
                            </span>
                          </div>
                          <span className="text-saffron font-medium">
                            +₹{extra.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-3 block">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 rounded-xl border-2 border-border hover:border-saffron flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5 text-charcoal" />
                      </button>
                      <span className="text-2xl font-bold text-charcoal w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 rounded-xl border-2 border-border hover:border-saffron flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5 text-charcoal" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between p-6 bg-charcoal rounded-2xl mb-6">
                <div>
                  <p className="text-cream/70 text-sm">Total</p>
                  <p className="text-cream text-3xl font-serif font-bold">
                    ₹{calculateTotal()}
                  </p>
                </div>
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className={`rounded-full px-8 py-6 text-lg shadow-xl transition-all ${
                    isAdded
                      ? "bg-green hover:bg-green-dark"
                      : "bg-saffron hover:bg-saffron-dark"
                  }`}
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-muted-foreground text-sm">
                Pickup only • Ready in {menuItem.prepTime}
              </p>
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