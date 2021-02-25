import Vue from "vue";
import { sync } from "vuex-pathify";
import GlobalSettings from "./components/dialogGlobalSettings/DialogGlobalSettings";
import languageSelector from "~/components/language-selector/LanguageSelector";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import Utils from "~/scripts/utils";
import ArrowSvg from "~/assets/arrow.svg?inline";
import clickOutside from "~/scripts/clickOutside.js";

const OFFSET = 64;

export default {
  name: "MainHeader",
  directives: {
    clickOutside,
  },
  data() {
    return {
      burgerMenuVisible: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      focusedIndex: 0,
      mainMenu: [
        {
          ...this.$store.get("routes@home"),
          type: Utils.MenuRecordType.PAGE,
          name: `main_menu.${this.$store.get("routes@home.key")}`,
          children: [],
        },
        {
          type: Utils.MenuRecordType.MENU_ENTRY,
          showDropdown: false,
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
          showDropdown: false,
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
    burgerMenuVisible(val) {
      if (val) {
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    },
  },
  computed: {
    fixedMainMenu: sync("global/fixedMainMenu"),
  },
  methods: {
    buildHideDropdownMenuDesktop(value) {
      return function () {
        if (this.$data.burgerMenuVisible) {
          return;
        }
        value.showDropdown = false;
        this.focusedIndex = 0;
      };
    },
    hideDropdownMenuDesktop(value) {
      if (this.$data.burgerMenuVisible) {
        return;
      }
      value.showDropdown = false;
      this.focusedIndex = 0;
    },
    toggleMenu() {
      Vue.set(this.$data, "burgerMenuVisible", !this.$data.burgerMenuVisible);
    },
    hideDropdownMenuSmartphone(value) {
      if (!this.$data.burgerMenuVisible) {
        return;
      }
      value.showDropdown = false;
      this.focusedIndex = 0;
    },
    showGlobalSettings: /* istanbul ignore next */ function () {
      this.$modal({
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
    startArrowKeys(value) {
      if (value.showDropdown) {
        this.$refs[
          "dropdown-" + (this.$data.burgerMenuVisible ? "mobile-" : "desktop-") + value.name.replace(/\./g, "_")
        ][0].children[0].children[0].focus();
      }
    },
    focusPrevious(value, isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem(value);
      }
    },
    focusNext(value, isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem(value);
      }
    },
    focusItem(value) {
      this.$refs[
        "dropdown-" + (this.$data.burgerMenuVisible ? "mobile-" : "desktop-") + value.name.replace(/\./g, "_")
      ][0].children[this.focusedIndex].children[0].focus();
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
    ArrowSvg,
  },
};
