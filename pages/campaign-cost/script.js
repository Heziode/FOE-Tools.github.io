import campaignCost from "~/components/campaign-cost/CampaignCost";

const i18nPrefix = "routes.campaign_cost.";

export default {
  name: "CampaignCost",
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/campaignCost")).length) {
      const campaignCostResult = await app.$axios.$get("/foe-data/campaign-cost.json");
      store.set("foe/campaignCost", campaignCostResult);
    }

    if (!Object.keys(store.get("foe/goods")).length) {
      const goodsResult = await app.$axios.$get("/foe-data/goods.json");
      store.set("foe/goods", goodsResult);
    }
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
    };
  },
  components: {
    campaignCost,
  },
};
