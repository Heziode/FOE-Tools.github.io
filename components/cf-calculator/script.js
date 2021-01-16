import questData from "~/lib/foe-data/rq-quests";
import cfCalculatorProcess from "~/lib/foe-compute-process/cf-calculator";
import Utils from "~/scripts/utils";
import YesNo from "~/components/yes-no/YesNo";
import Shepherd from "shepherd.js";
import { formatTuto } from "~/scripts/tutorial";
import { sync } from "vuex-pathify";
import numberinput from "~/components/number-input/NumberInput";

const i18nPrefix = "components.cf_calculator.";
const urlPrefix = "cfc_";

const queryKey = {
  yourAge: urlPrefix + "ya",
  yourCfBoost: urlPrefix + "ycfb",
  coins: urlPrefix + "c",
  supplies: urlPrefix + "s",
  goods: urlPrefix + "g",
  fpBy24h: urlPrefix + "fp",
  otherRq: urlPrefix + "orq",
  suppliesGathered: urlPrefix + "sp",
  secondRq: urlPrefix + "srq",
  cumulativeQuest: urlPrefix + "cq",
};

const inputComparator = {
  yourCfBoost: { comparator: [">=", 0] },
  coins: { comparator: [">=", 0] },
  supplies: { comparator: [">=", 0] },
  goods: { comparator: [">=", 0] },
  fpBy24h: { comparator: [">=", 0] },
  otherRq: { comparator: [">=", 0] },
  suppliesGathered: { comparator: [">=", 0] },
  cumulativeQuest: { comparator: [">=", 1] },
};

