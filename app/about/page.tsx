import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Mail, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Saaed Imam',
  description: 'Learn more about Saaed Imam - Platform Architect, Founder, and Tech Lead building connected factories and clean design systems.',
  openGraph: {
    title: 'About - Saaed Imam',
    description: 'Learn more about Saaed Imam - Platform Architect, Founder, and Tech Lead building connected factories and clean design systems.',
  },
}

const ventures = [
  {
    name: 'StitchOS',
    description: 'SaaS + IoT RFID platform',
    status: 'Active',
    category: 'Platform'
  },
  {
    name: 'TextileTrack',
    description: 'RFID tracking system',
    status: 'Active',
    category: 'IoT'
  },
  {
    name: 'STRYV',
    description: 'Football nostalgia apparel',
    status: 'Active',
    category: 'Fashion'
  },
  {
    name: 'EcoTenna',
    description: 'Upcycled cleaning products',
    status: 'Active',
    category: 'Sustainability'
  },
  {
    name: 'EMAN',
    description: 'Islamic streetwear',
    status: 'Active',
    category: 'Fashion'
  },
  {
    name: 'QuickBill',
    description: 'Mobile accounting app',
    status: 'Active',
    category: 'Mobile'
  },
  {
    name: 'CartCount',
    description: 'Inventory management',
    status: 'Active',
    category: 'Mobile'
  },
  {
    name: 'Weft',
    description: 'Security-first language',
    status: 'Development',
    category: 'Programming'
  },
  {
    name: 'Naikkhon Eco Escape',
    description: 'Eco-tourism concept',
    status: 'Planning',
    category: 'Tourism'
  },
  {
    name: 'Paharbari Organics',
    description: 'Eco-agro resort (33 acres)',
    status: 'Planning',
    category: 'Agriculture'
  }
]

const timeline = [
  {
    year: '2024',
    title: 'Platform Architect',
    description: 'Leading digital transformation initiatives for textile manufacturers',
    company: 'KTL'
  },
  {
    year: '2023',
    title: 'Founder & CEO',
    description: 'Launched StitchOS RFID platform and sustainable brands',
    company: 'Multiple Ventures'
  },
  {
    year: '2022',
    title: 'Tech Lead',
    description: 'Managed large-scale textile operations and IoT integration',
    company: 'KTL'
  },
  {
    year: '2021',
    title: 'Entrepreneur',
    description: 'Started first sustainable fashion ventures',
    company: 'STRYV, EMAN'
  },
  {
    year: '2020',
    title: 'Developer',
    description: 'Built first RFID tracking systems',
    company: 'Freelance'
  }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  About
                  <br />
                  <span className="gradient-text">Saaed Imam</span>
                </h1>
                
                <p className="text-xl text-fg/70 dark:text-dark-fg/70 mb-8 leading-relaxed">
                  Platform Architect, Founder, and Tech Lead building connected factories and clean design systems. 
                  Based in Chattogram, Bangladesh, I specialize in RFID platforms, modern websites, and sustainable brands.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:sayedimam.fahim@gmail.com"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  
                  <a
                    href="https://github.com/saaedimam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href="https://www.upwork.com/freelancers/~012257680710d680c7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Upwork</span>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                {/* Portrait Placeholder */}
                <div className="relative mx-auto max-w-sm">
                  <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                        <span className="text-3xl font-heading font-bold text-white">SI</span>
                      </div>
                      <div className="text-fg dark:text-dark-fg">
                        <p className="font-heading font-semibold text-lg">Portrait</p>
                        <p className="text-sm text-fg/70 dark:text-dark-fg/70">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-panel dark:bg-dark-panel border border-primary/20 dark:border-primary/30 rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-fg dark:text-dark-fg">Chattogram, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Timeline Section */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Professional Journey
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-2xl mx-auto">
                From developer to founder, my path has been driven by innovation and sustainability.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Spine */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 dark:bg-primary/30"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-panel dark:border-dark-panel z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-panel dark:bg-dark-panel p-6 rounded-2xl border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-soft">
                        <div className="text-2xl font-heading font-bold text-primary dark:text-primary-400 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-fg/70 dark:text-dark-fg/70 mb-2">
                          {item.description}
                        </p>
                        <div className="text-sm text-primary dark:text-primary-400 font-medium">
                          {item.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Ventures Section */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Ventures & Projects
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-3xl mx-auto">
                A diverse portfolio of sustainable businesses, technology platforms, and innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventures.map((venture) => (
                <div
                  key={venture.name}
                  className="bg-panel dark:bg-dark-panel p-6 rounded-2xl border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-heading font-semibold text-fg dark:text-dark-fg">
                      {venture.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      venture.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-blue-900/20 dark:text-green-400'
                        : venture.status === 'Development'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {venture.status}
                    </span>
                  </div>
                  
                  <p className="text-fg/70 dark:text-dark-fg/70 text-sm mb-3">
                    {venture.description}
                  </p>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 text-xs font-medium rounded-full">
                    {venture.category}
                  </span>
                </div>
              ))}
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
                <pattern id="ctaAboutPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white" />
                  <circle cx="15" cy="15" r="1" fill="white" />
                  <circle cx="45" cy="45" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaAboutPattern)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need an RFID platform, sustainable brand development, or digital transformation consulting, 
              I'm here to help bring your vision to life.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 shadow-lg"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
