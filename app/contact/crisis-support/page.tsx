import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crisis Support — Heal Gurukuli",
  description:
    "Information and protocols for active clients in crisis, alongside emergency helpline contacts for immediate assistance.",
};

export default function CrisisSupportPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <span className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 inline-block">
            Emergency Guidelines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Crisis Support
          </h1>
          <div className="w-12 h-px bg-rose-500 mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            If you are in immediate danger or feel unable to keep yourself safe, please contact standard emergency services immediately. The Heal Gurukuli crisis framework supports active, registered clients during operating hours.
          </p>
        </div>
      </section>

      {/* ─── CRISIS NUMBERS & STEPS ─────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Emergency Hotlines Card */}
          <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 md:p-10">
            <h2 className="font-serif text-2xl text-navy font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-rose-500 shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Immediate Life-Saving Services
            </h2>
            <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6">
              Our clinical team are not emergency first responders. If you are experiencing an acute safety emergency, please use the following free, 24/7 services:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm">
                <p className="font-sans text-xs text-rose-500 uppercase tracking-wider font-semibold mb-1">United Kingdom</p>
                <p className="font-serif text-xl text-navy font-bold mb-1">Call 999 <span className="text-sm font-normal text-slate-mid">or 111</span></p>
                <p className="font-sans text-xs text-slate-mid">Go to the nearest Accident &amp; Emergency (A&amp;E) unit.</p>
              </div>

              <div className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm">
                <p className="font-sans text-xs text-rose-500 uppercase tracking-wider font-semibold mb-1">United States / Canada</p>
                <p className="font-serif text-xl text-navy font-bold mb-1">Call 911 <span className="text-sm font-normal text-slate-mid">or 988</span></p>
                <p className="font-sans text-xs text-slate-mid">988 is the Suicide &amp; Crisis Lifeline (Free &amp; Confidential).</p>
              </div>

              <div className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm">
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider font-semibold mb-1">Samaritans (UK)</p>
                <p className="font-serif text-xl text-navy font-bold mb-1">Call 116 123</p>
                <p className="font-sans text-xs text-slate-mid">Free phone support, open 24 hours a day, 365 days a year.</p>
              </div>

              <div className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm">
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider font-semibold mb-1">International Helplines</p>
                <p className="font-serif text-xl text-navy font-bold mb-1">Befrienders Worldwide</p>
                <p className="font-sans text-xs text-slate-mid">Find a helpline in your country at <a href="https://www.befrienders.org" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">befrienders.org</a></p>
              </div>
            </div>
          </div>

          {/* Active Clients Crisis Line */}
          <div className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="font-serif text-2xl text-navy font-semibold mb-4">Active Client Crisis Support</h2>
            <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6">
              For individuals currently enrolled in active therapy or structured support groups within our initiative, we offer a dedicated crisis-attunement process:
            </p>

            <div className="divide-y divide-border border border-border rounded-xl bg-canvas-soft overflow-hidden">
              <div className="p-4 sm:flex gap-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider w-36 shrink-0 pt-0.5 font-semibold">Availability</p>
                <p className="font-sans text-sm text-slate-mid">Monday to Friday, 09:00–18:00 GMT. Response occurs within 2 hours.</p>
              </div>
              <div className="p-4 sm:flex gap-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider w-36 shrink-0 pt-0.5 font-semibold">Protocol</p>
                <p className="font-sans text-sm text-slate-mid">Access the secure messenger in your client portal and toggle the "Urgent Distress" flag. Your therapist will review it at the earliest slot.</p>
              </div>
              <div className="p-4 sm:flex gap-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider w-36 shrink-0 pt-0.5 font-semibold">Limitations</p>
                <p className="font-sans text-sm text-slate-mid">This channel is strictly for safety planning, somatic grounding, and coping support. It cannot replace weekly clinical sessions.</p>
              </div>
            </div>
          </div>

          {/* Grounding Exercise */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-6 md:p-10">
            <h2 className="font-serif text-2xl text-navy font-semibold mb-4">Immediate Grounding: The 5-4-3-2-1 Technique</h2>
            <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6">
              When trauma activates your nervous system, your body goes into fight, flight, or freeze. Take a slow breath, and look around your environment to find:
            </p>

            <div className="grid grid-cols-5 gap-3 font-sans text-center text-xs">
              <div className="bg-white border border-blue/10 rounded-lg p-3">
                <span className="text-xl font-bold text-blue block mb-1">5</span>
                <span className="text-slate-mid">Things you can <strong className="text-navy font-semibold">see</strong></span>
              </div>
              <div className="bg-white border border-blue/10 rounded-lg p-3">
                <span className="text-xl font-bold text-blue block mb-1">4</span>
                <span className="text-slate-mid">Things you can <strong className="text-navy font-semibold">touch</strong></span>
              </div>
              <div className="bg-white border border-blue/10 rounded-lg p-3">
                <span className="text-xl font-bold text-blue block mb-1">3</span>
                <span className="text-slate-mid">Things you can <strong className="text-navy font-semibold">hear</strong></span>
              </div>
              <div className="bg-white border border-blue/10 rounded-lg p-3">
                <span className="text-xl font-bold text-blue block mb-1">2</span>
                <span className="text-slate-mid">Things you can <strong className="text-navy font-semibold">smell</strong></span>
              </div>
              <div className="bg-white border border-blue/10 rounded-lg p-3">
                <span className="text-xl font-bold text-blue block mb-1">1</span>
                <span className="text-slate-mid">Thing you can <strong className="text-navy font-semibold">taste</strong></span>
              </div>
            </div>
          </div>

          {/* Footer Back Button */}
          <div className="text-center">
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
