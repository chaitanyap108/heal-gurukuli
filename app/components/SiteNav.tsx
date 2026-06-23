"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/support", label: "Support" },
  { href: "/contribute", label: "Contribute" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-canvas-white/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/heal-gurukuli-logo.png"
            alt="Heal Gurukuli"
            width={200}
            height={56}
            priority
            className="h-14 w-auto object-contain mix-blend-multiply"
            style={{ filter: "brightness(1.05) contrast(1.3)" }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm text-slate-mid">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-navy ${
                pathname === href ? "text-navy font-medium" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contribute"
          className="bg-navy text-white font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 whitespace-nowrap"
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
