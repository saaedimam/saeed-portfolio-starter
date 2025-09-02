import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Writing - Saaed Imam',
  description: 'Articles and insights on factory-first signal processing, sustainable manufacturing, and the future of connected textiles.',
  openGraph: {
    title: 'Writing - Saaed Imam',
    description: 'Articles and insights on factory-first signal processing, sustainable manufacturing, and the future of connected textiles.',
  },
}

// Writing data
const articles = [
  {
    title: 'Factory-First Signal Processing',
    description: 'How to design IoT systems that work reliably in challenging factory environments, from poor connectivity to harsh conditions.',
    slug: 'factory-first-signal',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['IoT', 'Factory', 'Signal Processing', 'RFID'],
    featured: true
  },
  {
    title: 'Building Sustainable Textile Brands',
    description: 'Lessons learned from launching multiple sustainable fashion ventures and the importance of ethical manufacturing.',
    slug: 'sustainable-textile-brands',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Sustainability', 'Fashion', 'Manufacturing', 'Branding'],
    featured: false
  },
  {
    title: 'RFID in Modern Manufacturing',
    description: 'The evolution of RFID technology and its role in creating connected factories of the future.',
    slug: 'rfid-modern-manufacturing',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['RFID', 'Manufacturing', 'IoT', 'Automation'],
    featured: false
  },
  {
    title: 'Digital Transformation in Textiles',
    description: 'Case study: How KTL transformed from traditional manufacturing to a connected, data-driven operation.',
    slug: 'digital-transformation-textiles',
    date: '2023-12-20',
    readTime: '12 min read',
    tags: ['Digital Transformation', 'Textile', 'Case Study', 'IoT'],
    featured: false
  }
]

export default function WritingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg relative overflow-hidden">
          {/* Background SVG */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="writingBgPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="40" height="40" fill="#16A34A" opacity="0.1" />
                  <rect x="40" y="40" width="40" height="40" fill="#00A3B4" opacity="0.1" />
                  <circle cx="40" cy="40" r="20" fill="none" stroke="#15803D" strokeWidth="1" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#writingBgPattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                  Writing &
                  <br />
                  <span className="gradient-text">Insights</span>
                </h1>
                
                <p className="text-xl text-fg/70 dark:text-dark-fg/70 mb-8 leading-relaxed">
                  Sharing thoughts on factory-first signal processing, sustainable manufacturing, 
                  and the future of connected textiles. Each article is based on real-world experience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Factory automation & IoT</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Sustainable manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Digital transformation</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Writing Illustration SVG */}
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="writingHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00A3B4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Document */}
                  <rect x="50" y="30" width="300" height="200" rx="8" fill="url(#writingHeroGradient)" />
                  <rect x="70" y="60" width="200" height="4" rx="2" fill="white" opacity="0.8" />
                  <rect x="70" y="80" width="180" height="4" rx="2" fill="white" opacity="0.6" />
                  <rect x="70" y="100" width="160" height="4" rx="2" fill="white" opacity="0.6" />
                  <rect x="70" y="120" width="140" height="4" rx="2" fill="white" opacity="0.6" />
                  
                  {/* Code blocks */}
                  <rect x="70" y="150" width="120" height="60" rx="4" fill="#0F231C" />
                  <rect x="80" y="165" width="8" height="8" rx="4" fill="#22C55E" />
                  <rect x="95" y="165" width="60" height="4" rx="2" fill="#E6F4EE" opacity="0.8" />
                  <rect x="80" y="180" width="8" height="8" rx="4" fill="#22C55E" />
                  <rect x="95" y="180" width="80" height="4" rx="2" fill="#E6F4EE" opacity="0.6" />
                  <rect x="80" y="195" width="8" height="8" rx="4" fill="#22C55E" />
                  <rect x="95" y="195" width="70" height="4" rx="2" fill="#E6F4EE" opacity="0.6" />
                  
                  {/* Floating elements */}
                  <circle cx="320" cy="80" r="12" fill="#4ADE80" opacity="0.6" />
                  <circle cx="340" cy="120" r="8" fill="#00A3B4" opacity="0.6" />
                  <circle cx="300" cy="160" r="10" fill="#16A34A" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Articles List */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/writing/${article.slug}`}>
                    <div className="bg-panel dark:bg-dark-panel border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-soft">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            {article.featured && (
                              <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                Featured
                              </span>
                            )}
                            <div className="flex items-center space-x-2 text-sm text-fg/60 dark:text-dark-fg/60">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-fg/60 dark:text-dark-fg/60">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-2xl font-heading font-semibold text-fg dark:text-dark-fg mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h2>
                          
                          <p className="text-fg/70 dark:text-dark-fg/70 text-lg leading-relaxed mb-4">
                            {article.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {article.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 text-xs font-medium rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-2 text-primary dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                              <span className="font-medium">Read Article</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-heading font-semibold text-fg dark:text-dark-fg mb-4">
                Stay Updated
              </h3>
              <p className="text-fg/70 dark:text-dark-fg/70 mb-6 max-w-2xl mx-auto">
                Get notified when I publish new articles on factory automation, sustainable manufacturing, 
                and the future of connected textiles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-primary/20 dark:border-primary/30 bg-panel dark:bg-dark-panel text-fg dark:text-dark-fg placeholder:text-fg/50 dark:placeholder:text-dark-fg/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
                <button className="px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
              Have a Topic in Mind?
            </h2>
            <p className="text-xl text-fg/70 dark:text-dark-fg/70 mb-8 max-w-2xl mx-auto">
              I'm always interested in writing about new challenges and solutions in manufacturing, 
              IoT, and sustainable business. Let me know what you'd like to read about.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-glow"
            >
              <span>Suggest a Topic</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
