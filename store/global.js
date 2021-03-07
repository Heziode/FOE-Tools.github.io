import { make } from "vuex-pathify";
import { defaultLocale } from "~/scripts/locales";

export const state = () => ({
  survey: [],
  gbSelectMode: "select", // select | datalist
  gbSelectSortMode: "age", // age | alpha
  fixedMainMenu: true,
  disableUpdateNotification: false,
  haveReadLocaleInfoAvailable: false,
  haveReadLocaleNotComplete: false,
  haveReadInstallApp: false,
  customPromotionMessagesTemplates: [],
  displayTableCard: false,
  dayNightMode: "system",
  dayStart: "07:00",
  nightStart: "18:30",
  locale: defaultLocale,
  lastVisitVersion: "",
  donationConversion: "",
  currentProfile: "",
  profiles: [],
  customGbName: {},
});

export const mutations = {
  ...make.mutations(state),
};

export const getters = {
  ...make.getters(state),
};
