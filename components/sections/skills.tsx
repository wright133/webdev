"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "API Development", level: 90, icon: "🔌" },
      { name: "Database Design", level: 85, icon: "🗄️" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Vercel/AWS", level: 90, icon: "☁️" },
      { name: "Git/GitHub", level: 95, icon: "📚" },
      { name: "WordPress", level: 98, icon: "🌐" }, 
      // { name: "Docker", level: 75, icon: "🐳" },
      // { name: "Figma", level: 80, icon: "🎯" },
    ],
  },
  {
    title: "AI & Modern Web",
    skills: [
      { name: "AI Integration", level: 88, icon: "🤖" },
      { name: "p5.js", level: 90, icon: "🎮" },
      { name: "Three.js", level: 78, icon: "🎮" },
      { name: "Performance Optimization", level: 92, icon: "⚡" },
      { name: "SEO/Analytics", level: 85, icon: "📊" },
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    if (isInView) {
      // Animate progress bars with staggered delays
      setTimeout(() => {
        const levels: { [key: string]: number } = {}
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            levels[skill.name] = skill.level
          })
        })
        setAnimatedLevels(levels)
      }, 500)
    }
  }, [isInView])

  return (
    <section id="skills" className="py-20 bg-card/50 spotlight-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold text-gradient-purple mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive toolkit for building modern, high-performance web applications.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(5px)" }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="hover:glow-purple transition-all duration-500">
                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-6 text-gradient-purple"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.5,
                    }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 300,
                        }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <motion.span
                              className="text-lg"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: skillIndex * 0.2 }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <motion.span
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                          style={{ originX: 0 }}
                        >
                          <Progress value={animatedLevels[skill.name] || 0} className="h-2" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
