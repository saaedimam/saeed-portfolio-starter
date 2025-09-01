# Saaed Imam Portfolio

A modern, English-only portfolio website built with Next.js 14, featuring case studies, products, writing, and strong SEO/OG support.

## 🚀 Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── work/              # Case studies
│   ├── writing/           # Blog posts
│   ├── products/          # Product showcase
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── api/               # API routes
│   ├── og/                # Dynamic OG images
│   ├── rss/               # RSS feed
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
├── content/               # MDX content files
├── lib/                   # Utility functions
├── public/                # Static assets
└── push.ps1/push.sh       # Deployment scripts
```

## 🎨 Design System

- **Typography**: Sora (headings) + Plus Jakarta Sans (body)
- **Colors**: Deep navy, charcoal, teal, warm gray
- **Theme**: Light/dark mode support
- **Animations**: Framer Motion with reduced-motion support

## 📝 Content Management

Content is managed through MDX files in the `content/` directory:

- `content/work/*.mdx` - Case studies
- `content/writing/*.mdx` - Blog posts

Each MDX file includes frontmatter with title, date, summary, and tags.

## 🔧 Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Contentlayer for MDX
- ✅ Dark mode support
- ✅ SEO optimization
- ✅ Dynamic OG images
- ✅ RSS feed
- ✅ Sitemap generation
- ✅ Contact form with rate limiting
- ✅ Responsive design
- ✅ Accessibility features

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub using the provided scripts
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Option 2: Manual Push Scripts

**Windows (PowerShell):**
```powershell
.\push.ps1
```

**Linux/macOS (Bash):**
```bash
./push.sh
```

### Environment Variables

Set these in your deployment platform:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Performance

- Lighthouse LCP < 2.0s
- Lighthouse CLS < 0.03
- Lighthouse A11y ≥ 95
- Optimized images and fonts
- Reduced motion support

## 🛠️ Development

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build check
npm run build
```

## 📄 License

MIT License - see LICENSE file for details.

## 📧 Contact

- Email: sayedimam.fahim@gmail.com
- GitHub: [@saaedimam](https://github.com/saaedimam)

---

Built with ❤️ by Saaed Imam