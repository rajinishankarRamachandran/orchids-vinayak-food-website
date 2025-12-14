"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const menuItem = {
  tagline: "Our Signature Dish Since 2000",
  longDescription:
  "Experience the perfect balance of flavors in every bite. Our pani puri features hand-made crispy puris filled with a delicious mixture of spiced potatoes, chickpeas, and topped with our house-special tamarind and mint chutneys. Served with three varieties of our signature pani.",
  history:
  "Pani Puri, also known as Golgappa or Puchka across different regions of India, has been a beloved street food for centuries. Its origins trace back to the ancient kingdom of Magadha, where it was created as a light, flavorful snack. The dish evolved over generations, with each region adding its own unique twist to the tangy water and spicy fillings. At Vinayak Food Inc, we've perfected our recipe since 2000, honoring traditional methods while bringing our own family secrets passed down through generations. Every puri is hand-rolled and fried to golden perfection, just as it was done in the bustling markets of Old Delhi.",
  recipe: {
    ingredients: ["Semolina", "Boiled Potatoes", "Chickpeas", "Tamarind Chutney", "Green Chutney", "Spices", "Mint Water"],
    preparation: "Knead semolina into stiff dough, roll thin & fry until golden. Fill crispy puris with mashed potatoes, chickpeas & chutneys. Serve with chilled tangy mint water."
  },
  image: assets.menuPanipuri
};

type MenuContent = {
  heading: string;
  tagline: string;
  description: string;
  image_url: string;
};

export default function MenuPage() {
  const [content, setContent] = useState<MenuContent | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("menu_content")
      .select("*")
      .single();

    if (!error && data) {
      setContent(data);
    }
  };

  const displayHeading = content?.heading || "Pani Puri";
  const displayTagline = content?.tagline || menuItem.tagline;
  const displayDescription = content?.description || menuItem.longDescription;
  const displayImage = content?.image_url || assets.menuPanipuri;

  return (
    <div className="overflow-hidden">
      <section className="relative py-24 md:py-32 bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src={displayImage}
            alt="Pani Puri spread"
            fill
            sizes="100vw"
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
              className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">

              Our Menu
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-cream mt-3 md:mt-4 mb-4 md:mb-6">

              Authentic <span className="text-saffron">Flavors</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-xl text-cream/80 max-w-2xl mx-auto px-2">

              Handcrafted with traditional recipes passed down through
              generations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative order-1">

              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={displayImage}
                  alt={displayHeading}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                  priority />

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="space-y-4 md:space-y-6 order-2">

              <div>
                <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                  {displayTagline}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 md:mt-3 mb-4 md:mb-6">
                  {displayHeading}
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {displayDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12 md:space-y-16">

            <motion.div variants={fadeInUp} className="text-center">
              <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                The Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3 mb-6 md:mb-8">
                History of Pani Puri
              </h2>
              <p className="text-cream/80 text-base md:text-lg leading-relaxed text-justify max-w-4xl mx-auto">
                {menuItem.history}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-center mb-8 md:mb-10">
                <span className="text-saffron font-medium tracking-wider uppercase text-sm md:text-base">
                  The Recipe
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mt-2 md:mt-3">
                  How We Make It
                </h2>
              </div>

              <Card className="bg-cream border-none shadow-xl max-w-3xl mx-auto">
                <CardContent className="p-5 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal mb-4 md:mb-6 text-center">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8">
                    {menuItem.recipe.ingredients.map((item, idx) =>
                    <span key={idx} className="px-3 md:px-4 py-1.5 md:py-2 bg-saffron/10 text-charcoal rounded-full text-xs md:text-sm">
                        {item}
                      </span>
                    )}
                  </div>
                  <div className="text-center pt-5 md:pt-6 border-t border-charcoal/10">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-charcoal mb-2 md:mb-3">
                      Preparation
                    </h3>
                    <p className="text-charcoal/80 text-base md:text-lg">
                      {menuItem.recipe.preparation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-saffron to-saffron-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6">

              Visit Us to Order
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-base md:text-xl mb-8 md:mb-10 px-2">

              Step into our store and savor the authentic taste of tradition —<br className="hidden sm:block" />
              handcrafted pani puri served fresh, one burst of flavor at a time.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="bg-white text-saffron hover:bg-cream rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-transform hover:scale-110 w-full sm:w-auto">

                <Link href="/contact">Visit Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>);

}