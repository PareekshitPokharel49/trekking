// Client helper: gather a <form>'s fields and send them through EmailJS.
// The three NEXT_PUBLIC_EMAILJS_* values are inlined at build time.

import emailjs from "@emailjs/browser";

// EmailJS "public" credentials — safe to ship in client code. Sending is
// locked to the site's domain in EmailJS → Account → Security → Allowed
// Origins. Override with NEXT_PUBLIC_EMAILJS_* env vars if the keys change.
const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7dr2na9";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_uylg8qj";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "7Vv80XxRYBhBi7jsT";

// Field order + human labels used to build the {{message}} body.
const LABELS: Record<"volunteer" | "share", Record<string, string>> = {
  volunteer: {
    fullName: "Full name",
    email: "Email",
    country: "Country of origin",
    role: "Primary skill / interest",
    motivation: "Motivation",
  },
  share: {
    fullName: "Full name",
    email: "Email",
    contentType: "Primary content type",
    regions: "Regions explored",
    portfolio: "Portfolio / drive link",
    story: "Brief story & preferred cause",
    agree: "Agreed to 50/50 terms",
  },
};

export async function submitForm(
  type: "volunteer" | "share",
  form: HTMLFormElement
): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("Email is not configured yet. Please try again later.");
  }

  // Collect fields; repeated names (checkbox groups) accumulate.
  const fields: Record<string, string[]> = {};
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value !== "string") continue;
    (fields[key] ||= []).push(value);
  }

  // Honeypot — silently accept and drop bot submissions.
  if ((fields.company?.[0] ?? "").trim() !== "") return;

  // Escape so user text can't break the HTML email template.
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Every field for this form is always listed; blanks show as an em dash.
  const labels = LABELS[type];
  const lines = Object.keys(labels).map((key) => {
    let val = (fields[key] ?? []).filter((v) => v.trim() !== "").join(", ");
    if (key === "agree") val = fields.agree?.length ? "Yes" : "No";
    return `${labels[key]}: ${val ? esc(val) : "—"}`;
  });

  const params = {
    form_type:
      type === "volunteer"
        ? "Volunteer application"
        : "Share Your Experience submission",
    from_name: esc(fields.fullName?.[0] ?? "—"),
    reply_to: fields.email?.[0] ?? "—",
    message: lines.join("\n"),
    date: new Date().toLocaleString(),
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
      publicKey: PUBLIC_KEY,
    });
  } catch (err) {
    if ((err as { status?: number }).status === 429) {
      throw new Error("Too many submissions right now — please try again soon.");
    }
    throw new Error("Could not send right now. Please try again later.");
  }
}
