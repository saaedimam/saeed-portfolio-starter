import ContactForm from "@/components/ContactForm";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch to discuss RFID systems, factory automation, or building connected products.",
  path: "/contact",
});

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-heading font-semibold text-navy dark:text-white mb-4">Contact</h1>
        <p className="text-lg text-charcoal/70 dark:text-warm/70">
          Tell me about your project, or book a quick intro call to discuss RFID systems, 
          factory automation, or building connected products.
        </p>
      </div>
      
      <ContactForm />
      
      <div className="border-t border-charcoal/10 dark:border-warm/10 pt-8">
        <h2 className="text-2xl font-heading font-semibold text-navy dark:text-white mb-4">Other Ways to Connect</h2>
        <div className="space-y-3">
          <a 
            href="mailto:sayedimam.fahim@gmail.com" 
            className="block text-teal hover:text-teal/80 transition-colors"
          >
            sayedimam.fahim@gmail.com
          </a>
          <a 
            href="https://github.com/saaedimam" 
            target="_blank" 
            rel="noreferrer"
            className="block text-teal hover:text-teal/80 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
