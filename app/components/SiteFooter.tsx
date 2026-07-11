import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-canvas border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 -my-6">
              <Image
                src="/LogoNoBackgd-Photoroom.png"
                alt="Heal Gurukuli Logo"
                width={600}
                height={150}
                className="h-28 w-auto hover:opacity-90 transition-opacity duration-150"
              />
            </Link>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-light hover:text-navy transition-colors duration-150"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                Initiative
              </p>
              <ul className="space-y-2 font-sans text-slate-mid">
                {[
                  { label: "About Our Mission", href: "/mission" },
                  { label: "Clinical Team", href: "/clinicians" },
                  { label: "Therapy", href: "/support" },
                  { label: "Resources", href: "/resources" },
                  { label: "FAQs", href: "#" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-navy transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                Governance
              </p>
              <ul className="space-y-2 font-sans text-slate-mid">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Financials", href: "/contribute#financials" },
                  { label: "Clinical Ethics", href: "/mission#governance" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-navy transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                Contact
              </p>
              <ul className="space-y-2 font-sans text-slate-mid">
                {[
                  { label: "Get in Touch", href: "/contact/get-in-touch" },
                  { label: "Crisis Support", href: "/contact/crisis-support" },
                  { label: "Media", href: "/contact/media" },
                  { label: "Volunteer", href: "/contact/volunteer" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-navy transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-slate-light">
            © {year} Heal Gurukuli Initiative. All Rights Reserved.
          </p>
          <div className="flex gap-5 font-sans text-xs text-slate-light">
            <span>SSL Encrypted</span>
            <span>Clinically Governed</span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p
            className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-[0.4em] sm:tracking-[0.6em] text-navy/15 font-light uppercase select-none"
            aria-hidden="true"
          >
            HEAL GURUKULI
          </p>
        </div>

      </div>
    </footer>
  );
}
