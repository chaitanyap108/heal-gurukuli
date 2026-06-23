"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/support", label: "Support" },
  { href: "/contribute", label: "Contribute" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas-white/95 backdrop-blur-sm border-b border-border">
      {/* ── Main bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" aria-label="Heal Gurukuli — home">
          <Image
            src="/heal-gurukuli-logo-transparent.png"
            alt="Heal Gurukuli"
            width={447}
            height={559}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 font-sans text-sm text-slate-mid">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-navy ${
                pathname === href ? "text-navy font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right cluster: Donate + Hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/contribute"
            className="bg-navy text-white font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            Donate
          </Link>

          {/* Hamburger — always visible, controls mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-soft transition-colors gap-[5px]"
          >
            <span
              className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile / full nav dropdown ── */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-canvas-white ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-sans text-sm px-3 py-3 rounded-lg transition-colors ${
                pathname === href
                  ? "text-navy font-semibold bg-blue-soft"
                  : "text-slate-mid hover:text-navy hover:bg-blue-soft"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
