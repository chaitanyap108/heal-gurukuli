"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type SubLink = {
  href: string;
  label: string;
  description?: string;
};

type NavItem =
  | { href: string; label: string; children?: undefined; parentHref?: undefined }
  | { href?: undefined; label: string; children: SubLink[]; parentHref: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    parentHref: "/mission",
    children: [
      { href: "/mission#why-we-exist", label: "Why We Exist", description: "Our mandate to serve gurukulis" },
      { href: "/mission#clinical-framework", label: "Therapeutic Framework", description: "Clinical approach & modalities" },
      { href: "/mission#team", label: "Meet the Team", description: "Our clinical practitioners" },
      { href: "/mission#founder", label: "The Founder", description: "Caitanya Lila" },
      { href: "/mission#board-of-trustees", label: "Board of Trustees", description: "Independent oversight" },
      { href: "/mission#governance", label: "Governance", description: "Ethics & confidentiality" },
    ],
  },
  {
    label: "Therapy",
    parentHref: "/support",
    children: [
      { href: "/support#intake", label: "Intake Form", description: "Begin the therapeutic process" },
      { href: "/clinicians", label: "Meet the Therapists", description: "Our registered clinical team" },
    ],
  },
  {
    label: "Resources",
    parentHref: "/resources",
    children: [
      { href: "/resources#institutional-trauma", label: "Institutional Trauma", description: "Psychoeducation on systemic abuse" },
      { href: "/resources#grounding-techniques", label: "Grounding & Regulation", description: "Practical nervous system tools" },
      { href: "/resources#external-support", label: "External Support & Reading", description: "Curated external links" },
      { href: "/resources#understanding-therapy", label: "Understanding Therapy", description: "Guides to therapeutic modalities" },
      { href: "/support#crisis", label: "Crisis Support Lines", description: "Immediate help when you need it" },
    ],
  },
  { href: "/forum", label: "Forum" },
  { href: "/contribute", label: "Contribute" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/impact", label: "See the Impact" },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function DropdownMenu({ item, pathname }: { item: NavItem & { children: SubLink[]; parentHref: string }; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive =
    pathname === item.parentHref ||
    item.children.some((c) => pathname === c.href || pathname.startsWith(c.href.split("#")[0]));

  return (
    <div ref={ref} className="relative">
      <div className={`flex items-center gap-0.5 ${isActive ? "text-navy font-semibold" : ""}`}>
        <Link
          href={item.parentHref}
          onClick={() => setOpen(false)}
          className="transition-colors hover:text-navy"
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`${open ? "Close" : "Open"} ${item.label} menu`}
          className="p-1 rounded hover:bg-blue-soft transition-colors"
        >
          <ChevronIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-canvas-white border border-border rounded-xl shadow-lg py-2 z-50">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-canvas-white border-l border-t border-border rotate-45" />
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="flex flex-col gap-0.5 px-4 py-3 hover:bg-blue-soft transition-colors"
            >
              <span className="font-sans text-sm text-navy font-medium">{child.label}</span>
              {child.description && (
                <span className="font-sans text-xs text-slate-mid">{child.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-canvas-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        <Link href="/" className="shrink-0 flex items-center" aria-label="Heal Gurukuli — home">
          <Image
            src="/ConchCircle-Photoroom.png"
            alt="Heal Gurukuli Logo"
            width={240}
            height={240}
            priority
            className="h-24 w-auto hover:opacity-90 transition-opacity duration-150 -my-4"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 font-sans text-sm text-slate-mid">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`transition-colors hover:text-navy ${
                  pathname === item.href ? "text-navy font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contribute"
            className="bg-navy text-white font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-soft transition-colors gap-[5px] lg:hidden"
          >
            <span className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-navy rounded-full transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-canvas-white lg:hidden ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => {
            if (item.children) {
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-blue-soft transition-colors">
                    <Link
                      href={item.parentHref}
                      onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                      className="font-sans text-sm text-slate-mid hover:text-navy flex-1"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      aria-label={`${isExpanded ? "Close" : "Open"} ${item.label} sub-menu`}
                      className="p-1 ml-1"
                    >
                      <ChevronIcon open={isExpanded} />
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="pl-4 pb-1 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                          className="font-sans text-sm px-3 py-2.5 rounded-lg transition-colors text-slate-mid hover:text-navy hover:bg-blue-soft flex flex-col gap-0.5"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.description && (
                            <span className="text-xs text-slate-light">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMenuOpen(false)}
                className={`font-sans text-sm px-3 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-navy font-semibold bg-blue-soft"
                    : "text-slate-mid hover:text-navy hover:bg-blue-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
