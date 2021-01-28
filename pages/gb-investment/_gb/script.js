import gbInvestment from "~/components/gb-investment/GbInvestment";
import gbInvestmentInvestors from "~/components/gb-investment-investors/GbInvestmentInvestors";
import securePosition from "~/components/secure-position/SecurePosition";
import Utils from "~/scripts/utils";

const i18nPrefix = "routes.gb_investment.";
const MAX_TAB = 1;
const urlPrefix = "gbi_";

const queryKey = {
  tab: urlPrefix + "tab",
};

export default {
  name: "GbInvestment",
  async validate({ app, store, params }) {
    // Check if `params.gb` is an existing Great Building
    if (!Object.keys(store.get("foe/gbs")).length) {
      const result = await app.$axios.$get("/foe-data/gbs.json");
      store.set("foe/gbs", result);
    }

    return params.gb in store.get("foe/gbs@gbsData");
  },
  head() {
    this.$store.set("hero", {
      title: `${i18nPrefix}hero.title`,
      titleConfig: {
        gb_key: this.$t("foe_data.gb." + this.$route.params.gb),
      },
      subtitle: "routes.gb_investment_gb_chooser.hero.subtitle",
    });

    return {
      title: this.$t(i18nPrefix + "title", {
        gb_key: this.$t("foe_data.gb." + this.$route.params.gb),
      }),
    };
  },
  data() {
    // If the GB is not in profile, we add a default conf
    if (
      !(this.$route.params.gb in this.$store.get(`profile/profiles@[${this.$store.get("global/currentProfile")}].gb`))
    ) {
      this.$store.set(
        `profile/profiles@${this.$store.get("global/currentProfile")}.gb.${this.$route.params.gb}`,
        this.$clone(Utils.getDefaultGBConf())
      );
    }

    let tab = this.$clone(
      this.$store.get(`profile/profiles@[${this.$store.get("global/currentProfile")}].gb[${this.$route.params.gb}].tab`)
    );
    tab = Utils.inRange(tab, 0, MAX_TAB) ? tab : 0;

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.tab,
      value: tab,
    });

    const data = {
      i18nPrefix,
      gb: this.$store.get(`foe/gbs@gbsData[${this.$nuxt._route.params.gb}]`),
      levelData: null,
      gbi_tab: tab,
      errors: {
        gbi_tab: false,
      },
    };

    Object.assign(data, this.checkQuery());

    return data;
  },
  watch: {
    gbi_tab(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "gbi_tab",
          val.length === 0 ? 0 : val,
          oldVal,
          [0, MAX_TAB],
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.gb.${this.$route.params.gb}.tab`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.tab,
          value: val,
        });
      }
    },
  },
  methods: {
    checkQuery() {
      const result = {};
      let isPermalink = false;

      // Check level
      if (
        this.$route.query[queryKey.tab] &&
        !isNaN(this.$route.query[queryKey.tab]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.tab]), 0, MAX_TAB)
      ) {
        isPermalink = true;
        result.gbi_tab = parseInt(this.$route.query[queryKey.tab]);
      }

      if (isPermalink) {
        this.$store.set("isPermalink", true);
      }

      return result;
    },
  },
  components: {
    gbInvestment,
    securePosition,
    gbInvestmentInvestors,
  },
};
