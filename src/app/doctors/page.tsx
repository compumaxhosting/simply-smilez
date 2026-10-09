import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors, site } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { PageHero, CtaBand, SectionHead, Eyebrow } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Our Doctors — Specialist Dentists in Hyderabad",
  description:
    "Meet the two senior doctors at Simply Smilez Dental, Shaikpet, Hyderabad: Dr. Ankush Kumar, MDS, orthodontist and Invisalign provider, and Dr. Susheel Kumar, MDS, paediatric dentist and implantologist.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title="Two specialists."
        italicTail="One standard of care."
        intro="Both senior doctors, both with nine years of practice, and both consultants across dental clinics in Hyderabad. You will be treated by the doctor whose specialty matches your case."
        image="/images/susheel3.webp"
        imageAlt="The clinical team at Simply Smilez Dental"
        crumbs={[{ label: "Our Doctors" }]}
        meta={[
          { label: "Specialists", value: "Orthodontics · Paediatric dentistry · Implantology" },
          { label: "Experience", value: "Nine years of practice each" },
          { label: "Memberships", value: "IOS · ISPPD" },
          { label: "Appointments", value: site.phones[0].label },
        ]}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="space-y-16 lg:space-y-24">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.06}>
                <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Link
                      href={`/doctors/${d.slug}`}
                      className="group relative block overflow-hidden border border-champagne/40 bg-ivory p-2"
                    >
                      <span className={`relative block w-full overflow-hidden ${d.portraitFrame}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={d.portrait}
                          alt={d.portraitAlt}
                          loading="lazy"
                          className={`h-full w-full object-cover ${d.portraitPosition} transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]`}
                        />
                      </span>
                      <span className="label-xs absolute left-5 top-5 rounded-full bg-porcelain/90 px-3 py-1.5 text-teal">
                        {d.seniority}
                      </span>
                    </Link>
                  </div>

                  <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="label-xs text-champagne">
                      {d.credential} · {d.role}
                    </p>
                    <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1] text-teal">
                      {d.name}
                    </h2>
                    <p className="mt-5 max-w-[64ch] text-[16px] leading-relaxed text-charcoal/75">
                      {d.bio}
                    </p>

                    <div className="mt-7 grid gap-8 border-t border-champagne/60 pt-6 sm:grid-cols-2">
                      <div>
                        <p className="label-xs text-charcoal/45">Education</p>
                        <dl className="mt-3 space-y-3">
                          {d.qualifications.map((q) => (
                            <div key={q.label}>
                              <dt className="text-[14.5px] font-semibold text-teal">{q.label}</dt>
                              <dd className="text-[14px] text-charcoal/65">{q.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <div>
                        <p className="label-xs text-charcoal/45">Experience &amp; memberships</p>
                        <ul className="mt-3 space-y-2">
                          {d.experience.map((e) => (
                            <li key={e} className="flex items-start gap-3 text-[14.5px] leading-snug text-charcoal/70">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {d.practice.map((p) => (
                        <li key={p} className="rounded-full border border-charcoal/15 px-3 py-1.5 text-[12.5px] text-charcoal/65">
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-6">
                      <Link
                        href={`/doctors/${d.slug}`}
                        className="group/l label-xs inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
                      >
                        Read the full profile
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/l:translate-x-1" strokeWidth={1.6} />
                      </Link>
                      <Link
                        href="/contact#enquiry"
                        className="group/l label-xs inline-flex items-center gap-2 border-b border-transparent pb-2 text-charcoal/55 transition-colors hover:border-champagne hover:text-emerald"
                      >
                        Book an appointment
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/l:translate-x-1" strokeWidth={1.6} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
          <SectionHead
            eyebrow="Shared standards"
            title="Both doctors work to"
            italic="the same four rules."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Explain before you treat", b: "Nothing is started before you understand the options, the cost and the alternative of doing nothing." },
              { n: "02", t: "Keep treatment comfortable", b: "Anaesthesia, pacing and a child-friendly manner where it matters — comfort is part of the plan, not an extra." },
              { n: "03", t: "Be conservative first", b: "Preserve natural tooth structure wherever it is clinically defensible. Intervention has to earn its place." },
              { n: "04", t: "Review the result", b: "Treatment ends with a review, not with the bill. Longevity is monitored at every check-up." },
            ].map((r, i) => (
              <Reveal key={r.n} delay={i * 0.06}>
                <div className="border-t border-champagne/60 pt-5">
                  <p className="label-xs text-champagne">{r.n}</p>
                  <h3 className="display mt-3 text-[1.5rem] leading-tight text-teal">{r.t}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/70">{r.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Book time with a specialist."
        lead="Tell us what you need — a child's first visit, a straightening consultation or an implant assessment — and we will match you to the right doctor."
      />
    </>
  );
}
