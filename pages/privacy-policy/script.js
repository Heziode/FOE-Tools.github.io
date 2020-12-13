const i18nPrefix = "routes.privacy_policy.";

export default {
  name: "PrivacyPolicy",
  head() {
    return { title: this.$t("footer_menu.privacy_policy") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");
    return {
      i18nPrefix,
    };
  },
};
