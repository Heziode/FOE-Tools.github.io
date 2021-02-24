import { sync } from "vuex-pathify";
import ShowBookmarks from "~/components/show-bookmarks/ShowBookmarks";

const i18nPrefix = "routes.gb_investment_gb_chooser.";

export default {
  name: "GbInvestmentChooser",
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return {
      title: this.$t(i18nPrefix + "title"),
    };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/gbs")).length) {
      const result = await app.$axios.$get("/foe-data/gbs.json");
      store.set("foe/gbs", result);
    }
  },
  data() {
    const gbs = this.$store.get("foe/gbs@gbs");
    const gbList = this.$store.get("foe/gbs@gbList");

    const gbListAlpha = Object.keys(gbs)
      .map((k) => {
        return { value: k, text: this.$t("foe_data.gb." + k) };
      })
      .sort((a, b) => (a.text > b.text ? 1 : b.text > a.text ? -1 : 0));

    return {
      i18nPrefix,
      gbList,
      gbListAlpha,
    };
  },
  computed: {
    gbSelectSortMode: sync("global/gbSelectSortMode"),
  },
  methods: {
    getGbStyle(key) {
      return "border-gb-" + key;
    },
  },
  components: {
    ShowBookmarks,
  },
};
