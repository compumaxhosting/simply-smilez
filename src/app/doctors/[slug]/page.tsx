import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { doctors, getDoctor, getTreatment, site } from "@/lib/content";
import { MaskLines, Reveal } from "@/components/motion";
import { CtaBand, Breadcrumbs, Eyebrow, SectionHead } from "@/components/PageBits";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) return { title: "Doctor not found" };
  return {
    title: d.seoTitle,
    description: d.seoDescription,
    alternates: { canonical: `/doctors/${d.slug}` },
    openGraph: { title: d.seoTitle, description: d.seoDescription, images: [d.portrait] },
  };
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) notFound();

  const linked = d.treatments.map((s) => getTreatment(s)).filter(Boolean);

  return (
    <>
      {/* profile hero — portrait carries the frame */}
      <section className="kiln relative overflow-hidden">
        <div className="glow-breathe pointer-events-none absolute -right-16 top-10 h-[380px] w-[380px] rounded-full bg-aqua/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-[140px] sm:px-8 lg:pb-24 lg:pt-[175px]">
          <Breadcrumbs items={[{ label: "Our Doctors", href: "/doctors" }, { label: d.name }]} dark />

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Eyebrow tone="dark">
                {d.seniority} · {d.credential}
              </Eyebrow>
              <h1 className="display mt-6 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.98] text-porcelain">
                <MaskLines
                  lines={[
                    d.name,
                    <em key="r" className="italic text-aqua">
                      {d.role}
                    </em>,
                  ]}
                />
              </h1>
              <p className="mt-7 max-w-[62ch] text-[clamp(1rem,1.5vw,1.12rem)] leading-relaxed text-mint/85">
                {d.bio}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact#enquiry"
                  className="group inline-flex items-center gap-3 rounded-full bg-aqua px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-teal transition-colors hover:bg-porcelain"
                >
                  Book with {d.name.split(" ")[1] ?? d.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-aqua/50 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-aqua transition-colors hover:bg-aqua/10"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.6} /> WhatsApp
                </a>
                <a
                  href={site.phones[0].href}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-[15px] tabular-nums text-porcelain/85 hover:text-aqua"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.6} /> {site.phones[0].label}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="relative">
                <span
                  className={`relative block w-full overflow-hidden rounded-[3px] border border-champagne/40 bg-teal-950 p-2 ${d.portraitFrame}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.portrait}
                    alt={d.portraitAlt}
                    className={`h-full w-full rounded-[2px] object-cover ${d.portraitPosition}`}
                  />
                </span>
                <figcaption className="label-xs mt-4 flex items-center gap-3 text-mint/60">
                  <span className="h-px w-8 bg-champagne/70" />
                  {d.name}, {d.credential} — at Simply Smilez Dental
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* credentials */}
      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Eyebrow>Education &amp; qualifications</Eyebrow>
            <ul className="mt-6 space-y-5">
              {d.qualifications.map((q) => (
                <li key={q.label} className="border-t border-champagne/60 pt-4">
                  <p className="display text-[1.5rem] leading-tight text-teal">{q.label}</p>
                  <p className="mt-1.5 text-[14.5px] text-charcoal/65">{q.value}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Eyebrow>Areas of practice</Eyebrow>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {d.practice.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-charcoal/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Experience &amp; memberships</Eyebrow>
            <ul className="mt-6 space-y-0 border-t border-charcoal/12">
              {d.experience.map((e, i) => (
                <Reveal
                  key={e}
                  delay={i * 0.05}
                  as="li"
                  className="flex items-baseline gap-6 border-b border-charcoal/12 py-5"
                >
                  <span className="label-xs text-champagne">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[clamp(1.05rem,1.8vw,1.35rem)] leading-snug text-teal">{e}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 rounded-[3px] border border-charcoal/12 bg-ivory p-7">
              <p className="label-xs text-champagne">Treatments led by {d.name.split(" ")[1] ?? d.name}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {linked.filter(Boolean).map((t) => (
                  <li key={t!.slug}>
                    <Link
                      href={`/treatments/${t!.slug}`}
                      className="group flex items-center justify-between gap-3 border-b border-charcoal/12 pb-3 transition-colors hover:border-teal/40"
                    >
                      <span className="display text-[1.3rem] text-teal transition-transform duration-300 group-hover:translate-x-1">
                        {t!.title}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-charcoal/40 transition-all group-hover:translate-x-1 group-hover:text-emerald" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.03] text-teal">
              About {d.name.split(" ")[0]}.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={d.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8">
          <SectionHead eyebrow="Also at this clinic" title="The rest of" italic="our team." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {doctors
              .filter((o) => o.slug !== d.slug)
              .map((o) => (
                <Link key={o.slug} href={`/doctors/${o.slug}`} className="group flex gap-5 border-t border-champagne/60 pt-5">
                  <span className="block h-28 w-24 shrink-0 overflow-hidden border border-champagne/40 bg-ivory p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.portrait} alt={o.portraitAlt} loading="lazy" className={`h-full w-full object-cover ${o.portraitPosition}`} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-xs block text-champagne">{o.credential} · {o.role}</span>
                    <span className="display mt-2 block text-[1.6rem] leading-tight text-teal">{o.name}</span>
                    <span className="label-xs mt-3 inline-flex items-center gap-2 text-emerald">
                      View profile <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
