import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://saaedimam.com'
  
  const articles = [
    {
      title: 'Factory-First Signal Processing',
      description: 'How to design IoT systems that work reliably in challenging factory environments, from poor connectivity to harsh conditions.',
      slug: 'factory-first-signal',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['IoT', 'Factory', 'Signal Processing', 'RFID'],
    },
    {
      title: 'Building Sustainable Textile Brands',
      description: 'Lessons learned from launching multiple sustainable fashion ventures and the importance of ethical manufacturing.',
      slug: 'sustainable-textile-brands',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Sustainability', 'Fashion', 'Manufacturing', 'Branding'],
    },
    {
      title: 'RFID in Modern Manufacturing',
      description: 'The evolution of RFID technology and its role in creating connected factories of the future.',
      slug: 'rfid-modern-manufacturing',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['RFID', 'Manufacturing', 'IoT', 'Automation'],
    },
    {
      title: 'Digital Transformation in Textiles',
      description: 'Case study: How KTL transformed from traditional manufacturing to a connected, data-driven operation.',
      slug: 'digital-transformation-textiles',
      date: '2023-12-20',
      readTime: '12 min read',
      tags: ['Digital Transformation', 'Textile', 'Case Study', 'IoT'],
    },
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Saaed Imam - Writing & Insights</title>
  <description>Articles and insights on factory-first signal processing, sustainable manufacturing, and the future of connected textiles.</description>
  <link>${baseUrl}</link>
  <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml"/>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${articles
    .map(
      (article) => `
  <item>
    <title><![CDATA[${article.title}]]></title>
    <description><![CDATA[${article.description}]]></description>
    <link>${baseUrl}/writing/${article.slug}</link>
    <guid>${baseUrl}/writing/${article.slug}</guid>
    <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    <category>${article.tags.join(', ')}</category>
  </item>`
    )
    .join('')}
</channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
