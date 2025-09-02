import Hero from "@/components/Hero";
import CaseCard from "@/components/CaseCard";
import ProductCard from "@/components/ProductCard";
import { MotionSection } from "@/components/MotionSection";
import Link from "next/link";
import { allWorks, allProducts } from "@/lib/data";

export default function Page() {
  const featuredWorks = allWorks.filter(w => w.featured).slice(0, 3);
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <div>
      <Hero />

      <MotionSection className="mt-16">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-navy dark:text-white">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWorks.map(work => (
            <CaseCard
              key={work._id}
              title={work.title}
              summary={work.summary}
              href={work.url}
              badge={work.featured ? "Featured" : undefined}
            />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mt-20">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-navy dark:text-white">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product._id}
              title={product.title}
              summary={product.summary}
              href={product.url}
              tags={product.tags}
            />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mt-20 text-center">
        <Link href="/writing" className="text-teal font-medium hover:text-teal/80 transition-colors">
          Read the latest notes →
        </Link>
      </MotionSection>
    </div>
  );
}
