import { make } from "vuex-pathify";
import { defaultLocale } from "~/scripts/locales";

export const state = () => ({
  survey: [],
  gbSelectMode: "select", // select | datalist
  gbSelectSortMode: "age", // age | alpha
  fixedMainMenu: true,
  haveReadLocaleInfoAvailable: false,
  haveReadLocaleNotComplete: false,
  customPromotionMessagesTemplates: [],
  displayTableCard: false,
  haveReadTipAboutAddInvestor: false,
  dayNightMode: "system",
  dayStart: "07:00",
  nightStart: "18:30",
  locale: defaultLocale,
  lastVisitVersion: "",
  donationConversion: "",
  currentProfile: "",
  profiles: [],
});

export const mutations = {
  ...make.mutations(state),
};

export const getters = {
  ...make.getters(state),
};
