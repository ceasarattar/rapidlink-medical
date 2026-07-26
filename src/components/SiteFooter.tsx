import { Link } from "@tanstack/react-router";
import rapidlinkMark from "../assets/rapidlink-mark.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src={rapidlinkMark}
              alt="RapidLink Care Connect"
              width={72}
              height={72}
              className="h-18 w-18 rounded-full"
            />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              RapidLink Medical Group PC · Indiana telemedicine only.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-2 text-sm sm:grid-cols-2">
            <Link to="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link to="/attorneys" className="text-foreground hover:text-primary">
              For Attorneys
            </Link>
            <a href="tel:+13178003730" className="text-foreground hover:text-primary">
              (317) 800-3730
            </a>
            <a href="mailto:info@rapidlinkmed.com" className="text-foreground hover:text-primary">
              info@rapidlinkmed.com
            </a>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
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
