import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { MaskLines } from "./motion";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`label-xs inline-flex items-center gap-3 ${
        tone === "dark" ? "text-mint/70" : "text-champagne"
      }`}
    >
      <span className={`h-px w-8 ${tone === "dark" ? "bg-champagne/70" : "bg-champagne"}`} />
      {children}
    </span>
  );
}

export function Breadcrumbs({ items, dark = false }: { items: { label: string; href?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="label-xs flex flex-wrap items-center gap-2">
      <Link href="/" className={dark ? "text-mint/60 hover:text-aqua" : "text-charcoal/50 hover:text-emerald"}>
        Home
      </Link>
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          <span className={dark ? "text-mint/40" : "text-charcoal/30"}>/</span>
          {it.href && i < items.length - 1 ? (
            <Link href={it.href} className={dark ? "text-mint/60 hover:text-aqua" : "text-charcoal/50 hover:text-emerald"}>
              {it.label}
            </Link>
          ) : (
            <span className={dark ? "text-mint" : "text-teal"}>{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Dark, photographic page opener used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  italicTail,
  intro,
  image,
  imageAlt,
  crumbs,
  meta,
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  crumbs: { label: string; href?: string }[];
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-teal">
      <div className="glow-breathe pointer-events-none absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-aqua/25 blur-[90px]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[560px] w-[560px] rounded-full bg-emerald/40 blur-[130px]" />
      {image && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover opacity-55" />
          <span className="absolute inset-0 bg-gradient-to-r from-teal via-teal/70 to-teal/30" />
        </div>
      )}

      <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-[140px] sm:px-8 lg:pb-24 lg:pt-[175px]">
        <Breadcrumbs items={crumbs} dark />
        <div className="mt-8 max-w-[62rem] lg:max-w-[54%]">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="display mt-6 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98] text-porcelain">
            <MaskLines lines={[title, ...(italicTail ? [<em className="italic text-aqua">{italicTail}</em>] : [])]} />
          </h1>
          {intro && (
            <p className="mt-7 max-w-[62ch] text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-mint/80">
              {intro}
            </p>
          )}
        </div>

        {meta && (
          <dl className="mt-12 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2 lg:max-w-[54%] xl:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="label-xs text-champagne">{m.label}</dt>
                <dd className="mt-2 text-[14.5px] leading-snug break-words text-porcelain/90 [&]:[overflow-wrap:anywhere]">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  italic,
  lead,
  action,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lead?: string;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[42rem]">
        <Eyebrow tone={tone === "dark" ? "dark" : "light"}>{eyebrow}</Eyebrow>
        <h2
          className={`display mt-5 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.02] ${
            tone === "dark" ? "text-porcelain" : "text-teal"
          }`}
        >
          {title}
          {italic && <em className="italic"> {italic}</em>}
        </h2>
        {lead && (
          <p
            className={`mt-5 max-w-[58ch] text-[15.5px] leading-relaxed ${
              tone === "dark" ? "text-mint/75" : "text-charcoal/70"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={`group label-xs inline-flex shrink-0 items-center gap-2 border-b pb-2 transition-colors ${
            tone === "dark"
              ? "border-aqua/60 text-aqua hover:border-aqua"
              : "border-teal/40 text-teal hover:border-emerald hover:text-emerald"
          }`}
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
        </Link>
      )}
    </div>
  );
}

/** The dramatic appointment band. */
export function CtaBand({
  title = "Your Next Smile Story Starts Here.",
  lead = "Two specialist doctors, one clinic, and a plan built around your teeth. Call us or send an enquiry and we will find a time that suits you.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="kiln relative overflow-hidden">
      <div className="glow-breathe pointer-events-none absolute -left-24 bottom-[-120px] h-[440px] w-[440px] rounded-full bg-aqua/25 blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:py-28">
        <div className="lg:col-span-7">
          <Eyebrow tone="dark">Appointments</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1] text-porcelain">
            <MaskLines lines={[title.split(" ").slice(0, 4).join(" "), <em key="i" className="italic text-aqua">{title.split(" ").slice(4).join(" ")}</em>]} />
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-mint/80">{lead}</p>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
          <Link
            href="/contact#enquiry"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-porcelain px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-teal transition-all hover:bg-aqua"
          >
            Book an appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-aqua/50 px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-aqua transition-colors hover:border-aqua hover:bg-aqua/10"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} /> WhatsApp us
          </a>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
            {site.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="inline-flex items-center gap-2 text-[15px] tabular-nums text-porcelain/85 transition-colors hover:text-aqua"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
                {p.label}
              </a>
            ))}
          </div>
          <p className="label-xs text-mint/55 lg:text-right">
            Mon – Sat 10 am – 9 pm · Sun 11 am – 4 pm
          </p>
        </div>
      </div>
    </section>
  );
}
