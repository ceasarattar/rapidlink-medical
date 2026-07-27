import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    // Solid teal, the logo's own field. The hero below is the same teal, so the
    // two read as one brand band and the white page starts underneath it. Stays
    // sticky, which is why it needs its own background rather than inheriting.
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="RapidLink Medical Group, home">
          <Wordmark />
        </Link>

        <a
          href="tel:+13178003730"
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground hover:brightness-105"
        >
          <span className="hidden sm:inline">(317) 800-3730</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
