"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  CheckCircle,
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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "145 Market Street\nSan Francisco, CA 94103",
    action: {
      label: "Get Directions",
      href: "https://maps.google.com?q=145+Market+Street+San+Francisco+CA+94103",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (415) 555-1234",
    action: {
      label: "Call Now",
      href: "tel:+14155551234",
    },
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@vinayakfood.com",
    action: {
      label: "Send Email",
      href: "mailto:hello@vinayakfood.com",
    },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon-Fri: 11AM - 10PM\nSat-Sun: 10AM - 11PM",
    action: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    })
  }

  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop"
            alt="Restaurant interior"
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
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-serif font-bold text-cream mt-4 mb-6"
            >
              Contact <span className="text-saffron">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/80 max-w-2xl mx-auto"
            >
              Have questions or want to place a large order? We&apos;d love to
              hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron/10 flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-saffron" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line mb-4">
                      {info.content}
                    </p>
                    {info.action && (
                      <a
                        href={info.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron font-medium hover:underline"
                      >
                        {info.action.label} →
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. For urgent inquiries, please call us directly.
              </p>

              {isSubmitted ? (
                <Card className="border-2 border-green bg-green/5">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll respond within 24
                      hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-green text-green hover:bg-green hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (415) 555-1234"
                        className="bg-white/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-saffron hover:bg-saffron-dark text-white rounded-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-28">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5103451421735!2d-122.4039525!3d37.793618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a40f6f2b%3A0x70b4957332b26738!2s145%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1733960000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>

                <Card className="border-none shadow-lg bg-charcoal text-cream">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">
                      Follow Us
                    </h3>
                    <p className="text-cream/70 mb-4">
                      Stay updated with our latest offerings and behind-the-scenes
                      content.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-cream/10 hover:bg-saffron flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-cream/10 hover:bg-saffron flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green to-green-dark">
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
              Catering & Large Orders
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-xl mb-10"
            >
              Planning an event? We cater for parties, corporate events, and
              celebrations of all sizes.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="tel:+14155551234"
                className="inline-flex items-center gap-2 bg-white text-green hover:bg-cream rounded-full px-8 py-4 text-lg font-medium shadow-xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call for Catering: +1 (415) 555-1234
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}