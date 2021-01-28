module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    allowImportExportEverywhere: true,
  },
  extends: [
    "@nuxtjs",
    "prettier/vue",
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "off",
    "max-len": ["error", { code: 120 }],
    "prettier/prettier": ["error", { printWidth: 120 }],
    "vue/custom-event-name-casing": "off",
    camelcase: "off",
    "object-shorthand": "off",
  },
};
