import Vue from "vue";

export default function ({ app, store }) {
  Vue.prototype.$t = (...values) => app.i18n.t(...values);
  Vue.prototype.$tc = (...values) => app.i18n.tc(...values);
  Vue.prototype.$te = (...values) => app.i18n.te(...values);
  Vue.prototype.$n = (...values) => app.i18n.n(...values);

  store.set(
    "supportedLocales",
    app.i18n.locales.map((elt) => elt.code)
  );
  // store.state.supportedLocales = app.i18n.locales.map(elt => elt.code);
  app.i18n.mergeLocaleMessage("en", require("../translations/common.json"));

  if (app.i18n.locale !== "en") {
    app.i18n.mergeLocaleMessage(app.i18n.locale, require("../translations/common.json"));
  }

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.i18n.mergeLocaleMessage(newLocale, require("../translations/common.json"));
  };
}
