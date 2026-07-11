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
      <div className="flex-1 flex items-center justify-end gap-3 opacity-65">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-navy/55 to-navy" />
        <div className="w-2 h-2 rounded-full border-2 border-navy/70 shrink-0" />
        <div className="w-1.5 h-1.5 rounded-full bg-navy/70 shrink-0" />
      </div>

      {/* Central Conch — oversized graphic; negative margins keep parent height slim */}
      <div className="mx-2 shrink-0 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 -my-8 md:-my-10">
        <Image
          src="/ConchCircle-Photoroom.png"
          alt=""
          width={220}
          height={220}
          className="w-28 h-28 md:w-36 md:h-36 object-contain"
        />
      </div>

      {/* Right Line & Accent Pattern */}
      <div className="flex-1 flex items-center justify-start gap-3 opacity-65">
        <div className="w-1.5 h-1.5 rounded-full bg-navy/70 shrink-0" />
        <div className="w-2 h-2 rounded-full border-2 border-navy/70 shrink-0" />
        <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-navy/55 to-navy" />
      </div>
    </div>
  );
}
