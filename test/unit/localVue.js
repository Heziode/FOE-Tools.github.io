import { config, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import clone from "lodash.clonedeep";
import merge from "lodash.merge";
import pathify, { make } from "vuex-pathify";

import Vuex from "vuex";
import * as storeStructure from "~/store/index";
import * as storeGlobalStructure from "~/store/global";
import * as storeProfilesStructure from "~/store/profile";
import VueClipboards from "vue-clipboards";
import { defaultLocale, supportedLocales } from "~/scripts/locales";
import VueI18n from "vue-i18n";
import Buefy from "buefy";
import * as gbs from "~/lib/foe-data/gbs.js";
import * as goods from "~/lib/foe-data/goods.js";
import TInput from "../../components/tailwind-comps/TInput/wrapper/TInput";
import TLabel from "../../components/t-label/TLabel";
import TButton from "../../components/t-button/TButton";

import en from "../../lang/en.json";
import fr from "../../lang/en.json";
import common from "../../translations/common.json";

// Fontawesome import
import { library, config as fasConfig, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faLanguage,
  faCheck,
  faExclamationCircle,
  faTimes,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faInfoCircle,
  faTimesCircle,
  faLink,
  faArrowUp,
  faArrowDown,
  faExchangeAlt,
  faLock,
  faEye,
  faEyeSlash,
  faTrash,
  faQuestion,
  faAngleDoubleUp,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import moment from "dayjs";
import duration from "dayjs/plugin/duration";
moment.extend(duration);

const url = "https://test.foe-tools.github.io";

export function getView(storeConf) {
  let globalStore = {};
  let profileStore = {};
  let campaignCost = {};

  if (storeConf) {
    globalStore = "globalStore" in storeConf ? storeConf.globalStore : {};
    profileStore = "profileStore" in storeConf ? storeConf.profileStore : {};
    campaignCost = "campaignCost" in storeConf ? storeConf.campaignCost : {};
  }

  // create an extended `Vue` constructor
  const localVue = createLocalVue();

  //////////
  // Vuex //
  //////////
  let i18nStoreState = {
    locale: "en",
  };
  localVue.use(Vuex);
  const store = new Vuex.Store({
    ...storeStructure,
    modules: {
      global: { namespaced: true, ...merge(clone(storeGlobalStructure), { state: globalStore }) },
      profile: { namespaced: true, ...merge(clone(storeProfilesStructure), { state: profileStore }) },
      foe: {
        namespaced: true,
        state: {
          campaignCost: campaignCost,
          gbs: clone(gbs),
          goods: clone(goods),
        },
      },
      i18n: {
        namespaced: true,
        state: i18nStoreState,
        mutations: {
          ...make.mutations(i18nStoreState),
        },
        getters: {
          ...make.getters(i18nStoreState),
        },
      },
    },
  });
  pathify.plugin(store);

  ///////////////
  // Clipboard //
  ///////////////

  localVue.use(VueClipboards);

  ///////////////
  // Clipboard //
  ///////////////

  localVue.use({
    install(Vue) {
      Vue.prototype.$moment = moment;
    },
  });

  //////////
  // i18n //
  //////////

  localVue.use(VueI18n);

  const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en: { ...clone(en), ...clone(common) },
      fr: { ...clone(fr), ...clone(common) },
    },
    pluralizationRules: require("../../plugins/vue-i18n-plural.js"),
  });

  localVue.use({
    install(Vue) {
      Vue.prototype.i18n = i18n;
      Vue.prototype.$t = (...args) => i18n.t(...args);
      Vue.prototype.$tc = (...args) => i18n.tc(...args);
      Vue.prototype.$te = (...args) => i18n.te(...args);
      Vue.prototype.$n = (...args) => i18n.n(...args);
      Vue.prototype.localePath = (path) => `${url}/${typeof path === "string" ? path : JSON.stringify(path)}`;
      Vue.prototype.defaultLocale = defaultLocale;
      store.set("supportedLocales", supportedLocales);
    },
  });

  ///////////
  // Buefy //
  ///////////

  localVue.use(Buefy, { defaultIconPack: "fas", materialDesignIcons: false });

  ////////////////
  // Clear mock //
  ////////////////

  config.mocks.$cookies.set.mockClear();

  /////////////////
  // Fontawesome //
  /////////////////

  // This is important, we are going to let Nuxt.js worry about the CSS
  fasConfig.autoAddCss = false;

  // You can add your icons directly in this plugin. See other examples for how you
  // can add other styles or just individual icons.
  library.add(
    faChevronDown,
    faLanguage,
    faCheck,
    faExclamationCircle,
    faTimes,
    faPlus,
    faMinus,
    faAngleLeft,
    faAngleRight,
    faInfoCircle,
    faTimesCircle,
    faLink,
    faQuestionCircle,
    faArrowUp,
    faArrowDown,
    faExchangeAlt,
    faLock,
    faEye,
    faEyeSlash,
    faTrash,
    faQuestion,
    faCopy,
    faAngleDoubleUp,
    faCog,
    faGithub
  );

  // Register the component globally
  localVue.component("font-awesome-icon", FontAwesomeIcon);

  dom.watch();

  // Custom components
  localVue.component("TInput", TInput);
  localVue.component("TLabel", TLabel);
  localVue.component("TButton", TButton);

  return {
    localVue,
    store,
    i18n,
  };
}

///////////////////
// Global Config //
///////////////////

const getAllCookies = () => {
  return {
    locale: "en",
    survey: [],
    gbSelectMode: "select",
    fixedMainMenu: true,
    haveReadLocaleInfoAvailable: false,
    customPromotionMessagesTemplates: [],
    displayTableCard: false,
    dayNightMode: "day",
    dayStart: "07:00",
    nightStart: "18:30",
    lastVisitVersion: "",

    gbShowPrefix: true,
    gbShowSuffix: true,
    displayGbName: true,
    showSnipe: false,
    yourAge: "BronzeAge",
    shortName: false,
    showLevel: true,
    yourArcBonus: 90.6,
    yourCfBoost: 0,
    gbPrefix: "",
    gbSuffix: "",
    showOnlySecuredPlaces: false,
    promotionMessageList: defaultPromotionMessages,
  };
};

config.mocks["$cookies"] = {
  getAll: jest.fn().mockImplementation(getAllCookies),
  get: jest.fn().mockImplementation((key) => {
    const cookies = getAllCookies();
    if (key in cookies) {
      return cookies[key];
    }

    return undefined;
  }),
  set: jest.fn(),
  remove: jest.fn(),
};

config.mocks["$nuxt"] = {
  $route: {
    name: "foo",
    path: url,
  },
};
config.mocks["$route"] = {
  name: "Foo",
};

config.mocks["$clone"] = (value) => clone(value);

config.stubs["NuxtLink"] = RouterLinkStub;

global.window = Object.create(window);
Object.defineProperty(window, "location", {
  value: {
    href: url,
  },
  writable: true,
});
