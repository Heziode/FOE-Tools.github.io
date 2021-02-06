import { JSDOM } from "jsdom";
import Vue from "vue";
import VueI18n from "vue-i18n";
import { bestFacebookLocaleFor } from "facebook-locales";
import colors from "tailwindcss/colors";
import tailwindConf from "tailwindcss/defaultConfig";
import { gbs } from "./lib/foe-data/gbs";
import { defaultLocale, supportedLocales } from "./scripts/locales";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      ...require("./translations/common.json"),
      ...require("./lang/en.json"),
    },
  },
  pluralizationRules: require("./plugins/vue-i18n-plural"),
});

const extraSeoByPages = {
  gb_investment: {
    en: "gb leveler, gbleveler",
    de: "Rechner, foe arche rechner",
  },
};

/**
 * Return locale based on route
 * @param route {string} Route where get locale
 * @return {string} Renvoie les paramètres régionaux associés à cette route
 */
const getLocale = (route) => {
  for (const locale of supportedLocales) {
    if (route.indexOf("/" + locale) === 0) {
      return locale;
    }
  }
  return defaultLocale;
};

const getPageKey = (path) => {
  let result = path.replace(/-/g, "_");
  result = /(\/[a-z]{2})?\/(.*)/.exec(result);
  if (result[2] === "") {
    return ["home"];
  }

  result = result[2].split("/");

  if (result[0] === "gb_investment" && result.length === 1) {
    result[0] = "gb_investment_gb_chooser";
  }

  return result;
};

/**
 * Modify HTML to add some SEO attributes
 * @param page Reference of the page
 * @param locale Current locale
 * @return {string} Return the modified HTML raw
 */
