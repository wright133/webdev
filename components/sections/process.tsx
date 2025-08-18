"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We dive deep into your business goals, target audience, and technical requirements to create a strategic foundation.",
    icon: Search,
    details: ["Business analysis", "Competitor research", "Technical planning", "Timeline creation"],
  },
  {
    id: 2,
    title: "Design",
    description:
      "Creating wireframes, mockups, and prototypes that align with your brand and optimize for conversions.",
    icon: Palette,
    details: ["Wireframing", "UI/UX design", "Prototype creation", "Design system"],
  },
  {
    id: 3,
    title: "Build",
    description: "Development using modern frameworks and AI-powered tools for efficient, high-quality code delivery.",
    icon: Code,
    details: ["Frontend development", "Backend integration", "Database setup", "AI optimization"],
  },
  {
    id: 4,
    title: "Launch",
    description: "Thorough testing, performance optimization, and seamless deployment to production environments.",
    icon: Rocket,
    details: ["Quality assurance", "Performance testing", "SEO optimization", "Production deployment"],
  },
  {
    id: 5,
    title: "Support",
    description:
      "Ongoing maintenance, updates, and optimization to ensure your website continues to perform at its best.",
    icon: HeadphonesIcon,
    details: ["Regular updates", "Performance monitoring", "Security maintenance", "Feature enhancements"],
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-card/50 spotlight-bg" ref={ref}>
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
            My Process
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A proven methodology that ensures every project delivers exceptional results on time and within budget.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500 to-purple-500/20 transform -translate-y-1/2 hidden xl:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(5px)" }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6 lg:mb-8">
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-purple flex items-center justify-center text-white font-bold text-base sm:text-lg glow-purple"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        {step.id}
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-full gradient-purple opacity-20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      />
                    </div>
                  </div>

                  <Card className="hover:glow-purple transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-4 text-purple-500" />
                      </motion.div>

                      <motion.h3
                        className="text-lg sm:text-xl font-semibold mb-3 text-gradient-purple"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted-foreground mb-4 text-sm sm:text-base flex-grow leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      >
                        {step.description}
                      </motion.p>

                      <motion.div
                        className="space-y-2 mt-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      >
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.7 + idx * 0.1 }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-purple-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                            />
                            <span className="text-xs sm:text-sm text-muted-foreground text-center">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
