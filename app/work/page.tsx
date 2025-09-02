import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionSection from '@/components/MotionSection'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work - Saaed Imam',
  description: 'Case studies and projects showcasing RFID platforms, sustainable brands, and digital transformation solutions.',
  openGraph: {
    title: 'Work - Saaed Imam',
    description: 'Case studies and projects showcasing RFID platforms, sustainable brands, and digital transformation solutions.',
  },
}

// All work data
const allWork = [
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
  },
  {
    title: 'STRYV',
    description: 'Football nostalgia apparel brand with sustainable manufacturing and ethical sourcing.',
    image: '/images/projects/stryv-1.png',
    tags: ['Fashion', 'Sustainability', 'Branding'],
    href: '/work/stryv'
  },
  {
    title: 'EcoTenna',
    description: 'Upcycled garment-waste cleaning products for eco-conscious consumers.',
    image: '/images/projects/ecotenna-1.png',
    tags: ['Sustainability', 'Upcycling', 'Consumer Products'],
    href: '/work/ecotenna'
  },
  {
    title: 'EMAN',
    description: 'Sustainable Islamic streetwear brand combining faith, fashion, and environmental responsibility.',
    image: '/images/projects/eman-1.png',
    tags: ['Islamic Fashion', 'Sustainability', 'Streetwear'],
    href: '/work/eman'
  }
]

export default function WorkPage() {
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
                <pattern id="workBgPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="50" height="50" fill="#16A34A" opacity="0.1" />
                  <rect x="50" y="50" width="50" height="50" fill="#00A3B4" opacity="0.1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#15803D" strokeWidth="1" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#workBgPattern)" />
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
                Case Studies &
                <br />
                <span className="gradient-text">Projects</span>
              </h1>
              
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto leading-relaxed">
                From RFID platforms to sustainable brands, each project represents a unique challenge 
                and innovative solution. Explore the full scope of my work in connected factories 
                and clean design systems.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Work Grid */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allWork.map((work, index) => (
                <CaseCard
                  key={work.title}
                  {...work}
                />
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-20">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-fg/70 dark:text-dark-fg/70 mb-8">
                  Let's discuss how we can work together to bring your vision to life. 
                  Whether it's an RFID platform, modern website, or sustainable brand development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-glow"
                  >
                    <span>Get In Touch</span>
                  </Link>
                  
                  <Link
                    href="/products"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary/30 hover:border-primary text-primary dark:text-primary-400 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <span>View Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-heading font-bold text-primary dark:text-primary-400">
                  6+
                </div>
                <div className="text-lg text-fg/70 dark:text-dark-fg/70">
                  Major Projects
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-heading font-bold text-primary dark:text-primary-400">
                  4
                </div>
                <div className="text-lg text-fg/70 dark:text-dark-fg/70">
                  Sustainable Brands
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-heading font-bold text-primary dark:text-primary-400">
                  100%
                </div>
                <div className="text-lg text-fg/70 dark:text-dark-fg/70">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
