import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Stethoscope,
  Network,
  Scale,
  Languages,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RapidLink Medical | Medical Intake for Indiana PI Attorneys" },
      {
        name: "description",
        content:
          "Board-certified physician-led medical intake, imaging coordination, and attorney-ready reporting for Indiana personal injury attorneys. 24-48 hour turnaround. LOP accepted.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            For Personal Injury Attorneys · Indiana
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Your client seen, documented, and{" "}
            <span className="font-serif italic">referred out in 48 hours.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            A board-certified internal medicine physician performs the intake, coordinates imaging
            and specialists, and delivers a clean, defensible report, all within two business days
            and entirely by telemedicine.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/attorneys"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground hover:brightness-95"
            >
              How referrals work <ArrowRight className="h-4 w-4" />
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
              "Board-Certified Internal Medicine",
              "Indiana Licensed",
              "Letters of Protection Accepted",
              "HIPAA-Compliant Records",
            ].map((label) => (
              <li key={label} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            What the mill clinics don't do
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            One physician. One complete intake. One clean record.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mill clinics stretch out treatment, pass your client between providers, and hand you
            patchy records weeks later. We do the opposite, and we do it fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            Icon={Clock}
            title="24-48 hour turnaround"
            body="Initial evaluation, physician report, imaging coordination, and referrals, all completed within two business days."
          />
          <Card
            Icon={Stethoscope}
            title="Done by an MD, not a tech"
            body="Intake is conducted by a board-certified internal medicine physician. Stronger documentation, stronger case."
          />
          <Card
            Icon={Network}
            title="Imaging & specialists arranged"
            body="MRI and CT coordinated through established partners, with direct routing to PT, pain management, and orthopedics."
          />
          <Card
            Icon={Scale}
            title="Letter of Protection accepted"
            body="No upfront cost to your client. We work on LOP for qualifying cases."
          />
          <Card
            Icon={Languages}
            title="Spanish-speaking clients welcome"
            body="A Spanish translator is available for the visit, and intake can be completed in Spanish."
          />
          <Card
            Icon={ShieldCheck}
            title="Telemedicine, no travel"
            body="Your client is seen from their phone, anywhere in Indiana. No driving across town, no waiting rooms."
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/attorneys"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            See the full referral process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Have a client who needs to be seen?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Call or email and we'll open intake the same day. Please don't send medical records or
            client health details by email. We'll send a secure link instead.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+13178003730"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> (317) 800-3730
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
    </div>
  );
}

function Card({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Icon className="h-6 w-6 text-primary" />
      <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
