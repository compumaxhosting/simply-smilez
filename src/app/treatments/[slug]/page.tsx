import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MessageCircle, Check, Minus } from "lucide-react";
import { treatments, site, getTreatment } from "@/lib/content";
import { MaskLines, Reveal } from "@/components/motion";
import { PageHero, SectionHead, CtaBand, Eyebrow, Breadcrumbs } from "@/components/PageBits";
import Faq from "@/components/Faq";

export const dynamicParams = true;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return { title: "Treatment not found" };
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: { canonical: `/treatments/${t.slug}` },
    openGraph: { title: t.seoTitle, description: t.seoDescription, images: [t.image] },
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const related = t.related.map((r) => getTreatment(r)).filter((r): r is NonNullable<typeof r> => !!r && r.slug !== t.slug);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
        image={t.heroImage ?? t.image}
        imageAlt={t.heroAlt ?? t.imageAlt}
        crumbs={[{ label: "Treatments", href: "/treatments" }, { label: t.title }]}
        meta={t.facts}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-8">
            {/* candidacy */}
            <div>
              <Eyebrow>Who this treatment is for</Eyebrow>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {t.who.map((w) => (
                  <li key={w} className="flex items-start gap-3 border-t border-charcoal/12 pt-4 text-[15px] leading-relaxed text-charcoal/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" strokeWidth={1.6} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* process */}
            <div className="mt-16">
              <Eyebrow>How treatment works</Eyebrow>
              <ol className="mt-6 space-y-0 border-t border-champagne/50">
                {t.steps.map((s, i) => (
                  <Reveal
                    key={s.title}
                    delay={i * 0.05}
                    as="li"
                    className="grid gap-3 border-b border-charcoal/12 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6"
                  >
                    <span className="label-xs pt-2 text-champagne">Step {String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="display block text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight text-teal">
                        {s.title}
                      </span>
                      <span className="mt-2 block max-w-[62ch] text-[15px] leading-relaxed text-charcoal/70">
                        {s.body}
                      </span>
                    </span>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* benefits / considerations */}
            <div className="mt-16 grid gap-10 sm:grid-cols-2">
              <div>
                <Eyebrow>What it can do</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-charcoal/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow>Honestly stated</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {t.considerations.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] leading-relaxed text-charcoal/75">
                      <Minus className="mt-1.5 h-3.5 w-3.5 shrink-0 text-champagne" strokeWidth={2} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* sticky side rail */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="overflow-hidden rounded-[3px] border border-charcoal/12 bg-ivory">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <p className="label-xs text-champagne">At a glance</p>
                  <dl className="mt-4 space-y-3">
                    {t.facts.map((f) => (
                      <div key={f.label} className="flex justify-between gap-4 border-b border-charcoal/10 pb-3 text-[14px]">
                        <dt className="shrink-0 text-charcoal/55">{f.label}</dt>
                        <dd className="text-right font-medium text-teal">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="kiln mt-4 rounded-[3px] p-6">
                <p className="display text-[1.5rem] leading-snug text-porcelain">
                  Discuss {t.title.toLowerCase()} with a specialist.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Link
                    href="/contact#enquiry"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-porcelain px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-teal transition-colors hover:bg-aqua"
                  >
                    Book an appointment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
                  </Link>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-aqua/50 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-aqua transition-colors hover:bg-aqua/10"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.6} /> WhatsApp
                  </a>
                  <a
                    href={site.phones[0].href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 text-[15px] tabular-nums text-porcelain/85 transition-colors hover:text-aqua"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.6} /> {site.phones[0].label}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.03] text-teal">
              {t.title} <em className="italic">FAQs.</em>
            </h2>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-charcoal/70">
              Answers specific to this treatment. Anything else, ask us — we will tell you straight.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq items={t.faqs} />
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="grain relative overflow-hidden bg-porcelain">
          <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
            <SectionHead eyebrow="Related" title="Often considered" italic="alongside this." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/treatments/${r.slug}`}
                  className="group flex items-baseline gap-4 border-t border-champagne/60 pt-5 transition-colors hover:border-teal"
                >
                  <span className="label-xs text-champagne">{r.index}</span>
                  <span className="flex-1">
                    <span className="display block text-[1.5rem] leading-tight text-teal transition-transform duration-300 group-hover:translate-x-1">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-[13.5px] text-charcoal/60">{r.eyebrow}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-charcoal/40 transition-all group-hover:translate-x-1 group-hover:text-emerald" strokeWidth={1.5} />
                </Link>
              ))}
            </div>

            <nav aria-label="All treatments" className="mt-12">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: t.title }]} />
            </nav>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
