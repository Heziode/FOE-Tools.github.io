import Vue from "vue";
import languageSelector from "~/components/language-selector/LanguageSelector";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import packageConfig from "~/package.json";
import Utils from "~/scripts/utils";
import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import { getUserLocale } from "get-user-locale";
import { get } from "vuex-pathify";

const i18nPrefix = "components.site_layout.";

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
