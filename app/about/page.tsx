import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About",
  description: "Platform Architect & Founder building connected factories and clean design systems.",
  path: "/about",
});

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-heading font-semibold text-navy dark:text-white mb-4">About</h1>
        <p className="text-lg text-charcoal/70 dark:text-warm/70">
          Platform Architect & Founder building connected factories and clean design systems.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          I lead StitchOS and digital initiatives at KTL, shipping RFID tracking platforms, 
          Next.js applications, and operations tools that solve real factory problems.
        </p>
        
        <p>
          My focus is on building systems that work reliably in challenging environments—poor connectivity, 
          harsh conditions, and operators who need immediate feedback. Every product starts with the factory floor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-heading font-semibold text-navy dark:text-white mb-4">Tech Stack</h2>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">Next.js 14</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">FastAPI</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">Supabase</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">WebSockets</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">Docker</span>
              <span className="px-3 py-1 rounded-full bg-warm/60 dark:bg-charcoal/40 text-charcoal dark:text-warm text-sm">RFID</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-semibold text-navy dark:text-white mb-4">Focus Areas</h2>
          <ul className="space-y-2 text-charcoal/70 dark:text-warm/70">
            <li>• Real-time tracking systems</li>
            <li>• Factory automation & IoT</li>
            <li>• Performance optimization</li>
            <li>• User experience design</li>
            <li>• System reliability</li>
            <li>• Mobile-first interfaces</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10 dark:border-warm/10 pt-8">
        <h2 className="text-2xl font-heading font-semibold text-navy dark:text-white mb-4">Get in Touch</h2>
        <a 
          href="/contact" 
          className="inline-flex items-center px-5 py-3 rounded-2xl bg-teal text-white shadow-soft hover:bg-teal/90 transition-colors"
        >
          Book a 20-min intro
        </a>
      </div>
    </div>
  );
}
