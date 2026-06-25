import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-canvas border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/heal-gurukuli-logo-transparent.png"
              alt="Heal Gurukuli"
              width={447}
              height={559}
              className="h-11 w-auto"
            />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                Initiative
              </p>
              <ul className="space-y-2 font-sans text-slate-mid">
                {[
                  { label: "Mission", href: "/mission" },
                  { label: "Clinical Team", href: "/mission#team" },
                  { label: "For Survivors", href: "/support" },
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
                  "Privacy Policy",
                  "Financial Reports",
                  "Clinical Ethics",
                  "UKCP Register",
                ].map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-navy transition-colors">
                      {l}
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
                  "Get in Touch",
                  "Crisis Support",
                  "Media",
                  "Volunteer",
                ].map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-navy transition-colors">
                      {l}
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
            <span>UKCP Registered</span>
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
