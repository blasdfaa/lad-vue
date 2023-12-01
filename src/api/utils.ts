export function buildApiUrl(url: string, base = '/') {
  return new URL(url, base).href;
}
