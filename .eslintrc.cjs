/* eslint-env node */
const path = require('path')
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
  settings: {
    'import/resolver': {
      // default node import resolver, internal to eslint-plugin-import
      node: {
        extensions: ['.js', '.ts'],
      },
      // alias config, provided for eslint-import-resolver-alias
      alias: {
        map: [['@', path.join(__dirname, './src')]],
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vuejs-accessibility/no-onchange': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
}
