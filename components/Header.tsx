"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/components/DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-heading font-semibold tracking-tight">
          <span className="inline-block align-middle mr-2 rounded-lg bg-teal px-2 py-1 text-white text-sm font-medium">SI</span>
          <span className="align-middle">Saaed Imam</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`hover:opacity-80 transition-opacity ${pathname===l.href ? "font-semibold text-teal" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
