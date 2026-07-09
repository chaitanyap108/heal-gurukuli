import Image from "next/image";

interface ConchDividerProps {
  className?: string;
}

export default function ConchDivider({ className = "" }: ConchDividerProps) {
  return (
    <div
      className={`flex items-center justify-center py-2 md:py-3 max-w-2xl mx-auto px-6 ${className}`}
      aria-hidden="true"
    >
      {/* Left Line & Accent Pattern */}
      <div className="flex-1 flex items-center justify-end gap-2 opacity-25">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-navy/40 to-navy" />
        <div className="w-1 h-1 rounded-full border border-navy/60 shrink-0" />
        <div className="w-0.5 h-0.5 rounded-full bg-navy/60 shrink-0" />
      </div>

      {/* Central Conch Icon Container */}
      <div className="mx-4 shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-300">
        <Image
          src="/ConchCircle-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>

      {/* Right Line & Accent Pattern */}
      <div className="flex-1 flex items-center justify-start gap-2 opacity-25">
        <div className="w-0.5 h-0.5 rounded-full bg-navy/60 shrink-0" />
        <div className="w-1 h-1 rounded-full border border-navy/60 shrink-0" />
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-navy/40 to-navy" />
      </div>
    </div>
  );
}
