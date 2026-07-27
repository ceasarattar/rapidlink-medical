import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AlertCircle, ArrowLeft, CheckCircle2, Loader2, Mail, Phone } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Web3Forms access key. It is inlined into the client bundle at build time,
 * which is why it carries the VITE_ prefix, and it is meant to be public:
 * Web3Forms ties the destination inbox to the key on their side, so the key
 * alone cannot be used to read submissions or change where they are sent.
 * Set it in the host's environment variables and redeploy; changing it
 * without a rebuild has no effect, because the value is baked into the JS.
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

/**
 * Bots post the instant the DOM is ready. Nobody fills four fields and writes
 * a message in under three seconds, so anything faster than this did not come
 * from a person at a keyboard.
 */
const MIN_FILL_MS = 3000;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | RapidLink Medical" },
      {
        name: "description",
        content:
          "Contact RapidLink Medical about our physician-led medical intake for Indiana personal injury attorneys. A member of our team responds within one business day.",
      },
    ],
  }),
  component: Contact,
});

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const mountedAt = useRef(Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypots. Both fields sit offscreen behind aria-hidden and tabindex -1,
    // so no person, including anyone on a screen reader or navigating by
    // keyboard, can reach them. A value here only ever means something filled
    // in every input it could parse. Report success and send nothing: a bot
    // that gets an error learns to retry, one that gets a receipt moves on.
    if (data.get("botcheck") || String(data.get("rl_check") ?? "").trim()) {
      setStatus({ kind: "success" });
      return;
    }

    // The time trap gets a real error rather than a silent discard. A human
    // could conceivably trip it by pasting into every field, and dropping a
    // genuine referral on the floor costs more than asking for a second
    // click, which by then is well past the threshold.
    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      setStatus({
        kind: "error",
        message: "That came through faster than expected. Please submit once more.",
      });
      return;
    }

    // The traps have done their job by now. Drop them so they do not show up
    // as empty rows in the notification email, which renders every field it
    // is given.
    data.delete("botcheck");
    data.delete("rl_check");

    if (!ACCESS_KEY) {
      setStatus({
        kind: "error",
        message:
          "This form is not connected yet. Please call or email us directly using the details below.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms rejected the submission.");
      }

      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not send that. Please try again, or reach us by phone or email using the details below.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-5 text-2xl font-semibold text-foreground">Message received</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A member of our team will be in touch within one business day. If it is urgent, call
            us at (317) 800-3730.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the homepage
          </Link>
        </div>
      </section>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
          For personal injury attorneys
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          For inquiries about our services, fill in your details below and a member of our team
          will be in touch within one business day.
        </p>
      </div>

      {/* The form posts straight to Web3Forms as a plain HTML form when
          scripting is unavailable. With scripting on, the submit handler
          intercepts, runs the bot checks, and posts the same FormData by
          fetch, so the hidden inputs below are the single source of truth for
          both paths. */}
      <form
        action={WEB3FORMS_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        className="relative mt-12"
      >
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value="New inquiry from rapidlinkmed.com" />
        <input type="hidden" name="from_name" value="RapidLink Medical website" />

        {/* Bot traps. Offscreen rather than display:none, because some bots
            skip anything they can tell is not rendered. aria-hidden and
            tabindex -1 keep them off every path a person can take. The second
            field is named so that no browser autofill heuristic recognises
            it, which is what keeps a password manager from filling it and
            flagging a real attorney as a bot. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
        >
          <label>
            Do not fill this in
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
          </label>
          <label>
            Leave this field empty
            <input type="text" name="rl_check" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="name"
            name="name"
            label="Your name"
            autoComplete="name"
            required
            disabled={submitting}
          />
          <Field
            id="organization"
            name="organization"
            label="Firm or organization"
            hint="(optional)"
            autoComplete="organization"
            disabled={submitting}
          />
          <Field
            id="email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
            required
            disabled={submitting}
          />
          <Field
            id="phone"
            name="phone"
            type="tel"
            label="Phone number"
            autoComplete="tel"
            required
            disabled={submitting}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message <span className="text-muted-foreground">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            disabled={submitting}
            className="mt-2 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30 disabled:opacity-60"
            placeholder="Tell us how we can help and the best time to reach you."
          />
        </div>

        <p className="mt-4 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
          <strong className="text-foreground">
            Please do not include protected health information.
          </strong>{" "}
          This form is not a secure channel for clinical details. Keep your message to contact
          details and general questions. All clinical intake, records, and reporting take place
          inside our HIPAA-compliant eClinicalWorks system.
        </p>

        {status.kind === "error" && (
          <p
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground shadow-sm hover:brightness-95 disabled:opacity-70 sm:w-auto"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting ? "Sending" : "Send message"}
        </button>
      </form>

      <div className="mt-14 border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">Prefer to skip the form?</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href="tel:+13178003730"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <span>
              <span className="block font-semibold text-foreground">(317) 800-3730</span>
              <span className="block text-sm text-muted-foreground">
                Call or text, fastest during business hours
              </span>
            </span>
          </a>
          <a
            href="mailto:info@rapidlinkmed.com?subject=Website%20inquiry"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary"
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block truncate font-semibold text-foreground">
                info@rapidlinkmed.com
              </span>
              <span className="block text-sm text-muted-foreground">
                We reply the same business day
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  hint,
  type = "text",
  required = false,
  disabled = false,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  hint?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}{" "}
        <span className="text-muted-foreground">{hint ?? (required ? "(required)" : "")}</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className="mt-2 h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 disabled:opacity-60"
      />
    </div>
  );
}
