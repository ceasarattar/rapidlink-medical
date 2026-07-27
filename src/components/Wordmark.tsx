/**
 * Brand lockup: the ring mark, then the name in text.
 *
 * The source PNG is the mark on its own with the teal baked in, and --primary
 * is pinned to that same teal (#0e4c5c), so the mark sits on the teal band
 * with no visible edge. Round rather than rounded-square, echoing the rings.
 *
 * Colour is inherited, not set, so the one component works on the teal band in
 * both the header and the footer. The name is live text rather than the
 * artwork's baked-in lettering so it takes the page's font.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src="/RapidLink_Just_Logo_Teal_Background_Group_2400px copy.png"
        alt=""
        aria-hidden
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <span className="text-[0.9375rem] font-bold tracking-tight sm:text-[1.0625rem]">
        RapidLink <span className="font-normal opacity-60">Medical Group</span>
      </span>
    </span>
  );
}
