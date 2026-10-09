import type { Metadata } from "next";
import { galleryCases, galleryClinic } from "@/lib/content";
import { PageHero, CtaBand, Eyebrow } from "@/components/PageBits";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Gallery — Our Clinic, Team and Treatment Records | Simply Smilez Dental",
  description:
    "Photographs published by Simply Smilez Dental, Shaikpet, Hyderabad: the clinical team at work and treatment records shared with patients.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The practice,"
        italicTail="and its work."
        intro="Two sets of images: photographs of the team and the surgery at work, and clinical case records published by the clinic. Nothing here has been retouched into a result the clinic did not achieve."
        image="/images/lasergum.webp"
        imageAlt="Treatment in progress at Simply Smilez Dental"
        crumbs={[{ label: "Gallery" }]}
        meta={[
          { label: "Section 01", value: "The practice — team and treatment" },
          { label: "Section 02", value: "Case records as published" },
          { label: "Viewer", value: "Click any image · arrow keys · Esc" },
          { label: "More", value: "Video and updates on our social channels" },
        ]}
      />

      <section className="grain relative overflow-hidden bg-porcelain">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-4 border-t border-champagne/60 pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Section 01</Eyebrow>
              <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03] text-teal">
                The practice.
              </h2>
            </div>
            <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-charcoal/65">
              Dentists and assistants in theatre, the equipment in use, and a young patient's first
              visit — ordinary days, photographed as they happened.
            </p>
          </div>

          <div className="mt-10">
            <Lightbox shots={galleryClinic} />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col gap-4 border-t border-champagne/60 pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Section 02</Eyebrow>
              <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03] text-teal">
                Case records.
              </h2>
            </div>
            <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-charcoal/65">
              Before-and-after records as published by the clinic. Individual outcomes vary with the
              starting point, the case and how closely instructions are followed — these are not a
              promise of your own result.
            </p>
          </div>

          <div className="mt-10">
            <Lightbox shots={galleryCases} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see the clinic first?"
        lead="Visit us on O.U. Colony Road before you decide — we are happy to show you the space, meet the team and talk through your options with no obligation."
      />
    </>
  );
}
