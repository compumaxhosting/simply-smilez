import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/content";

/**
 * The treatments index — ten oversized serif lines on ivory paper.
 * On pointer hover (or keyboard focus) the row's photograph slides in
 * from the right edge and overlaps the type, like a catalogue light table.
 */
export default function TreatmentIndex({ compact = false }: { compact?: boolean }) {
  return (
    <ul id="treatment-index" className="border-t border-charcoal/12">
      {treatments.map((t) => (
        <li key={t.slug} className="border-b border-charcoal/12">
          <Link
            href={`/treatments/${t.slug}`}
            className="group relative flex items-center gap-5 py-5 outline-none sm:gap-8 sm:py-7"
          >
            <span className="label-xs w-8 shrink-0 text-charcoal/35 transition-colors duration-300 group-hover:text-champagne group-focus-visible:text-champagne sm:w-12">
              {t.index}
            </span>

            <span className="relative z-10 min-w-0 flex-1">
              <span className="display block truncate text-[clamp(1.7rem,5.2vw,3.6rem)] leading-[1.05] text-teal transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:translate-x-2 group-focus-visible:translate-x-2">
                {t.title}
              </span>
              {!compact && (
                <span className="mt-1.5 block max-w-[46ch] text-[13.5px] leading-snug text-charcoal/55 sm:hidden">
                  {t.eyebrow}
                </span>
              )}
            </span>

            <span className="label-xs hidden shrink-0 text-charcoal/45 transition-colors group-hover:text-emerald md:block md:w-52 md:text-right">
              {t.eyebrow}
            </span>

            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-teal transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-porcelain sm:flex">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>

            {/* the photograph that slides in and overlaps the type */}
            <span className="pointer-events-none absolute right-16 top-1/2 z-20 hidden h-[168px] w-[280px] -translate-y-1/2 translate-x-10 overflow-hidden opacity-0 shadow-[0_30px_60px_-30px_rgba(9,47,50,0.55)] transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-teal/45 via-transparent to-transparent" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
