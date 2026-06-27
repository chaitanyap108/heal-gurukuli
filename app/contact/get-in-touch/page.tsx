import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get in Touch — Heal Gurukuli",
  description:
    "Contact the Heal Gurukuli Initiative for general inquiries, intake requests, and clinical information.",
};

export default function GetInTouchPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Get in Touch
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Whether you are a survivor seeking intake services, a professional looking to connect, or have general questions, we are here to listen. All messages are handled with strict clinical discretion.
          </p>
        </div>
      </section>

      {/* ─── CONTACT FORM & INFO ────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-canvas-white border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-navy font-semibold mb-3">Response Timelines</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4">
                  We aim to respond to all non-crisis clinical and general inquiries within <strong className="text-navy font-medium">1–2 business days</strong>. 
                </p>
                <div className="bg-blue-soft border border-blue/15 rounded-lg p-4">
                  <p className="font-sans text-xs text-blue font-semibold uppercase tracking-wider mb-1">
                    Security Notice
                  </p>
                  <p className="font-sans text-xs text-slate-mid leading-relaxed">
                    Our communications use end-to-end encryption. For heightened privacy, you may request our PGP public key.
                  </p>
                </div>
              </div>

              <div className="bg-canvas-white border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-navy font-semibold mb-3">Other Inquiry Types</h3>
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider mb-3">Direct Links</p>
                <ul className="space-y-3 font-sans text-sm text-blue font-semibold">
                  <li>
                    <Link href="/contact/crisis-support" className="hover:underline flex items-center gap-1.5">
                      <span>• Crisis Support Guidelines</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/media" className="hover:underline flex items-center gap-1.5">
                      <span>• Media & Press Relations</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/volunteer" className="hover:underline flex items-center gap-1.5">
                      <span>• Volunteer Opportunities</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
                      Secure Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    required
                    className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas text-sm text-slate-mid focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                  >
                    <option value="">Select an option...</option>
                    <option value="intake">Clinical Intake / Therapy Request</option>
                    <option value="group">Community Group Inquiry</option>
                    <option value="professional">Professional Collaboration</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Describe your request. Please avoid sharing highly detailed trauma history in this initial contact form to protect your confidentiality."
                    className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all resize-y"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-border text-blue focus:ring-blue"
                    />
                  </div>
                  <div className="ml-3 text-xs leading-5">
                    <label htmlFor="privacy" className="font-sans text-slate-mid">
                      I consent to having this website store my submitted information in compliance with clinical privacy standards.
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-navy text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-mid active:scale-98 transition-all duration-150"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
