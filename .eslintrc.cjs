/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/v-on-handler-style': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/prefer-define-options': 'error',
    'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],
    'vue/block-order': ['error', { order: ['script[setup]', 'template', 'style'] }],
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'consistent', prev: '*', next: '*' }]],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
