import { allWorks } from "@/lib/data";
import { notFound } from "next/navigation";
import Prose from "@/components/Prose";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const generateStaticParams = async () => allWorks.map(w => ({ slug: w._raw.flattenedPath.replace("work/","") }));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = allWorks.find(w => w._raw.flattenedPath === `work/${params.slug}`);
  if (!work) return {};
  
  return generateSEOMetadata({
    title: work.title,
    description: work.summary,
    path: work.url,
    image: `/og?title=${encodeURIComponent(work.title)}`,
  });
}

export default function Page({ params }:{ params:{ slug:string }}) {
  const work = allWorks.find(w => w._raw.flattenedPath === `work/${params.slug}`);
  if (!work) notFound();
  
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          {work.featured && (
            <span className="text-sm px-3 py-1 rounded-full bg-teal/10 text-teal font-medium">Featured</span>
          )}
          <time className="text-sm text-charcoal/60 dark:text-warm/60">
            {new Date(work.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
        <h1 className="text-4xl font-heading font-semibold text-navy dark:text-white mb-4">{work.title}</h1>
        <p className="text-xl text-charcoal/70 dark:text-warm/70">{work.summary}</p>
        {work.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {work.tags.map(tag => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: work.body.html }} />
      </Prose>
    </article>
  );
}
