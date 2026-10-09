import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/lib/content";
import { PageHero, Eyebrow } from "@/components/PageBits";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental",
  description:
    "Simply Smilez Dental Clinic, P.V. Reddy Complex, O.U. Colony Road, Shaikpet, Hyderabad 500008. Call +91 77993 76656. Open Mon–Sat 10 am–9 pm, Sun 11 am–4 pm.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & appointments"
        title="Come and see us"
        italicTail="on O.U. Colony Road."
        intro="Call, message, or send the form below — it is delivered straight to the clinic and we will call you back to confirm a time. If your tooth is painful today, please phone instead of waiting for a reply."
        image="/images/bg_2.webp"
        imageAlt="The treatment room at Simply Smilez Dental"
        crumbs={[{ label: "Contact" }]}
        meta={[
          { label: "Open", value: "Mon – Sat 10 am – 9 pm · Sun 11 am – 4 pm" },
          { label: "Phone", value: site.phones.map((p) => p.label).join(" · ") },
          { label: "E-mail", value: site.email },
          { label: "Address", value: "P.V. Reddy Complex, Shaikpet, Hyderabad 500008" },
        ]}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          {/* form */}
          <div className="lg:col-span-7" id="enquiry">
            <Eyebrow>Appointment request</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03] text-teal">
              Tell us what you <em className="italic">need.</em>
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-charcoal/70">
              Every enquiry is recorded and passed to the front desk. Fields marked with a star are
              required.
            </p>
            <div className="mt-9 rounded-[3px] border border-charcoal/12 bg-ivory/70 p-6 sm:p-8">
              <AppointmentForm id="enquiry-form" />
            </div>
          </div>

          {/* details */}
          <aside className="lg:col-span-5">
            <div className="space-y-6">
              <div className="rounded-[3px] border border-charcoal/12 p-6">
                <p className="label-xs flex items-center gap-2 text-champagne">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} /> Our address
                </p>
                <address className="mt-4 not-italic text-[15.5px] leading-relaxed text-charcoal/80">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </address>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group label-xs mt-5 inline-flex items-center gap-2 border-b border-teal/40 pb-2 text-teal transition-colors hover:border-emerald hover:text-emerald"
                >
                  Open in Google Maps
                  <Navigation className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
                </a>
              </div>

              <div className="rounded-[3px] border border-charcoal/12 p-6">
                <p className="label-xs flex items-center gap-2 text-champagne">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.6} /> Opening hours
                </p>
                <ul className="mt-4 space-y-2 text-[15px] tabular-nums">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 border-b border-charcoal/10 pb-2">
                      <span className="text-charcoal/70">{h.days}</span>
                      <span className="font-medium text-teal">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[3px] border border-charcoal/12 p-6">
                <p className="label-xs flex items-center gap-2 text-champagne">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.6} /> Call or message
                </p>
                <ul className="mt-4 space-y-2 text-[15.5px] tabular-nums">
                  {site.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="text-teal transition-colors hover:text-emerald">
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-porcelain transition-colors hover:bg-emerald"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.6} /> WhatsApp the clinic
                </a>
              </div>

              <div className="rounded-[3px] border border-charcoal/12 p-6">
                <p className="label-xs flex items-center gap-2 text-champagne">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.6} /> E-mail
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all text-[15.5px] text-teal transition-colors hover:text-emerald"
                >
                  {site.email}
                </a>
              </div>

              <div className="rounded-[3px] bg-teal p-6">
                <p className="label-xs text-champagne">Getting here</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-mint/80">
                  We are on O.U. Colony Road, a short drive from Manikonda, Tolichowki, Jubilee Hills
                  and Mehdipatnam. Parking is available in front of the P.V. Reddy Complex; the clinic
                  is on the first floor.
                </p>
                <p className="label-xs mt-5 text-mint/60">Neighbourhoods we serve</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mint/70">{site.areas.join(" · ")}</p>
              </div>

              <p className="border-l-2 border-champagne/70 pl-4 text-[13px] leading-relaxed text-charcoal/55">
                <strong className="font-semibold text-charcoal/75">A note on our listing:</strong> our
                registered address is in Shaikpet on O.U. Colony Road, while our doctors' published
                profiles also refer to Simply Smilez Dental, Manikonda. If you are navigating to a
                different branch, please call {site.phones[0].label} first and we will confirm the
                right location for your appointment.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
