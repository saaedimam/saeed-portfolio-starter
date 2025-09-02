'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

interface CaseCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  external?: boolean
  featured?: boolean
}

export default function CaseCard({
  title,
  description,
  image,
  tags,
  href,
  external = false,
  featured = false
}: CaseCardProps) {
  const CardContent = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-panel dark:bg-dark-panel border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-soft">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* External Link Icon */}
        {external && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-fg/70 dark:text-dark-fg/70 leading-relaxed">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="mt-4 flex items-center text-primary dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
          <span className="text-sm font-medium">View Case Study</span>
          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  )

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <CardContent />
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} className="block">
        <CardContent />
      </Link>
    </motion.div>
  )
}
