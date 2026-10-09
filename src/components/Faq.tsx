"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Faq({
  items,
  tone = "light",
}: {
  items: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  const dark = tone === "dark";

  return (
    <div className={`border-t ${dark ? "border-white/15" : "border-charcoal/12"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;
        return (
          <div key={item.q} className={`border-b ${dark ? "border-white/15" : "border-charcoal/12"}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-start justify-between gap-6 py-5 text-left transition-colors ${
                  dark ? "text-porcelain hover:text-aqua" : "text-teal hover:text-emerald"
                }`}
              >
                <span className="display text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug">
                  {item.q}
                </span>
                <span
                  className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    dark ? "border-white/25 text-aqua" : "border-charcoal/20 text-emerald"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  )}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`max-w-[70ch] pb-6 pr-12 text-[15px] leading-relaxed ${
                      dark ? "text-mint/75" : "text-charcoal/70"
                    }`}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
