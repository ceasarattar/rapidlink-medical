import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
import heroHolistic from "../assets/hero-holistic.jpg";

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
      {/* Hero.
          Background is the photograph with a warm scrim over it, so the hero reads
          as part of the light page body rather than as a teal block. The scrim is
          opaque enough that the text sits on close to --background, which is what
          keeps the copy legible over the busier parts of the image. */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroHolistic}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/95"
        />
        <div className="mx-auto max-w-4xl px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            For Personal Injury Attorneys
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            What happens after you send us a client.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            A board-certified internal medicine physician handles the intake personally and signs
            the report. Imaging and specialist referrals are set up while the case is still fresh.
            Everything happens by telemedicine, anywhere in Indiana.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+13179534628"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground shadow-sm hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> (317) 953-4628
            </a>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground/70 underline-offset-4 hover:text-primary hover:underline"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* What the intake covers */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Everything the case needs from the first visit.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One physician handles the whole intake, start to finish, and the signed records are on
            your desk in two business days. The evaluation, the imaging orders, and the specialist
            referrals are all finished inside that same window.
          </p>
        </div>

        {/* Eight cards, so the column counts are all divisors of eight: 1, 2,
            then 4. Three columns would leave the last row two-thirds empty.
            Four columns waits for xl rather than lg because the container caps
            at max-w-6xl: from xl up the cards are a steady 254px, whereas at
            lg they would be 218px, narrow enough to wrap most titles. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Get in touch</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Tell us your name, your firm, and the best number to reach you. We follow up the same
              business day.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground shadow-sm hover:brightness-95"
            >
              Send us the details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+13179534628"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary"
            >
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <span>
                <span className="block font-semibold text-foreground">(317) 953-4628</span>
                <span className="block text-sm text-muted-foreground">
                  Call or text, fastest during business hours
                </span>
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
                <span className="block text-sm text-muted-foreground">
                  We reply the same business day
                </span>
              </span>
            </a>
          </div>

          <p className="mt-6 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
            <strong className="text-foreground">
              Please do not send protected health information by email.
            </strong>{" "}
            Email is not a secure channel. Send only your contact details and we will route your
            client into our HIPAA-compliant eClinicalWorks system, where all clinical intake,
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
