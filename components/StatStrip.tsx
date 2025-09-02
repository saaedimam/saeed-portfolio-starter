'use client'

import { motion } from 'framer-motion'
import { Factory, Package, Truck, Shield } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    value: '650',
    label: 'machines',
    color: 'text-primary'
  },
  {
    icon: Package,
    value: '300k',
    label: 'pcs/mo woven',
    color: 'text-primary-600'
  },
  {
    icon: Truck,
    value: '500k',
    label: 'pcs/mo knitwear',
    color: 'text-primary-500'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'compliance',
    color: 'text-accent'
  }
]

export default function StatStrip() {
  return (
    <section className="py-16 bg-panel dark:bg-dark-panel relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="statPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#16A34A" />
              <circle cx="15" cy="15" r="0.5" fill="#00A3B4" />
              <circle cx="45" cy="45" r="0.5" fill="#15803D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#statPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-fg dark:text-dark-fg mb-4">
            Production Scale & Quality
          </h2>
          <p className="text-lg text-fg/70 dark:text-dark-fg/70 max-w-2xl mx-auto">
            Managing large-scale textile operations with precision and compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              
              <div className="space-y-2">
                <motion.div
                  className={`text-3xl sm:text-4xl font-heading font-bold ${stat.color}`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm sm:text-base text-fg/70 dark:text-dark-fg/70 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-fg/50 dark:text-dark-fg/50 mb-6 uppercase tracking-wider font-medium">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 dark:opacity-40">
            {['Walmart', 'Disney', 'Target', 'TJ Maxx', 'Giant Tiger'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-lg font-semibold text-fg/40 dark:text-dark-fg/40"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
