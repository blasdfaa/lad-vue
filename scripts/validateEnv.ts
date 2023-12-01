import { cleanEnv, url } from 'envalid'

export function validateEnv(env: Record<string, string>) {
  cleanEnv(env, {
    VITE_QUOTES_API_DOMAIN: url({ docs: 'https://github.com/lukePeavey/quotable' }),
  })
}
