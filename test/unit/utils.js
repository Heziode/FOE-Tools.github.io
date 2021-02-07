import { join } from "path";
import { readdirSync } from "fs";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import merge from "lodash.merge";

export function doTestOf(dirName, path = __dirname) {
  const normalizedPath = join(path, dirName);

  readdirSync(normalizedPath, { withFileTypes: true }).forEach((file) => {
    if (file.isFile()) {
      require(join(normalizedPath, file.name));
    }
  });
}

export function getDefaultStore(profileID = "testID", customConf = {}) {
  const defaultInvestorPercentageGlobal = 90;
  const result = {
    globalStore: {
      survey: [],
      gbSelectMode: false,
      fixedMainMenu: true,
      haveReadLocaleInfoAvailable: false,
      customPromotionMessagesTemplates: [],
      displayTableCard: false,
      dayNightMode: "day",
      dayStart: "07:00",
      nightStart: "18:30",
      locale: "en",
      lastVisitVersion: "",
      donationConversion: "",
      currentProfile: profileID,
      profiles: [{ id: profileID, name: "Foo Bar" }],
    },
    profileStore: {
      profiles: {},
    },
  };

  result.profileStore.profiles[profileID] = {
    gbShowPrefix: true,
    gbShowSuffix: true,
    displayGbName: true,
    promotionMessageList: defaultPromotionMessages,
    gbi_tab: 1,
    showSnipe: false,
    yourAge: "BronzeAge",
    shortName: false,
    showLevel: true,
    yourArcBonus: 90.6,
    yourCfBoost: 0,
    gbPrefix: "",
    gbSuffix: "",
    showOnlySecuredPlaces: false,
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
    gb: {
      root: {
        ownerView: {
          level: 10,
          ownerInvestment: 0,
          investorParticipation: [],
          investorPercentageGlobal: defaultInvestorPercentageGlobal,
          investorPercentageCustom: Array.from(new Array(5), () => defaultInvestorPercentageGlobal),
        },
        investorView: {
          from: 1,
          to: 10,
          showPlace: Array.from(new Array(5), (val, index) => index === 0),
          takingPlaceInConsideration: 0,
          investorPercentageGlobal: defaultInvestorPercentageGlobal,
          investorPercentageCustom: Array.from(new Array(5), () => defaultInvestorPercentageGlobal),
          customPercentage: false,
        },
        tab: 0,
      },
    },
    bookmarks: []
  };

  return merge(result, customConf);
}
