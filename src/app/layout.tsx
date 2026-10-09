import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Spine from "@/components/Spine";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#123B67",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental",
    template: "%s | Simply Smilez Dental",
  },
  description:
    "Specialist dental care in Shaikpet, Hyderabad — Invisalign and braces, paediatric dentistry, dental implants, root canal treatment, crowns, veneers and teeth whitening. Established 2018.",
  keywords: [
    "dental clinic Shaikpet",
    "dentist Hyderabad",
    "Invisalign Hyderabad",
    "dental implants Shaikpet",
    "pediatric dentist Hyderabad",
    "root canal treatment Hyderabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Simply Smilez Dental — Specialist dental care in Shaikpet, Hyderabad",
    description:
      "Thoughtful dental care, specialist expertise and personalised treatment for every stage of your smile.",
    images: [{ url: "/images/banner1.jpeg", width: 1600, height: 533, alt: "A patient smiling during a dental visit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Smilez Dental — Shaikpet, Hyderabad",
    description: "Specialist dental care for children and adults in Shaikpet, Hyderabad.",
    images: ["/images/banner1.jpeg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalClinic"],
  "@id": `${site.domain}/#clinic`,
  name: site.legalName,
  url: site.domain,
  logo: `${site.domain}/images/logo-3.webp`,
  image: `${site.domain}/images/banner1.jpeg`,
  description:
    "Dental clinic in Shaikpet, Hyderabad providing Invisalign, braces, paediatric dentistry, dental implants, root canal treatment, crowns, veneers and teeth whitening.",
  telephone: "+917799376656",
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
    addressLocality: "Shaikpet, Hyderabad",
    postalCode: "500008",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.4110335, longitude: 78.3949778 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "11:00",
      closes: "16:00",
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  areaServed: site.areas,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${manrope.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-[13px] focus:text-porcelain"
        >
          Skip to content
        </a>
        <Spine />
        <div className="lg:pl-[76px]">
          <Header />
          {/* the masthead floats over the first (dark) section of every page */}
          <main id="main" className="-mt-[101px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
