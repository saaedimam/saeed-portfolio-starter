'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Globe } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export default function ProductCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  featured = false
}: ProductCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-panel dark:bg-dark-panel border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-soft"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Device Mock Frame */}
      <div className="relative p-6">
        <div className="relative mx-auto max-w-sm">
          {/* Phone Frame */}
          <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[1.5rem] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Globe className="w-4 h-4" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-0">
        <div className="space-y-3">
          <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-fg/70 dark:text-dark-fg/70 leading-relaxed">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-700 text-white rounded-lg font-medium transition-colors group/link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe className="w-4 h-4" />
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-primary/30 hover:border-primary text-primary dark:text-primary-400 rounded-lg font-medium transition-colors hover:bg-primary/5 dark:hover:bg-primary/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="productPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#16A34A" />
              <circle cx="10" cy="10" r="0.5" fill="#00A3B4" />
              <circle cx="30" cy="30" r="0.5" fill="#15803D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#productPattern)" />
        </svg>
      </div>
    </motion.div>
  )
}
