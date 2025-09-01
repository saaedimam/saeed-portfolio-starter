import Link from "next/link";

export default function ProductCard({ title, summary, href, tags=[] }:{ title:string; summary:string; href:string; tags?:string[] }) {
  return (
    <div className="rounded-2xl border border-charcoal/10 dark:border-warm/10 p-6 bg-white/70 dark:bg-white/5 hover:shadow-soft transition-all duration-300 hover:border-teal/20 hover:-translate-y-1">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm font-medium">{t}</span>)}
      </div>
      <h3 className="text-lg font-heading font-semibold text-navy dark:text-white">{title}</h3>
      <p className="text-charcoal/70 dark:text-warm/70 mt-1">{summary}</p>
      <div className="mt-3"><Link className="text-teal font-medium hover:text-teal/80 transition-colors" href={href}>Explore →</Link></div>
    </div>
  );
}
