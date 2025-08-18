"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:thewian27@gmail.com" },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:glow-purple transition-all duration-300"
                    onClick={() => {
                      if (social.href.startsWith("mailto:")) {
                        window.location.href = social.href
                      } else {
                        window.open(social.href, "_blank")
                      }
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="gradient-purple text-white hover:opacity-90 transition-all duration-300 glow-purple hover:glow-purple-strong"
              onClick={() => (window.location.href = "mailto:thewian27@gmail.com")}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm sm:text-base">Built with ❤️ by Ian Wright</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ian Wright. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
