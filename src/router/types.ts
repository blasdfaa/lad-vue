import type { VueElement } from 'vue';
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import type { AppLayoutsEnum } from '~/enums/appLayoutsEnum';

export interface ModuleType {
  default: RouteRecordRaw | RouteRecordRaw[];
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

type BreadcrumbFn = (route: RouteLocationNormalized) => BreadcrumbItem[];

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
    breadcrumb?: BreadcrumbFn;
  }
}

export {};
