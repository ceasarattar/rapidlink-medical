import { createFileRoute, Link } from "@tanstack/react-router";

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

/**
 * The layout is derived from the logo: two interlocking rings on deep teal.
 * The teal band carries the header and hero, the page turns white underneath,
 * and the four-step handoff is drawn as a chain of overlapping rings, since
 * the overlap is what the mark means. Labels use the wordmark's own device,
 * uppercase at wide tracking, which is the only typographic flourish here.
 */
function Home() {
  return (
    <div>
      {/* Hero, same teal as the header so the two read as one band */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        {/* Rings echoing the mark. Decorative, and hidden below lg so they
            never crowd the headline on a phone. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <span className="absolute -right-20 -top-24 h-[26rem] w-[26rem] rounded-full border-[2.5rem] border-cream/25 opacity-50" />
          <span className="absolute right-28 top-24 h-80 w-80 rounded-full border-[2.5rem] border-accent/30 opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-accent">
            For personal injury attorneys in Indiana
          </p>
          <h1 className="mt-7 max-w-[18ch] text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-[5rem]">
            Two business days from referral to <span className="text-accent">signed report.</span>
          </h1>
          <p className="mt-7 max-w-[44ch] text-lg text-primary-foreground/65">
            A board-certified internal medicine physician handles the intake personally and signs
            the report. Imaging and specialist referrals are set up while the case is still fresh,
            entirely by telemedicine.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact"
              className="inline-flex h-13 items-center rounded-full bg-accent px-7 text-base font-bold text-accent-foreground hover:brightness-105"
            >
              Get in touch
            </Link>
            <a
              href="#handoff"
              className="inline-flex h-13 items-center rounded-full border-[1.5px] border-cream/30 px-7 text-base font-bold hover:border-accent hover:text-accent"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* White from here down */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
            How we work
          </p>
          <h2 className="mt-3.5 max-w-[22ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            Everything the case needs from the first visit.
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted-foreground">
            One physician handles the whole intake, start to finish. The evaluation, the imaging
            orders, and the specialist referrals all finish inside the same two day window.
          </p>

          {/* Hairline grid: 1px gaps over a border-coloured backdrop, so the
              cells are divided by rules rather than by cards floating apart. */}
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <Cell
              title="24 to 48 hour turnaround"
              body="Evaluation, signed report, imaging orders, and referrals, all inside two business days."
            />
            <Cell
              title="Done by an MD, not a tech"
              body="A board-certified physician runs the intake personally, so the documentation holds up if challenged."
            />
            <Cell
              title="Coordinated referrals"
              body="Direct routing to pre-vetted physical therapy, pain management, and orthopedics partners."
            />
            <Cell
              title="MRI and CT arranged"
              body="Coordination with imaging partners including Reyes MRI and Affordable MRI."
            />
            <Cell
              title="All languages welcome"
              body="We can add a professional interpreter to any visit, so a language barrier never delays the intake."
            />
            <Cell
              title="One click for your client"
              body="One secure link covers intake, consents, and the visit. Done from their phone."
            />
            <Cell
              title="Letter of Protection accepted"
              body="No upfront cost to your client. We work on LOP for qualifying cases."
            />
            <Cell
              title="Records stay in the EHR"
              body="Chart and report live in our HIPAA-compliant eClinicalWorks system, never on this website."
            />
          </div>
        </div>
      </section>

      <section id="handoff" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
            The handoff
          </p>
          <h2 className="mt-3.5 max-w-[22ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            What your client has to do.
          </h2>
          <p className="mt-4 max-w-[58ch] text-muted-foreground">
            Your client never has to drive anywhere or sit in a waiting room. Everything happens on
            their phone, in any language, with an interpreter on the call.
          </p>

          {/* The chain. From lg up each ring is pulled 22px left so consecutive
              steps interlock the way the two rings in the mark do. */}
          <ol className="mt-13 grid gap-8 lg:grid-cols-4 lg:gap-0">
            <Step n={1} title="You refer the client">
              Call or email with the basics. No health details needed to start.
            </Step>
            <Step n={2} title="We send one link">
              By text or email, direct to your client. Works on any phone.
            </Step>
            <Step n={3} title="Client completes the visit">
              Intake, consents, and video visit, with an interpreter on request.
            </Step>
            <Step n={4} title="Report reaches your office">
              Signed report plus imaging coordination within 24 to 48 hours.
            </Step>
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
              Coverage
            </p>
            <h2 className="mt-3.5 max-w-[22ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
              Indiana, by telemedicine only.
            </h2>
            <p className="mt-4 max-w-[58ch] text-muted-foreground">
              A large portion of our personal injury practice is motor vehicle accident cases: neck,
              back, soft-tissue, post-concussive, and beyond. Imaging and specialist referrals are
              on file and ready to go.
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border">
            <Fact value="2" label="business days to a signed report" />
            <Fact value="1" label="physician from intake through sign-off" />
            <Fact value="$0" label="up front for your client on an LOP" />
          </div>
        </div>
      </section>

      {/* The one inverted block, so the ask is the loudest thing on the page */}
      <section id="contact" className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-accent-foreground/60">
            Contact us
          </p>
          <h2 className="mt-3.5 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
            Tell us about the case.
          </h2>
          <p className="mt-4 max-w-[58ch] text-accent-foreground/80">
            Tell us your name, your firm, and the best number to reach you. We follow up the same
            business day.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex h-13 items-center rounded-full bg-accent-foreground px-7 text-base font-bold text-accent hover:brightness-125"
          >
            Get in touch
          </Link>

          <p className="mt-8 text-sm font-semibold text-accent-foreground/70">
            Prefer to skip the form?
          </p>

          <div className="mt-3 grid gap-px border border-accent-foreground/20 bg-accent-foreground/20 sm:grid-cols-2">
            <a href="tel:+13178003730" className="block bg-accent p-6 hover:brightness-105">
              <span className="block text-lg font-bold tracking-tight">(317) 800-3730</span>
              <span className="mt-0.5 block text-[0.8125rem] text-accent-foreground/70">
                Call or text, fastest during business hours
              </span>
            </a>
            <a
              href="mailto:info@rapidlinkmed.com?subject=Attorney%20referral"
              className="block bg-accent p-6 hover:brightness-105"
            >
              <span className="block truncate text-lg font-bold tracking-tight">
                info@rapidlinkmed.com
              </span>
              <span className="mt-0.5 block text-[0.8125rem] text-accent-foreground/70">
                We reply the same business day
              </span>
            </a>
          </div>

          <p className="mt-6 max-w-[62ch] text-[0.78rem] text-accent-foreground/75">
            <strong className="text-accent-foreground">
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

function Cell({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-background p-6 sm:p-7">
      <span className="block h-3.5 w-3.5 rounded-full border-[3px] border-accent" />
      <h3 className="mt-4 text-[0.9375rem] font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  // Odd rings gold, even rings teal, alternating the way the mark's two rings do.
  const tone = n % 2 === 1 ? "border-accent text-accent" : "border-primary text-primary";
  return (
    <li className="relative lg:pr-5">
      <span
        className={`relative z-10 grid h-[74px] w-[74px] place-items-center rounded-full border-[3px] bg-background text-xl font-bold ${tone} ${
          n === 1 ? "" : "lg:-ml-[22px]"
        }`}
      >
        {n}
      </span>
      <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 max-w-[24ch] text-sm text-muted-foreground">{children}</p>
    </li>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-5 bg-background p-6">
      <b className="text-3xl font-bold tabular-nums tracking-[-0.04em] text-primary">{value}</b>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
