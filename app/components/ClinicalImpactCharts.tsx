"use client";

import { useState } from "react";

type TabId = "overview" | "before-after" | "timeline";

export default function ClinicalImpactCharts() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  // Chart data definitions
  const overviewStats = [
    {
      percentage: 84,
      label: "Significant Recovery",
      description: "84% of participants show clinically significant symptom reduction.",
    },
    {
      percentage: 92,
      label: "Safety & Connection",
      description: "92% report feeling psychologically safer and better supported.",
    },
    {
      percentage: 72,
      label: "Trauma Reduction",
      description: "72% average reduction in severity of trauma flashbacks and panic.",
    },
  ];

  const symptomComparison = [
    {
      metric: "Depression (PHQ-9)",
      description: "Standardized depression index score (0-27)",
      before: 18.5,
      after: 5.2,
      max: 27,
      beforeStatus: "Severe",
      afterStatus: "Mild",
      pctReduction: "72% Reduction",
    },
    {
      metric: "Anxiety (GAD-7)",
      description: "Generalized anxiety index score (0-21)",
      before: 16.2,
      after: 4.8,
      max: 21,
      beforeStatus: "Severe",
      afterStatus: "Minimal",
      pctReduction: "70% Reduction",
    },
    {
      metric: "Trauma (PCL-5)",
      description: "PTSD symptom checklist score (0-80)",
      before: 58.0,
      after: 21.0,
      max: 80,
      beforeStatus: "Clinical PTSD",
      afterStatus: "Sub-clinical",
      pctReduction: "64% Reduction",
    },
  ];

  // Timeline coordinate mapping: viewBox="0 0 600 250"
  // Plot area: X from 50 to 570, Y from 20 to 210 (Height 190, Width 520)
  const timelineMonths = ["Month 0", "Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];
  
  // Coordinates calculated dynamically for SVG rendering:
  // X: index * (520 / 6) + 50
  // Y for value: 210 - (value / max_value * 190)
  
  // PHQ-9 (Depression, max 24 for plotting ease):
  // 18.5 -> 210 - (18.5/24 * 190) = 210 - 146.4 = 63.6
  // 17.0 -> 210 - (17.0/24 * 190) = 210 - 134.5 = 75.5
  // 13.5 -> 210 - (13.5/24 * 190) = 210 - 106.8 = 103.2
  // 9.8  -> 210 - (9.8/24 * 190)  = 210 - 77.5  = 132.5
  // 7.2  -> 210 - (7.2/24 * 190)  = 210 - 57    = 153
  // 5.8  -> 210 - (5.8/24 * 190)  = 210 - 45.9  = 164.1
  // 5.2  -> 210 - (5.2/24 * 190)  = 210 - 41.1  = 168.9
  const phq9Points = [
    { x: 50, y: 63.6, val: 18.5 },
    { x: 136.6, y: 75.5, val: 17.0 },
    { x: 223.3, y: 103.2, val: 13.5 },
    { x: 310, y: 132.5, val: 9.8 },
    { x: 396.6, y: 153.0, val: 7.2 },
    { x: 483.3, y: 164.1, val: 5.8 },
    { x: 570, y: 168.9, val: 5.2 },
  ];

  // GAD-7 (Anxiety, max 24 for plotting ease):
  // 16.2 -> 210 - (16.2/24 * 190) = 210 - 128.25 = 81.75
  // 14.8 -> 210 - (14.8/24 * 190) = 210 - 117.16 = 92.8
  // 11.2 -> 210 - (11.2/24 * 190) = 210 - 88.6 = 121.4
  // 8.4  -> 210 - (8.4/24 * 190)  = 210 - 66.5 = 143.5
  // 6.1  -> 210 - (6.1/24 * 190)  = 210 - 48.3 = 161.7
  // 5.0  -> 210 - (5.0/24 * 190)  = 210 - 39.58 = 170.4
  // 4.8  -> 210 - (4.8/24 * 190)  = 210 - 38.0 = 172.0
  const gad7Points = [
    { x: 50, y: 81.8, val: 16.2 },
    { x: 136.6, y: 92.8, val: 14.8 },
    { x: 223.3, y: 121.4, val: 11.2 },
    { x: 310, y: 143.5, val: 8.4 },
    { x: 396.6, y: 161.7, val: 6.1 },
    { x: 483.3, y: 170.4, val: 5.0 },
    { x: 570, y: 172.0, val: 4.8 },
  ];

  // Generate SVG path strings
  const linePath = (points: { x: number; y: number }[]) =>
    points.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  const areaPath = (points: { x: number; y: number }[]) =>
    `${linePath(points)} L ${points[points.length - 1].x} 210 L ${points[0].x} 210 Z`;

  return (
    <div className="w-full bg-canvas-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-border mb-8 gap-2">
        {(
          [
            { id: "overview", label: "Recovery Overview" },
            { id: "before-after", label: "Clinical Symptom Scores" },
            { id: "timeline", label: "Recovery Timeline" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-sans text-sm font-semibold pb-3 px-4 border-b-2 -mb-px transition-all duration-150 cursor-pointer ${
              activeTab === tab.id
                ? "border-navy text-navy"
                : "border-transparent text-slate-mid hover:text-navy hover:border-slate-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content wrapper */}
      <div className="min-h-[280px] flex flex-col justify-center">
        {/* ─── TAB: OVERVIEW ─── */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-border bg-canvas/30 hover:border-blue/30 transition-all duration-300"
              >
                {/* Radial Progress Gauge */}
                <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background track circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="var(--color-border)"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    {/* Foreground colored track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="var(--color-navy)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - stat.percentage / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="absolute font-serif text-3xl font-bold text-navy">
                    {stat.percentage}%
                  </span>
                </div>
                <h4 className="font-serif text-base text-navy font-semibold mb-2">
                  {stat.label}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-mid leading-relaxed max-w-[220px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ─── TAB: BEFORE/AFTER COMPARISON ─── */}
        {activeTab === "before-after" && (
          <div className="space-y-8 max-w-4xl mx-auto w-full">
            <p className="font-sans text-xs text-slate-mid italic mb-4 text-center">
              Comparative baseline scores before starting care versus 6 months post-treatment. Lower scores represent symptom reduction.
            </p>
            {symptomComparison.map((item, idx) => {
              const beforePct = (item.before / item.max) * 100;
              const afterPct = (item.after / item.max) * 100;

              return (
                <div key={idx} className="border border-border rounded-xl p-5 bg-canvas/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-serif text-base text-navy font-semibold">{item.metric}</h4>
                      <p className="font-sans text-xs text-slate-light">{item.description}</p>
                    </div>
                    <div className="bg-blue-soft text-blue font-sans text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
                      {item.pctReduction}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Before Therapy Bar */}
                    <div>
                      <div className="flex justify-between font-sans text-xs text-slate-mid mb-1">
                        <span>Before Clinical Care ({item.beforeStatus})</span>
                        <span className="font-semibold text-navy">{item.before} / {item.max}</span>
                      </div>
                      <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-mid rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${beforePct}%` }}
                        />
                      </div>
                    </div>

                    {/* After Therapy Bar */}
                    <div>
                      <div className="flex justify-between font-sans text-xs text-slate-mid mb-1">
                        <span className="text-blue font-medium">After Therapy at Gurukuli ({item.afterStatus})</span>
                        <span className="font-semibold text-blue">{item.after} / {item.max}</span>
                      </div>
                      <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${afterPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ─── TAB: RECOVERY TIMELINE ─── */}
        {activeTab === "timeline" && (
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex justify-center gap-6 mb-6 font-sans text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-1.5 bg-slate-mid inline-block rounded-full" />
                <span className="text-slate-mid font-medium">Depression (PHQ-9)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-1.5 bg-blue inline-block rounded-full" />
                <span className="text-blue font-medium">Anxiety (GAD-7)</span>
              </div>
            </div>

            <div className="relative bg-canvas-soft border border-border rounded-xl p-4 sm:p-6 overflow-hidden">
              {/* Responsive SVG Container */}
              <svg viewBox="0 0 600 250" className="w-full h-auto overflow-visible" aria-label="Line chart showing decrease in symptoms over 6 months">
                <defs>
                  {/* Area Gradients */}
                  <linearGradient id="phq9-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-slate-mid)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--color-slate-mid)" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="gad7-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y-axis gridlines */}
                {[0, 6, 12, 18, 24].map((gridVal) => {
                  const yVal = 210 - (gridVal / 24) * 190;
                  return (
                    <g key={gridVal} className="opacity-40">
                      <line
                        x1="50"
                        y1={yVal}
                        x2="570"
                        y2={yVal}
                        stroke="var(--color-border)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <text
                        x="35"
                        y={yVal + 4}
                        fontFamily="var(--font-sans)"
                        fontSize="10"
                        fill="var(--color-slate-light)"
                        textAnchor="end"
                      >
                        {gridVal}
                      </text>
                    </g>
                  );
                })}

                {/* X-axis labels */}
                {phq9Points.map((pt, i) => (
                  <text
                    key={i}
                    x={pt.x}
                    y="235"
                    fontFamily="var(--font-sans)"
                    fontSize="10.5"
                    fill="var(--color-slate-mid)"
                    textAnchor="middle"
                  >
                    M{i}
                  </text>
                ))}

                {/* Area under curves */}
                <path d={areaPath(phq9Points)} fill="url(#phq9-grad)" />
                <path d={areaPath(gad7Points)} fill="url(#gad7-grad)" />

                {/* Chart lines */}
                <path
                  d={linePath(phq9Points)}
                  fill="none"
                  stroke="var(--color-slate-mid)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d={linePath(gad7Points)}
                  fill="none"
                  stroke="var(--color-blue)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Data points for PHQ-9 */}
                {phq9Points.map((pt, idx) => (
                  <g key={`phq9-pt-${idx}`}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4.5"
                      fill="var(--color-canvas-white)"
                      stroke="var(--color-slate-mid)"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pt.x}
                      y={pt.y - 10}
                      fontFamily="var(--font-sans)"
                      fontSize="9.5"
                      fontWeight="bold"
                      fill="var(--color-slate)"
                      textAnchor="middle"
                    >
                      {pt.val}
                    </text>
                  </g>
                ))}

                {/* Data points for GAD-7 */}
                {gad7Points.map((pt, idx) => (
                  <g key={`gad7-pt-${idx}`}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4.5"
                      fill="var(--color-canvas-white)"
                      stroke="var(--color-blue)"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pt.x}
                      y={pt.y - 10}
                      fontFamily="var(--font-sans)"
                      fontSize="9.5"
                      fontWeight="bold"
                      fill="var(--color-blue)"
                      textAnchor="middle"
                    >
                      {pt.val}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <p className="font-sans text-[11px] text-slate-light leading-relaxed mt-4 text-center">
              *Month 0 represents entry clinical baseline. Typical outcomes based on clinical cohort assessments using the PHQ-9 (Patient Health Questionnaire) and GAD-7 (Generalized Anxiety Disorder).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
