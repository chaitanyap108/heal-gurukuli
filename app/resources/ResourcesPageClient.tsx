"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { ResourcesQuery, ResourcesQueryVariables } from "@/tina/__generated__/types";

interface Guide {
  tag: string;
  title: string;
  description: string;
  readTimeOrType: string;
  href: string;
}

interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  guides: Guide[];
}

interface ResourcesData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  categories: Category[];
}

interface ResourcesPageClientProps {
  query: string;
  variables: ResourcesQueryVariables;
  data: ResourcesQuery;
}

export default function ResourcesPageClient(props: ResourcesPageClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.resources as ResourcesData;

  return (
    <div className="bg-canvas font-sans text-slate">
      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6.5xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar Sticky Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-[0.2em] font-semibold border-b border-border pb-3">
                  Categories
                </p>
                <nav className="flex flex-col gap-3 font-sans text-sm text-slate-mid">
                  {data.categories.map((cat: Category) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="hover:text-navy hover:translate-x-1 transition-all duration-150"
                    >
                      {cat.number}. {cat.title.split(". ")[1]}
                    </a>
                  ))}
                </nav>
                <div className="bg-blue-soft border border-blue/10 rounded-xl p-5 mt-6">
                  <h4 className="font-serif text-sm text-navy font-semibold mb-2">Need Clinical Support?</h4>
                  <p className="font-sans text-xs text-slate-mid leading-relaxed mb-4 italic">
                    If you are looking for formal one-on-one therapy sessions, our clinical team is here.
                  </p>
                  <Link
                    href="/support"
                    className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline"
                  >
                    View Support Options
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Resources List */}
            <div className="lg:col-span-3 space-y-16">
              
              {data.categories.map((category: Category) => (
                <section key={category.id} id={category.id} className="scroll-mt-24 space-y-6">
                  <div>
                    <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-3">
                      Category {category.number}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold">
                      {category.title}
                    </h2>
                    <div className="w-8 h-px bg-blue/30 mt-3 mb-4" />
                    <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.guides.map((guide: Guide, idx: number) => (
                      <div key={idx} className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div>
                          <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                            {guide.tag}
                          </span>
                          <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                            {guide.title}
                          </h3>
                          <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                            {guide.description}
                          </p>
                        </div>
                        <span className="text-xs text-slate-light font-medium mt-2">{guide.readTimeOrType}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
