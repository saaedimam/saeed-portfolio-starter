import Link from "next/link";

export default function CaseCard({ title, summary, href, badge }:{ title:string; summary:string; href:string; badge?:string }) {
  return (
    <Link href={href} className="block rounded-2xl border border-charcoal/10 dark:border-warm/10 p-6 hover:shadow-soft transition-all duration-300 bg-white/70 dark:bg-white/5 hover:border-teal/20 hover:-translate-y-1">
      {badge && (
        <div className="text-sm text-teal font-medium mb-2">{badge}</div>
      )}
      <h3 className="text-xl font-heading font-semibold mt-1 text-navy dark:text-white">{title}</h3>
      <p className="text-charcoal/70 dark:text-warm/70 mt-2">{summary}</p>
      <div className="mt-3 text-teal font-medium">Read case →</div>
    </Link>
  );
}
