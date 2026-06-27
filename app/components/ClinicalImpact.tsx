import ClinicalImpactCharts from "./ClinicalImpactCharts";

interface ClinicalImpactProps {
  /** Overline label above the heading */
  eyebrow?: string;
  /** Main section heading */
  heading?: string;
  /** Subtitle italic line */
  subtitle?: string;
  /** Body paragraph */
  body?: string;
  className?: string;
}

export default function ClinicalImpact({
  eyebrow = "Our Clinical Impact",
  heading = "Real Data, Real Healing",
  subtitle = "See the transparent, measurable outcomes of your generosity",
  body = "Community donations directly fund evidence-based therapeutic care. Through our clinical partnerships, we track standardized metrics to ensure every session delivered translates into tangible, life-changing progress. The dashboard below illustrates the average reduction in symptoms for gurukuli survivors after receiving care.",
  className = "",
}: ClinicalImpactProps) {
  return (
    <section className={`py-16 md:py-24 px-6 bg-canvas border-t border-border ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            {heading}
          </h2>
          <p className="font-sans text-sm text-slate-mid mb-6 max-w-xl mx-auto italic">
            {subtitle}
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-mid leading-relaxed max-w-2xl mx-auto">
            {body}
          </p>
        </div>

        <ClinicalImpactCharts />
      </div>
    </section>
  );
}
