import Link from "next/link";
import threePillarsData from "@/content/shared/threePillars.json";

interface Pillar {
  number: string;
  title: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

interface ThreePillarsData {
  title: string;
  subtitle: string;
  eyebrow: string;
  pillars: Pillar[];
}

export default function ThreePillars() {
  const data = threePillarsData as ThreePillarsData;

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {data.pillars.map((pillar: Pillar, index: number) => (
            <div key={index} className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
              <span className="font-sans text-xs text-slate-light tracking-[0.3em]">{pillar.number}</span>
              <div className="w-8 h-px bg-blue" />
              <h3 className="font-serif text-2xl text-navy font-semibold">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
                {pillar.body}
              </p>
              <div>
                <Link
                  href={pillar.ctaHref}
                  className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors w-fit"
                >
                  {pillar.ctaText}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
