export default {
  name: "LanguageSelector",
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
    };
  },
  watch: {
    currentLang(lang) {
      this.$store.set("i18n/locale", lang);
      this.locale = lang;
      this.$router.push(this.switchLocalePath(lang));
    },
  },
};
