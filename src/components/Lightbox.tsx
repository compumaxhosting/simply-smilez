"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Shot = { src: string; alt: string; cap: string };

export default function Lightbox({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % shots.length)), [shots.length]);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  const shot = index === null ? null : shots[index];

  return (
    <>
      <AnimatePresence>
        {shot && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-teal-950/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer: ${shot.cap}`}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
              <p className="label-xs text-mint/70">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-porcelain transition-colors hover:border-aqua hover:text-aqua"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-porcelain transition-colors hover:border-aqua hover:text-aqua"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={close}
                  autoFocus
                  aria-label="Close image viewer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-porcelain text-teal transition-colors hover:bg-aqua"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-10">
              <motion.figure
                key={shot.src}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
                <figcaption className="label-xs text-center text-mint/70">{shot.cap}</figcaption>
              </motion.figure>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {shots.map((s, i) => (
          <li key={s.src + i} className="min-w-0">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block h-full w-full min-w-0 overflow-hidden text-left"
              aria-label={`Open image: ${s.cap}`}
            >
              <span className="block aspect-[4/3] w-full overflow-hidden bg-ivory">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.05]"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-t from-teal/75 via-teal/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="label-xs absolute bottom-4 left-4 text-porcelain opacity-0 transition-all duration-500 group-hover:opacity-100">
                {s.cap}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
