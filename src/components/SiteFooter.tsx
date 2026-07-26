import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    // No top margin: the preceding section runs straight into the footer, so
    // the page reads as two solid teal bands top and bottom rather than
    // leaving a stray strip of page background above the footer.
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm text-primary-foreground/70">
              RapidLink Medical Group PC · Indiana telemedicine only.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <Link to="/" className="text-primary-foreground/85 hover:text-accent">
              Home
            </Link>

            <div className="flex flex-col gap-2">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Contact us
              </h2>
              <a href="tel:+13179534628" className="text-primary-foreground/85 hover:text-accent">
                (317) 953-4628
              </a>
              <a
                href="mailto:info@rapidlinkmed.com"
                className="text-primary-foreground/85 hover:text-accent"
              >
                info@rapidlinkmed.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70">
          <p>
            This website is informational only. It does not collect, transmit, or store protected
            health information, and nothing submitted through it creates a physician-patient
            relationship. Clinical intake and all patient records are handled exclusively inside our
            HIPAA-compliant eClinicalWorks system.
          </p>
          <p>
            Medical services are provided by an Indiana-licensed physician to patients physically
            located in the State of Indiana. Content on this site does not constitute medical or
            legal advice.
          </p>
          <p>© {new Date().getFullYear()} RapidLink Medical Group PC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
