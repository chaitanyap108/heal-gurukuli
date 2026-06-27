"use client";

import { useState } from "react";

const placeholderTestimonials = [
  {
    id: 1,
    quote:
      "After decades of carrying wounds I couldn't name, finally finding a space that genuinely understands the gurukuli experience changed everything. I felt seen for the first time.",
    name: "Anonymous",
    detail: "Survivor, UK — 18 months in therapy",
  },
  {
    id: 2,
    quote:
      "The clinical care here is unlike anything I encountered in mainstream therapy. There was no need to explain what a gurukula was, or justify why it hurt. The work could begin immediately.",
    name: "Anonymous",
    detail: "Survivor, USA — completed programme",
  },
  {
    id: 3,
    quote:
      "The community group gave me something I didn't know I was missing: other people who truly lived it. Breaking that isolation was as healing as the individual sessions themselves.",
    name: "Anonymous",
    detail: "Survivor, India — community group participant",
  },
];

interface TestimonialCarouselProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  className?: string;
}

export default function TestimonialCarousel({
  eyebrow = "Voices of Healing",
  heading = "From the Survivors We Serve",
  subtitle = "Real accounts from those who have walked this path. Shared anonymously, with full consent.",
  className = "",
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  return (
    <section className={`py-16 md:py-24 px-6 bg-canvas-white border-t border-border ${className}`}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-4">
            {heading}
          </h2>
          <p className="font-sans text-sm text-slate-mid italic max-w-xl mx-auto">
            {subtitle}
          </p>

          {/* Coming-soon notice */}
          <div className="inline-flex items-center gap-2 mt-5 bg-blue-soft border border-blue/15 text-blue font-sans text-xs px-4 py-2 rounded-full">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            Full testimonials being gathered — placeholder shown below
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="relative bg-canvas border border-border rounded-2xl p-8 md:p-12 mb-8 min-h-[220px] flex flex-col justify-between">
          <svg
            className="absolute top-8 left-8 w-8 h-8 text-blue/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
          </svg>

          <blockquote className="font-serif text-lg md:text-xl text-navy leading-relaxed italic pl-6 md:pl-10 flex-1">
            &ldquo;{placeholderTestimonials[active].quote}&rdquo;
          </blockquote>

          <div className="mt-6 pl-6 md:pl-10 flex items-center gap-3">
            <div className="w-8 h-px bg-blue" />
            <div>
              <p className="font-sans text-sm text-navy font-semibold">
                {placeholderTestimonials[active].name}
              </p>
              <p className="font-sans text-xs text-slate-mid italic">
                {placeholderTestimonials[active].detail}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel dots + arrows */}
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setActive((a) => (a - 1 + placeholderTestimonials.length) % placeholderTestimonials.length)}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-mid hover:border-navy hover:text-navy transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {placeholderTestimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? "w-6 h-2 bg-navy"
                    : "w-2 h-2 bg-border hover:bg-slate-mid"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActive((a) => (a + 1) % placeholderTestimonials.length)}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-slate-mid hover:border-navy hover:text-navy transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {placeholderTestimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                i === active
                  ? "border-navy bg-canvas shadow-sm"
                  : "border-border bg-canvas hover:border-blue/30"
              }`}
            >
              <p className="font-sans text-xs text-slate-mid leading-relaxed line-clamp-2 italic mb-2">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-sans text-[10px] text-slate-light uppercase tracking-wider">
                {t.detail}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