const modifyHtml = (page, locale) => {
  const { window } = new JSDOM(page.html).window;
  const currentURL = hostname + page.route;
  const pageKey = getPageKey(page.route);
  let text;
  let node;
  let tmp;
  let image;
  let index = 0;

  // Set locale (lang attribute of html tag)
  window.document.querySelector("html").lang = locale;

  // Open Graph image
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:image");
  node.setAttribute("name", "og:image");
  node.setAttribute("hid", "og:image");

  // Set the title
  if (pageKey[0] === "gb_investment") {
    text = i18n.t(`routes.${pageKey[0]}.title`, {
      lng: locale,
      gb_key: "foe_data.gb." + pageKey[1],
    });
    image = `${hostname}/img/foe/gb/${pageKey[1]}.png`;
    node.content = image;
  } else {
    text = i18n.t(`routes.${pageKey[0]}.title`, { lng: locale });
    node.content = `${hostname}/icon.png`;
  }
  const title = text;
  window.document.querySelector("title").innerHTML = text;
  window.document.querySelector("head").appendChild(node);

  // Open Graph title
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:title");
  node.setAttribute("name", "og:title");
  node.setAttribute("hid", "og:title");
  node.content = text;
  window.document.querySelector("head").appendChild(node);
  // Open Graph fb:app_id
  node = window.document.createElement("meta");
  node.setAttribute("property", "fb:app_id");
  node.setAttribute("name", "fb:app_id");
  node.setAttribute("hid", "fb:app_id");
  node.content = "2078456229119430";
  window.document.querySelector("head").appendChild(node);
  // Open Graph type
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:type");
  node.setAttribute("name", "og:type");
  node.setAttribute("hid", "og:type");
  node.content = "website";
  window.document.querySelector("head").appendChild(node);
  // Open Graph url
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:url");
  node.setAttribute("name", "og:url");
  node.setAttribute("hid", "og:url");
  node.content = currentURL;
  window.document.querySelector("head").appendChild(node);
  // Open Graph locale
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:locale");
  node.setAttribute("name", "og:locale");
  node.setAttribute("hid", "og:locale");
  node.content = locale === "en" ? "en_US" : bestFacebookLocaleFor(`${locale}_${locale.toUpperCase()}`);
  window.document.querySelector("head").appendChild(node);
  // Twitter card
  node = window.document.createElement("meta");
  node.name = "twitter:card";
  node.content = "app";
  window.document.querySelector("head").appendChild(node);

  // Set meta description
  text = i18n.t(
    [
      `routes.${pageKey[0] === "gb_investment" ? "gb_investment_gb_chooser" : pageKey[0]}.hero.subtitle`,
      "components.site_layout.hero.slogan_html",
    ],
    { lng: locale }
  );
  const description = text;
  node = window.document.createElement("p");
  node.innerHTML = text;
  text = node.textContent;
  node = window.document.createElement("meta");
  node.name = "description";
  node.content = text;
  window.document.querySelector("head").appendChild(node);

  // Open Graph description
  node = window.document.createElement("meta");
  node.setAttribute("property", "og:description");
  node.setAttribute("name", "og:description");
  node.setAttribute("hid", "og:description");
  node.content = text;
  window.document.querySelector("head").appendChild(node);

  const customKeyWords = pageKey[0] === "gb_investment_gb_chooser" ? "gb_investment" : pageKey[0];

  // Set keywords
  text = [
    "wiki",
    "faq",
    "foe",
    "forge of empires",
    "tools suite",
    "tool",
    "Arvahall",
    "Brisgard",
    "Cirgard",
    "Dinegu",
    "East-nagach",
    "Fel Dranghyr",
    "Greifental",
    "Houdsmoor",
    "Jaims",
    "Korch",
    "Langendorn",
    "Mount Killmore",
    "Noarsil",
    "Odhrovar",
    "Parkog",
    "Qunrir",
    "Rugnir",
    "Sinerania",
    "Tuulech",
    "Uceria",
    "Beta",
    "upgrade",
    i18n.t("seo.keywords.gb", { lng: locale }),
    i18n.t("seo.keywords.great_building", { lng: locale }),
    i18n.t("seo.keywords.fp", { lng: locale }),
    i18n.t("seo.keywords.forge_point", { lng: locale }),
    i18n.t("seo.keywords.medals", { lng: locale }),
    i18n.t("seo.keywords.military_units", { lng: locale }),
    i18n.t("foe_data.age.NoAge", { lng: locale }),
    i18n.t("foe_data.age.BronzeAge", { lng: locale }),
    i18n.t("foe_data.age.IronAge", { lng: locale }),
    i18n.t("foe_data.age.EarlyMiddleAges", { lng: locale }),
    i18n.t("foe_data.age.HighMiddleAges", { lng: locale }),
    i18n.t("foe_data.age.LateMiddleAges", { lng: locale }),
    i18n.t("foe_data.age.ColonialAge", { lng: locale }),
    i18n.t("foe_data.age.IndustrialAge", { lng: locale }),
    i18n.t("foe_data.age.ProgressiveEra", { lng: locale }),
    i18n.t("foe_data.age.ModernEra", { lng: locale }),
    i18n.t("foe_data.age.PostmodernEra", { lng: locale }),
    i18n.t("foe_data.age.ContemporaryEra", { lng: locale }),
    i18n.t("foe_data.age.Tomorrow", { lng: locale }),
    i18n.t("foe_data.age.TheFuture", { lng: locale }),
    i18n.t("foe_data.age.ArcticFuture", { lng: locale }),
    i18n.t("foe_data.age.OceanicFuture", { lng: locale }),
  ].join(", ");
  text +=
    customKeyWords in extraSeoByPages && locale in extraSeoByPages[customKeyWords]
      ? ", " + extraSeoByPages[customKeyWords][locale]
      : "";

  node = window.document.createElement("meta");
  node.name = "keywords";
  node.content = text;
  window.document.querySelector("head").appendChild(node);

  node = window.document.createElement("link");
  node.rel = "canonical";
  node.href = currentURL;
  window.document.querySelector("head").appendChild(node);

  // Set alternatives lang
  for (const supportedLocale of supportedLocales) {
    if (supportedLocale === locale) {
      continue;
    }
    if (locale === defaultLocale) {
      tmp = `/${supportedLocale}${page.route}`;
    } else if (supportedLocale === defaultLocale) {
      if (page.route === `/${locale}/`) {
        tmp = "/";
      } else {
        tmp = page.route.substr(locale.length + 1);
      }
    } else if (page.route === `/${locale}/`) {
      tmp = `/${supportedLocale}/`;
    } else {
      tmp = `/${supportedLocale}${page.route.substr(locale.length + 1)}`;
    }
    node = window.document.createElement("link");
    node.rel = "alternate";
    node.hreflang = supportedLocale;
    node.href = tmp;
    window.document.querySelector("head").appendChild(node);
    // Open Graph locale:alternate
    node = window.document.createElement("meta");
    node.setAttribute("property", "og:locale:alternate");
    node.setAttribute("name", "og:locale:alternate");
    node.setAttribute("hid", "og:locale:alternate");
    node.content =
      supportedLocale === "en" ? "en_US" : bestFacebookLocaleFor(`${supportedLocale}_${supportedLocale.toUpperCase()}`);
    window.document.querySelector("head").appendChild(node);
  }

  // JSON-LD
  tmp = undefined;
  switch (pageKey[0]) {
    case "gb_investment":
      tmp = {
        "@type": "WebApplication",
        name: title,
        description,
        image,
        url: currentURL,
        applicationCategory: "Game",
        operatingSystem: "Any",
        inLanguage: {
          "@type": "Language",
          name: supportedLocales,
        },
      };
      break;
    case "gb_investment_gb_chooser":
      tmp = {
        "@type": "ItemList",
        itemListElement: [],
      };
      index = 0;
      for (const gbKey in gbs) {
        tmp.itemListElement.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@type": "WebApplication",
            name: i18n.t("routes.gb_investment.title", {
              lng: locale,
              gb_key: "foe_data.gb." + gbKey,
            }),
            description,
            image: `${hostname}/img/foe/gb/${gbKey}.png`,
            url: `${currentURL}/${gbKey}`,
            applicationCategory: "Game",
            operatingSystem: "Any",
            inLanguage: {
              "@type": "Language",
              name: supportedLocales,
            },
          },
        });
        index++;
      }
      break;
    case "secure_position":
    case "campaign_cost":
    case "cf_calculator":
    case "gb_forecast_cost":
    case "gb_statistics":
    case "trade":
      tmp = {
        "@type": "WebApplication",
        name: title,
        description,
        url: currentURL,
        applicationCategory: "Game",
        operatingSystem: "Any",
        inLanguage: {
          "@type": "Language",
          name: supportedLocales,
        },
      };
      break;
  }
  if (tmp && typeof tmp === "object") {
    node = window.document.createElement("script");
    node.setAttribute("type", "application/ld+json");
    node.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      ...tmp,
    });
    window.document.querySelector("head").appendChild(node);
  }

  return "<!DOCTYPE html>\n" + window.document.querySelector("html").outerHTML;
};

