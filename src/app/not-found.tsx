import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/content";
import { Eyebrow } from "@/components/PageBits";

export default function NotFound() {
  return (
    <section className="kiln relative min-h-[70vh] overflow-hidden">
      <div className="glow-breathe pointer-events-none absolute -right-10 top-10 h-[380px] w-[380px] rounded-full bg-aqua/25 blur-[100px]" />
      <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-[150px] sm:px-8 lg:pb-32 lg:pt-[185px]">
        <Eyebrow tone="dark">Error 404</Eyebrow>
        <h1 className="display mt-6 max-w-[18ch] text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-porcelain">
          This page has <em className="italic text-aqua">been extracted.</em>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[16px] leading-relaxed text-mint/80">
          The address you followed does not exist on this site. It may have moved during the rebuild
          — the treatment, doctor and page links below all resolve.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-porcelain px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-teal transition-colors hover:bg-aqua"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
          </Link>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-3 rounded-full border border-aqua/50 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-aqua transition-colors hover:bg-aqua/10"
          >
            All treatments
          </Link>
        </div>

        <ul className="mt-14 grid max-w-4xl gap-x-8 gap-y-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="display text-[1.2rem] text-porcelain/80 transition-colors hover:text-aqua"
              >
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
