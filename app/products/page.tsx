import ProductCard from "@/components/ProductCard";
import { generateMetadata } from "@/lib/seo";
import { allProducts } from "@/lib/data";

export const metadata = generateMetadata({
  title: "Products",
  description: "RFID platforms, mobile apps, and development tools for textiles and beyond.",
  path: "/products",
});

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-heading font-semibold text-navy dark:text-white">Products</h1>
      <p className="text-charcoal/70 dark:text-warm/70 mt-3 max-w-3xl">
        RFID platforms, mobile apps, and development tools for textiles and beyond. 
        Each product is built to solve real factory and business needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {allProducts.map((product) => (
          <ProductCard
            key={product._id}
            title={product.title}
            summary={product.summary}
            href={product.url}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
}
