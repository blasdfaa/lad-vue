/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_QUOTES_API_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
