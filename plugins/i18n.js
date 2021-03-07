import Vue from "vue";
import set from "lodash.set";

export default function ({ app, store }) {
  Vue.prototype.$t = (...values) => app.i18n.t(...values);
  Vue.prototype.$tc = (...values) => app.i18n.tc(...values);
  Vue.prototype.$te = (...values) => app.i18n.te(...values);
  Vue.prototype.$n = (...values) => app.i18n.n(...values);

  const getCustomGbNames = () => {
    const gbs = store.get(`global/customGbName`);
    if (Object.keys(store.get("defaultCustomGbName")).length === 0) {
      const defaultCustomGbName = {};
      for (const elt in gbs) {
        set(defaultCustomGbName, `foe_data.gb_short.${elt}`, app.i18n.t(`foe_data.gb_short.${elt}`));
      }
      store.set("defaultCustomGbName", defaultCustomGbName);
    }
    const result = {};
    for (const elt in gbs) {
      if (!store.get(`defaultCustomGbName@foe_data.gb_short.${elt}`)) {
        store.set(`defaultCustomGbName@foe_data.gb_short.${elt}`, app.i18n.t(`foe_data.gb_short.${elt}`));
      }

      if (gbs[elt].length) {
        set(result, `foe_data.gb_short.${elt}`, gbs[elt]);
      } else {
        set(result, `foe_data.gb_short.${elt}`, app.i18n.t(`foe_data.gb_short.${elt}`));
      }
    }
    return result;
  };

  store.set(
    "supportedLocales",
    app.i18n.locales.map((elt) => elt.code)
  );
  // store.state.supportedLocales = app.i18n.locales.map(elt => elt.code);
  app.i18n.mergeLocaleMessage("en", require("../translations/common.json"));

  const customGbNames = getCustomGbNames();
  app.i18n.mergeLocaleMessage("en", customGbNames);

  if (app.i18n.locale !== "en") {
    app.i18n.mergeLocaleMessage(app.i18n.locale, require("../translations/common.json"));
    app.i18n.mergeLocaleMessage(app.i18n.locale, customGbNames);
  }

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.i18n.mergeLocaleMessage(newLocale, require("../translations/common.json"));
    app.i18n.mergeLocaleMessage("en", getCustomGbNames());
  };
}
