import { allPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Prose from "@/components/Prose";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const generateStaticParams = async () => allPosts.map(p => ({ slug: p._raw.flattenedPath.replace("writing/","") }));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p._raw.flattenedPath === `writing/${params.slug}`);
  if (!post) return {};
  
  return generateSEOMetadata({
    title: post.title,
    description: post.summary,
    path: post.url,
    image: `/og?title=${encodeURIComponent(post.title)}`,
  });
}

export default function Page({ params }:{ params:{ slug:string }}) {
  const post = allPosts.find(p => p._raw.flattenedPath === `writing/${params.slug}`);
  if (!post) notFound();
  
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <time className="text-sm text-charcoal/60 dark:text-warm/60">
          {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </time>
        <h1 className="text-4xl font-heading font-semibold text-navy dark:text-white mb-4">{post.title}</h1>
        <p className="text-xl text-charcoal/70 dark:text-warm/70">{post.summary}</p>
        {post.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </Prose>
    </article>
  );
}
