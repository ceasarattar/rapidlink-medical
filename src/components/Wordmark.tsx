/**
 * Brand lockup, mirroring the logo artwork: white "Rapid", cream "Link",
 * and letterspaced gold "MEDICAL GROUP" beneath.
 *
 * This is the text stand-in used until the logo image lands in
 * src/assets/. To switch over, replace the markup here with an <img>;
 * the header and footer both render this component, so neither needs
 * to change.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="text-xl font-bold tracking-tight text-white">
        Rapid<span className="text-cream">Link</span>
      </span>
      <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-accent">
        Medical Group
      </span>
    </span>
  );
}
