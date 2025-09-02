import { allProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import Prose from "@/components/Prose";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const generateStaticParams = async () =>
  allProducts.map(p => ({ slug: p._raw.flattenedPath.replace("products/", "") }));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p._raw.flattenedPath === `products/${params.slug}`);
  if (!product) return {};

  return generateSEOMetadata({
    title: product.title,
    description: product.summary,
    path: product.url,
    image: `/og?title=${encodeURIComponent(product.title)}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p._raw.flattenedPath === `products/${params.slug}`);
  if (!product) notFound();

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-heading font-semibold text-navy dark:text-white mb-4">{product.title}</h1>
        <p className="text-xl text-charcoal/70 dark:text-warm/70">{product.summary}</p>
        {product.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map(tag => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <Prose>
        <div dangerouslySetInnerHTML={{ __html: product.body.html }} />
      </Prose>
    </article>
  );
}
