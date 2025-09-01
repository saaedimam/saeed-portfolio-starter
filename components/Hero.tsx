import { MotionSection } from "@/components/MotionSection";
import Link from "next/link";

export default function Hero() {
  return (
    <MotionSection className="text-center py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight text-navy dark:text-white">
        Building connected factories & clean design systems.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-charcoal/70 dark:text-warm/70 max-w-2xl mx-auto">
        I architect RFID platforms, modern websites, and data pipelines for textiles and beyond.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href="/contact" className="px-5 py-3 rounded-2xl bg-teal text-white shadow-soft hover:bg-teal/90 transition-colors">
          Book a 20‑min intro
        </Link>
        <Link href="/work" className="px-5 py-3 rounded-2xl border border-charcoal/10 dark:border-warm/20 hover:bg-charcoal/5 dark:hover:bg-warm/5 transition-colors">
          View work
        </Link>
      </div>
    </MotionSection>
  );
}
