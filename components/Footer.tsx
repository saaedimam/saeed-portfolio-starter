'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Mail, ExternalLink, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/saaedimam',
    icon: Github,
    external: true
  },
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~012257680710d680c7',
    icon: ExternalLink,
    external: true
  },
  {
    name: 'Email',
    href: 'mailto:sayedimam.fahim@gmail.com',
    icon: Mail,
    external: false
  }
]

const quickLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Products', href: '/products' },
  { name: 'Writing', href: '/writing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-panel dark:bg-dark-panel border-t border-primary/10 dark:border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg">
                  SI
                </div>
                <span className="font-heading font-semibold text-xl text-fg dark:text-dark-fg group-hover:text-primary transition-colors">
                  Saaed Imam
                </span>
              </Link>
              
              <p className="text-fg/70 dark:text-dark-fg/70 max-w-md leading-relaxed">
                Platform Architect & Founder building connected factories & clean design systems. 
                Based in Chattogram, Bangladesh.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-fg dark:text-dark-fg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-fg/70 dark:text-dark-fg/70 hover:text-primary dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ventures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-fg dark:text-dark-fg">
              Ventures
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-fg/70 dark:text-dark-fg/70">StitchOS</span>
              </li>
              <li>
                <span className="text-fg/70 dark:text-dark-fg/70">STRYV</span>
              </li>
              <li>
                <span className="text-fg/70 dark:text-dark-fg/70">EcoTenna</span>
              </li>
              <li>
                <span className="text-fg/70 dark:text-dark-fg/70">EMAN</span>
              </li>
              <li>
                <span className="text-fg/70 dark:text-dark-fg/70">QuickBill</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-primary/10 dark:border-primary/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-fg/60 dark:text-dark-fg/60 text-sm">
              © {currentYear} Saaed Imam. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-fg/60 dark:text-dark-fg/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Bangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
