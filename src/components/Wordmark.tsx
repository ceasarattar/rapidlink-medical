/**
 * Brand lockup: the ring mark as a rounded teal tile, then the name in text.
 *
 * The source PNG is the mark on its own with the teal baked in, so nothing has
 * to be cropped out of it: --primary is pinned to that same teal (#0e4c5c),
 * which is what lets the tile sit flush on the light header with no visible
 * edge. Resizing is just the one h-/w- pair, since the art is square.
 *
 * The name is live text rather than baked-in lettering so it takes the page's
 * font and colors, and so it stays legible on the light header.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/RapidLink_Just_Logo_Teal_Background_Group_2400px copy.png"
        alt=""
        aria-hidden
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-md object-cover"
      />
      <span className="text-base font-semibold tracking-tight text-foreground">
        RapidLink <span className="font-normal text-muted-foreground">Medical</span>
      </span>
    </span>
  );
}
