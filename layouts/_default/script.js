import Vue from "vue";
import languageSelector from "~/components/language-selector/LanguageSelector";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import packageConfig from "~/package.json";
import Utils from "~/scripts/utils";
import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import { getUserLocale } from "get-user-locale";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import { v4 as uuidv4 } from "uuid";
import { get } from "vuex-pathify";

const i18nPrefix = "components.site_layout.";
const defaultProfileName = "Default";

const tagURL = "https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/git/refs/tags";

export default {
  head /* istanbul ignore next */: function () {
    return {
      link: [
        {
          hid: "icon_1",
          rel: "icon",
          type: "image/png",
          href: "/icon.png",
        },
      ],
      htmlAttrs: {
        lang: this.lang,
        class: this.$store.get("isDarkTheme") ? "dark-theme" : "light-theme",
      },
      bodyAttrs: {
        class:
          (this.$store.get("global/fixedMainMenu") ? "has-navbar-fixed-top " : "") +
          (this.$store.get("isDarkTheme") ? "dark-theme" : "light-theme"),
      },
    };
  },
  data() {
    this.initData();

    if (!this.$store.get("global/lastVisitVersion").length) {
      this.$store.set("global/lastVisitVersion", packageConfig.version);
    }

    if (!this.$store.get("global/donationConversion").length) {
      this.$store.set("global/donationConversion", this.getNextConversion());
    }

    return {
      i18nPrefix: i18nPrefix,
      siteVersion: packageConfig.version,
      nbUpdateSinceLastVisit: 0,
      burgerMenuVisible: false,
      haveReadLocaleInfoAvailable: this.$clone(this.$store.get("global/haveReadLocaleInfoAvailable")),
      navbarLinks: {
        home: this.$store.get("routes@home"),
        gb_investment: this.$store.get("routes@gb_investment"),
        secure_position: this.$store.get("routes@secure_position"),
        cf_calculator: this.$store.get("routes@cf_calculator"),
        gb_statistics: this.$store.get("routes@gb_statistics"),
        gb_forecast_cost: this.$store.get("routes@gb_forecast_cost"),
        trade: this.$store.get("routes@trade"),
        campaign_cost: this.$store.get("routes@campaign_cost"),
      },
      mainMenu: [
        {
          ...this.$store.get("routes@home"),
          type: Utils.MenuRecordType.PAGE,
          name: `main_menu.${this.$store.get("routes@home.key")}`,
          children: [],
        },
        {
          type: Utils.MenuRecordType.MENU_ENTRY,
          name: "utils.content.tools",
          key: null,
          link: null,
          children: [
            {
              ...this.$store.get("routes@gb_investment"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@gb_investment.key")}`,
              children: [],
            },
            {
              ...this.$store.get("routes@secure_position"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@secure_position.key")}`,
              children: [],
            },
            {
              ...this.$store.get("routes@cf_calculator"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@cf_calculator.key")}`,
              children: [],
            },
            {
              ...this.$store.get("routes@trade"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@trade.key")}`,
              children: [],
            },
            {
              ...this.$store.get("routes@campaign_cost"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@campaign_cost.key")}`,
              children: [],
            },
          ],
        },
        {
          type: Utils.MenuRecordType.MENU_ENTRY,
          name: "utils.content.statistics",
          link: null,
          key: null,
          children: [
            {
              ...this.$store.get("routes@gb_statistics"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@gb_statistics.key")}`,
              link: this.$store.get("routes@gb_statistics.link"),
              children: [],
            },
            {
              ...this.$store.get("routes@gb_forecast_cost"),
              type: Utils.MenuRecordType.PAGE,
              name: `main_menu.${this.$store.get("routes@gb_forecast_cost.key")}`,
              children: [],
            },
          ],
        },
      ],
      footerLinks: [
        this.$store.get("routes@about"),
        this.$store.get("routes@contact"),
        this.$store.get("routes@cookie_policy"),
        this.$store.get("routes@privacy_policy"),
        this.$store.get("routes@contributors"),
        this.$store.get("routes@changelog"),
      ],
      showSnackbarChangeLocale: false,
      detectedLocale: "",
    };
  },
  computed: {
    creationDate() {
      return this.$moment("2017-12-20");
    },
    isPermalink: get("isPermalink"),
    lang: get("locale"),
    isNewYear() {
      return this.$moment().format("MMDD") === this.creationDate.format("MMDD");
    },
    nbYears() {
      return this.$moment().year() - this.creationDate.year();
    },
    isConversionDate() {
      return this.$moment().isAfter(
        this.$moment(this.$clone(this.$store.get("global/donationConversion")), "YYYY-MM-DD")
      );
    },
    hasSurvey() {
      return this.$route.name !== "Survey" && this.$store.get("survey") && this.$store.get("survey").length;
    },
  },
  watch: {
    "$route.path"() {
      Vue.set(this.$data, "burgerMenuVisible", false);
      this.$store.commit("RESET_LOCATION");
    },
  },
  methods: {
    getNextConversion() {
      const min = 15;
      const max = 30;
      const amount = Math.random() * (max - min) + min;
      return this.$moment().add(amount, "days").format("YYYY-MM-DD");
    },
    toggleMenu() {
      Vue.set(this.$data, "burgerMenuVisible", !this.$data.burgerMenuVisible);
    },
    isActive(key) {
      return this.$route.name.startsWith(`${key}___`);
    },
    showGlobalSettings: /* istanbul ignore next */ function () {
      this.$buefy.modal.open({
        parent: this,
        component: GlobalSettings,
        hasModalCard: true,
      });
    },
    backToTop: /* istanbul ignore next */ function () {
      window.scroll({ top: 0 });
    },
    closeSnackbar: /* istanbul ignore next */ function () {
      this.showSnackbarChangeLocale = false;
      this.$store.set("global/haveReadLocaleInfoAvailable", true);
    },
    switchLocale: /* istanbul ignore next */ function () {
      this.closeSnackbar();
      this.$cookies.set("locale", this.detectedLocale, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime(),
      });
      this.$store.set("global/locale", this.$clone(this.detectedLocale));
      this.$store.set("locale", this.detectedLocale);
      window.location.reload();
    },
    onCloseDonationMessage: /* istanbul ignore next */ function () {
      this.$store.set("global/donationConversion", this.$clone(this.getNextConversion()));
    },
    initData: /* istanbul ignore next */ function () {
      const defaultInvestorPercentageGlobal = 90;

      let currentProfileID;

      if (!this.$store.get("global/profiles").length || !this.$store.get("global/currentProfile")) {
        const ids = this.$store.get("global/profiles").map((k) => k.key);
        do {
          currentProfileID = uuidv4();
        } while (ids.indexOf(currentProfileID) >= 0);

        this.$store.set("global/profiles", [{ id: currentProfileID, name: defaultProfileName }]);
        this.$store.set("global/currentProfile", currentProfileID);
        this.$store.commit("profile/addProfile", { key: currentProfileID, profile: {} });
      } else {
        currentProfileID = this.$store.get("global/currentProfile");
      }

      // Next, we move cookies to indexedDB
      const cookies = this.$cookies.getAll();

      const globalKeys = [
        "gbSelectMode",
        "fixedMainMenu",
        "haveReadLocaleInfoAvailable",
        "haveReadTipAboutAddInvestor",
        "dayNightMode",
        "dayStart",
        "nightStart",
        "lastVisitVersion",
      ];

      if ("locale" in cookies) {
        this.$store.set("global/locale", this.$cookies.get("locale"));
      }

      for (const key of globalKeys) {
        if (key in cookies) {
          this.$store.set(`global/${key}`, this.$cookies.get(key));
          this.$cookies.remove(key, { path: "/" });
        }
      }

      if ("customPromotionMessagesTemplates" in cookies) {
        const customPMT = this.$cookies.get("customPromotionMessagesTemplates");
        const ids = [];
        for (const elt of customPMT) {
          let id;
          do {
            id = uuidv4();
          } while (ids.indexOf(id) >= 0);
          ids.push(id);
          elt.id = id;
        }
        this.$store.set(`global/customPromotionMessagesTemplates`, customPMT);
        this.$cookies.remove("customPromotionMessagesTemplates", { path: "/" });
      }

      let currentProfile = {
        gbShowPrefix: true,
        gbShowSuffix: true,
        showOnlySecuredPlaces: false,
        displayGbName: true,
        promotionMessageList: defaultPromotionMessages,
        gbi_tab: 0,
        showSnipe: false,
        yourAge: "BronzeAge",
        shortName: false,
        showLevel: true,
        yourArcBonus: 0,
        yourCfBoost: 0,
        gbPrefix: "",
        gbSuffix: "",
        cf: {
          coins: 0,
          fpBy24h: 0,
          goods: 0,
          otherRq: 0,
          cumulativeQuest: 0,
          secondRq: false,
          supplies: 0,
          suppliesGathered: 0,
        },
        gb: {},
      };

      const dbProfile = this.$store.get(`profile/profiles@[${currentProfileID}]`);
      if (!Utils.isNullOrUndef(dbProfile)) {
        currentProfile = {
          ...currentProfile,
          ...dbProfile,
          cf: { ...currentProfile.cf, ...this.$clone(dbProfile.cf) },
          gb: { ...this.$clone(dbProfile.gb) },
        };
      }

      const profileDefaultKeys = [
        { key: "gbShowPrefix", parentKey: "" },
        { key: "gbShowSuffix", parentKey: "" },
        { key: "showOnlySecuredPlaces", parentKey: "" },
        { key: "displayGbName", parentKey: "" },
        { key: "promotionMessageList", parentKey: "" },
        { key: "showSnipe", parentKey: "" },
        { key: "shortName", parentKey: "" },
        { key: "showLevel", parentKey: "" },
        { key: "yourArcBonus", parentKey: "" },
        { key: "yourCfBoost", parentKey: "" },
        { key: "yourAge", parentKey: "" },
        { key: "gbPrefix", parentKey: "" },
        { key: "gbSuffix", parentKey: "" },
        { key: "coins", parentKey: "cf" },
        { key: "supplies", parentKey: "cf" },
        { key: "goods", parentKey: "cf" },
        { key: "fpBy24h", parentKey: "cf" },
        { key: "otherRq", parentKey: "cf" },
        { key: "suppliesGathered", parentKey: "cf" },
        { key: "cumulativeQuest", parentKey: "cf" },
        { key: "secondRq", parentKey: "cf" },
      ];

      // Add keys that is global in the profile or in cf
      for (const profileDefaultKey of profileDefaultKeys) {
        if (profileDefaultKey.key in cookies) {
          if (profileDefaultKey.parentKey.length) {
            currentProfile[profileDefaultKey.parentKey][profileDefaultKey.key] = this.$cookies.get(
              profileDefaultKey.key
            );
          } else {
            currentProfile[profileDefaultKey.key] = this.$cookies.get(profileDefaultKey.key);
          }
          this.$cookies.remove(profileDefaultKey.key, { path: "/" });
        }
      }

      const cookieKeys = Object.keys(cookies);
      const defaultGBConf = Utils.getDefaultGBConf();

      // Get "easy" keys of GB
      cookieKeys.some((e) => {
        const regGbTab = /^(\w+)_tab$/g;
        const regOwnerView = /^(\w+)_(ownerInvestment|investorParticipation|level)_?(\d*)$/g;
        const regInvestorView = /^(\w+)_(from|to|showPlace|takingPlaceInConsideration)_?(\d*)$/g;
        if (regGbTab.test(e)) {
          regGbTab.lastIndex = 0;
          const m = regGbTab.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );

          currentProfile.gb[m[1]].tab = this.$cookies.get(e);
          this.$cookies.remove(e, { path: "/" });
        } else if (regOwnerView.test(e)) {
          regOwnerView.lastIndex = 0;
          const m = regOwnerView.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );
          currentProfile.gb[m[1]].ownerView[m[2]] = this.$cookies.get(e);
          this.$cookies.remove(e, { path: "/" });
        } else if (regInvestorView.test(e)) {
          regInvestorView.lastIndex = 0;
          const m = regInvestorView.exec(e);

          currentProfile.gb[m[1]] = this.$clone(
            Utils.isNullOrUndef(currentProfile.gb[m[1]]) ? defaultGBConf : currentProfile.gb[m[1]]
          );

          currentProfile.gb[m[1]].investorView[m[2]] = this.$cookies.get(e);
          this.$cookies.remove(e, { path: "/" });
        }
      });

      // Get InvestorPercentageGlobal
      cookieKeys.some((e) => {
        const reg = /^(\w+)_investorPercentageGlobal$/g;
        if (reg.test(e)) {
          reg.lastIndex = 0;
          const m = reg.exec(e);
          if (Utils.isNullOrUndef(currentProfile.gb[m[1]])) {
            currentProfile.gb[m[1]] = { ...this.$clone(defaultGBConf) };
          }
          currentProfile.gb[m[1]].ownerView.investorPercentageGlobal = this.$cookies.get(e);
          currentProfile.gb[m[1]].ownerView.investorPercentageCustom = Array.from(
            new Array(5),
            () => defaultInvestorPercentageGlobal
          );
          this.$cookies.remove(e, { path: "/" });
        }
      });

      // Get InvestorPercentageCustom
      cookieKeys.some((e) => {
        const reg = /^(\w+)_investorPercentageCustom_?(\d*)$/g;
        if (reg.test(e)) {
          reg.lastIndex = 0;
          const m = reg.exec(e);

          if (Utils.isNullOrUndef(currentProfile.gb[m[1]])) {
            currentProfile.gb[m[1]] = { ...this.$clone(defaultGBConf) };
          } else if (!("investorPercentageGlobal" in currentProfile.gb[m[1]].ownerView)) {
            currentProfile.gb[m[1]].ownerView.investorPercentageGlobal = defaultInvestorPercentageGlobal;
          }

          currentProfile.gb[m[1]].ownerView.investorPercentageCustom[parseInt(m[2])] = parseFloat(this.$cookies.get(e));
          this.$cookies.remove(e, { path: "/" });
        }
      });

      this.$store.commit("profile/setProfile", { profileKey: currentProfileID, profile: { ...currentProfile } });
      const profile = this.$store.get(`profile/profiles@[${this.$store.get("global/currentProfile")}]`);
      if (!Utils.isNullOrUndef(profile.customPromotionMessagesTemplates)) {
        let ids = this.$store.get(`global/customPromotionMessagesTemplates`).map((e) => e.id);
        const customPMT = this.$clone(profile.customPromotionMessagesTemplates);
        for (const elt of customPMT) {
          let id;
          do {
            id = uuidv4();
          } while (ids.indexOf(id) >= 0);
          ids.push(id);
          elt.id = id;
        }
        this.$store.set(`global/customPromotionMessagesTemplates`, customPMT);
        delete profile.customPromotionMessagesTemplates;
        this.$store.set(`profile/profiles@${this.$store.get("global/currentProfile")}`, profile);
      }

      const customPromotionMessagesTemplates = this.$clone(this.$store.get(`global/customPromotionMessagesTemplates`));
      customPromotionMessagesTemplates.forEach((elt) => {
        for (const customFieldName in elt.config.customFields) {
          if (!("placeholder" in elt.config.customFields[customFieldName])) {
            elt.config.customFields[customFieldName].placeholder = elt.config.customFields[customFieldName].value;
          }
          if (!("show" in elt.config.customFields[customFieldName])) {
            elt.config.customFields[customFieldName].show = true;
          }
        }
      });
      this.$store.set(`global/customPromotionMessagesTemplates`, customPromotionMessagesTemplates);
    },
    goTo(val) {
      this.$router.push(this.localePath({ name: "GbInvestment", params: { gb: val } }));
    },
  },
  mounted: /* istanbul ignore next */ function () {
    let addToAnyScript1 = document.createElement("script");
    addToAnyScript1.innerText = `var a2a_config = {};
    a2a_config.locale = "${this.$clone(this.$store.get("locale"))}";`;
    document.head.appendChild(addToAnyScript1);
    let addToAnyScript2 = document.createElement("script");
    addToAnyScript2.setAttribute("src", "https://static.addtoany.com/menu/page.js");
    document.head.appendChild(addToAnyScript2);

    this.$store.set("locale", this.$clone(this.$store.get("global/locale")));
    this.$data.lang = this.$clone(this.$store.get("global/locale"));

    const detectedLocale = getUserLocale().slice(0, 2);
    if (
      !this.haveReadLocaleInfoAvailable &&
      this.lang !== detectedLocale &&
      this.$store.get("supportedLocales").indexOf(detectedLocale) >= 0
    ) {
      this.showSnackbarChangeLocale = true;
      this.detectedLocale = detectedLocale;
    }

    // Check updates
    if (this.$store.get("global/lastVisitVersion") !== this.$data.siteVersion) {
      const lastVisitVersion = this.$clone(this.$store.get("global/lastVisitVersion"));
      let self = this;
      this.$axios
        .$get(tagURL)
        .then((tags) => {
          let found = false;
          let nb = 0;
          tags.forEach((elt) => {
            if (!found && elt.ref.match(/v(\d+\.\d+\.\d+)$/)[1] === lastVisitVersion) {
              found = true;
            } else if (found) {
              nb += 1;
            }
            return false;
          });

          self.$data.nbUpdateSinceLastVisit = nb;

          self.$store.set("global/lastVisitVersion", self.$clone(self.$data.siteVersion));
        })
        .catch((e) => {
          console.error("Error when getting GitHub tags: ", e);
        });
    }
  },
  components: {
    languageSelector,
    gbListSelect,
  },
};
