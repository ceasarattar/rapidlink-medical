import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RapidLink Medical | Medical-Legal Reports for Indiana PI Attorneys" },
      {
        name: "description",
        content:
          "Physician-performed personal injury evaluations by telehealth, statewide across Indiana. ICD-10-coded diagnoses, imaging justified by validated decision rules, and a causation opinion to a reasonable degree of medical probability, delivered in 24 to 48 hours.",
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
        >
          <span className="absolute -right-20 -top-24 h-[26rem] w-[26rem] rounded-full border-[2.5rem] border-cream/25 opacity-50" />
          <span className="absolute right-28 top-24 h-80 w-80 rounded-full border-[2.5rem] border-accent/30 opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-accent">
            For personal injury attorneys in Indiana
          </p>
          <h1 className="mt-7 max-w-[20ch] text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
            The medical-legal report your case deserves.{" "}
            <span className="text-accent">In 24 to 48 hours.</span>
          </h1>
          <p className="mt-7 max-w-[48ch] text-lg text-primary-foreground/65">
            Physician-performed personal injury evaluations by telehealth, statewide across Indiana,
            delivering documentation built for litigation from the very first visit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact"
              className="inline-flex h-13 items-center rounded-full bg-accent px-7 text-base font-bold text-accent-foreground hover:brightness-105"
            >
              Get in touch
            </Link>
            <a
              href="#report"
              className="inline-flex h-13 items-center rounded-full border-[1.5px] border-cream/30 px-7 text-base font-bold hover:border-accent hover:text-accent"
            >
              See what is in the report
            </a>
          </div>
        </div>
      </section>

      {/* Credential strip, directly under the claim it backs. On white rather
          than in the teal band because the badge artwork carries its own
          opaque pale blue background, which would read as a bright box on
          teal. */}
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 px-4 py-6 sm:px-6 lg:px-8">
          <img
            src="/IM Badge.png"
            alt="American Board of Internal Medicine, board certified"
            width={63}
            height={56}
            className="h-14 w-auto shrink-0 rounded-md"
          />
          <p className="text-sm text-muted-foreground">
            Our physicians are certified by the{" "}
            <span className="font-semibold text-foreground">
              American Board of Internal Medicine
            </span>
            .
          </p>
        </div>
      </section>

      {/* The problem this practice exists to solve */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* The gap and the fix as two halves divided by a rule, so the
              structure carries the argument before a word is read. The rule
              and the inner padding only appear once the columns exist; below
              lg the two stack with ordinary spacing. */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
            <div className="lg:pr-12">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                The gap
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-foreground">
                Most medical records were never written with your case in mind.
              </h2>
              <p className="mt-3.5 text-muted-foreground">
                Most personal injury cases are won or lost on the medical record. A rushed
                urgent-care note that never mentions mechanism. A chart that is silent on causation.
                Imaging that was never ordered, or ordered without documented medical necessity. By
                the time you see the gap, it is baked into the record.
              </p>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-12">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
                How we close it
              </p>
              <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-foreground">
                Every evaluation is built to be read by the other side.
              </h2>
              <p className="mt-3.5 text-muted-foreground">
                RapidLink Medical Group was built to close that gap. Every client is evaluated by
                one of our board-certified internal medicine physicians, and every evaluation
                produces a comprehensive medical-legal report designed to withstand scrutiny, from
                the adjuster's first review to a defense medical examiner's cross-examination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is in the report. Nine items, so three columns divide evenly and
          the last row is never left ragged. */}
      <section id="report" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
            What is inside every report
          </p>
          <h2 className="mt-3.5 max-w-[22ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            Documentation built for litigation.
          </h2>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            <Cell
              title="Injury-by-injury ICD-10 diagnoses"
              body="Every painful region documented as its own problem, with laterality-specific codes and a full differential diagnosis list, including the fractures and internal injuries being ruled out."
            />
            <Cell
              title="Imaging with documented medical necessity"
              body="Orders are supported by validated clinical decision rules applied and cited in the note itself: Canadian C-Spine Rule, Canadian CT Head Rule, Ottawa Knee and Ankle Rules, plus an orthopedic protocol including weight-bearing X-ray series and MRI where indicated. When the defense asks why the MRI was ordered, the answer is already in the record."
            />
            <Cell
              title="Causation to a reasonable degree of medical probability"
              body="Tying mechanism, temporal onset, and pre-accident baseline together in the language your case requires."
            />
            <Cell
              title="A documented pre-accident baseline"
              body="Honest disclosures, including pre-existing conditions when they exist, paired with a physician's aggravation analysis. Credible records make credible cases."
            />
            <Cell
              title="Pertinent negatives the client personally attested"
              body="Our intake allows no pre-filled answers and no skipped screens. Every negative finding in the report reflects a box the client actively selected, not a template artifact a defense expert can attack."
            />
            <Cell
              title="Objective psychological injury documentation"
              body="Validated screening instruments, PHQ-9, GAD-7, and PC-PTSD-5, scored in the record, so emotional distress damages rest on recognized measures rather than adjectives."
            />
            <Cell
              title="Functional and economic impact"
              body="Work missed, duties modified, activities of daily living, out-of-pocket costs, and household services including before and after caregiving capacity. The foundations of the damages story."
            />
            <Cell
              title="Premises and incident facts preserved early"
              body="For falls and other non-auto cases: hazard description, warning sign status, witnesses, and whether the incident was reported, captured in the client's own words while memory is fresh."
            />
            <Cell
              title="The client's verbatim intake, preserved"
              body="Alongside the physician's report, we maintain a verbatim record of the client's own answers. Two documents that corroborate each other."
            />
          </div>
        </div>
      </section>

      {/* Turnaround and rigor, side by side, because the pairing is the point:
          neither claim is worth much without the other. */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
              Turnaround
            </p>
            <h2 className="mt-3.5 text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
              Your demand package should not wait weeks for records.
            </h2>
            <p className="mt-4 text-muted-foreground">
              It is one process inside one window. The client is seen, the evaluation is done, the
              imaging orders and specialist referrals are placed, and the signed report reaches your
              office, all inside the same 24 to 48 hours. Telehealth means no transportation
              barriers and no clinic queues, and clients can complete intake from their phone.
            </p>
          </div>
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
              Built for scrutiny, not just for speed
            </p>
            <h2 className="mt-3.5 text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
              Speed means nothing if the document does not hold up.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every evaluation includes structured emergency red flag screening with documented
              safety dispositions, because a record that shows genuine clinical rigor is a record a
              jury believes. Our findings are objective and independent: we document what is
              medically there, which is exactly why the documentation is worth something when it
              matters.
            </p>
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
          <ol className="mt-13 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            <Step n={1} title="You refer the client">
              Call or email with the basics. No health details needed to start.
            </Step>
            <Step n={2} title="We send one link">
              By text or email, direct to your client. Works on any phone.
            </Step>
            <Step n={3} title="Client completes intake">
              Consents and intake on their phone.
            </Step>
            <Step n={4} title="We schedule the visit">
              Seen by a physician inside the window, interpreter available in any language.
            </Step>
            <Step n={5} title="Report reaches your office">
              Signed report, imaging orders, and referrals, all inside 24 to 48 hours.
            </Step>
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-primary">
              Practical details attorneys ask about
            </p>
            <h2 className="mt-3.5 max-w-[22ch] text-3xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
              Statewide Indiana, by telehealth.
            </h2>
            <ul className="mt-6 grid gap-3 text-muted-foreground">
              <Bullet>
                Letter of Protection accepted, with no health insurance billed on LOP cases.
              </Bullet>
              <Bullet>
                Statewide Indiana coverage by telehealth, one referral process for clients anywhere
                in the state.
              </Bullet>
              <Bullet>
                Records released to your office promptly under the client's signed authorization.
              </Bullet>
              <Bullet>
                Intake and consents written in English, Spanish, and Haitian Creole, electronically
                signed and stored, with an interpreter available in any language.
              </Bullet>
            </ul>
          </div>

          <div className="grid gap-px border border-border bg-border">
            <Fact value="24-48" label="hours to a signed report" />
            <Fact value="1" label="physician per case, from intake through sign-off" />
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
          <h2 className="mt-3.5 max-w-[20ch] text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
            Send us one referral and read the report.
          </h2>
          <p className="mt-4 max-w-[58ch] text-accent-foreground/80">
            That is the whole pitch: the document makes the argument for us. Call or email to set up
            your firm's referral channel today.
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
                We reply within one business day
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-2 block h-2 w-2 shrink-0 rounded-full border-2 border-accent"
      />
      <span className="text-sm">{children}</span>
    </li>
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
