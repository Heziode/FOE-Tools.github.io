import clickOutside from "~/scripts/clickOutside.js";
import ArrowSvg from "~/assets/arrow.svg?inline";

export default {
  name: "LanguageSelector",
  directives: {
    clickOutside,
  },
  data() {
    const supportedLocales = [];
    for (const key of this.$store.get("supportedLocales")) {
      supportedLocales.push({
        key,
        displayName:
          key === "en"
            ? this.$t("common.lang.en.original")
            : `${this.$t(`common.lang.${key}.en`)} (${this.$t(`common.lang.${key}.original`)})`,
      });
    }
    supportedLocales.sort((a, b) => (a.displayName > b.displayName ? 1 : b.displayName > a.displayName ? -1 : 0));

    return {
      currentLang: this.$clone(this.$store.get("i18n/locale")),
      supportedLocales,
      isVisible: false,
      focusedIndex: 0,
    };
  },
  computed: {
    onHelpToTranslatePage() {
      return ["HelpToTranslateTheSite"].includes(/^([^_]+)(?:___.+)?$/.exec(this.$route.name)[1]);
    },
  },
  watch: {
    currentLang(lang) {
      this.$store.set("i18n/locale", lang);
      this.locale = lang;
      this.$router.push(this.switchLocalePath(lang));
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.setLocale(locale);
      this.hideDropdown();
    },
  },
  components: {
    ArrowSvg,
  },
};
