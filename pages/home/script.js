import Utils from "~/scripts/utils";
import ShowBookmarks from "~/components/show-bookmarks/ShowBookmarks";

const i18nPrefix = "routes.home.";

export default {
  name: "Home",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      content: [
        {
          title: "utils.content.tools",
          id: "tools",
          content: Utils.splitArray(
            [
              {
                title: "common.tools.gb_investment.title",
                subtitle: "common.tools.gb_investment.subtitle",
                link: this.$store.get("routes@gb_investment.link"),
              },
              {
                title: "common.tools.secure_position.title",
                subtitle: "common.tools.secure_position.subtitle",
                link: this.$store.get("routes@secure_position.link"),
              },
              {
                title: "common.tools.cf_calculator.title",
                subtitle: "common.tools.cf_calculator.subtitle",
                link: this.$store.get("routes@cf_calculator.link"),
              },
              {
                title: "common.tools.trade.title",
                subtitle: "common.tools.trade.subtitle",
                link: this.$store.get("routes@trade.link"),
              },
              {
                title: "common.tools.campaign_cost.title",
                subtitle: "common.tools.campaign_cost.subtitle",
                link: this.$store.get("routes@campaign_cost.link"),
              },
            ],
            2,
            true
          ),
        },
        {
          title: "utils.content.statistics",
          id: "statistics",
          content: Utils.splitArray(
            [
              {
                title: "common.statistics.gb_statistics.title",
                subtitle: "common.statistics.gb_statistics.subtitle",
                link: this.$store.get("routes@gb_statistics.link"),
              },
              {
                title: "common.statistics.gb_forecast_cost.title",
                subtitle: "common.statistics.gb_forecast_cost.subtitle",
                link: this.$store.get("routes@gb_forecast_cost.link"),
              },
            ],
            2,
            true
          ),
        },
      ],
    };
  },
  components: {
    ShowBookmarks,
  },
};
