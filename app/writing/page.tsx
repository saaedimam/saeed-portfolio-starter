import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Writing & Notes",
  description: "Thoughts on RFID systems, factory automation, and building connected products.",
  path: "/writing",
});

export default function Page() {
  const posts = getAllPosts();
  
  return (
    <div>
      <h1 className="text-3xl font-heading font-semibold text-navy dark:text-white">Writing & Notes</h1>
      <p className="mt-2 text-charcoal/70 dark:text-warm/70">Thoughts on RFID systems, factory automation, and building connected products.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {posts.map(post => (
          <Link key={post._id} href={post.url} className="block p-6 rounded-2xl border border-charcoal/10 dark:border-warm/10 hover:shadow-soft transition-all duration-300 bg-white/70 dark:bg-white/5 hover:border-teal/20 hover:-translate-y-1">
            <div className="text-sm text-charcoal/60 dark:text-warm/60 mb-2">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <h3 className="text-xl font-heading font-semibold text-navy dark:text-white">{post.title}</h3>
            <p className="text-charcoal/70 dark:text-warm/70 mt-2">{post.summary}</p>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
