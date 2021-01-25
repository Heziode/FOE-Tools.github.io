import { make } from "vuex-pathify";
import Vue from "vue";
import { defaultLocale } from "~/scripts/locales";
import * as Errors from "~/scripts/errors";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";

const hero = {
  title: "components.site_layout.hero.title",
  titleConfig: {},
  subtitle: "components.site_layout.hero.slogan_html",
};

export const state = () => ({
  /**
   * Contains all no-dynamic routes
   */
  routes: {
    home: { key: "home", link: "Home" },
    gb_investment: { key: "gb_investment", link: "GbInvestmentChooser" },
    secure_position: { key: "secure_position", link: "SecurePosition" },
    cf_calculator: { key: "cf_calculator", link: "CfCalculator" },
    about: { key: "about", link: "About" },
    contributors: { key: "contributors", link: "Contributors" },
    changelog: { key: "changelog", link: "Changelog" },
    gb_statistics: { key: "gb_statistics", link: "GbStatistics" },
    gb_forecast_cost: { key: "gb_forecast_cost", link: "GbForecastCost" },
    trade: { key: "trade", link: "Trade" },
    campaign_cost: { key: "campaign_cost", link: "CampaignCost" },
    help_to_translate_the_site: { key: "help_to_translate_the_site", link: "HelpToTranslateTheSite" },
    survey: { key: "survey", link: "Survey" },
    contact: { key: "contact", link: "Contact" },
    cookie_policy: { key: "cookie_policy", link: "CookiePolicy" },
    privacy_policy: { key: "privacy_policy", link: "PrivacyPolicy" },
  },

  /**
   * Current locale used
   */
  locale: defaultLocale,

  /**
   * List of all supported locales
   */
  supportedLocales: [],

  /**
   * Hero info
   */
  hero,

  /**
   * Array that contains URL query (for permalink)
   */
  urlQuery: {},

  /**
   * Namespace for URL Query (to have different url query in a single page)
   */
  urlQueryNamespace: {},

  /**
   * Check if current location is permalink. True if permalink, False otherwise
   */
  isPermalink: false,

  /**
   * True for dark theme, false for light theme
   */
  isDarkTheme: false,

  /**
   * Contains survey
   */
  survey: [],

  /**
   * Contains all promotions messages templates
   */
  promotionMessageTemplates: {
    default: defaultPromotionMessages,
    custom: [],
  },

  /**
   * Contains translation state.
   * - key: locale
   * - value: percentage translated
   */
  translationState: {},

  /**
   * Contains all locale that is currently partially translated and related to user/browser translation preferences
   */
  localesNotCompleted: [],
});

export const mutations = {
  ...make.mutations(state),

  /**
   * Restore default value of hero
   * @param state
   */
  RESTORE_HERO(state) {
    Vue.set(state, "hero", hero);
  },

  /**
   * Restore global state of page
   * @param state Reference of state
   */
  RESET_LOCATION(state) {
    Vue.set(state, "urlQuery", {});
    Vue.set(state, "urlQueryNamespace", {});
    Vue.set(state, "isPermalink", false);
  },

  /**
   * Add a query parameter into urlQuery
   * @param state Reference of state
   * @param obj {object} Contains an element 'key' and 'value'
   */
  ADD_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (obj.key in urlQuery || (obj.ns in urlQueryNamespace && obj.key in urlQueryNamespace[obj.ns])) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.KeyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException({ key: obj.key });
        console.error(new Errors.KeyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException({ key: obj.key }));
        return;
      }
      if (!(obj.ns in urlQueryNamespace)) {
        Vue.set(urlQueryNamespace, obj.ns, {});
      }
      Vue.set(urlQueryNamespace[obj.ns], obj.key, obj.value);
    } else {
      if (obj.key in urlQuery) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.KeyAlreadyExistsInUrlQueryException({ key: obj.key });
        console.error(new Errors.KeyAlreadyExistsInUrlQueryException({ key: obj.key }));
        return;
      }
      Vue.set(urlQuery, obj.key, obj.value);
    }
  },

  /**
   * Update a query parameter
   * @param state Reference of state
   * @param obj {object} Contains an element 'key' and 'value'
   */
  UPDATE_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (!(obj.ns in urlQueryNamespace)) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.NamespaceNotFoundException({ key: obj.ns });
        console.error(new Errors.NamespaceNotFoundException({ key: obj.ns }));
        return;
      }
      const { ns, key, value } = obj;
      Vue.set(urlQueryNamespace[ns], key, value);
    } else {
      const key = obj.key;
      Vue.set(urlQuery, key, obj.value);
    }
  },

  RESTORE_MUTATION: /* istanbul ignore next */ () => {
    this.$RESTORE_MUTATION(this);
  },
};

export const getters = {
  ...make.getters(state),
  getUrlQuery: (state) => (ns = "") => {
    if (!ns || ns.length === 0) {
      return state.urlQuery;
    }
    return Object.assign(JSON.parse(JSON.stringify(state.urlQuery)), state.urlQueryNamespace[ns]);
  },
};

export const actions = make.actions(state);
