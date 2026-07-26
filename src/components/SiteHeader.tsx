import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    // Deep teal to match the logo artwork. Deliberately borderless: on both
    // pages the hero directly below is also bg-primary, so the bar merges
    // into it at rest and only reads as a distinct bar once scrolled over
    // the light page body.
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="RapidLink Medical Group, home">
          <Wordmark />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7">
          <Link
            to="/attorneys"
            className="text-sm font-medium text-primary-foreground/85 hover:text-accent"
            activeProps={{ className: "text-accent" }}
          >
            For Attorneys
          </Link>
          <a
            href="tel:+13178003730"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground hover:brightness-95"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">(317) 800-3730</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
