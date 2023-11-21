import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from '~/enums/appLayoutsEnum';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export {};