export default {
  name: "CfCalculator",
  head /* istanbul ignore next */: function () {
    this.$store.set("hero", {
      title: "routes.cf_calculator.hero.title",
      subtitle: "routes.cf_calculator.hero.subtitle",
    });

    return { title: this.$t("routes.cf_calculator.title") };
  },
  props: {
    canPermalink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.yourAge`);
    let data = {
      yourAge: this.$clone(this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.yourAge`)),
      yourCfBoost: this.$clone(
        this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.yourCfBoost`)
      ),
      coins: this.$clone(this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.coins`)),
      supplies: this.$clone(
        this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.supplies`)
      ),
      goods: this.$clone(this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.goods`)),
      fpBy24h: this.$clone(this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.fpBy24h`)),
      otherRq: this.$clone(this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.otherRq`)),
      suppliesGathered: this.$clone(
        this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.suppliesGathered`)
      ),
      cumulativeQuest: this.$clone(
        this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.cumulativeQuest`)
      ),
      secondRq: this.$clone(
        this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.secondRq`)
      ),
    };

    data.tutoMode = false;
    Object.assign(data, this.checkQuery());

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourAge,
      value: data.yourAge,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourCfBoost,
      value: data.yourCfBoost,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.coins,
      value: data.coins,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.supplies,
      value: data.supplies,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.goods,
      value: data.goods,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpBy24h,
      value: data.fpBy24h,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.otherRq,
      value: data.otherRq,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suppliesGathered,
      value: data.suppliesGathered,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.secondRq,
      value: data.secondRq ? 1 : 0,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.cumulativeQuest,
      value: data.cumulativeQuest,
    });

    return {
      ...data,
      i18nPrefix,
      questData: questData,
      oneQuest: [
        questData.ages.BronzeAge.key,
        questData.ages.IronAge.key,
        questData.ages.EarlyMiddleAges.key,
        questData.ages.HighMiddleAges.key,
      ],
      checkSecondQuest: false,
      infinityGenerator: false,
      result: {
        bp: 0,
        medals: 0,
        goods: 0,
        fp: 0,
        dailyUbq: 0,
        bonusUbq: 0,
        secondRqCompleted: 0,
        totalGoods: 0,
        totalFp: 0,
        totalRqCompleted: 0,
        coinSupplyReturn: [],
      },
      errors: {
        yourAge: false,
        yourCfBoost: false,
        coins: false,
        supplies: false,
        goods: false,
        fpBy24h: false,
        otherRq: false,
        suppliesGathered: false,
        cumulativeQuest: false,
      },
    };
  },
  computed: {
    isPermalink: sync("isPermalink"),
    urlQuery: sync("urlQuery"),
    permaLink() {
      return {
        name: "CfCalculator",
        query: this.urlQuery,
      };
    },
    minCoins() {
      return 7 * this.$data.questData.ages[this.$data.yourAge].cost.coins;
    },
    minSupplies() {
      return 7 * this.$data.questData.ages[this.$data.yourAge].cost.coins;
    },
  },
  watch: {
    yourAge(val) {
      if (!(this.yourAge in questData.ages)) {
        this.errors.yourAge = true;
        return;
      }
      this.errors.yourAge = false;
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@${this.$store.get("global/currentProfile")}.yourAge`, val);
      }
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.yourAge,
        value: val,
      });
      this.$data.coins = this.minCoins;
      this.$data.supplies = this.minSupplies;
      if (this.oneQuest.indexOf(this.yourAge) > -1) {
        this.secondRq = false;
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.secondRq,
          value: 0,
        });
        if (!this.isPermalink) {
          this.$store.set(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.secondRq`, false);
        }
      }
      this.checkSecondQuest = this.oneQuest.indexOf(val) === -1;
      this.calculate();
    },
    secondRq(val) {
      const value = !!val;
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@${this.$store.get("global/currentProfile")}.cf.secondRq`, val);
      }
      this.$data.suppliesGathered = value ? Utils.normalizeNumberValue(this.$data.suppliesGathered) : 0;
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.secondRq,
        value: value ? 1 : 0,
      });
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suppliesGathered,
        value: value ? Utils.normalizeNumberValue(this.$data.suppliesGathered) : 0,
      });
      this.calculate();
    },
    yourCfBoost(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "yourCfBoost",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourCfBoost.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.yourCfBoost`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourCfBoost,
          value: val,
        });
        this.$data.infinityGenerator = false;
        this.$data.cumulativeQuest = 0;
        this.calculate();
      }
    },
    coins(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "coins",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [">=", this.minCoins],
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.coins`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.coins,
          value: val,
        });
        this.calculate();
      }
    },
    supplies(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "supplies",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [">=", this.minSupplies],
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.supplies`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.supplies,
          value: val,
        });
        this.calculate();
      }
    },
    goods(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "goods",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.goods.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.goods`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.goods,
          value: val,
        });
        this.calculate();
      }
    },
    fpBy24h(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "fpBy24h",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.fpBy24h.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.fpBy24h`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: val,
        });
        this.calculate();
      }
    },
    otherRq(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "otherRq",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.otherRq.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.otherRq`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.otherRq,
          value: val,
        });
        this.calculate();
      }
    },
    suppliesGathered(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "suppliesGathered",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.suppliesGathered.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.suppliesGathered`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.suppliesGathered,
          value: val,
        });
        this.calculate();
      }
    },
    cumulativeQuest(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "cumulativeQuest",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.cumulativeQuest.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.cf.cumulativeQuest`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.cumulativeQuest,
          value: val,
        });
        this.calculate();
      }
    },
  },
  mounted() {
    this.checkSecondQuest = this.oneQuest.indexOf(this.$data.yourAge) === -1;
    this.calculate();
  },
  methods: {
    /**
     * Calculate all the rewards and number of quests that can be accomplished.
     * Based on: https://docs.google.com/spreadsheets/d/13-mBxR4eumRXWPi6Ayq2D9OGZ9C55eMEb6xyHnLl_-g/edit#gid=2009380732
     */
    calculate() {
      /* istanbul ignore next */
      if (
        Utils.normalizeNumberValue(this.$data.coins) < this.$data.minCoins ||
        Utils.normalizeNumberValue(this.$data.supplies) < this.$data.minSupplies
      ) {
        // If coins or supplies are < than 7 times the amount of quests, we cannot guarantee any profit (statistically)
        return;
      }
      try {
        this.$data.result = cfCalculatorProcess.compute(
          JSON.parse(JSON.stringify(this.$data.questData.ages[this.$data.yourAge])),
          Utils.normalizeNumberValue(this.$data.yourCfBoost),
          Utils.normalizeNumberValue(this.$data.coins),
          Utils.normalizeNumberValue(this.$data.supplies),
          Utils.normalizeNumberValue(this.$data.goods),
          Utils.normalizeNumberValue(this.$data.fpBy24h),
          !!this.$data.secondRq,
          Utils.normalizeNumberValue(this.$data.suppliesGathered),
          Utils.normalizeNumberValue(this.$data.otherRq),
          Utils.normalizeNumberValue(this.$data.cumulativeQuest)
        );
        this.$data.infinityGenerator = this.$data.result.infinityGenerator;
        if (this.$data.infinityGenerator && this.$data.cumulativeQuest === 0) {
          this.$data.cumulativeQuest = this.$data.result.defaultCumulativeQuest;
        }
      } catch (e) {
        if (e.name === "BoundExceededError") {
          console.error("classic error");
        } /* istanbul ignore next */ else {
          throw e;
        }
      }
    },
    checkQuery() {
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let tmp;

      for (let key in inputComparator) {
        tmp = Utils.checkFormNumeric(this.$route.query[queryKey[key]], -1, inputComparator[key].comparator);
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result[key] = tmp.value;
        }
      }

      if (this.$route.query[queryKey.yourAge] && this.$route.query[queryKey.yourAge] in questData.ages) {
        change = Utils.FormCheck.VALID;
        result["yourAge"] = this.$route.query[queryKey.yourAge];
      }

      if (
        this.$route.query[queryKey.secondRq] &&
        !isNaN(this.$route.query[queryKey.secondRq]) &&
        parseInt(this.$route.query[queryKey.secondRq]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result["secondRq"] = parseInt(this.$route.query[queryKey.secondRq]) === 1;
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.set("isPermalink", true);
      }

      return result;
    },
    startTour: /* istanbul ignore next */ function () {
      let tour = new Shepherd.Tour({
        defaultStepOptions: {
          classes: "buefy-theme",
          scrollTo: true,
          showCancelLink: true,
          shepherdElementMaxHeight: "100%",
          shepherdElementMaxWidth: "100%",
        },
        classPrefix: "buefy-",
        useModalOverlay: true,
      });

      const defaultOptions = {
        scrollTo: { behavior: "smooth", block: "center" },
        canClickTarget: false,
        cancelIcon: {
          enabled: true,
        },
        buttons: [
          {
            action: tour.back,
            classes: "button is-info",
            text: this.$t("utils.Previous"),
          },
          {
            action: tour.next,
            classes: "button is-info is-margin-left-auto",
            text: this.$t("utils.Next"),
          },
        ],
      };

      tour.addStep({
        id: "welcome",
        text: formatTuto(this.$t(i18nPrefix + "tutorial.welcome")),
        ...defaultOptions,
        buttons: [
          {
            action: tour.cancel,
            classes: "button is-link is-disabled",
            text: this.$t("utils.Exit"),
          },
          {
            action: tour.next,
            classes: "button is-info is-margin-left-auto",
            text: this.$t("utils.Next"),
          },
        ],
      });

      const commonInfo = [
        { keyId: "yourAge", tagId: "#your-age-container" },
        { keyId: "yourCfBoost", tagId: "#your-cf-boost-container" },
        { keyId: "coins", tagId: "#coins-container" },
        { keyId: "supplies", tagId: "#supplies" },
        { keyId: "goods", tagId: "#goods-container" },
        { keyId: "fpBy24h", tagId: "#fp-by-24h-container" },
        { keyId: "checkSecondQuest", tagId: "#checkSecondQuest" },
        { keyId: "suppliesGathered", tagId: "#supplies-gathered-container" },
        { keyId: "otherRq", tagId: "#other-rq-container" },
        { keyId: "infiniteGenerator", tagId: "#infinityGenerator" },
        { keyId: "cumulativeQuest", tagId: "#cumulativeQuest-container" },
        { keyId: "tableReward", tagId: "#tableReward" },
        { keyId: "totalGoods", tagId: "#totalGoods" },
        { keyId: "totalFp", tagId: "#totalFp" },
        { keyId: "totalRqCompleted", tagId: "#totalRqCompleted" },
        { keyId: "dailyUbq", tagId: "#dailyUbq" },
        { keyId: "bonusUbq", tagId: "#bonusUbq" },
        { keyId: "secondRqCompleted", tagId: "#secondRqCompleted" },
        { keyId: "coinSupplyReturn", tagId: "#coinSupplyReturn" },
      ];

      for (const elt of commonInfo) {
        tour.addStep({
          id: elt.keyId,
          text: formatTuto(this.$t(i18nPrefix + "tutorial." + elt.keyId)),
          attachTo: { element: elt.tagId, on: "top" },
          ...defaultOptions,
        });
      }

      let self = this;
      tour.on("cancel", () => {
        self.$data.tutoMode = false;
      });
      tour.on("complete", () => {
        self.$data.tutoMode = false;
      });
      this.$data.tutoMode = true;
      tour.start();
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },
  },
  components: {
    YesNo,
    numberinput,
  },
};
