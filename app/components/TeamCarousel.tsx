"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clinicians } from "../data/clinicians";

export default function TeamCarousel() {
  const [active, setActive] = useState(0);
  const clinician = clinicians[active];

  return (
    <div className="w-full">
      {/* Featured card */}
      <div className="bg-canvas border border-border rounded-2xl overflow-hidden mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-[3/2] sm:aspect-auto sm:min-h-[280px] bg-canvas-soft">
            <Image
              src={clinician.image}
              alt={`Photo of ${clinician.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
            <div>
              <h3 className="font-serif text-2xl text-navy font-semibold mb-1">
                {clinician.name}
              </h3>
              <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold">
                {clinician.title}
              </p>
            </div>
            <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
              {clinician.shortBio}
            </p>
            <Link
              href={`/clinicians/${clinician.slug}`}
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150 w-fit"
            >
              View Full Profile
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <button
          type="button"
          onClick={() => setActive((a) => (a - 1 + clinicians.length) % clinicians.length)}
          aria-label="Previous team member"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-mid hover:border-navy hover:text-navy transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {clinicians.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to ${c.name}`}
              className={`rounded-full transition-all duration-200 ${
                i === active ? "w-6 h-2 bg-navy" : "w-2 h-2 bg-border hover:bg-slate-mid"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive((a) => (a + 1) % clinicians.length)}
          aria-label="Next team member"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-mid hover:border-navy hover:text-navy transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {clinicians.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`text-left p-3 rounded-xl border transition-all duration-200 ${
              i === active
                ? "border-navy bg-canvas shadow-sm"
                : "border-border bg-canvas-white hover:border-blue/30"
            }`}
          >
            <p className="font-sans text-xs text-navy font-semibold truncate">{c.name}</p>
            <p className="font-sans text-[10px] text-slate-light truncate mt-0.5">{c.title}</p>
            <Link
              href={`/clinicians/${c.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-2 font-sans text-[10px] text-blue font-semibold hover:underline"
            >
              Full profile →
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
