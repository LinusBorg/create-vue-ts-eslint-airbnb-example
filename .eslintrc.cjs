/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vuejs-accessibility/no-onchange': ['off'],
  },
}
