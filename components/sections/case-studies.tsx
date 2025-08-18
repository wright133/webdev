"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Local Restaurant Rebuild",
    category: "Real Client Project",
    description:
      "Transformed a 3-year-old restaurant website into a modern, mobile-first experience with online ordering integration.",
    problem: "Outdated design, poor mobile experience, no online ordering",
    solution: "Modern React rebuild with integrated ordering system and SEO optimization",
    results: ["40% increase in online orders", "60% improvement in mobile conversions", "85% faster page load times"],
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    oldImage: "/outdated-restaurant-website-grayscale.png",
    newImage: "/modern-restaurant-website-purple.png",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    category: "Demo Project",
    description:
      "High-converting landing page for a fictional AI productivity tool with advanced animations and conversion optimization.",
    problem: "Need for high-converting SaaS landing page",
    solution: "Conversion-optimized design with social proof and clear value proposition",
    results: ["12% conversion rate", "2.3s average page load", "95+ Lighthouse score"],
    techStack: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    oldImage: "/placeholder-e428y.png",
    newImage: "/modern-saas-landing-page-purple.png",
    featured: false,
  },
  {
    id: 3,
    title: "Personal Brand Site",
    category: "Demo Project",
    description:
      "Portfolio website for a fictional creative professional with interactive galleries and smooth animations.",
    problem: "Creative professional needed modern portfolio presence",
    solution: "Interactive portfolio with smooth animations and optimized image galleries",
    results: ["50% increase in inquiries", "3x longer session duration", "Mobile-first design"],
    techStack: ["Next.js", "Three.js", "Tailwind CSS", "Vercel"],
    oldImage: "/basic-portfolio-grayscale.png",
    newImage: "/purple-creative-portfolio.png",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce Store",
    category: "Demo Project",
    description:
      "Full-featured e-commerce platform with inventory management, payment processing, and admin dashboard.",
    problem: "Small business needed complete e-commerce solution",
    solution: "Full-stack e-commerce platform with modern UX and admin tools",
    results: ["200% increase in sales", "45% cart completion rate", "Automated inventory management"],
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    oldImage: "/old-ecommerce-website-grayscale.png",
    newImage: "/modern-ecommerce-purple.png",
    featured: false,
  },
]

export function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="work" className="py-20" ref={ref}>
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
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real client transformations and demo projects showcasing modern web development with AI-powered efficiency.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden hover:glow-purple transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <motion.div
                      className="space-y-6"
                      animate={{ x: hoveredProject === project.id ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant={project.featured ? "default" : "secondary"}
                            className="gradient-purple text-white"
                          >
                            {project.category}
                          </Badge>
                        </motion.div>
                        <motion.h3
                          className="text-2xl font-bold"
                          animate={{ color: hoveredProject === project.id ? "#8b5cf6" : "inherit" }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      {/* Results with animated counters */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-500">Results</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.results.map((result, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                            >
                              <motion.div
                                className="w-2 h-2 rounded-full bg-purple-500"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                              />
                              <span className="text-sm font-medium">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-500">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.2 + techIndex * 0.05,
                                type: "spring",
                                stiffness: 300,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button className="gradient-purple text-white hover:opacity-90 group">
                          View Case Study
                          <motion.div
                            className="ml-2"
                            animate={{ x: hoveredProject === project.id ? [0, 5, 0] : 0 }}
                            transition={{
                              duration: 0.6,
                              repeat: hoveredProject === project.id ? Number.POSITIVE_INFINITY : 0,
                            }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Before/After Images */}
                    <motion.div
                      className="space-y-4"
                      animate={{ x: hoveredProject === project.id ? -10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Before</h4>
                          <motion.div
                            className="relative overflow-hidden rounded-lg border"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={project.oldImage || "/placeholder.svg"}
                              alt={`${project.title} - Before`}
                              className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                            />
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-purple-500">After</h4>
                          <motion.div
                            className="relative overflow-hidden rounded-lg border glow-purple"
                            whileHover={{ scale: 1.05, rotateY: -5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.img
                              src={project.newImage || "/placeholder.svg"}
                              alt={`${project.title} - After`}
                              className="w-full h-40 object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"
                              animate={{ opacity: [0, 0.3, 0] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
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
