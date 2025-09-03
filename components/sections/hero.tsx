"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, ChevronDown } from "lucide-react"
import { ParticleField } from "@/components/particle-field"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Particle Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <ParticleField />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />

      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 spotlight-bg z-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 30%, transparent 70%)",
            "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 30%, transparent 70%)",
            "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 30%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Content with Parallax */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ y: contentY }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                I design, build, and ship{" "}
                <motion.span
                  className="text-gradient-purple block sm:inline"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  revenue-driving websites
                </motion.span>{" "}
                fast — with{" "}
                <motion.span
                  className="text-gradient-purple"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                >
                  JavaScript superpowers
                </motion.span>
                .
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                Web developer specializing in React, Tailwind, and modern web stacks.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="gradient-purple text-white hover:opacity-90 transition-all duration-300 glow-purple hover:glow-purple-strong group w-full sm:w-auto"
                  onClick={() => window.open("https://calendly.com/ianwright", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:glow-purple group bg-transparent w-full sm:w-auto"
                  onClick={scrollToWork}
                >
                  See My Work
                  <motion.div
                    className="ml-2"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <img
                  src="/ian-wright-images/ian-wright-background-copy.png"
                  alt="Ian Wright - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
