import type { Metadata } from 'next'
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Saaed Imam - Platform Architect & Founder',
    template: '%s | Saaed Imam'
  },
  description: 'Building connected factories & clean design systems. I architect RFID platforms, modern websites, and sustainable brands for textiles and beyond.',
  keywords: [
    'Saaed Imam',
    'Platform Architect',
    'RFID',
    'IoT',
    'Textile Technology',
    'Factory Automation',
    'StitchOS',
    'STRYV',
    'EcoTenna',
    'EMAN'
  ],
  authors: [{ name: 'Saaed Imam' }],
  creator: 'Saaed Imam',
  publisher: 'Saaed Imam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saaedimam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saaedimam.com',
    title: 'Saaed Imam - Platform Architect & Founder',
    description: 'Building connected factories & clean design systems. I architect RFID platforms, modern websites, and sustainable brands for textiles and beyond.',
    siteName: 'Saaed Imam Portfolio',
    images: [
      {
        url: '/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Saaed Imam - Platform Architect & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saaed Imam - Platform Architect & Founder',
    description: 'Building connected factories & clean design systems. I architect RFID platforms, modern websites, and sustainable brands for textiles and beyond.',
    images: ['/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192.png',
  },
  manifest: '/manifest.webmanifest',
  other: {
    'theme-color': '#16A34A',
    'msapplication-TileColor': '#16A34A',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${sora.variable} ${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

