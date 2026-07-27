import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    // Teal again, bookending the band at the top of the page. Text colours are
    // inherited from here, so Wordmark works unchanged in both places.
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/65">
              RapidLink Medical Group PC, Indiana telemedicine only.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/85 hover:text-accent">
                Home
              </Link>
              <Link to="/contact" className="text-primary-foreground/85 hover:text-accent">
                Get in touch
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-accent">
                Contact us
              </h2>
              <a
                href="tel:+13178003730"
                className="text-primary-foreground/85 hover:text-accent"
              >
                (317) 800-3730
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

        <div className="mt-10 space-y-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65">
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
