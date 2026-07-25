import { createStart, createMiddleware } from "@tanstack/react-start";

// Security headers applied to every response the app serves.
//
// The site is fully static — it has no forms, no database, no analytics, and
// makes no third-party requests — so the policy below can stay strict.
//
// Note on `script-src 'unsafe-inline'`: TanStack Start injects an inline
// script carrying the dehydrated router state for hydration. Removing it
// would require nonce plumbing through the SSR renderer. Since the site
// renders no user-supplied content, the practical XSS surface is nil.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const SECURITY_HEADERS: Record<string, string> = {
  "content-security-policy": CSP,
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
};

const securityHeaders = createMiddleware().server(async ({ next }) => {
  const result = await next();

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    result.response.headers.set(name, value);
  }

  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeaders],
}));
