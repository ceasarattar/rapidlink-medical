import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Scale, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RapidLink Medical | Medical Intake for Indiana PI Attorneys" },
      {
        name: "description",
        content:
          "Physician-led medical intake for Indiana personal injury attorneys. A board-certified internal medicine physician sees your client by telemedicine and sends a signed report in two business days. Letters of Protection accepted.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            For personal injury attorneys in Indiana
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Medical intake for injury clients,{" "}
            <span className="font-serif italic">turned around in two business days.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
            A board-certified internal medicine physician sees your client by telemedicine and sends
            you a signed report. Imaging and specialist referrals are arranged at the same time. We
            accept Letters of Protection, so your client pays nothing up front.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/attorneys"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground hover:brightness-95"
            >
              See how referrals work <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+13178003730"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-primary-foreground/30 px-6 text-base font-semibold hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> (317) 800-3730
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            {[
              "Board-certified internal medicine",
              "Licensed in Indiana",
              "Letters of Protection accepted",
              "Records kept in a HIPAA-compliant EHR",
            ].map((label) => (
              <li key={label} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three steps, and only the first one is yours.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "Step One",
              t: "You send us the client",
              d: "Call or email with the client's name and a good phone number. No medical details needed to start.",
            },
            {
              n: "Step Two",
              t: "We handle the visit",
              d: "Your client gets one secure link and completes intake, consents, and the video visit from their phone.",
            },
            {
              n: "Step Three",
              t: "You get the report",
              d: "A signed physician report reaches your office within two business days, with imaging already scheduled.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-8">
              <div className="font-serif text-2xl text-muted-foreground">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Attorney CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-10 text-center sm:p-12">
            <Scale className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">
              For personal injury attorneys
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              What we document, how imaging and specialist referrals are handled, what your client
              has to do, and how to send us a case.
            </p>
            <Link
              to="/attorneys"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-base font-semibold text-primary-foreground hover:brightness-110"
            >
              For Attorneys <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
