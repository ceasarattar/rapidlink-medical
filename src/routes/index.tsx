import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileText, UserPlus, Video, Phone, Mail } from "lucide-react";

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
              href="tel:+13179534628"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-primary-foreground/30 px-6 text-base font-semibold hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> (317) 953-4628
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

      {/* Fork */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Where would you like to start?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Read how it works, or send us a case right now.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            to="/attorneys"
            className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-md"
          >
            <FileText className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl font-semibold text-foreground">How referrals work</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              What we document, how imaging and specialist referrals are arranged, and what your
              client has to do.
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read the process{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            to="/attorneys"
            hash="contact"
            className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-md"
          >
            <UserPlus className="h-8 w-8 text-accent" />
            <h3 className="mt-5 text-xl font-semibold text-foreground">Refer a client</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send the attorney contact details and we will follow up the same business day to open
              intake.
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Send us a case{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Direct contact strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-surface px-8 py-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-primary">
                Prefer to just call
              </div>
              <div className="mt-1 text-base text-surface-foreground">
                We can take the details over the phone and start the same day.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+13179534628"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> (317) 953-4628
            </a>
            <a
              href="mailto:info@rapidlinkmed.com?subject=Attorney%20referral%20inquiry"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
          </div>
        </div>
      </section>

      {/* Practice band */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {[
              { v: "2", l: "business days to a signed report" },
              { v: "1", l: "physician from intake through sign-off" },
              { v: "$0", l: "up front for your client on an LOP" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-serif text-4xl text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              The practice
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              The record your case depends on should not take six weeks to arrive.
            </h2>
            <p className="mt-5 text-muted-foreground">
              RapidLink Medical Group is an Indiana telemedicine practice built for personal injury
              work. One board-certified physician runs the intake, orders the imaging, and signs the
              report, so nothing sits in a queue waiting on a hand-off between providers.
            </p>
            <Link
              to="/attorneys"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              See how referrals work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
              Icon: UserPlus,
            },
            {
              n: "Step Two",
              t: "We handle the visit",
              d: "Your client gets one secure link and completes intake, consents, and the video visit from their phone.",
              Icon: Video,
            },
            {
              n: "Step Three",
              t: "You get the report",
              d: "A signed physician report reaches your office within two business days, with imaging already scheduled.",
              Icon: FileText,
            },
          ].map(({ n, t, d, Icon }) => (
            <li key={n} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-serif text-2xl text-muted-foreground">{n}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
