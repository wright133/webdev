"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "MySQL",
  // "PostgreSQL",
  "MongoDB",
  "Framer Motion",
  "Three.js",
  "Vercel",
  // "AWS",
  // "Docker",
  "Git",
  // "Figma",
  "AI Integration",
  "API Development",
]

const timeline = [
  {
    year: "2021",
    title: "First Client Project",
    description: "Built my first professional website, a custom web application for a startup.",
  },
  {
    year: "2022",
    title: "Full-Stack Focus",
    description: "Expanded into backend development and database design",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Started incorporating AI tools into development workflow",
  },
  {
    year: "2025",
    title: "AI-Powered Full Stack Development",
    description: "Now building and remastering client sites with modern tech stacks and intergrating AI-powered solutions where necessary.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-card/50 spotlight-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-bold text-gradient-purple"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Ian
              </motion.h2>
              <motion.div
                className="space-y-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>
                  I'm a full-stack developer who transforms businesses through premium web experiences. With 3+ years of
                  experience, I specialize in building revenue-driving websites that combine cutting-edge technology
                  with AI-powered efficiency.
                </p>
                <p>
                  My approach is simple: understand your business goals, design with purpose, and deliver solutions that
                  not only look stunning but drive real results. I leverage modern frameworks and AI tools to build
                  faster without compromising quality.
                </p>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tech Stack
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="secondary" className="cursor-default transition-all duration-300">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              My Journey
            </motion.h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <Card className="p-6 border-l-4 border-l-purple-500 hover:glow-purple transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center text-white font-bold"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          {item.year.slice(-2)}
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
