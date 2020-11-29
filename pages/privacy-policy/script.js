const i18nPrefix = "routes.privacy_policy.";

export default {
  name: "PrivacyPolicy",
  head() {
    return { title: this.$t("footer_menu.privacy_policy") };
  },
  data() {
    return {
      i18nPrefix,
    };
  },
};
