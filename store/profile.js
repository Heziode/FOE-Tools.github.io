import { make } from "vuex-pathify";
import clone from "lodash.clonedeep";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";

export const state = () => ({
  profiles: {},
});

export const mutations = {
  ...make.mutations(state),
  setProfile(state, { profileKey, profile }) {
    if (!Object.keys(state.profiles[profileKey]).length) {
      state.profiles[profileKey] = getters.getDefaultProfile();
    }
    for (const key in profile) {
      state.profiles[profileKey][key] = clone(profile[key]);
    }
  },

  addProfile(state, { key, profile }) {
    state.profiles[key] = profile;
  },

  addGB(state, { key, value }) {
    state.profiles.gb[key] = value;
  },
};

export const actions = {
  ...make.actions(state),
};

export const getters = {
  getDefaultProfile() {
    return {
      gbShowPrefix: true,
      gbShowSuffix: true,
      displayGbName: true,
      promotionMessageList: defaultPromotionMessages,
      showSnipe: false,
      yourAge: "BronzeAge",
      shortName: false,
      showLevel: true,
      yourArcBonus: 90,
      yourCfBoost: 0,
      gbPrefix: "",
      gbSuffix: "",
      showOnlySecuredPlaces: false,
      campaign: {},
      cf: {
        coins: 0,
        supplies: 0,
        goods: 0,
        fpBy24h: 0,
        otherRq: 0,
        suppliesGathered: 0,
        cumulativeQuest: 0,
        secondRq: false,
      },
      gb: {},
      bookmarks: [],
    };
  },
  ...make.getters(state),
};
