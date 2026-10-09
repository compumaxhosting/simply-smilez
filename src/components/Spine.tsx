import Link from "next/link";
import { site, nav } from "@/lib/content";

/**
 * The fixed left spine: the structural signature of the site.
 * Midnight-teal rail carrying the wordmark, a section index and the phone number.
 */
export default function Spine() {
  return (
    <aside
      aria-hidden="true"
      className="fixed left-0 top-0 z-40 hidden h-full w-[76px] flex-col items-center justify-between border-r border-white/10 bg-teal py-6 lg:flex"
    >
      <Link href="/" tabIndex={-1} className="block">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/60">
          <ToothMark className="h-4 w-4 text-aqua" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <span
          className="label-xs whitespace-nowrap text-mint/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Shaikpet, Hyderabad
        </span>
        <span className="h-16 w-px bg-champagne/50" />
        <span
          className="display whitespace-nowrap text-[15px] italic text-porcelain/85"
          style={{ writingMode: "vertical-rl" }}
        >
          Simply Smilez Dental
        </span>
        <span className="h-16 w-px bg-champagne/50" />
        <span
          className="label-xs whitespace-nowrap text-mint/70"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. {site.founded}
        </span>
      </div>

      <span
        className="label-xs whitespace-nowrap text-champagne"
        style={{ writingMode: "vertical-rl" }}
      >
        {site.phones[0].label}
      </span>
    </aside>
  );
}

export function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2.6c-1.6 0-2.2.7-3.9.7C6 3.3 4.2 4.9 4.2 8c0 2.4.7 3.6 1.3 5.4.5 1.5.6 3.3 1 5.4.3 1.7.8 2.6 1.7 2.6 1.1 0 1.3-1.2 1.6-3 .3-1.7.6-3.4 2.2-3.4s1.9 1.7 2.2 3.4c.3 1.8.5 3 1.6 3 .9 0 1.4-.9 1.7-2.6.4-2.1.5-3.9 1-5.4.6-1.8 1.3-3 1.3-5.4 0-3.1-1.8-4.7-3.9-4.7-1.7 0-2.3-.7-3.9-.7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpineIndex({ active }: { active?: string }) {
  return (
    <nav aria-label="Section index" className="hidden flex-col items-center gap-3 lg:flex">
      {nav.slice(0, 6).map((n) => (
        <span
          key={n.href}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            active === n.href ? "bg-aqua" : "bg-white/25"
          }`}
        />
      ))}
    </nav>
  );
}
