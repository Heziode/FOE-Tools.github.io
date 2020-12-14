import Vue from "vue";
import CookieConsent from "klaro/dist/cm";
import CookieConsentDialog from "~/components/cookie-consent/CookieConsent";

export default () => {
  const config = {
    elementID: "cookieConsent",
    cookieName: "cookieConsent",
    privacyPolicy: `https://${process.env.prodUrl}/privacy-policy`,
    services: [
      {
        name: "foe-tools",
        title: "FOE-Tools",
        purposes: ["functional"],
        required: true,
      },
      {
        name: "sentry",
        title: "Sentry",
        purposes: ["functional"],
        required: true,
      },
      // {
      //   name: "advertising",
      //   title: "Advertising",
      //   purposes: ["advertising"],
      // },
    ],
    purposes: [],
  };
  const s = new Set();
  for (const elt of config.services) {
    for (const purpose of elt.purposes) {
      s.add(purpose);
    }
  }
  config.purposes = Array.from(s);

  const elt = document.createElement("div");
  elt.id = "#cookieConsent";
  document.body.appendChild(elt);

  const DialogComponent = Vue.extend(CookieConsentDialog);
  const component = new DialogComponent({
    el: elt,
    propsData: {
      cm: new CookieConsent(config),
    },
  });
  component.$forceUpdate();
};