function generateSitemapRoutes(locales, routes) {
  const result = [];
  const baseURL = "";
  const lastmodISO = new Date().toISOString();
  for (const route of routes) {
    const obj = {};
    obj.url = `${baseURL}${route.route}`;
    obj.changefreq = "weekly";
    obj.lastmodISO = lastmodISO;
    const links = [];
    for (const locale of locales) {
      if (locale === defaultLocale) {
        links.push({ lang: locale, url: `${baseURL}${route.route}` });
      } else {
        links.push({ lang: locale, url: `${baseURL}/${locale}${route.route}` });
      }
    }
    obj.links = links;

    result.push(obj);
    for (const subRoute of route.dynamic) {
      const subObj = {};
      subObj.url = `${baseURL}${route.route}/${subRoute}`;
      subObj.changefreq = "weekly";
      subObj.lastmodISO = lastmodISO;
      const links = [];
      for (const locale of locales) {
        if (locale === defaultLocale) {
          links.push({
            lang: locale,
            url: `${baseURL}${route.route}/${subRoute}`,
          });
        } else {
          links.push({
            lang: locale,
            url: `${baseURL}/${locale}${route.route}/${subRoute}`,
          });
        }
      }
      subObj.links = links;

      result.push(subObj);
    }
  }

  return result;
}

function generateRobotTxt(SitemapURL) {
  const result = [{ UserAgent: "*" }];
  let prefix;

  for (const locale of supportedLocales) {
    prefix = locale === defaultLocale ? "" : `/${locale}`;
    result.push({ Disallow: `${prefix}/survey` });
    result.push({ Disallow: `${prefix}/donate` });
  }

  result.push({ Sitemap: SitemapURL });

  return result;
}

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/",
        },
      }
    : {};

const prodUrl = "foe.tools";
const hostname = process.env.DEPLOY_ENV === "GH_PAGES" ? `https://${prodUrl}` : "";

const defaultRoutes = [
  { route: "/", dynamic: [] },
  { route: "/about", dynamic: [] },
  { route: "/contributors", dynamic: [] },
  { route: "/changelog", dynamic: [] },
  {
    route: "/gb-investment",
    dynamic: Object.keys(gbs),
    payload(gb) {
      return require("./lib/foe-data/gbs-data/" + gb);
    },
  },
  { route: "/secure-position", dynamic: [] },
  { route: "/cf-calculator", dynamic: [] },
  { route: "/gb-statistics", dynamic: [] },
  { route: "/gb-forecast-cost", dynamic: [] },
  { route: "/trade", dynamic: [] },
  { route: "/campaign-cost", dynamic: [] },
];

