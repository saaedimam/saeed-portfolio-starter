# Saaed Imam - Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a beautiful green theme, smooth animations, and comprehensive content showcasing Saaed's work as a Platform Architect & Founder.

## 🌟 Features

- **Modern Design**: Clean, professional design with a green color palette
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark Mode**: Built-in dark/light mode with system preference detection
- **Animations**: Smooth Framer Motion animations and page transitions
- **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and Open Graph
- **PWA Ready**: Progressive Web App with manifest and service worker support
- **Contact Form**: Secure contact form with honeypot protection and rate limiting
- **Performance**: Optimized for speed with Next.js 14 and modern best practices

## 🎨 Design System

### Color Palette
- **Light Mode**: Smooth green theme (#F4FBF7 background, #16A34A primary)
- **Dark Mode**: Dark greenish theme (#0C1A16 background, #22C55E primary)
- **Accent**: Teal (#00A3B4) for highlights and CTAs

### Typography
- **Headings**: Sora font for modern, clean appearance
- **Body**: Plus Jakarta Sans for excellent readability

### Components
- Custom card components with hover effects
- Animated sections with stagger effects
- Responsive navigation with mobile menu
- Interactive forms with validation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── work/              # Work case studies
│   ├── products/          # Products showcase
│   ├── writing/           # Blog articles
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── og/                # Dynamic OG images
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots
│   ├── sitemap.ts         # SEO sitemap
│   └── rss/               # RSS feed
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── CaseCard.tsx       # Work case study cards
│   ├── ProductCard.tsx    # Product showcase cards
│   ├── ContactForm.tsx    # Contact form
│   ├── MotionSection.tsx  # Animated sections
│   └── DarkModeToggle.tsx # Theme toggle
├── public/                 # Static assets
│   ├── images/            # Project images
│   ├── icons/             # PWA icons
│   ├── manifest.webmanifest # PWA manifest
│   └── og/                # Default OG images
├── push.ps1               # PowerShell deployment script
├── push.sh                # Bash deployment script
└── README.md              # This file
```

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saaedimam/portfolio_site.git
   cd portfolio_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Content Sections

### Home Page
- Hero section with animated background
- Statistics showcase (650 machines, 300k pcs/mo woven, etc.)
- Featured work case studies
- Products showcase
- Writing teaser
- Call-to-action banner

### Work Page
- Complete case studies grid
- StitchOS, TextileTrack, KTL, STRYV, EcoTenna, EMAN
- Each case includes description, tags, and project details

### Products Page
- Mobile apps (QuickBill, CartCount)
- Programming language (Weft)
- RFID platforms (StitchOS, TextileTrack)
- Device mock frames and interactive elements

### Writing Page
- Articles on factory automation, IoT, sustainability
- Newsletter signup
- Reading time and tags
- Featured article highlighting

### About Page
- Professional journey timeline
- Ventures and projects grid
- Contact information and social links
- Location and response time details

### Contact Page
- Secure contact form with honeypot protection
- Rate limiting (5 requests per minute)
- Multiple contact methods
- Response time expectations

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization
- **Colors**: Update `tailwind.config.js` color tokens
- **Content**: Modify data in component files
- **Images**: Replace placeholder images in `/public/images/`
- **SEO**: Update metadata in layout and page files

## 🚀 Deployment

### GitHub Push
Use the provided scripts to push to GitHub:

**PowerShell (Windows):**
```powershell
.\push.ps1
```

**Bash (Linux/macOS):**
```bash
chmod +x push.sh
./push.sh
```

### Vercel Deployment
1. Import the GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy!

## 📊 Performance

- **Lighthouse Score**: Target ≥95 for all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Analysis**: Optimized imports and code splitting

## 🔒 Security Features

- **Contact Form**: Honeypot field protection
- **Rate Limiting**: In-memory rate limiting per IP
- **Input Validation**: Server-side validation for all forms
- **HTTPS**: Secure by default on Vercel

## 📈 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for better search understanding
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Proper search engine crawling instructions
- **RSS Feed**: Blog content syndication

## 🎯 Accessibility

- **WCAG 2.1 AA**: Target compliance level
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: Meets accessibility standards
- **Reduced Motion**: Respects user preferences

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 About Saaed Imam

**Platform Architect & Founder** building connected factories and clean design systems. Based in Chattogram, Bangladesh, specializing in:

- RFID platforms and IoT solutions
- Sustainable brand development
- Digital transformation consulting
- Modern web applications

**Contact**: sayedimam.fahim@gmail.com  
**GitHub**: [@saaedimam](https://github.com/saaedimam)  
**Upwork**: [Saaed Imam](https://www.upwork.com/freelancers/~012257680710d680c7)

---

Built with ❤️ using Next.js 14 and modern web technologies.