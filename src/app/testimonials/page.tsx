import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";
import { testimonials, doctors } from "@/lib/content";
import { PageHero, CtaBand, Eyebrow } from "@/components/PageBits";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad",
  description:
    "What patients say about Dr. Susheel Kumar and Dr. Ankush Kumar at Simply Smilez Dental, Shaikpet, Hyderabad — testimonials published on the clinic's website.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Our patients"
        italicTail="say about us."
        intro="These are the words patients have left on our website, reproduced as they were written. We have not edited them, padded the list, or added reviews we were never given."
        image="/images/seven.webp"
        imageAlt="A young patient in the dental chair at Simply Smilez Dental"
        crumbs={[{ label: "Testimonials" }]}
        meta={[
          { label: "Published", value: `${testimonials.length} patient reviews` },
          { label: "Sources", value: "As published on simplysmilezdental.in" },
          { label: "Doctors", value: doctors.map((d) => d.name).join(" · ") },
          { label: "Your visit", value: "We will never ask you to review a result you have not had" },
        ]}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col border-t border-champagne/60 pt-6">
                  <Quote className="h-6 w-6 text-champagne" strokeWidth={1.4} />
                  <blockquote className="display mt-6 flex-1 text-[clamp(1.3rem,2.2vw,1.75rem)] italic leading-[1.35] text-teal">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 border-t border-charcoal/12 pt-4">
                    <span className="flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-champagne text-champagne" strokeWidth={0} />
                      ))}
                    </span>
                    <span className="label-xs mt-3 block text-charcoal/60">{t.name}</span>
                    <span className="mt-1 block text-[13.5px] text-charcoal/50">Patient, Simply Smilez Dental</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-charcoal/12 pt-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Before you choose</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.05] text-teal">
                Meet us before you <em className="italic">commit to anything.</em>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-[64ch] text-[15.5px] leading-relaxed text-charcoal/75">
                A consultation is a conversation, not a contract. Come in, have the examination, ask
                the awkward questions about cost and alternatives, and take the plan away with you.
                If a second opinion would help, we will say so.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact#enquiry"
                  className="group label-xs inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
                >
                  Book an appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
                </Link>
                <Link
                  href="/doctors"
                  className="group label-xs inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
                >
                  Meet the doctors
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
