// Simple data structure for content (temporary replacement for contentlayer)

export interface Work {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
  url: string;
  body: {
    html: string;
  };
}

export interface Post {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  url: string;
  body: {
    html: string;
  };
}

export interface Product {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  summary: string;
  tags?: string[];
  url: string;
  body: {
    html: string;
  };
}

// Mock data for now
export const allWorks: Work[] = [
  {
    _id: "work-stitchos",
    _raw: { flattenedPath: "work/stitchos" },
    title: "StitchOS — The Connected Loom",
    date: "2025-09-01",
    summary: "SaaS + IoT RFID platform: Edge Ingest → Core API → Ledger → Trace → Console.",
    tags: ["SaaS", "RFID", "Next.js", "FastAPI", "Supabase"],
    featured: true,
    url: "/work/stitchos",
    body: {
      html: `
        <h2>1. Problem</h2>
        <p>Disconnected production data, lost garments, and no live WIP view.</p>
        
        <h2>2. Approach</h2>
        <p>Modular architecture with secure effects and real-time sync.</p>
        
        <h2>3. System</h2>
        <p>Edge → Core → Ledger → Trace → Console with WebSockets and RLS.</p>
        
        <h2>4. Outcome</h2>
        <p>Targets: save 15–20 hrs/week; reduce loss 30–40%; faster onboarding.</p>
        
        <h2>5. Links</h2>
        <p>- Repo (private) · Deck (PDF) · Demo (request access)</p>
      `
    }
  },
  {
    _id: "work-textiletrack",
    _raw: { flattenedPath: "work/textiletrack" },
    title: "TextileTrack — Real-time RFID Tracking",
    date: "2025-09-01",
    summary: "Mobile capture → WebSocket live board → Supabase sync; offline friendly.",
    tags: ["RFID", "Mobile", "Supabase"],
    featured: true,
    url: "/work/textiletrack",
    body: {
      html: `
        <p>A focused kit for uniforms/linens, multi-site deployment, and live dashboards.</p>
      `
    }
  },
  {
    _id: "work-ktl",
    _raw: { flattenedPath: "work/ktl" },
    title: "KTL Corporate — Next.js Site & RFQ Pipeline",
    date: "2025-08-15",
    summary: "Modern corporate site with RFQ pipeline, SEO optimization, and bilingual rollout.",
    tags: ["Next.js", "SEO", "Corporate", "RFQ"],
    featured: true,
    url: "/work/ktl",
    body: {
      html: `
        <h2>Problem</h2>
        <p>KTL needed a modern corporate presence with streamlined RFQ (Request for Quote) process and strong SEO foundation.</p>
        
        <h2>Approach</h2>
        <p>Built a Next.js site with:</p>
        <ul>
          <li>Server-side rendering for SEO</li>
          <li>Contact form with RFQ pipeline</li>
          <li>Performance optimization</li>
          <li>Mobile-first responsive design</li>
        </ul>
        
        <h2>System</h2>
        <ul>
          <li><strong>Frontend</strong>: Next.js 14 with App Router</li>
          <li><strong>Styling</strong>: Tailwind CSS with custom design system</li>
          <li><strong>Forms</strong>: Server actions for RFQ submissions</li>
          <li><strong>SEO</strong>: Dynamic meta tags, sitemap, structured data</li>
          <li><strong>Performance</strong>: Image optimization, lazy loading</li>
        </ul>
        
        <h2>Outcome</h2>
        <ul>
          <li><strong>SEO</strong>: 95+ Lighthouse SEO score</li>
          <li><strong>Performance</strong>: &lt;2s LCP, &lt;0.1 CLS</li>
          <li><strong>Conversion</strong>: Streamlined RFQ process</li>
          <li><strong>Mobile</strong>: Fully responsive across all devices</li>
        </ul>
        
        <h2>Links</h2>
        <p>- Live site: <a href="https://ktl.com">ktl.com</a></p>
        <p>- Case study: Detailed performance metrics</p>
      `
    }
  }
];

