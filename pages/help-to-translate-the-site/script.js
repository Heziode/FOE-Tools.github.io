const i18nPrefix = "routes.help_to_translate_the_site.";

export default {
  name: "HelpToTranslateTheSite",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return {
      i18nPrefix,
    };
  },
  computed: {
    sortedLocales() {
      const compare = (a, b) => {
        if (a.locale < b.locale) {
          return -1;
        }
        if (a.locale > b.locale) {
          return 1;
        }
        return 0;
      };
      let arr = Object.keys(this.$store.get("translationState"))
        .map((elt) => ({
          key: elt,
          locale: this.$t("common.lang." + elt.replace("_", "-") + (elt === "en" ? ".original" : ".en")),
        }))
        .sort(compare);
      return arr.map((elt) => elt.key);
    },
  },
  methods: {
    getType(val) {
      if (val === 100) {
        return "is-success";
      } else if (val >= 80) {
        return "is-info";
      } else if (val >= 50) {
        return "is-warning";
      } else {
        return "is-danger";
      }
    },
  },
};
