import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { enquiries } from "@/db/schema";

const only = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = only(payload.name, 160);
  const email = only(payload.email, 200);
  const phone = only(payload.phone, 40);

  const errors: string[] = [];
  if (name.length < 2) errors.push("Name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("A valid e-mail address is required.");
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.length < 10 || digits.length > 15) errors.push("A valid phone number is required.");

  if (errors.length) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  try {
    const [row] = await getDb()
      .insert(enquiries)
      .values({
        name,
        email,
        phone,
        treatment: only(payload.treatment, 120) || null,
        preferred: only(payload.preferred, 60) || null,
        message: only(payload.message, 2000) || null,
      })
      .returning({ id: enquiries.id });

    return NextResponse.json({ ok: true, reference: `SSD-${String(row.id).padStart(4, "0")}` }, { status: 201 });
  } catch (err) {
    console.error("appointment insert failed", err);
    return NextResponse.json(
      {
        error:
          "The enquiry could not be saved right now. Please call the clinic on +91 77993 76656 or e-mail info.invisaligndental@gmail.com.",
      },
      { status: 503 }
    );
  }
}
