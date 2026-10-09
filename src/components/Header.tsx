"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { nav, site, treatments } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="sticky top-0 z-50">
      {/* promotional ticker */}
      <div className="overflow-hidden border-b border-white/10 bg-teal">
        <div className="marquee-track flex w-max gap-10 py-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label-xs flex items-center gap-3 text-mint/80">
              <span className="text-champagne">✦</span>
              {site.offer}
              <span className="text-champagne">✦</span>
              Mon – Sat 10 am – 9 pm
            </span>
          ))}
        </div>
      </div>

      <header
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-charcoal/10 bg-porcelain/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3">
            {/* authentic logo on a porcelain plate — legible in both header states */}
            <span className="flex items-center gap-3 rounded-[3px] bg-porcelain px-3 py-2 shadow-[0_1px_0_rgba(32,40,40,0.12)] transition-shadow group-hover:shadow-[0_6px_18px_-8px_rgba(18,59,103,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-3.webp" alt="Simply Smilez Dental" className="h-7 w-auto" />
            </span>
            <span
              className={`label-xs hidden leading-tight transition-colors xl:block ${
                scrolled ? "text-charcoal/55" : "text-porcelain/80"
              }`}
            >
              Shaikpet
              <br />
              Hyderabad
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[13.5px] font-medium tracking-[0.02em] transition-colors ${
                  scrolled
                    ? isActive(item.href)
                      ? "text-teal"
                      : "text-charcoal/70 hover:text-teal"
                    : isActive(item.href)
                      ? "text-aqua"
                      : "text-porcelain/85 hover:text-aqua"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-champagne"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 text-[13px] font-medium transition-colors md:flex ${
                scrolled ? "text-charcoal/70 hover:text-teal" : "text-porcelain/80 hover:text-aqua"
              }`}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
              {site.phones[0].label}
            </a>
            <Link
              href="/contact#enquiry"
              className="group relative hidden overflow-hidden rounded-full bg-teal px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-porcelain transition-all hover:bg-emerald sm:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-emerald transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled ? "border-charcoal/20 text-teal" : "border-white/30 text-porcelain"
              }`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="kiln fixed inset-0 z-[60] flex flex-col lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <span className="label-xs text-mint/70">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-porcelain"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-8">
              <ul className="border-t border-white/10">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.08 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.href}
                      className="display flex items-baseline justify-between py-4 text-[2rem] text-porcelain"
                    >
                      {item.label}
                      <span className="label-xs text-champagne">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <p className="label-xs mt-8 text-mint/60">Treatments</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {treatments.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="text-[14px] text-porcelain/75 underline-offset-4 hover:text-aqua hover:underline"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={site.phones[0].href}
                  className="rounded-full border border-aqua/50 px-5 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-aqua"
                >
                  Call {site.phones[0].label}
                </a>
                <Link
                  href="/contact#enquiry"
                  className="rounded-full bg-porcelain px-5 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-teal"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
