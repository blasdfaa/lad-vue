import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from '~/enums/appLayoutsEnum';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export {};
