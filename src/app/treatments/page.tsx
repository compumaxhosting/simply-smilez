import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { PageHero, SectionHead, CtaBand } from "@/components/PageBits";
import TreatmentIndex from "@/components/TreatmentIndex";

export const metadata: Metadata = {
  title: "Dental Services in Hyderabad | Complete Treatment Directory",
  description:
    "Explore every dental treatment at Simply Smilez Dental, Shaikpet, Hyderabad — Invisalign and braces, dental implants, root canal treatment, crowns, composite fillings, veneers, teeth whitening, laser gum treatment, paediatric dentistry and wisdom tooth extraction.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete dental care"
        title="Explore our"
        italicTail="dental treatments."
        intro="Comprehensive, modern and painless dental care for your whole family under one roof in Shaikpet, Hyderabad. Every treatment below has its own page: what it is, who it suits, how it is carried out, what it can and cannot do."
        image="/images/bg_2.webp"
        imageAlt="Detail of a modern dental treatment room"
        crumbs={[{ label: "Treatments" }]}
        meta={[
          { label: "Directory", value: `${treatments.length} treatments` },
          { label: "Specialties", value: "Orthodontics · Paediatrics · Implants · Surgery" },
          { label: "For", value: "Children, teenagers and adults" },
          { label: "Booking", value: "Call or send an enquiry form" },
        ]}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-charcoal/12 bg-porcelain transition-all hover:border-teal/35 hover:shadow-[0_30px_60px_-45px_rgba(9,47,50,0.8)]"
                >
                  <span className="relative block aspect-[16/10] w-full overflow-hidden bg-ivory">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.image}
                      alt={t.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]"
                    />
                    <span className="label-xs absolute left-4 top-4 rounded-full bg-porcelain/90 px-3 py-1.5 text-teal">
                      {t.index}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="label-xs text-champagne">{t.eyebrow}</span>
                    <span className="display mt-3 text-[1.7rem] leading-tight text-teal">{t.title}</span>
                    <span className="mt-3 flex-1 text-[14px] leading-relaxed text-charcoal/65">
                      {t.summary}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-emerald">
                      View treatment
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <SectionHead
              eyebrow="Index"
              title="The same list,"
              italic="as a catalogue."
              lead="Prefer to read rather than browse pictures? Every treatment in order, with its specialty."
            />
            <div className="mt-8">
              <TreatmentIndex />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which treatment you need?"
        lead="That is what a consultation is for. Describe what is bothering you and we will tell you plainly which option fits — or whether you need none at all yet."
      />
    </>
  );
}
