import Link from "next/link";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const InstagramGlyph = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

const FacebookGlyph = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M14.8 21v-7.6h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.6-1.5H18V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H9v3h2.6V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
import { site, nav, treatments, doctors } from "@/lib/content";
import { ToothMark } from "./Spine";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-16 sm:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-3 rounded-[3px] bg-porcelain px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-3.webp" alt="Simply Smilez Dental" className="h-8 w-auto" />
            </span>
            <p className="display mt-6 max-w-sm text-[1.6rem] leading-[1.25] text-teal">
              Specialist dental care for children and adults, in Shaikpet since {site.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simply Smilez Dental on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-teal transition-colors hover:border-teal hover:bg-teal hover:text-porcelain"
              >
                <InstagramGlyph className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simply Smilez Dental on Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-teal transition-colors hover:border-teal hover:bg-teal hover:text-porcelain"
              >
                <FacebookGlyph className="h-4 w-4" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Simply Smilez Dental on WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-teal transition-colors hover:border-teal hover:bg-teal hover:text-porcelain"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="label-xs text-champagne">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="text-[14.5px] text-charcoal/75 underline-offset-4 transition-colors hover:text-emerald hover:underline"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-xs text-champagne">Treatments</p>
              <ul className="mt-4 space-y-2.5">
                {treatments.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="text-[14.5px] text-charcoal/75 underline-offset-4 transition-colors hover:text-emerald hover:underline"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div>
                <p className="label-xs text-champagne">Our doctors</p>
                <ul className="mt-4 space-y-2.5">
                  {doctors.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/doctors/${d.slug}`}
                        className="text-[14.5px] text-charcoal/75 underline-offset-4 transition-colors hover:text-emerald hover:underline"
                      >
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-xs text-champagne">Visit</p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-start gap-2 text-[14.5px] text-charcoal/75 hover:text-emerald"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span>
                    {site.address.line1}, {site.address.line2}, {site.address.line3}
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-14 grid gap-8 border-t border-charcoal/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-xs flex items-center gap-2 text-champagne">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.6} /> Opening hours
            </p>
            <ul className="mt-3 space-y-1.5 text-[14.5px] tabular-nums text-charcoal/75">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-3">
                  <span>{h.days}</span>
                  <span className="text-teal">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-xs flex items-center gap-2 text-champagne">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.6} /> Call the clinic
            </p>
            <ul className="mt-3 space-y-1.5 text-[14.5px] tabular-nums text-charcoal/75">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="hover:text-emerald">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-xs flex items-center gap-2 text-champagne">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.6} /> E-mail
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-[14.5px] text-charcoal/75 hover:text-emerald"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="label-xs text-champagne">We treat patients from</p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-charcoal/60">
              {site.areas.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-[12.5px] text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Simply Smilez Dental Clinic, Shaikpet, Hyderabad. All rights
            reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/treatments" className="hover:text-emerald">
              All treatments
            </Link>
            <Link href="/contact" className="hover:text-emerald">
              Contact & directions
            </Link>
            <Link href="/testimonials" className="hover:text-emerald">
              Patient words
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
