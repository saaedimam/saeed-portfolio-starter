import Link from "next/link";
import { getAllWorks } from "@/lib/mdx";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Work & Case Studies",
  description: "RFID platforms, modern websites, and data pipelines for textiles and beyond.",
  path: "/work",
});

export default function Page() {
  const works = getAllWorks();
  
  return (
    <div>
      <h1 className="text-3xl font-heading font-semibold text-navy dark:text-white">Work & Case Studies</h1>
      <p className="mt-2 text-charcoal/70 dark:text-warm/70">RFID platforms, modern websites, and data pipelines for textiles and beyond.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {works.map(work => (
          <Link key={work._id} href={work.url} className="block p-6 rounded-2xl border border-charcoal/10 dark:border-warm/10 hover:shadow-soft transition-all duration-300 bg-white/70 dark:bg-white/5 hover:border-teal/20 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-charcoal/60 dark:text-warm/60">{new Date(work.date).toLocaleDateString()}</div>
              {work.featured && (
                <span className="text-xs px-2 py-1 rounded-full bg-teal/10 text-teal font-medium">Featured</span>
              )}
            </div>
            <h3 className="text-xl font-heading font-semibold text-navy dark:text-white">{work.title}</h3>
            <p className="text-charcoal/70 dark:text-warm/70 mt-2">{work.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {work.tags?.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
