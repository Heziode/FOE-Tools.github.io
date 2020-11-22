import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import languageSelector from "~/components/language-selector/LanguageSelector";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import Utils from "~/scripts/utils";
import Vue from "vue";
import { sync } from "vuex-pathify";

const OFFSET = 10;

export default {
  name: "MainHeader",
  data() {
    return {
      burgerMenuVisible: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
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
    };
  },
  watch: {
    "$route.path"() {
      Vue.set(this.$data, "burgerMenuVisible", false);
      this.$store.commit("RESET_LOCATION");
    },
    fixedMainMenu(val) {
      if (!val) {
        window.removeEventListener("scroll", this.onScroll);
      } else {
        window.addEventListener("scroll", this.onScroll);
      }
    },
  },
  computed: {
    fixedMainMenu: sync("global/fixedMainMenu"),
  },
  methods: {
    toggleMenu() {
      Vue.set(this.$data, "burgerMenuVisible", !this.$data.burgerMenuVisible);
    },
    showGlobalSettings: /* istanbul ignore next */ function () {
      this.$buefy.modal.open({
        parent: this,
        component: GlobalSettings,
        hasModalCard: true,
      });
    },
    isActive(key) {
      return this.$route.name.startsWith(`${key}___`);
    },
    goTo(val) {
      this.$router.push(this.localePath({ name: "GbInvestment", params: { gb: val } }));
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  components: {
    languageSelector,
    gbListSelect,
  },
};
