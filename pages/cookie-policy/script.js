const i18nPrefix = "routes.cookie_policy.";

export default {
  name: "CookiePolicy",
  head() {
    return { title: this.$t("footer_menu.cookie_policy") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");
    return {
      i18nPrefix,
    };
  },
};