export const allProducts: Product[] = [
  {
    _id: "product-stitchos",
    _raw: { flattenedPath: "products/stitchos" },
    title: "StitchOS",
    summary: "RFID + SaaS platform for textiles. Real-time production tracking, loss reduction, and factory automation.",
    tags: ["Next.js", "FastAPI", "Supabase", "RFID"],
    url: "/products/stitchos",
    body: {
      html: `
        <p>RFID + SaaS platform for textiles. Real-time production tracking, loss reduction, and factory automation.</p>
      `
    }
  },
  {
    _id: "product-textiletrack",
    _raw: { flattenedPath: "products/textiletrack" },
    title: "TextileTrack",
    summary: "Live RFID scanning with WebSocket dashboard and Supabase sync. Offline-friendly mobile capture.",
    tags: ["Mobile", "RFID", "Supabase", "WebSocket"],
    url: "/products/textiletrack",
    body: {
      html: `
        <p>Live RFID scanning with WebSocket dashboard and Supabase sync. Offline-friendly mobile capture.</p>
      `
    }
  },
  {
    _id: "product-weft-lang",
    _raw: { flattenedPath: "products/weft-lang" },
    title: "Weft (Lang)",
    summary: "Security-first language for StitchOS effects. LLVM backend with WASM compilation.",
    tags: ["LLVM", "WASM", "VM", "Security"],
    url: "/products/weft-lang",
    body: {
      html: `
        <p>Security-first language for StitchOS effects. LLVM backend with WASM compilation.</p>
      `
    }
  },
  {
    _id: "product-quickbill",
    _raw: { flattenedPath: "products/quickbill" },
    title: "QuickBill",
    summary: "Your Pocket Accountant — mobile accounting app with offline sync and receipt scanning.",
    tags: ["Flutter", "Supabase", "Mobile"],
    url: "/products/quickbill",
    body: {
      html: `
        <p>Your Pocket Accountant — mobile accounting app with offline sync and receipt scanning.</p>
      `
    }
  },
  {
    _id: "product-cartcount",
    _raw: { flattenedPath: "products/cartcount" },
    title: "CartCount",
    summary: "Inventory management for retail. Real-time stock tracking with RFID integration.",
    tags: ["Next.js", "RFID", "Retail"],
    url: "/products/cartcount",
    body: {
      html: `
        <p>Inventory management for retail. Real-time stock tracking with RFID integration.</p>
      `
    }
  },
  {
    _id: "product-stryv",
    _raw: { flattenedPath: "products/stryv" },
    title: "STRYV",
    summary: "Sustainable brand platform. Carbon tracking, supply chain transparency, and impact reporting.",
    tags: ["Next.js", "Sustainability", "Analytics"],
    url: "/products/stryv",
    body: {
      html: `
        <p>Sustainable brand platform. Carbon tracking, supply chain transparency, and impact reporting.</p>
      `
    }
  },
  {
    _id: "product-ecotenna",
    _raw: { flattenedPath: "products/ecotenna" },
    title: "EcoTenna",
    summary: "Environmental monitoring system. IoT sensors for air quality, temperature, and humidity tracking.",
    tags: ["IoT", "Sensors", "Environmental"],
    url: "/products/ecotenna",
    body: {
      html: `
        <p>Environmental monitoring system. IoT sensors for air quality, temperature, and humidity tracking.</p>
      `
    }
  }
];

export const allPosts: Post[] = [
  {
    _id: "writing-factory-first-signal",
    _raw: { flattenedPath: "writing/factory-first-signal" },
    title: "Factory-First Signal Architecture",
    date: "2025-01-15",
    summary: "A playbook for building RFID systems that scale from factory floor to cloud.",
    tags: ["RFID", "Architecture", "IoT", "Signal Processing"],
    url: "/writing/factory-first-signal",
    body: {
      html: `
        <h1>Factory-First Signal Architecture</h1>
        <p>The textile industry is waking up to the power of real-time data. But most RFID implementations fail because they treat the factory as an afterthought.</p>
        
        <h2>The Problem</h2>
        <p>Traditional approaches start with the cloud and work backwards:</p>
        <ol>
          <li>Design the API first</li>
          <li>Figure out how to get data there</li>
          <li>Hope the factory can keep up</li>
        </ol>
        <p>This creates fragile systems that break under real-world conditions.</p>
        
        <h2>The Factory-First Approach</h2>
        <p>Start with the factory floor and build up:</p>
        
        <h3>1. Edge Processing</h3>
        <ul>
          <li>Process signals at the source</li>
          <li>Handle network interruptions gracefully</li>
          <li>Provide immediate feedback to operators</li>
        </ul>
        
        <h3>2. Reliable Sync</h3>
        <ul>
          <li>Queue-based architecture for offline resilience</li>
          <li>Conflict resolution for multi-site deployments</li>
          <li>Incremental sync to minimize bandwidth</li>
        </ul>
        
        <h3>3. Real-time Dashboard</h3>
        <ul>
          <li>WebSocket connections for live updates</li>
          <li>Progressive enhancement for slow connections</li>
          <li>Mobile-first design for floor workers</li>
        </ul>
        
        <h2>Implementation</h2>
        <pre><code>// Edge device signal processing
class RFIDProcessor {
  async processSignal(tag: string, timestamp: number) {
    // Local validation and processing
    const event = await this.validateAndProcess(tag, timestamp);
    
    // Queue for sync
    await this.queueForSync(event);
    
    // Immediate local feedback
    this.updateLocalDisplay(event);
  }
}</code></pre>
        
        <h2>Key Principles</h2>
        <ol>
          <li><strong>Resilience First</strong>: Design for network failures</li>
          <li><strong>Local Feedback</strong>: Operators need immediate response</li>
          <li><strong>Progressive Enhancement</strong>: Works offline, better online</li>
          <li><strong>Mobile Native</strong>: Factory workers use phones, not laptops</li>
        </ol>
        
        <h2>Results</h2>
        <p>Systems built this way achieve:</p>
        <ul>
          <li>99.9% uptime even with poor connectivity</li>
          <li>Sub-second response times for operators</li>
          <li>Seamless multi-site synchronization</li>
          <li>Easy maintenance and updates</li>
        </ul>
        <p>The factory floor isn't just a data source—it's your primary user interface.</p>
      `
    }
  }
];
