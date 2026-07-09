import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Heal Gurukuli",
  description:
    "How Heal Gurukuli collects, stores, and protects personal and clinical information under GDPR and professional ethical standards.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Governance
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Privacy Policy
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            How we collect, store, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 font-sans text-sm md:text-base text-slate-mid leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-3">Overview</h2>
            <p>
              Heal Gurukuli Initiative treats confidentiality as a clinical and ethical
              cornerstone. Personal data submitted through this website — including
              contact forms, volunteer applications, and therapy intake forms — is
              handled in accordance with UK GDPR and the ethical frameworks of the
              UKCP and BACP.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-3">What we collect</h2>
            <p>
              We may collect your name, email address, location or time zone, and any
              information you choose to share in free-text fields. Clinical records
              created after intake are stored separately under encrypted, clinician-only
              systems and are never shared with funders or third parties without
              explicit written consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-3">How we use it</h2>
            <p>
              Intake and contact data are used solely to review requests, schedule
              consultations, and communicate about services. We do not sell or rent
              personal data. Safeguarding disclosures required by law are the only
              exceptions to confidentiality, and these are discussed with clients
              wherever safe to do so.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-3">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal data
              we hold about you, subject to clinical record-keeping requirements.
              Contact us via the{" "}
              <Link href="/contact/get-in-touch" className="text-blue hover:underline">
                Get in Touch
              </Link>{" "}
              page for privacy-related requests.
            </p>
          </div>

          <p className="text-xs text-slate-light italic pt-4 border-t border-border">
            This page provides a summary of our privacy practices. A full policy document
            will be published as the initiative formalises its data-protection framework.
          </p>
        </div>
      </section>
    </div>
  );
}
