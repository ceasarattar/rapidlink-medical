/// <reference types="vite/client" />

/**
 * Build-time environment. Only VITE_-prefixed names are exposed to client
 * code, and their values are inlined into the bundle, so nothing declared
 * here is a secret. Set these in the host's environment variables; a change
 * needs a fresh build to take effect.
 */
interface ImportMetaEnv {
  /** Web3Forms access key, from the dashboard at web3forms.com. */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
