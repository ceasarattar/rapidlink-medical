/**
 * Brand lockup, rendered from the logo artwork in public/.
 *
 * The source PNG is a 2400x576 banner whose teal background is baked in.
 * --primary is set to that exact teal (#0e4c5c) in styles.css, so the image
 * sits on the header and footer with no visible edge.
 *
 * The artwork only occupies the left ~76% of the canvas; the rest is empty
 * background. object-cover with object-left trims that dead space so the
 * lockup does not sit in a wide, mostly empty box. The fixed width is that
 * 76% crop at the given height, keeping the artwork's own proportions.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/RapidLink_Logo_Teal_Background_Group_2400px.png"
      alt="RapidLink Medical Group"
      width={177}
      height={56}
      className={`h-14 w-[177px] object-cover object-left ${className}`}
    />
  );
}
