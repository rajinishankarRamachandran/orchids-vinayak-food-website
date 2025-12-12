"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={menuItem.image}
                  alt="Pani Puri"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-saffron font-medium tracking-wider uppercase">
                  {menuItem.tagline}
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mt-3 mb-6">
                  Pani Puri
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {menuItem.longDescription}
              </p>
            </motion.div>
          </div>
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