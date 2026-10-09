import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { site, doctors, treatments } from "@/lib/content";
import { MaskLines, Reveal, CurtainImage } from "@/components/motion";
import { PageHero, SectionHead, CtaBand, Eyebrow } from "@/components/PageBits";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "About Simply Smilez Dental — Trusted Dental Care in Shaikpet since 2018",
  description:
    "Established in 2018, Simply Smilez Dental Clinic is a patient-focused dental clinic in Shaikpet, Hyderabad offering comprehensive care for children, teens and adults, with two specialist doctors.",
  alternates: { canonical: "/about" },
};

const aboutFaqs = [
  {
    q: "Where is Simply Smilez Dental Clinic located?",
    a: "The clinic is at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008, easily accessible from O.U. Colony, Manikonda, Tolichowki, Raidurg, Jubilee Hills, Mehdipatnam and Gachibowli.",
  },
  {
    q: "Do you provide Invisalign?",
    a: "Yes. We provide Invisalign clear aligners for teens and adults who want a comfortable, discreet alternative to traditional braces, as well as Invisalign First for children with developing smiles.",
  },
  {
    q: "Which treatments are available at the clinic?",
    a: "Invisalign and braces, Invisalign First for kids, root canal treatment, dental implants, cosmetic dentistry, teeth whitening, crowns and bridges, smile makeovers and general dental care.",
  },
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal treatment is typically comfortable and performed under local anaesthesia. Most patients experience little to no pain during the procedure and feel significant relief afterwards.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call the clinic directly, message us on WhatsApp, or use the appointment form on the contact page and our team will help you schedule a convenient time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title="Trusted dental care in Shaikpet,"
        italicTail="since 2018."
        intro="Established in 2018, Simply Smilez Dental Clinic is a patient-focused practice offering comprehensive dental care for children, teens and adults — two specialist doctors, one roof, and treatment explained in language you can actually use."
        image="/images/bg_2.webp"
        imageAlt="Dental instruments prepared for treatment"
        crumbs={[{ label: "About" }]}
        meta={[
          { label: "Established", value: `2018 · Shaikpet, Hyderabad` },
          { label: "Specialists", value: "Orthodontics · Paediatric dentistry & implants" },
          { label: "Hours", value: "Mon – Sat 10 am – 9 pm · Sun 11 am – 4 pm" },
          { label: "Patients", value: "Children, teenagers and adults" },
        ]}
      />

      {/* editorial story */}
      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-7">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.02] text-teal">
              <MaskLines
                lines={[
                  "Dental Care Designed",
                  <em key="a" className="italic">
                    Around You.
                  </em>,
                ]}
              />
            </h2>
            <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-charcoal/75">
              <p>
                With two specialty doctors on site, we provide personalised treatment with clear
                communication and a comfortable approach. Our services include Invisalign, Invisalign
                First for Kids, braces, dental implants, root canal treatment, crowns, veneers, teeth
                whitening, paediatric dentistry, wisdom tooth extraction, laser gum treatment and
                preventive dental care.
              </p>
              <p>
                Every smile is different. We take the time to understand your concerns, explain the
                suitable treatment options, and provide care based on your individual dental needs.
                Whether you need routine care, teeth straightening, treatment for a damaged or
                missing tooth, or cosmetic dental treatment, our goal is to help you maintain healthy
                teeth and a confident smile.
              </p>
              <p>
                From children's dentistry and orthodontics to restorative and cosmetic treatments, we
                aim to make quality dental care simple, comfortable and accessible — without
                promising what dentistry cannot deliver.
              </p>
            </div>

            <div className="mt-10 rounded-[3px] border border-champagne/60 bg-ivory p-7">
              <p className="label-xs text-champagne">Our commitment</p>
              <p className="display mt-4 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-snug text-teal">
                Quality dental care made simple, comfortable and accessible — for healthier, more
                confident smiles in Shaikpet, Hyderabad.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <CurtainImage
                src="/images/susheel3.webp"
                alt="The clinical team at Simply Smilez Dental"
                className="aspect-[4/5] w-full"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </Reveal>
            <div className="mt-4 flex items-start gap-4 border-t border-champagne/50 pt-4">
              <span className="label-xs shrink-0 text-champagne">Fig. 02</span>
              <p className="text-[13px] leading-relaxed text-charcoal/55">
                The clinical team — dentists and assistants, in theatre, on an ordinary working day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* areas served */}
      <section className="bg-teal">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow tone="dark">Where our patients come from</Eyebrow>
              <p className="mt-5 flex items-start gap-3 text-[15px] leading-relaxed text-mint/80">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-aqua" strokeWidth={1.6} />
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-aqua">
                  {site.address.full}
                </a>
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:col-span-8 lg:content-start">
              {site.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-white/20 px-4 py-2 text-[13.5px] text-porcelain/85"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* doctors */}
      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            eyebrow="Our specialist doctors"
            title="The people who"
            italic="will treat you."
            lead="Both practising at Simply Smilez Dental and both consultants across dental clinics in Hyderabad."
            action={{ label: "All doctor profiles", href: "/doctors" }}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.08}>
                <Link
                  href={`/doctors/${d.slug}`}
                  className="group flex h-full gap-6 border-t border-champagne/60 pt-6"
                >
                  <span className="relative block h-32 w-28 shrink-0 overflow-hidden bg-ivory">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.portrait}
                      alt={d.portraitAlt}
                      loading="lazy"
                      className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="label-xs block text-champagne">{d.credential} · {d.role}</span>
                    <span className="display mt-2 block text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-teal">
                      {d.name}
                    </span>
                    <span className="mt-2 block text-[14px] leading-snug text-charcoal/65">
                      {d.practice.slice(0, 3).join(" · ")}
                    </span>
                    <span className="label-xs mt-4 inline-flex items-center gap-2 text-emerald">
                      View profile <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* treatments snapshot */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
          <SectionHead
            eyebrow="What we treat"
            title="Ten treatments,"
            italic="one clinic."
            action={{ label: "See every treatment", href: "/treatments" }}
          />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group flex items-baseline gap-4 border-b border-charcoal/12 py-3 transition-colors hover:border-teal/40"
                >
                  <span className="label-xs text-champagne">{t.index}</span>
                  <span className="display flex-1 text-[1.35rem] leading-tight text-teal transition-transform duration-300 group-hover:translate-x-1">
                    {t.title}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-charcoal/40 transition-all group-hover:translate-x-1 group-hover:text-emerald" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow>Frequently asked</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.03] text-teal">
              About the clinic.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={aboutFaqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
