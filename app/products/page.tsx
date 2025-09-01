import ProductCard from "@/components/ProductCard";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Products",
  description: "RFID platforms, mobile apps, and development tools for textiles and beyond.",
  path: "/products",
});

const products = [
  {
    title: "StitchOS",
    summary: "RFID + SaaS platform for textiles. Real-time production tracking, loss reduction, and factory automation.",
    tags: ["Next.js", "FastAPI", "Supabase", "RFID"],
    href: "/work/stitchos"
  },
  {
    title: "TextileTrack",
    summary: "Live RFID scanning with WebSocket dashboard and Supabase sync. Offline-friendly mobile capture.",
    tags: ["Mobile", "RFID", "Supabase", "WebSocket"],
    href: "/work/textiletrack"
  },
  {
    title: "Weft (Lang)",
    summary: "Security-first language for StitchOS effects. LLVM backend with WASM compilation.",
    tags: ["LLVM", "WASM", "VM", "Security"],
    href: "/products"
  },
  {
    title: "QuickBill",
    summary: "Your Pocket Accountant — mobile accounting app with offline sync and receipt scanning.",
    tags: ["Flutter", "Supabase", "Mobile"],
    href: "/products"
  },
  {
    title: "CartCount",
    summary: "Inventory management for retail. Real-time stock tracking with RFID integration.",
    tags: ["Next.js", "RFID", "Retail"],
    href: "/products"
  },
  {
    title: "STRYV",
    summary: "Sustainable brand platform. Carbon tracking, supply chain transparency, and impact reporting.",
    tags: ["Next.js", "Sustainability", "Analytics"],
    href: "/products"
  },
  {
    title: "EcoTenna",
    summary: "Environmental monitoring system. IoT sensors for air quality, temperature, and humidity tracking.",
    tags: ["IoT", "Sensors", "Environmental"],
    href: "/products"
  }
];

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-heading font-semibold text-navy dark:text-white">Products</h1>
      <p className="text-charcoal/70 dark:text-warm/70 mt-3 max-w-3xl">
        RFID platforms, mobile apps, and development tools for textiles and beyond. 
        Each product is built to solve real factory and business needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            summary={product.summary}
            href={product.href}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
}