const sitemap =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        sitemap: {
          hostname,
          routes: generateSitemapRoutes(supportedLocales, defaultRoutes),
          exclude: ["/survey", "/**/survey", "/donate", "/**/donate"],
        },
      }
    : {};

const apiURL = process.env.DEPLOY_ENV === "GH_PAGES" ? "https://api.foe.tools" : "https://api.docker.localhost";

export default {
  ...routerBase,
  ...sitemap,

  env: {
    surveyURL: `${apiURL}/surveys`,
    surveySubmitURL: `${apiURL}/surveyresponses`,
    prodUrl,
    sitekey:
      process.env.DEPLOY_ENV === "GH_PAGES"
        ? "6Le0qqAUAAAAADcXlFuBa9hfCXfdUi53i85sWzSp"
        : "6LdzDKAUAAAAAKVUJf-Po_iaYTdnOzjkvusHF6ie",
    HCAPTCHA_SITEKEY: "9e710cfa-bf17-47fb-a2b1-af30a5196b1d",
  },

  loading: {
    color: "#3498db",
    failedColor: "#e74c3c",
  },

  plugins: [
    { src: "~/plugins/vuex-persist", mode: "client" },
    { src: "~/plugins/vuex-pathify" },
    { src: "~/plugins/vuex-shared-mutations", mode: "client" },
    { src: "~/plugins/clone.js" },
    { src: "~/plugins/i18n.js" },
    { src: "~/plugins/clipboard.js" },
    { src: "~/plugins/moment.js" },
    { src: "~/plugins/cookieConsent.js" },
    { src: "~/plugins/fontawesome.js" },
    { src: "~/plugins/tailwind-comps.js" },
    { src: "~/plugins/nuxtClientInit.js", mode: "client" }, // It must always be the last
  ],
  generate: {
    fallback: true,
    routes() {
      const result = [];
      let prefix;
      for (const locale of supportedLocales) {
        prefix = locale === defaultLocale ? "" : `/${locale}`;
        for (const route of defaultRoutes) {
          result.push(prefix + route.route);
          for (const subRoute of route.dynamic) {
            if (route.payload) {
              result.push({
                route: `${prefix}${route.route}/${subRoute}`,
                payload: route.payload(subRoute),
              });
            } else {
              result.push(`${prefix}${route.route}/${subRoute}`);
            }
          }
        }
      }
      return result;
    },
  },

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "cookie-universal-nuxt",
    "nuxt-i18n",
    "@nuxtjs/axios",
    "nuxt-buefy",
    { src: "~/modules/foe-data/module.js" },
    { src: "~/modules/cname/module.js" },
    "@nuxtjs/pwa",
    "@nuxtjs/sentry",
  ],
  robots: generateRobotTxt(`${hostname}/sitemap.xml`),
  buefy: { defaultIconPack: "fas", materialDesignIcons: false },
  target: "static",
  ssr: false,
  hooks(hook) {
    /**
     * This hook will add some SEO attributes for each generated files
     */
    hook("generate:page", (page) => {
      page.html = modifyHtml(page, getLocale(page.route));
    });
  },

  head: {
    title: "FOE-Tools",
    meta: [
      { charset: "utf-8" },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "Hw0veaLyPnzkFUmcgHozLpLMGX17y65E_fp5-o2UmbU",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "og:site_name", name: "og:site_name", content: "FOE-Tools" },
      { name: "msapplication-TileColor", content: "#2b5797" },
      { name: "theme-color", content: "#fdf8f0" },
    ],
    script: [],
  },

  css: [
    "~assets/newStyle.scss",
    "~assets/theme/light/theme.scss",
    "~assets/theme/dark/theme.scss",
    "~assets/style.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  axios: {
    host: process.env.DEPLOY_ENV === "GH_PAGES" ? prodUrl : "localhost",
    port: process.env.DEPLOY_ENV === "GH_PAGES" ? 443 : 3000,
    https: process.env.DEPLOY_ENV === "GH_PAGES",
  },

  pwa: {
    manifest: {
      name: "FOE Tools",
    },
  },

  i18n: {
    // Use this site to find iso code: https://www.localeplanet.com/icu/iso639.html
    // Or some info here: https://appmakers.dev/bcp-47-language-codes-list/
    locales: [
      { code: "cs", file: "cs.json", iso: "cs-CZ" },
      { code: "da", file: "da.json", iso: "da-DK" },
      { code: "de", file: "de.json", iso: "de-DE" },
      { code: "en", file: "en.json", iso: "en-US" },
      { code: "es", file: "es.json", iso: "es-ES" },
      { code: "fr", file: "fr.json", iso: "fr-FR" },
      { code: "hu", file: "hu.json", iso: "hu-HU" },
      { code: "it", file: "it.json", iso: "it-IT" },
      { code: "nl", file: "nl.json", iso: "nl-NL" },
      { code: "pl", file: "pl.json", iso: "pl-PL" },
      { code: "pt", file: "pt.json", iso: "pt-PT" },
      { code: "pt-BR", file: "pt-BR.json", iso: "pt-BR" },
      { code: "ru", file: "ru.json", iso: "ru-RU" },
      { code: "sk", file: "sk.json", iso: "sk-SK" },
      { code: "sv", file: "sv.json", iso: "sv-SE" },
      { code: "tr", file: "tr.json", iso: "tr-TR" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "lang/",
    vueI18n: "~/plugins/vue-i18n.js",
    vuex: {
      // Module namespace
      moduleName: "i18n",

      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,

      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: true,

      // Mutation to commit to set route parameters translations
      syncRouteParams: true,
    },
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Cookie name
      cookieKey: "locale",
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: true,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: null,
    },
  },

  // Custom Tailwind CSS configuration
  tailwindcss: {
    // exposeConfig: true,
    config: {
      darkMode: "class",
      theme: {
        colors: {
          ...colors,
        },
        minHeight: {
          ...tailwindConf.theme.minHeight,
          8: "2rem",
        },
        maxHeight: {
          ...tailwindConf.theme.maxHeight,
          48: "12rem",
        },
        minWidth: {
          ...tailwindConf.theme.minWidth,
          48: "12rem",
        },
      },
      variants: {
        extend: {
          margin: ["first", "last"],
          borderRadius: ["responsive", "first", "last", "hover", "focus"],
          borderWidth: ["responsive", "first", "last", "hover", "focus"],
          backgroundOpacity: ["dark"],
          opacity: ["disabled"],
          cursor: ["disabled"],
        },
      },
      plugins: [require("@tailwindcss/forms")],
      purge: {
        keyframes: true,
        enabled: process.env.NODE_ENV === "production",
        content: [
          "components/**/*.{vue,js,pug,scss,sass,css}",
          "layouts/**/*.{vue,js,pug,scss,sass,css}",
          "pages/**/*.{vue,js,pug,scss,sass,css}",
          "assets/**/*.{scss,sass,css}",
          "plugins/**/*.js",
          "nuxt.config.js",
          "plugins/**/*.ts",
          "nuxt.config.ts",
        ],
        whitelist: ["dark-mode"],
      },
    },
  },

  purgeCSS: {
    keyframes: true,
    // enabled: process.env.NODE_ENV === "production",
    enabled: true,
    content: [
      "components/**/*.{vue,js,pug,scss,sass,css}",
      "layouts/**/*.{vue,js,pug,scss,sass,css}",
      "pages/**/*.{vue,js,pug,scss,sass,css}",
      "assets/**/*.{scss,sass,css}",
      "plugins/**/*.js",
      "nuxt.config.js",
      "plugins/**/*.ts",
      "nuxt.config.ts",
    ],
    whitelistPatterns: [
      /mdi/,
      /icon/,
      /is-grouped/,
      /tooltip.*/,
      /navbar.*/,
      /control.*/,
      /progress.*/,
      /svg.*/,
      /fa.*/,
      /notices/,
      /notification.*/,
      /is-top-right/,
      /is-top/,
      /shepherd.*/,
      /is-delete/,
      /dark-mode/,
      /is-expanded/,
      /is-clearfix/,
      /has-addons/,
    ],
    whitelistPatternsChildren: [
      /select/,
      /switch/,
      /modal/,
      /autocomplete/,
      /dropdown/,
      /progress.*/,
      /is-top-right/,
      /is-top/,
      /shepherd.*/,
      /is-expanded/,
      /is-clearfix/,
      /has-addons/,
    ],
  },

  sentry: {
    dsn: "https://4088bc858d3d4dd3859d9b214d21720a@sentry.foe.tools/2",
    config: {
      lazy: true,
    },
  },

  build: {
    extractCSS: true,
    babel: {
      babelrc: true,
      configFile: "./.babelrc",
    },
  },

  buildModules: ["@nuxtjs/router-extras", "@nuxtjs/svg", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "nuxt-purgecss"],
};
