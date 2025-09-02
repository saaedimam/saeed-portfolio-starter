'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Factory, Globe, Palette } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg dark:bg-dark-bg">
      {/* Background Mesh SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-20 dark:opacity-10"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="meshGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#16A34A" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00A3B4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#15803D" stopOpacity="0.1" />
            </radialGradient>
            <pattern id="meshPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="url(#meshGradient)" />
              <circle cx="25" cy="25" r="1.5" fill="url(#meshGradient)" />
              <circle cx="75" cy="75" r="1.5" fill="url(#meshGradient)" />
              <circle cx="25" cy="75" r="1" fill="url(#meshGradient)" />
              <circle cx="75" cy="25" r="1" fill="url(#meshGradient)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshPattern)" />
        </svg>
      </div>

      {/* Fabric Weave Overlay */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10 dark:opacity-5"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="weavePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L40 20 M20 0 L20 40" stroke="#16A34A" strokeWidth="0.5" fill="none" />
              <path d="M0 0 L40 40 M0 40 L40 0" stroke="#00A3B4" strokeWidth="0.3" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#weavePattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20 dark:text-primary/30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Factory className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 text-accent/20 dark:text-accent/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Globe className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-primary/20 dark:text-primary/30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Palette className="w-14 h-14" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400 border border-primary/20 dark:border-primary/30">
              <Factory className="w-4 h-4 mr-2" />
              Platform Architect & Founder
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-fg dark:text-dark-fg leading-tight"
          >
            Building{' '}
            <span className="gradient-text">connected factories</span>
            <br />
            &{' '}
            <span className="gradient-text">clean design systems</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-fg/70 dark:text-dark-fg/70 max-w-4xl mx-auto leading-relaxed"
          >
            I architect RFID platforms, modern websites, and sustainable brands for textiles and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-glow flex items-center space-x-2"
              >
                <span>Book a 20-min intro</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group border-2 border-primary/30 hover:border-primary text-primary dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10"
              >
                <span>View Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
            className="text-fg/60 dark:text-dark-fg/60 text-lg"
          >
            Based in Chattogram, Bangladesh
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
