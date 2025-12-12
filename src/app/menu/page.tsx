"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
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

type Dish = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  spice_level: string
  is_vegetarian: boolean
  is_available: boolean
}

const menuItem = {
  tagline: "Our Signature Dish Since 2000",
  longDescription:
    "Experience the perfect balance of flavors in every bite. Our pani puri features hand-made crispy puris filled with a delicious mixture of spiced potatoes, chickpeas, and topped with our house-special tamarind and mint chutneys. Served with three varieties of our signature pani.",
  history:
    "Pani Puri, also known as Golgappa or Puchka across different regions of India, has been a beloved street food for centuries. Its origins trace back to the ancient kingdom of Magadha, where it was created as a light, flavorful snack. The dish evolved over generations, with each region adding its own unique twist to the tangy water and spicy fillings. At Vinayak Food Inc, we've perfected our recipe since 2000, honoring traditional methods while bringing our own family secrets passed down through generations. Every puri is hand-rolled and fried to golden perfection, just as it was done in the bustling markets of Old Delhi.",
  recipe: {
    ingredients: {
      puri: ["Semolina (Suji)", "All-purpose flour", "Baking soda", "Salt", "Water", "Oil for frying"],
      filling: ["Boiled potatoes (mashed)", "Boiled chickpeas", "Tamarind chutney", "Green chutney", "Chaat masala", "Roasted cumin powder", "Red chili powder", "Sev (chickpea noodles)"],
      pani: ["Fresh mint leaves", "Coriander leaves", "Green chilies", "Tamarind pulp", "Black salt", "Cumin powder", "Ginger", "Jaggery/Sugar", "Chilled water"]
    },
    steps: [
      "Mix semolina, flour, baking soda, and salt. Knead into a stiff dough with water.",
      "Roll the dough thin and cut into small circles. Deep fry until golden and puffed.",
      "Prepare the filling by mixing mashed potatoes, chickpeas, and spices.",
      "Blend mint, coriander, chilies, and spices with water to make the signature pani.",
      "Gently crack the top of each puri, fill with potato mixture, add chutneys and sev.",
      "Pour the tangy pani and serve immediately for maximum crunch."
    ]
  },
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
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDishes()
  }, [])

  const fetchDishes = async () => {
    const { data, error } = await supabase
      .from("dishes")
      .select("*")
      .eq("is_available", true)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setDishes(data)
    }
    setLoading(false)
  }

  const groupedDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = []
    }
    acc[dish.category].push(dish)
    return acc
  }, {} as Record<string, Dish[]>)

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
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Loading menu...</p>
            </div>
          ) : dishes.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No dishes available at the moment.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(groupedDishes).map(([category, categoryDishes]) => (
                <div key={category}>
                  <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 border-b-2 border-saffron pb-2">
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryDishes.map((dish) => (
                      <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64 w-full">
                          <Image
                            src={dish.image_url || menuItem.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                          />
                          {dish.is_vegetarian && (
                            <Badge className="absolute top-4 left-4 bg-green text-white">
                              <Leaf className="w-3 h-3 mr-1" />
                              Vegetarian
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                            {dish.name}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {dish.description}
                          </p>
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline" className="border-saffron text-saffron">
                              {dish.spice_level}
                            </Badge>
                            <span className="text-2xl font-bold text-saffron">
                              ${dish.price.toFixed(2)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <span className="text-saffron font-medium tracking-wider uppercase">
                The Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-cream mt-3 mb-8">
                History of Pani Puri
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed text-justify max-w-4xl mx-auto">
                {menuItem.history}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-center mb-10">
                <span className="text-saffron font-medium tracking-wider uppercase">
                  The Recipe
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-cream mt-3">
                  How We Make It
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-cream border-none shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                      Ingredients
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-saffron mb-2 text-lg">For the Puri:</h4>
                        <ul className="space-y-2">
                          {menuItem.recipe.ingredients.puri.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-charcoal/80">
                              <span className="text-saffron mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-saffron mb-2 text-lg">For the Filling:</h4>
                        <ul className="space-y-2">
                          {menuItem.recipe.ingredients.filling.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-charcoal/80">
                              <span className="text-saffron mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-saffron mb-2 text-lg">For the Pani:</h4>
                        <ul className="space-y-2">
                          {menuItem.recipe.ingredients.pani.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-charcoal/80">
                              <span className="text-saffron mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-cream border-none shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                      Preparation Steps
                    </h3>
                    <ol className="space-y-4">
                      {menuItem.recipe.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </span>
                          <p className="text-charcoal/80 leading-relaxed pt-1">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
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
              Visit Us to Order
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-xl mb-10"
            >
              Menu is display-only. Pricing shown in USD for in-person and pickup orders. No online ordering.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="bg-white text-saffron hover:bg-cream rounded-full px-8 py-6 text-lg"
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