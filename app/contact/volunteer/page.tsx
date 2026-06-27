import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer with Us — Heal Gurukuli",
  description:
    "Explore volunteer opportunities, support our sanctuary, and learn about our safe intake and background verification process.",
};

export default function VolunteerPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Get Involved
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Volunteer with Us
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Support the clinical sanctuary. We offer various opportunities for advocates, administrators, and survivors to contribute their skills toward our collective healing mission.
          </p>
        </div>
      </section>

      {/* ─── VOLUNTEER ROLES & APPLICATION ─────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Roles list */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-navy font-semibold mb-4">Open Volunteer Roles</h2>
                <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6">
                  Volunteering with a trauma-recovery initiative requires dedication to safety and confidentiality. We have structured roles depending on your experience and clinical background:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Peer Group Assistant",
                    desc: "Support our registered psychotherapists during online peer facilitation groups. Requires a background in social care, mental health counseling, or peer group training.",
                    req: "DBS Check + 10hr Specialist Training",
                  },
                  {
                    title: "Administrative Aid",
                    desc: "Help coordinate session logs, verify donations, manage newsletter distributions, and handle logistics for public outreach campaigns.",
                    req: "GDPR training module completion",
                  },
                  {
                    title: "Tech & Security Volunteer",
                    desc: "Maintain our website, support encrypted portal integrations, and advise on secure database setups for maximum patient anonymity.",
                    req: "Professional IT/Security experience",
                  },
                  {
                    title: "Outreach & Advocacy",
                    desc: "Draft content, run educational social campaigns, and distribute info packets to clinics, spiritual centers, and survivor organizations.",
                    req: "Alignment with ethical communication rules",
                  },
                ].map((role) => (
                  <div key={role.title} className="bg-canvas-white border border-border rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:border-blue/20 transition-all">
                    <h3 className="font-serif text-lg text-navy font-semibold">{role.title}</h3>
                    <p className="font-sans text-xs text-slate-mid leading-relaxed flex-1 italic">{role.desc}</p>
                    <div className="border-t border-border pt-3 mt-1 flex justify-between items-center text-[10px]">
                      <span className="text-slate-light uppercase tracking-wider">Requirement</span>
                      <span className="text-blue font-semibold">{role.req}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safeguarding Alert */}
              <div className="bg-blue-soft border border-blue/15 rounded-xl p-6">
                <h4 className="font-serif text-base text-navy font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Safeguarding &amp; Training
                </h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  To protect the safety of our community, all volunteers working near clinical materials or interacting with survivors must undergo comprehensive identity checks, references, and a specialized training workshop regarding boundaries and cultic trauma dynamics.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-canvas-white border border-border rounded-xl p-6 shadow-sm sticky top-28 space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-navy font-semibold mb-1">Apply to Volunteer</h3>
                  <p className="font-sans text-xs text-slate-mid italic">Submit a brief interest application.</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="vol-name" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="vol-name"
                      required
                      placeholder="Your name"
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="vol-email" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="vol-email"
                      required
                      placeholder="your.email@example.com"
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="vol-role" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Role of Interest
                    </label>
                    <select
                      id="vol-role"
                      required
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs text-slate-mid focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    >
                      <option value="">Select a role...</option>
                      <option value="peer">Peer Group Assistant</option>
                      <option value="admin">Administrative Aid</option>
                      <option value="tech">Tech &amp; Security</option>
                      <option value="advocacy">Outreach &amp; Advocacy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vol-interest" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Why are you interested?
                    </label>
                    <textarea
                      id="vol-interest"
                      required
                      rows={4}
                      placeholder="Share a short note about your interest, skills, or background."
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-sans text-xs font-semibold py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact/get-in-touch"
              className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas-soft hover:text-navy active:scale-95 transition-all duration-150"
            >
              Back to General Contact
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
