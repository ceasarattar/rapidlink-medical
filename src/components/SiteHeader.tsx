import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    // Light translucent bar with a hairline under it, so the hero image below
    // starts clean instead of being cut off by a heavy block of color. The
    // backdrop blur is what keeps the page body readable as it scrolls under.
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Wordmark />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7">
          <a
            href="tel:+13179534628"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground hover:brightness-95"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">(317) 953-4628</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
