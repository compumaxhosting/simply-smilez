"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { treatments } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

const validate = (v: Record<string, string>): Errors => {
  const e: Errors = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid e-mail address.";
  const digits = v.phone.replace(/[^0-9]/g, "");
  if (digits.length < 10 || digits.length > 15) e.phone = "Enter a valid phone number (10–15 digits).";
  if (!v.consent) e.consent = "Please confirm we may contact you about this enquiry.";
  return e;
};

export default function AppointmentForm({ id = "enquiry" }: { id?: string }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    preferred: "",
    message: "",
    consent: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [ref, setRef] = useState<string | null>(null);

  const set = (k: keyof typeof values) => (ev: { target: { value: string } }) => {
    setValues((s) => ({ ...s, [k]: ev.target.value }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setServerError(null);
    if (Object.keys(e).length) {
      const first = document.getElementById(`f-${Object.keys(e)[0]}`);
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          treatment: values.treatment || undefined,
          preferred: values.preferred || undefined,
          message: values.message.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setServerError(
          data?.error ||
            "We could not deliver your enquiry. Please call the clinic on +91 77993 76656."
        );
        return;
      }
      setRef(data.reference);
      setStatus("sent");
    } catch {
      setStatus("error");
      setServerError("Network error — your enquiry was not sent. Please call the clinic.");
    }
  };

  const field =
    "w-full rounded-[3px] border border-charcoal/20 bg-porcelain px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-emerald focus:outline-none";

  if (status === "sent") {
    return (
      <div
        id={id}
        className="flex h-full min-h-[420px] flex-col items-start justify-center gap-4 rounded-[3px] border border-emerald/30 bg-mint/40 p-8"
        role="status"
      >
        <CheckCircle2 className="h-8 w-8 text-emerald" strokeWidth={1.4} />
        <h3 className="display text-[2rem] leading-tight text-teal">Your enquiry has reached us.</h3>
        <p className="max-w-[46ch] text-[15px] leading-relaxed text-charcoal/75">
          Thank you, {values.name.split(" ")[0]}. Your request has been recorded
          {ref ? (
            <>
              {" "}
              under reference <span className="font-semibold tabular-nums text-teal">{ref}</span>
            </>
          ) : null}
          . Our team will call you on {values.phone} to confirm a time. If you need us sooner, call{" "}
          <a href="tel:+917799376656" className="underline underline-offset-4 hover:text-emerald">
            +91 77993 76656
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({ name: "", email: "", phone: "", treatment: "", preferred: "", message: "", consent: "" });
          }}
          className="label-xs mt-2 border-b border-teal pb-1 text-teal transition-colors hover:text-emerald"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="label-xs mb-2 block text-charcoal/60">
            Full name <span aria-hidden="true" className="text-champagne">*</span>
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "e-name" : undefined}
            placeholder="Your name"
            className={field}
          />
          {errors.name && (
            <p id="e-name" className="mt-1.5 text-[13px] text-[#a13a2a]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="f-phone" className="label-xs mb-2 block text-charcoal/60">
            Phone <span aria-hidden="true" className="text-champagne">*</span>
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "e-phone" : undefined}
            placeholder="+91 98765 43210"
            className={`${field} tabular-nums`}
          />
          {errors.phone && (
            <p id="e-phone" className="mt-1.5 text-[13px] text-[#a13a2a]">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="f-email" className="label-xs mb-2 block text-charcoal/60">
          E-mail <span aria-hidden="true" className="text-champagne">*</span>
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "e-email" : undefined}
          placeholder="you@example.com"
          className={field}
        />
        {errors.email && (
          <p id="e-email" className="mt-1.5 text-[13px] text-[#a13a2a]">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-treatment" className="label-xs mb-2 block text-charcoal/60">
            Treatment of interest
          </label>
          <select id="f-treatment" name="treatment" value={values.treatment} onChange={set("treatment")} className={field}>
            <option value="">Not sure yet</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="Routine check-up">Routine check-up</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-preferred" className="label-xs mb-2 block text-charcoal/60">
            Preferred time
          </label>
          <select id="f-preferred" name="preferred" value={values.preferred} onChange={set("preferred")} className={field}>
            <option value="">Any time</option>
            <option>Morning (10 am – 1 pm)</option>
            <option>Afternoon (1 pm – 5 pm)</option>
            <option>Evening (5 pm – 9 pm)</option>
            <option>Sunday (11 am – 4 pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="f-message" className="label-xs mb-2 block text-charcoal/60">
          How can we help?
        </label>
        <textarea
          id="f-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          placeholder="Tell us briefly what you would like to discuss."
          className={`${field} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="f-consent" className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-charcoal/70">
          <input
            id="f-consent"
            name="consent"
            type="checkbox"
            checked={values.consent === "yes"}
            onChange={(e) => {
              setValues((s) => ({ ...s, consent: e.target.checked ? "yes" : "" }));
              setErrors((er) => ({ ...er, consent: undefined }));
            }}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "e-consent" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-[#1769AA]"
          />
          <span>
            I agree that Simply Smilez Dental may contact me about this enquiry by phone, WhatsApp
            or e-mail.
          </span>
        </label>
        {errors.consent && (
          <p id="e-consent" className="mt-1.5 text-[13px] text-[#a13a2a]">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <p
          role="alert"
          className="rounded-[3px] border border-[#a13a2a]/40 bg-[#a13a2a]/8 px-4 py-3 text-[14px] text-[#8b2f21]"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-teal px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-porcelain transition-colors hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            Send enquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
          </>
        )}
      </button>
      <p className="text-[12.5px] text-charcoal/50">
        Fields marked <span className="text-champagne">*</span> are required. Prefer to talk? Call{" "}
        <a href="tel:+917799376656" className="underline underline-offset-4 hover:text-emerald">
          +91 77993 76656
        </a>
        .
      </p>
    </form>
  );
}
