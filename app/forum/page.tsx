import type { Metadata } from "next";
import Link from "next/link";
import forumData from "@/content/pages/forum.json";

export const metadata: Metadata = {
  title: "Community Forum — Heal Gurukuli",
  description:
    "A secure, confidential, and peer-guided therapeutic discussion forum for adult gurukuli survivors.",
};

interface Thread {
  id: string;
  title: string;
  category: string;
  replies: number;
  views: number;
  lastActive: string;
  isPinned?: boolean;
  author: string;
}

interface ForumData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  safetyNotice: { heading: string; body: string; bullets: string[] };
  crisisTeaser: { heading: string; body: string; ctaLabel: string; ctaHref: string };
  threads: Thread[];
}

const data = forumData as ForumData;

export default function ForumPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── FORUM INTERFACE ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            
            {/* Sidebar Guidelines */}
            <aside className="lg:col-span-1 space-y-6 order-2 lg:order-1">
              <div className="bg-canvas-white border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-navy font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {data.safetyNotice.heading}
                </h3>
                <p className="font-sans text-xs text-slate-mid leading-relaxed mb-4">
                  {data.safetyNotice.body}
                </p>
                <div className="text-xs text-slate-light border-t border-border pt-3 space-y-2">
                  {data.safetyNotice.bullets.map((bullet) => (
                    <p key={bullet}>• {bullet}</p>
                  ))}
                </div>
              </div>

              <div className="bg-blue-soft border border-blue/15 rounded-xl p-6">
                <h4 className="font-serif text-sm text-navy font-semibold mb-2">{data.crisisTeaser.heading}</h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed mb-4">
                  {data.crisisTeaser.body}
                </p>
                <Link
                  href={data.crisisTeaser.ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline"
                >
                  {data.crisisTeaser.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>

            {/* Main Forum area */}
            <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
              
              {/* Controls bar */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-canvas-white border border-border rounded-xl p-4">
                
                {/* Search */}
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input
                    type="search"
                    placeholder="Search discussions..."
                    className="block w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-canvas text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 shrink-0">
                  <select aria-label="Select Category" className="px-3 py-2 border border-border rounded-lg bg-canvas text-xs text-slate-mid focus:outline-none">
                    <option>All Categories</option>
                    <option>Coping Strategies</option>
                    <option>Healing Journeys</option>
                    <option>Creative Expression</option>
                    <option>General Discussion</option>
                  </select>

                  <button
                    type="button"
                    className="bg-navy text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                    New Topic
                  </button>
                </div>
              </div>

              {/* Discussion List */}
              <div className="bg-canvas-white border border-border rounded-xl divide-y divide-border overflow-hidden">
                {data.threads.map((thread) => (
                  <div
                    key={thread.id}
                    className="p-5 hover:bg-canvas-soft transition-colors duration-150 flex items-start gap-4"
                  >
                    {/* Icon status */}
                    <div className="pt-1">
                      {thread.isPinned ? (
                        <div className="w-8 h-8 rounded-lg bg-blue-soft border border-blue/10 flex items-center justify-center text-blue">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 12V4h1v-2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-border flex items-center justify-center text-slate-mid">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Main thread info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="bg-blue-soft text-blue text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue/5">
                          {thread.category}
                        </span>
                        {thread.isPinned && (
                          <span className="bg-amber-50 text-amber-600 text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-100">
                            Pinned
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-base sm:text-lg text-navy font-semibold leading-snug hover:text-blue transition-colors mb-1 truncate">
                        <Link href={`#thread-${thread.id}`} className="focus:outline-none">
                          {thread.title}
                        </Link>
                      </h4>
                      <p className="font-sans text-xs text-slate-light">
                        Started by <span className="text-slate-mid font-medium">{thread.author}</span> · Last active {thread.lastActive}
                      </p>
                    </div>

                    {/* Thread metrics */}
                    <div className="hidden sm:flex items-center gap-6 text-right shrink-0">
                      <div>
                        <p className="font-sans text-sm text-navy font-medium">{thread.replies}</p>
                        <p className="font-sans text-[10px] text-slate-light uppercase tracking-wider">Replies</p>
                      </div>
                      <div className="w-12">
                        <p className="font-sans text-sm text-slate-mid">{thread.views}</p>
                        <p className="font-sans text-[10px] text-slate-light uppercase tracking-wider">Views</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination / Load more */}
              <div className="text-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas-soft hover:text-navy active:scale-95 transition-all duration-150"
                >
                  Load More Discussions
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
