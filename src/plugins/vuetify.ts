import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { App } from 'vue';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export function setupVuetify(app: App) {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    },
    theme: {
      defaultTheme: 'dark'
    },
    components,
    directives
  });

  app.use(vuetify);
}
