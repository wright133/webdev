"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    company: "Bella Vista Bistro",
    content:
      "Ian transformed our outdated website into a modern masterpiece. Online orders increased by 40% in the first month alone. His attention to detail and understanding of our business needs was exceptional.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TechFlow Solutions",
    content:
      "Working with Ian was a game-changer for our startup. He delivered a high-converting landing page that helped us secure our Series A funding. The AI-powered optimizations were incredible.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio Pro",
    content:
      "Ian's technical expertise combined with his design sensibility is rare. He built us a portfolio site that perfectly showcases our work and has significantly improved our client acquisition.",
    rating: 5,
    image: "/creative-professional-woman-headshot.png",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "Urban Threads",
    content:
      "The e-commerce platform Ian built for us exceeded all expectations. Sales doubled within three months, and the admin dashboard makes inventory management effortless.",
    rating: 5,
    image: "/business-man-headshot.png",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gradient-purple mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real results from real clients who trusted me to transform their digital presence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(5px)" }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="hover:glow-purple transition-all duration-500 h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <motion.div
                    className="flex items-center space-x-1 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.blockquote
                    className="text-sm sm:text-base text-muted-foreground mb-6 italic flex-grow leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  >
                    "{testimonial.content}"
                  </motion.blockquote>

                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 mt-auto"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-purple-500/20"
                      />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        <span className="block sm:inline">{testimonial.role}</span>
                        <span className="hidden sm:inline"> at </span>
                        <span className="block sm:inline font-medium">{testimonial.company}</span>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
