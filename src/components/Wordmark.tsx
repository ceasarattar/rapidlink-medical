/**
 * Brand lockup: the ring mark as a rounded teal tile, then the name in text.
 *
 * The source PNG is a 2400x576 banner with the teal baked in, and its own
 * "RapidLink Medical Group" lettering baked in to the right of the mark. Only
 * the mark is wanted here, so the img is clipped by the square wrapper: at
 * h-9 the banner's natural width is 150px, and a 36px-wide window over it
 * shows the leftmost 576px of the source, which is the mark plus even teal
 * margin on all four sides. max-w-none keeps the img from being shrunk to the
 * wrapper by the preflight `max-width: 100%`, which would squash the artwork.
 *
 * The name is live text rather than the baked-in lettering so it takes the
 * page's font and colors, and so it stays legible on the light header.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="block h-9 w-9 shrink-0 overflow-hidden rounded-md">
        <img
          src="/RapidLink_Logo_Teal_Background_Group_2400px.png"
          alt=""
          aria-hidden
          width={150}
          height={36}
          className="h-9 w-[150px] max-w-none"
        />
      </span>
      <span className="text-base font-semibold tracking-tight text-foreground">
        RapidLink <span className="font-normal text-muted-foreground">Medical</span>
      </span>
    </span>
  );
}
