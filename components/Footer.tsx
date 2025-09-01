export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-charcoal/10 dark:border-warm/10 mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-charcoal/60 dark:text-warm/60">
        <p>© {year} Saaed Imam — Platform Architect & Founder.</p>
        <div className="flex gap-4">
          <a href="/rss" className="hover:text-teal transition-colors">RSS</a>
          <a href="https://github.com/saaedimam" target="_blank" rel="noreferrer" className="hover:text-teal transition-colors">GitHub</a>
          <a href="mailto:sayedimam.fahim@gmail.com" className="hover:text-teal transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
