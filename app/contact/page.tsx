import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import MotionSection from '@/components/MotionSection'

export const metadata: Metadata = {
  title: 'Contact - Saaed Imam',
  description: 'Get in touch to discuss your next project. I specialize in RFID platforms, modern websites, and sustainable brand development.',
  openGraph: {
    title: 'Contact - Saaed Imam',
    description: 'Get in touch to discuss your next project. I specialize in RFID platforms, modern websites, and sustainable brand development.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                  Let's Build Something
                  <span className="gradient-text"> Amazing</span>
                </h1>
                
                <p className="text-xl text-fg/70 dark:text-dark-fg/70 mb-8 leading-relaxed">
                  Whether you need an RFID platform, a modern website, or help building a sustainable brand, 
                  I'm here to help bring your vision to life.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>RFID & IoT platforms</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Modern web applications</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Sustainable brand development</span>
                  </div>
                  <div className="flex items-center space-x-3 text-fg/70 dark:text-dark-fg/70">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Digital transformation consulting</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Contact Illustration SVG */}
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00A3B4" stopOpacity="0.6" />
                    </linearGradient>
                    <radialGradient id="contactRadial" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#16A34A" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>
                  
                  {/* Background circles */}
                  <circle cx="200" cy="150" r="120" fill="url(#contactRadial)" />
                  
                  {/* Envelope */}
                  <rect x="120" y="100" width="160" height="100" rx="8" fill="url(#contactGradient)" />
                  <path d="M120 100 L200 150 L280 100" stroke="white" strokeWidth="3" fill="none" />
                  
                  {/* Message lines */}
                  <rect x="140" y="130" width="80" height="3" rx="1.5" fill="white" opacity="0.8" />
                  <rect x="140" y="140" width="60" height="3" rx="1.5" fill="white" opacity="0.6" />
                  <rect x="140" y="150" width="70" height="3" rx="1.5" fill="white" opacity="0.6" />
                  <rect x="140" y="160" width="50" height="3" rx="1.5" fill="white" opacity="0.6" />
                  
                  {/* Floating elements */}
                  <circle cx="80" cy="80" r="15" fill="#22C55E" opacity="0.6" />
                  <circle cx="320" cy="220" r="12" fill="#00A3B4" opacity="0.6" />
                  <circle cx="90" cy="220" r="10" fill="#4ADE80" opacity="0.6" />
                  
                  {/* Connection lines */}
                  <path d="M200 150 Q250 100 320 220" stroke="#16A34A" strokeWidth="2" opacity="0.3" fill="none" />
                  <path d="M200 150 Q150 100 80 80" stroke="#16A34A" strokeWidth="2" opacity="0.3" fill="none" />
                  <path d="M200 150 Q150 200 90 220" stroke="#16A34A" strokeWidth="2" opacity="0.3" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Contact Form Section */}
        <MotionSection className="py-20 bg-panel dark:bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg dark:text-dark-fg mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-fg/70 dark:text-dark-fg/70 max-w-2xl mx-auto">
                Fill out the form below and I'll get back to you within 24 hours. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </MotionSection>

        {/* Additional Contact Info */}
        <MotionSection className="py-20 bg-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  Email
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  <a 
                    href="mailto:sayedimam.fahim@gmail.com"
                    className="text-primary hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    sayedimam.fahim@gmail.com
                  </a>
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  Location
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  Chattogram, Bangladesh
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-fg dark:text-dark-fg">
                  Response Time
                </h3>
                <p className="text-fg/70 dark:text-dark-fg/70">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  )
}
