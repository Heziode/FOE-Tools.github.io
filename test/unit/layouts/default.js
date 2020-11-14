import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import { config, shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_default/Default";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";
import clone from "lodash.clonedeep";

const factory = (mocks = {}) => {
  const { localVue, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
    mocks: {
      $route: {
        name: "foo",
        path: "foo",
      },
      ...mocks,
    },
  });
};

describe("Default", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Change route", () => {
    const wrapper = factory();
    wrapper.vm.burgerMenuVisible = true;

    wrapper.vm.$route.path = "bar";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.burgerMenuVisible).toBe(false);
      done();
    });
  });

  test('Call "toggleMenu"', () => {
    const wrapper = factory();
    expect(wrapper.vm.burgerMenuVisible).toBe(false);
    wrapper.vm.toggleMenu();
    expect(wrapper.vm.burgerMenuVisible).toBe(true);
  });

  test("Moving cookies to localStorage", () => {
    const getAllCookies = () => {
      return {
        locale: "fr",
        survey: [],
        gbSelectMode: "datalist",
        fixedMainMenu: false,
        haveReadLocaleInfoAvailable: true,
        customPromotionMessagesTemplates: [],
        displayTableCard: true,
        haveReadTipAboutAddInvestor: true,
        dayNightMode: "auto",
        dayStart: "08:00",
        nightStart: "19:30",
        lastVisitVersion: "",

        gbShowPrefix: true,
        gbShowSuffix: true,
        displayGbName: true,
        showSnipe: false,
        yourAge: "ColonialAge",
        shortName: false,
        showLevel: true,
        yourArcBonus: 90.6,
        yourCfBoost: 540,
        gbPrefix: "Hello",
        gbSuffix: "World",
        showOnlySecuredPlaces: false,
        promotionMessageList: defaultPromotionMessages,

        Alcatraz_investorPercentageCustom_0: 92,
        Alcatraz_investorPercentageCustom_1: 90,
        Alcatraz_investorPercentageCustom_2: 85,
        Alcatraz_investorPercentageCustom_3: 80,
        Alcatraz_investorPercentageCustom_4: 80,
        Alcatraz_investorPercentageGlobal: 42,
        Alcatraz_level: 21,
        Alcatraz_ownerInvestment: 1,
        Alcatraz_showPlace: [true, true, false, false, false],
        Alcatraz_tab: 1,
        Alcatraz_takingPlaceInConsideration: 2,
        Alcatraz_to: 60,
        Alcatraz_from: 10,
        Arctic_Orangery_investorParticipation: [
          { value: 1496, isPotentialSniper: true },
          { value: 753, isPotentialSniper: true },
        ],
        Arctic_Orangery_level: 48,

        coins: 123456,
        supplies: 654321,
        fpBy24h: 24,
        goods: 17,
        otherRq: 1,
        cumulativeQuest: 4,
        secondRq: true,
        suppliesGathered: 80,
      };
    };

    const wrapper = factory({
      $cookies: {
        ...config.mocks["$cookies"],
        getAll: jest.fn().mockImplementation(getAllCookies),
        get: jest.fn().mockImplementation((key) => {
          const cookies = getAllCookies();
          if (key in cookies) {
            return cookies[key];
          }

          return undefined;
        }),
      },
    });

    const global = clone(wrapper.vm.$store.state.global);
    delete global.lastVisitVersion;
    delete global.donationConversion;

    expect(global).toMatchSnapshot();
    expect(wrapper.vm.$store.state.profile).toMatchSnapshot();
  });
});
