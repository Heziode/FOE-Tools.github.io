import Vue from "vue";
import cookieConsent from "orejime/dist/orejime";
import CookieConsentImage from "~/assets/cookie-consent.svg?data";

export default async ({ app, store }) => {
  Vue.mixin({
    created() {
      const translations = {};
      translations[app.$clone(store.get("i18n/locale")) || "en"] = {
        consentNotice: {
          learnMore: app.i18n.t("cookieConsent.consentNotice.learnMore"),
        },
        sentry: {
          title: "sentry",
          description: app.i18n.t("cookieConsent.sentry.description"),
        },
        purposes: {
          analytics: app.i18n.t("cookieConsent.purposes.analytics"),
          necessary: app.i18n.t("cookieConsent.purposes.necessary"),
          quality: app.i18n.t("cookieConsent.purposes.quality"),
        },
      };
      let result = cookieConsent.init({
        logo: CookieConsentImage,
        elementID: "cookieConsent",
        cookieName: "cookieConsent",
        privacyPolicy: `https://${process.env.prodUrl}/privacy-policy`,
        lang: app.$clone(store.get("i18n/locale")) || "en",
        translations,
        apps: [
          {
            name: "always-on",
            title: "FOE-Tools",
            purposes: ["necessary"],
            required: true,
          },
          {
            name: "sentry",
            title: "Sentry",
            purposes: ["necessary", "quality"],
            required: true,
          },
        ],
      });

      Vue.prototype.$cookieConsent = result;

      try {
        document
          .querySelector("#cookieConsent > div.orejime-AppContainer > div > div > div")
          .setAttribute("data-title", app.i18n.t("cookieConsent.title"));
      } catch (e) {
        // Nothing to do, this case occur most probably because the user has already set his preferences.
      }
    },
  });
};
