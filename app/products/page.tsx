import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionSection from '@/components/MotionSection'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products & Ventures - Saaed Imam',
  description: 'Explore my products and ventures including mobile apps, programming languages, and sustainable business solutions.',
  openGraph: {
    title: 'Products & Ventures - Saaed Imam',
    description: 'Explore my products and ventures including mobile apps, programming languages, and sustainable business solutions.',
  },
}

// All products data
const allProducts = [
  {
    title: 'QuickBill',
    description: 'Your Pocket Accountant - Mobile app for small business financial management with intuitive UI and powerful analytics.',
    image: '/images/projects/quickbill-1.png',
    tags: ['Mobile App', 'Finance', 'Small Business', 'React Native'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'CartCount',
    description: 'Flutter + Supabase inventory management for micro food & beverage businesses. Real-time tracking and analytics.',
    image: '/images/projects/cartcount-1.png',
    tags: ['Flutter', 'Supabase', 'Inventory', 'F&B', 'Mobile'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Weft',
    description: 'Security-first programming language with LLVM/WASM/VM compilation targets. Built for secure IoT and embedded systems.',
    image: '/images/projects/weft-1.png',
    tags: ['Programming Language', 'Security', 'LLVM', 'WASM', 'IoT'],
    githubUrl: '#'
  },
  {
    title: 'StitchOS',
    description: 'SaaS + IoT RFID platform for connected textile factories. Real-time tracking, analytics, and automation.',
    image: '/images/projects/stitchos-1.png',
    tags: ['RFID', 'IoT', 'SaaS', 'Textile', 'Platform'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'TextileTrack',
    description: 'RFID uniforms and linens tracking system for hospitality and healthcare industries.',
    image: '/images/projects/textiletrack-1.png',
    tags: ['RFID', 'Hospitality', 'Healthcare', 'Tracking', 'IoT'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'STRYV',
    description: 'Football nostalgia apparel brand with sustainable manufacturing and ethical sourcing.',
    image: '/images/projects/stryv-1.png',
    tags: ['Fashion', 'Sustainability', 'Branding', 'E-commerce'],
    liveUrl: '#'
  }
]

export default function ProductsPage() {
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
                <pattern id="productsBgPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="40" height="40" fill="#16A34A" opacity="0.1" />
                  <rect x="40" y="40" width="40" height="40" fill="#00A3B4" opacity="0.1" />
                  <circle cx="40" cy="40" r="20" fill="none" stroke="#15803D" strokeWidth="1" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#productsBgPattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-primary dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Products &
                <br />
                <span className="gradient-text">Ventures</span>
              </h1>
              
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto leading-relaxed">
                From mobile apps to programming languages, each product is designed to solve real problems 
                and empower users. Explore the full range of my technical and entrepreneurial work.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Products Grid */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <ProductCard
                  key={product.title}
                  {...product}
                />
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Features Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                What Makes These Products Special
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto">
                Each product is built with a focus on user experience, performance, and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  Performance First
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  Built with modern technologies for optimal speed and efficiency
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  User-Centric Design
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  Intuitive interfaces that prioritize user experience and accessibility
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  Sustainable Impact
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  Solutions that contribute to environmental and social responsibility
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-20 bg-primary dark:bg-primary-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="ctaProductsPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white" />
                  <circle cx="15" cy="15" r="1" fill="white" />
                  <circle cx="45" cy="45" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaProductsPattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together on your next product or venture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 shadow-lg"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
              
              <Link
                href="/work"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
