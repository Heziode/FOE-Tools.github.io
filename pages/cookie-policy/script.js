const i18nPrefix = "routes.cookie_policy.";

export default {
  name: "CookiePolicy",
  head() {
    return { title: this.$t("footer_menu.cookie_policy") };
  },
  data() {
    return {
      i18nPrefix,
    };
  },
};
