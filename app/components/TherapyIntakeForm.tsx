"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function TherapyIntakeForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Client-side success routing until a backend endpoint is wired
    router.push("/support/welcome");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-canvas border border-border rounded-2xl p-6 md:p-10 space-y-6"
      noValidate={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="intake-name" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="intake-name"
            name="name"
            required
            placeholder="Your name"
            className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas-white text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
          />
        </div>
        <div>
          <label htmlFor="intake-email" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
            Secure Email Address
          </label>
          <input
            type="email"
            id="intake-email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas-white text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="intake-location" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
          Location / Time Zone
        </label>
        <input
          type="text"
          id="intake-location"
          name="location"
          placeholder="e.g. London, UK · GMT"
          className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas-white text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
        />
      </div>

      <div>
        <label htmlFor="intake-reason" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
          What brings you here?
        </label>
        <textarea
          id="intake-reason"
          name="reason"
          required
          rows={5}
          placeholder="Share briefly what you are hoping to work on. Please avoid highly detailed trauma history in this initial form."
          className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas-white text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all resize-y"
        />
      </div>

      <div>
        <label htmlFor="intake-availability" className="block font-sans text-xs text-slate-mid uppercase tracking-wider font-semibold mb-2">
          Preferred availability
        </label>
        <select
          id="intake-availability"
          name="availability"
          className="block w-full px-4 py-3 border border-border rounded-lg bg-canvas-white text-sm text-slate-mid focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
        >
          <option value="">Select a preference...</option>
          <option value="weekday-mornings">Weekday mornings</option>
          <option value="weekday-afternoons">Weekday afternoons</option>
          <option value="weekday-evenings">Weekday evenings</option>
          <option value="weekends">Weekends</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 rounded border-border text-navy focus:ring-blue"
        />
        <span className="font-sans text-xs text-slate-mid leading-relaxed">
          I consent to Heal Gurukuli storing this intake information under clinical privacy standards for the purpose of reviewing my request.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-navy text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150 disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit Intake Form"}
      </button>
    </form>
  );
}
