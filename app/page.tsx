import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatStrip from '@/components/StatStrip'
import MotionSection from '@/components/MotionSection'
import CaseCard from '@/components/CaseCard'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

// Featured work data
const featuredWork = [
  {
    title: 'StitchOS',
    description: 'SaaS + IoT RFID platform for connected textile factories. Real-time tracking, analytics, and automation.',
    image: '/images/projects/stitchos-1.png',
    tags: ['RFID', 'IoT', 'SaaS', 'Textile'],
    href: '/work/stitchos',
    featured: true
  },
  {
    title: 'TextileTrack',
    description: 'RFID uniforms and linens tracking system for hospitality and healthcare industries.',
    image: '/images/projects/textiletrack-1.png',
    tags: ['RFID', 'Hospitality', 'Healthcare', 'Tracking'],
    href: '/work/textiletrack'
  },
  {
    title: 'KTL Integration',
    description: 'Tech lead role in large-scale textile manufacturing operations and digital transformation.',
    image: '/images/projects/ktl-1.png',
    tags: ['Tech Lead', 'Manufacturing', 'Digital Transformation'],
    href: '/work/ktl'
  }
]

// Products data
const products = [
  {
    title: 'QuickBill',
    description: 'Your Pocket Accountant - Mobile app for small business financial management.',
    image: '/images/projects/quickbill-1.png',
    tags: ['Mobile App', 'Finance', 'Small Business'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'CartCount',
    description: 'Flutter + Supabase inventory management for micro food & beverage businesses.',
    image: '/images/projects/cartcount-1.png',
    tags: ['Flutter', 'Supabase', 'Inventory', 'F&B'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Weft',
    description: 'Security-first programming language with LLVM/WASM/VM compilation targets.',
    image: '/images/projects/weft-1.png',
    tags: ['Programming Language', 'Security', 'LLVM', 'WASM'],
    githubUrl: '#'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatStrip />
        
        {/* Featured Work */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Featured Work
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto">
                Case studies from RFID platforms to sustainable brands, showcasing scalable solutions and clean design systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredWork.map((work, index) => (
                <CaseCard
                  key={work.title}
                  {...work}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/work"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary/30 hover:border-primary text-primary dark:text-primary-400 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10"
              >
                <span>View All Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </MotionSection>

        {/* Products Section */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel relative overflow-hidden">
          {/* Background SVG */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="productBgPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="40" height="40" fill="#16A34A" opacity="0.1" />
                  <rect x="40" y="40" width="40" height="40" fill="#00A3B4" opacity="0.1" />
                  <circle cx="40" cy="40" r="20" fill="none" stroke="#15803D" strokeWidth="1" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#productBgPattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Products & Ventures
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto">
                From mobile apps to programming languages, building tools that empower businesses and developers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={product.title}
                  {...product}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary/30 hover:border-primary text-primary dark:text-primary-400 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10"
              >
                <span>Explore All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </MotionSection>

        {/* Writing Teaser */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                  Writing & Insights
                </h2>
                <p className="text-xl text-fg/70 dark:text-dark-fg/70 mb-8 leading-relaxed">
                  Sharing thoughts on factory-first signal processing, sustainable manufacturing, and the future of connected textiles.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Factory-first signal processing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Sustainable manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>IoT & RFID insights</span>
                  </div>
                </div>
                
                <Link
                  href="/writing"
                  className="inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors"
                >
                  <span>Read Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative">
                {/* Writing Illustration SVG */}
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="writingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00A3B4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Document */}
                  <rect x="50" y="30" width="300" height="200" rx="8" fill="url(#writingGradient)" />
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

        {/* CTA Banner */}
        <MotionSection className="py-20 bg-primary dark:bg-primary-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white" />
                  <circle cx="15" cy="15" r="1" fill="white" />
                  <circle cx="45" cy="45" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download my portfolio deck or schedule a call to discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Deck</span>
              </a>
              
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <span>Schedule Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
