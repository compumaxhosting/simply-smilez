import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import { treatments, doctors, testimonials, homeFaqs, galleryClinic, galleryCases, site } from "@/lib/content";
import { MaskLines, Reveal, CurtainImage } from "@/components/motion";
import { Eyebrow, SectionHead, CtaBand } from "@/components/PageBits";
import TreatmentIndex from "@/components/TreatmentIndex";
import Faq from "@/components/Faq";
import Lightbox from "@/components/Lightbox";

const bySlug = (slug: string) => treatments.find((t) => t.slug === slug)!;

export default function HomePage() {
  const featureA = bySlug("braces-and-invisalign");
  const featureB = bySlug("pediatric-dentistry");
  const featureC = bySlug("dental-implants");
  const featureD = bySlug("root-canal-treatment");
  const featureE = bySlug("dental-veneers");
  const featureF = bySlug("dental-crowns");

  const shots = [galleryClinic[0], galleryClinic[1], galleryCases[0], galleryClinic[4], galleryCases[3], galleryClinic[3]];

  return (
    <>
      {/* ── A. Cinematic hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-teal">
        <div className="absolute inset-0 lg:left-[44%]">
          <Image
            src="/images/hero.png"
            alt="A patient smiling alongside a dentist after a consultation"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-center"
          />
          {/* the scrim lives inside the image container so its left edge dissolves cleanly */}
          <span className="absolute inset-0 bg-teal/72 lg:hidden" />

          <span className="absolute inset-0 bg-gradient-to-r from-teal via-teal/70 via-50% to-transparent to-90% lg:via-teal/45 lg:via-55% lg:to-transparent lg:to-95%" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-teal to-transparent" />
        <div className="glow-breathe pointer-events-none absolute -left-24 top-10 h-[380px] w-[380px] rounded-full bg-aqua/30 blur-[110px]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-center px-5 pb-16 pt-[150px] sm:px-8 lg:pb-24 lg:pt-[185px]">
          <div className="lg:max-w-[64%]">
            <Eyebrow tone="dark">
              Dental clinic ·Shaikpet, Hyd ·est. {site.founded}
            </Eyebrow>

            <h1 className="display mt-7 text-[clamp(2.7rem,7.4vw,6.2rem)] leading-[0.94] text-porcelain">
              <MaskLines
                delay={0.05}
                lines={[
                  "Your Smile.",
                  "Your Confidence.",
                  <em key="c" className="italic text-aqua">
                    Beautifully Connected.
                  </em>,
                ]}
              />
            </h1>

            <Reveal delay={0.35}>
              <p className="mt-8 max-w-[54ch] text-[clamp(1.02rem,1.6vw,1.2rem)] leading-relaxed text-mint/85">
                Thoughtful dental care, specialist expertise, and personalised
                treatment for every stage of your smile.
              </p>
            </Reveal>

            <Reveal
              delay={0.45}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact#enquiry"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-aqua px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-teal transition-all hover:bg-porcelain"
              >
                Book an appointment
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
              <Link
                href="/treatments"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-porcelain/35 px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-porcelain transition-colors hover:border-aqua hover:text-aqua"
              >
                Explore our care
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.8}
                />
              </Link>
            </Reveal>

            <Reveal
              delay={0.55}
              className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-3"
            >
              {[
                {
                  k: "Specialist doctors",
                  v: "Orthodontics & paediatric dentistry",
                },
                { k: "Open", v: "Mon – Sat, 10 am – 9 pm" },
                { k: "Serving", v: "Shaikpet · Manikonda · Jubilee Hills" },
              ].map((f) => (
                <div key={f.k}>
                  <p className="label-xs text-champagne">{f.k}</p>
                  <p className="mt-2 text-[14px] leading-snug text-porcelain/85">
                    {f.v}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <span
            className="label-xs absolute bottom-8 right-6 hidden text-mint/50 lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            Simply Smilez Dental — O.U. Colony Road
          </span>
        </div>
      </section>
      {/* ── B. About ───────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <CurtainImage
                src="/images/about.webp"
                alt="A dentist at Simply Smilez Dental"
                className="aspect-[4/5] w-full"
                imgClassName="object-center"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 flex items-start gap-4 border-t border-champagne/50 pt-4">
                <span className="label-xs shrink-0 text-champagne">
                  Fig. 01
                </span>
                <p className="text-[13px] leading-relaxed text-charcoal/55">
                  Prevention first, intervention only when it earns its place —
                  the order we work in, whatever your age.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Eyebrow>About the practice</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.3rem,5vw,4.2rem)] leading-[1] text-teal">
              <MaskLines
                lines={[
                  "Dentistry That",
                  <em key="w" className="italic">
                    Begins With You.
                  </em>,
                ]}
              />
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="text-[15.5px] leading-relaxed text-charcoal/75">
                  Simply Smilez Dental has cared for families in Shaikpet since
                  2018. Two specialist doctors — an orthodontist and a
                  paediatric dentist & implantologist — work under one roof, so
                  children, teenagers and adults are treated by the person best
                  suited to their case rather than passed between clinics.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-[15.5px] leading-relaxed text-charcoal/75">
                  Every smile is different. We take time to understand what is
                  bothering you, explain the suitable options plainly, and agree
                  a plan built around your individual dental needs. Comfortable
                  treatment, clear communication, modern technique — that is the
                  whole promise.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <ul className="mt-9 grid gap-x-8 gap-y-4 border-t border-champagne/50 pt-6 sm:grid-cols-2">
                {[
                  "Invisalign, Invisalign First and braces",
                  "Dental implants and oral surgery",
                  "Root canal treatment and laser dentistry",
                  "Paediatric and preventive dentistry",
                  "Crowns, veneers and tooth whitening",
                  "Clear communication at every step",
                ].map((li) => (
                  <li
                    key={li}
                    className="flex items-start gap-3 text-[14.5px] text-charcoal/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                    {li}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/about"
                className="group label-xs mt-9 inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
              >
                Read our story
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      {/* ── C. Services showcase ───────────────────────────── */}
      {/* ── C. Services showcase ───────────────────────────── */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <SectionHead
            eyebrow="Principal treatments"
            title="Six specialisms,"
            italic="one address."
            lead="From a child's first check-up to a full-arch implant case — explore our most requested treatments and dedicated treatment pages."
            action={{ label: "Full treatment directory", href: "/treatments" }}
          />

          {/* Compact, asymmetric treatment grid */}
          <div className="mt-8 grid grid-cols-1 items-stretch gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-4">
            <Reveal delay={0.04} className="min-w-0 lg:col-span-4">
              <BentoCard
                t={featureC}
                className="h-full min-h-[205px] sm:min-h-[220px]"
                tone="image"
                imageSrc={featureC.image}
              />
            </Reveal>

            <Reveal delay={0.1} className="min-w-0 lg:col-span-4">
              <BentoCard
                t={featureD}
                className="h-full min-h-[205px] sm:min-h-[220px]"
                tone="image"
                imageSrc={featureD.image}
              />
            </Reveal>

            <Reveal delay={0.16} className="min-w-0 lg:col-span-4">
              <BentoCard
                t={featureE}
                className="h-full min-h-[205px] sm:min-h-[220px]"
                tone="paper"
              />
            </Reveal>

            <Reveal delay={0.06} className="min-w-0 lg:col-span-5">
              <BentoCard
                t={featureF}
                className="h-full min-h-[200px] sm:min-h-[220px]"
                tone="paper"
              />
            </Reveal>

            <div className="min-w-0 lg:col-span-7">
              <Reveal delay={0.12} className="h-full">
                <Link
                  href="/treatments"
                  className="group kiln relative flex min-h-[180px] h-full flex-col justify-between gap-8 overflow-hidden rounded-[3px] p-5 transition-colors duration-300 hover:bg-charcoal sm:min-h-[200px] sm:p-6 lg:min-h-[220px] lg:p-7"
                >
                  <span className="label-xs text-mint/70">
                    The complete directory
                  </span>

                  <span className="block">
                    <span className="display block max-w-2xl text-[clamp(1.45rem,2.8vw,2.25rem)] leading-[1.12] text-porcelain">
                      {treatments.length} treatments, from whitening to
                      full-arch implants
                    </span>

                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-aqua transition-colors group-hover:text-mint sm:text-xs">
                      Browse all treatments
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.6}
                      />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Treatment index */}
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div className="flex flex-col gap-2 border-b border-charcoal/10 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <p className="label-xs text-charcoal/55">
                Index of treatments — 01 to {treatments.length}
              </p>

              <p className="label-xs text-charcoal/45">
                Explore the treatment index
              </p>
            </div>

            <div className="mt-2">
              <TreatmentIndex />
            </div>
          </div>
        </div>
      </section>
      {/* ── D. Doctors ─────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            eyebrow="Our doctors"
            title="Two specialists,"
            italic="equal weight."
            lead="Both senior doctors, both with nine years of practice, both consultants across Hyderabad — and both here in one clinic."
            action={{ label: "Meet the team", href: "/doctors" }}
          />

          <div className="mt-14 space-y-16 lg:space-y-24">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.06}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <Link
                      href={`/doctors/${d.slug}`}
                      className="group relative block overflow-hidden border border-champagne/40 bg-ivory p-2"
                    >
                      <span
                        className={`relative block w-full overflow-hidden ${d.portraitFrame}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={d.portrait}
                          alt={d.portraitAlt}
                          loading="lazy"
                          className={`h-full w-full object-cover ${d.portraitPosition} transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]`}
                        />
                      </span>
                      <span className="label-xs absolute left-5 top-5 rounded-full bg-porcelain/90 px-3 py-1.5 text-teal">
                        {d.seniority}
                      </span>
                    </Link>
                  </div>

                  <div
                    className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <p className="label-xs text-champagne">
                      {d.credential} · {d.role}
                    </p>
                    <h3 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] text-teal">
                      {d.name}
                    </h3>
                    <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-charcoal/75">
                      {d.bio}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {d.practice.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-charcoal/15 px-3 py-1.5 text-[12.5px] text-charcoal/65"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-6 border-t border-champagne/50 pt-5">
                      <Link
                        href={`/doctors/${d.slug}`}
                        className="group/l label-xs inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
                      >
                        View full profile
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover/l:translate-x-1"
                          strokeWidth={1.6}
                        />
                      </Link>
                      <Link
                        href="/contact#enquiry"
                        className="group/l label-xs inline-flex items-center gap-2 border-b border-transparent pb-2 text-charcoal/55 transition-colors hover:border-champagne hover:text-emerald"
                      >
                        Book with {d.name.split(" ")[1] ?? d.name}
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover/l:translate-x-1"
                          strokeWidth={1.6}
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ── E. Gallery ─────────────────────────────────────── */}
      <section className="bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:pb-28">
          <SectionHead
            eyebrow="Gallery"
            title="Inside the practice,"
            italic="and the work it produces."
            lead="Photographs published by the clinic — the team in theatre, treatment in progress, and case records shared with patients' consent."
            action={{ label: "Open the full gallery", href: "/gallery" }}
          />
          <div className="mt-12">
            <Lightbox shots={shots} />
          </div>
        </div>
      </section>
      {/* ── F. Testimonials ────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-ivory">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
          <SectionHead
            eyebrow="In their words"
            title="Patients say it"
            italic="better than we can."
            action={{ label: "More testimonials", href: "/testimonials" }}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col border-t border-champagne/60 pt-6">
                  <Quote className="h-5 w-5 text-champagne" strokeWidth={1.4} />
                  <blockquote className="display mt-5 flex-1 text-[clamp(1.25rem,2vw,1.6rem)] italic leading-[1.35] text-teal">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex gap-0.5" aria-label="5 out of 5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-3.5 w-3.5 fill-champagne text-champagne"
                          strokeWidth={0}
                        />
                      ))}
                    </span>
                    <span className="label-xs text-charcoal/60">
                      {t.name} · Patient
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ── G. FAQ ─────────────────────────────────────────── */}
      <section className="bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow>Frequently asked</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03] text-teal">
              Questions we hear <em className="italic">every week.</em>
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-charcoal/70">
              Anything not covered here, ask us directly — we would rather
              answer than have you guess.
            </p>
            <Link
              href="/contact"
              className="group label-xs mt-6 inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
            >
              Ask a question
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.6}
              />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Faq items={homeFaqs} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ── bento card, three deliberately different treatments ── */
function BentoCard({
  t,
  tone,
  imageSrc,
  className = "",
  tall = false,
}: {
  t: (typeof treatments)[number];
  tone: "image" | "dark" | "paper";
  imageSrc?: string;
  className?: string;
  tall?: boolean;
}) {
  const href = `/treatments/${t.slug}`;

  if (tone === "image") {
    return (
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-[3px] bg-teal ${className}`}
      >
        <span className={`relative block w-full overflow-hidden ${tall ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[4/3]"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc ?? t.image}
            alt={t.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]"
          />
          <span className="absolute inset-0 bg-teal/35" />
          <span className="absolute inset-0 bg-gradient-to-t from-teal via-teal/75 to-transparent" />
        </span>
        <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
          <span className="label-xs block text-champagne">{t.eyebrow}</span>
          <span className="display mt-2 block text-[clamp(1.5rem,2.6vw,2.3rem)] leading-tight text-porcelain sm:mt-3">
            {t.title}
          </span>
          <span className="mt-2 line-clamp-3 block max-w-[46ch] text-[13.5px] leading-snug text-mint/80 sm:mt-3 sm:text-[14px]">
            {t.summary}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-aqua">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
          </span>
        </span>
      </Link>
    );
  }

  if (tone === "dark") {
    return (
      <Link
        href={href}
        className="group flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[3px] bg-teal p-6 transition-colors hover:bg-emerald sm:p-7"
      >
        <span className="label-xs text-champagne">{t.eyebrow}</span>
        <span className="mt-10">
          <span className="display block text-[clamp(1.7rem,2.8vw,2.5rem)] leading-tight text-porcelain">
            {t.title}
          </span>
          <span className="mt-4 block max-w-[42ch] text-[14px] leading-snug text-mint/80">{t.summary}</span>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-aqua">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[3px] border border-charcoal/12 bg-porcelain p-6 transition-all hover:border-teal/40 hover:shadow-[0_24px_50px_-40px_rgba(9,47,50,0.7)] sm:p-7"
    >
      <span className="flex items-start justify-between gap-4">
        <span className="label-xs text-champagne">{t.eyebrow}</span>
        <span className="display text-[2.4rem] leading-none text-charcoal/10 transition-colors group-hover:text-champagne/70">
          {t.index}
        </span>
      </span>
      <span className="mt-10 block">
        <span className="display block text-[clamp(1.7rem,2.8vw,2.5rem)] leading-tight text-teal">
          {t.title}
        </span>
        <span className="mt-4 block max-w-[40ch] text-[14px] leading-snug text-charcoal/65">{t.summary}</span>
        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-emerald">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
        </span>
      </span>
    </Link>
  );
}
