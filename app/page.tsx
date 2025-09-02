import Hero from "@/components/Hero";
import CaseCard from "@/components/CaseCard";
import ProductCard from "@/components/ProductCard";
import { MotionSection } from "@/components/MotionSection";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Hero />

      <MotionSection className="mt-16">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-navy dark:text-white">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CaseCard title="StitchOS — The Connected Loom" summary="SaaS + IoT RFID platform powering real-time production tracking." href="/work/stitchos" badge="Featured"/>
          <CaseCard title="TextileTrack" summary="Live RFID scanning + WebSocket board + Supabase sync." href="/work/textiletrack" badge="Featured"/>
          <CaseCard title="KTL Corporate" summary="Next.js site, RFQ pipeline, SEO, bilingual rollout." href="/work/ktl" badge="Featured"/>
        </div>
      </MotionSection>

      <MotionSection className="mt-20">
        <h2 className="text-2xl font-heading font-semibold mb-6 text-navy dark:text-white">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard title="StitchOS" summary="RFID + SaaS platform for textiles." href="/products/stitchos" tags={["Next.js","FastAPI","Supabase"]}/>
          <ProductCard title="Weft (Lang)" summary="Security-first language for StitchOS effects." href="/products/weft-lang" tags={["LLVM","WASM","VM"]}/>
          <ProductCard title="QuickBill" summary="Your Pocket Accountant — mobile accounting." href="/products/quickbill" tags={["Flutter","Supabase"]}/>
        </div>
      </MotionSection>

      <MotionSection className="mt-20 text-center">
        <Link href="/writing" className="text-teal font-medium hover:text-teal/80 transition-colors">Read the latest notes →</Link>
      </MotionSection>
    </div>
  );
}
