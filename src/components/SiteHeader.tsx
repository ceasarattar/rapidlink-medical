import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-primary">
          RapidLink <span className="font-normal text-muted-foreground">Medical</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/attorneys"
            className="text-sm font-medium text-foreground hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            For Attorneys
          </Link>
          <a
            href="tel:+13178003730"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-110"
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
