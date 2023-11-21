import type { LocationQuery, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const PERSISTENT_QUERIES = ['theme'];

function hasQuery(route: RouteLocationNormalized, queryKeys: string[] = []) {
  const keys = Object.keys(route.query);
  const hasKeys = !!keys.length;

  if (queryKeys.length && hasKeys) return keys.some((k) => queryKeys.includes(k));
  return hasKeys;
}

function toWithQuery(to: RouteLocationNormalized, path: string, queryKeys: string[]) {
  const query = to.query;
  const params = to.params;

  const withQuery = queryKeys.reduce((keys, key) => {
    if (query[key]) {
      keys[key] = query[key];
    }
    return keys;
  }, {} as LocationQuery);

  return { path, params, query: withQuery };
}

/**
 * Сохраняет определённые query-параметры при навигации
 */
export async function persistThemeParamsMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> {
  if (!hasQuery(to) && hasQuery(from, PERSISTENT_QUERIES)) {
    next(toWithQuery({ ...to, query: from.query }, to.path, PERSISTENT_QUERIES));
  } else {
    next();
  }
}
