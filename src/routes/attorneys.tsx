import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  FileText,
  ShieldCheck,
  Stethoscope,
  Network,
  Scale,
  Languages,
  Smartphone,
  MapPin,
  Car,
  Phone,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/attorneys")({
  head: () => ({
    meta: [
      { title: "How Referrals Work | RapidLink Medical" },
      {
        name: "description",
        content:
          "Physician-led, 24-48 hour medical intake and reporting for Indiana personal injury attorneys. Spanish-speaking clients welcome. Coordinated imaging, PT, and specialist referrals.",
      },
    ],
  }),
  component: Attorneys,
});

function Attorneys() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            For Personal Injury Attorneys
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            What happens after you send us a client.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85">
            A board-certified internal medicine physician handles the intake personally and signs
            the report. Imaging and specialist referrals are set up while the case is still fresh.
            Everything happens by telemedicine, anywhere in Indiana.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="tel:+13178003730"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> (317) 800-3730
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-primary-foreground/30 px-6 text-base font-semibold hover:bg-primary-foreground/10"
            >
              Refer a client
            </a>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Where we differ from the mill clinics
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Everything the case needs from the first visit.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mill clinics stretch treatment out over months and hand you incomplete records well
            after you needed them. We run it differently. One physician handles the whole intake,
            and the records are on your desk in two business days.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Value
            Icon={Clock}
            title="24-48 hour turnaround"
            body="Evaluation, signed report, imaging orders, and referrals are all finished inside two business days."
          />
          <Value
            Icon={Stethoscope}
            title="Done by an MD, not a tech"
            body="A board-certified internal medicine physician runs the intake personally, so the documentation holds up if the other side challenges it."
          />
          <Value
            Icon={Network}
            title="Coordinated referrals"
            body="Direct routing to pre-vetted partners in physical therapy, pain management, orthopedics, and other specialties."
          />
          <Value
            Icon={FileText}
            title="MRI & CT imaging arranged"
            body="We coordinate with imaging partners including Reyes MRI and Affordable MRI to get your client scanned quickly."
          />
          <Value
            Icon={Languages}
            title="Spanish-speaking clients welcome"
            body="Spanish translator available for the visit, and the intake can be completed in Spanish."
          />
          <Value
            Icon={Smartphone}
            title="One click for your client"
            body="One secure link covers intake, consents, and the visit itself. Your client does it from their phone."
          />
          <Value
            Icon={Scale}
            title="Letter of Protection accepted"
            body="No upfront cost to your client. We work on LOP for qualifying cases."
          />
          <Value
            Icon={ShieldCheck}
            title="Records stay in the EHR"
            body="The visit, the chart, and the report all live in our HIPAA-compliant eClinicalWorks system. Nothing clinical touches this website."
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              What your client has to do
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your client never has to drive anywhere or sit in a waiting room. Everything happens
              on their phone, in English or Spanish.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                n: "Step One",
                t: "You refer the client",
                d: "Call or email us with the basics. No health details needed to start.",
              },
              {
                n: "Step Two",
                t: "We send one secure link",
                d: "By text or email, direct to your client. Works on any phone.",
              },
              {
                n: "Step Three",
                t: "Client completes intake & visit",
                d: "Intake, consents, and video visit, in English or Spanish.",
              },
              {
                n: "Step Four",
                t: "Report delivered to your office",
                d: "Signed physician report plus imaging coordination within 24-48 hours.",
              },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-serif text-xl text-muted-foreground">{s.n}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            Icon={Car}
            title="Heavy MVA experience"
            body="A large portion of our PI practice is motor vehicle accident cases: neck, back, soft-tissue, post-concussive, and beyond."
          />
          <InfoCard
            Icon={MapPin}
            title="Indiana, telemedicine only"
            body="Currently accepting Indiana-based clients only, fully via telemedicine. No in-person clinic visits, so your client never has to drive anywhere."
          />
          <InfoCard
            Icon={Network}
            title="Imaging & specialist network"
            body="MRI/CT coordination with Reyes MRI, Affordable MRI, and others. Pain management and specialist referrals on file and ready to go."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Refer a client</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Call or email with the attorney's name, firm, and best contact number. We'll follow up
              the same business day and send your client a secure intake link.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+13178003730"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary"
            >
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <span>
                <span className="block font-semibold text-foreground">(317) 800-3730</span>
                <span className="block text-sm text-muted-foreground">Call or text</span>
              </span>
            </a>
            <a
              href="mailto:info@rapidlinkmed.com?subject=Attorney%20referral"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary"
            >
              <Mail className="h-6 w-6 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className="block truncate font-semibold text-foreground">
                  info@rapidlinkmed.com
                </span>
                <span className="block text-sm text-muted-foreground">Email the practice</span>
              </span>
            </a>
          </div>

          <p className="mt-6 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
            <strong className="text-foreground">
              Please do not send protected health information by email.
            </strong>{" "}
            Email is not a secure channel. Send only the attorney contact details and we will route
            your client into our HIPAA-compliant eClinicalWorks system, where all clinical intake,
            records, and reporting take place.
          </p>
        </div>
      </section>
    </div>
  );
}

function Value({
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
      <div className="mt-4 font-semibold text-foreground">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function InfoCard({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-surface p-6">
      <Icon className="h-6 w-6 text-primary" />
      <div className="mt-4 font-semibold text-foreground">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
