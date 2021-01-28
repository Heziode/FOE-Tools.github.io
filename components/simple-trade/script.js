import Vue from "vue";
import Utils from "~/scripts/utils";
import { splitGoods } from "~/scripts/trade";
import ages from "~/lib/foe-data/ages";
import YesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";

const i18nPrefix = "components.simple_trade.";
const MAX_TRADE = 1000;
const MIN_DEFAULT_RATIO = 0.5;
const MAX_DEFAULT_RATIO = 2;

let agesGoods = {};

export default {
  name: "SimpleTrade",
  props: {
    tradeArray: {
      type: Object,
      required: true,
    },
  },
  data() {
    agesGoods = this.$store.get("foe/goods@agesGoods");
    delete agesGoods.SpaceAgeAsteroidBelt; // TODO: to be deleted when fair trade ratio found

    const data = {
      i18nPrefix,
      agesGoods,
      value: 0,
      values: {},
      currentAge: null,
      results: {},
      split: false,
      splitValueId: "splitValue" + this._uid,
      splitValue: MAX_TRADE,
      maxSplitValue: MAX_TRADE,
      showRatio: false,
      errors: {
        splitValue: false,
      },
    };

    for (const age in agesGoods) {
      data.values[age] = 0;
      data.results[age] = { show: false, value: 0, ratio: 0, split: "" };
    }

    return data;
  },
  watch: {
    split() {
      this.$data.splitValue = MAX_TRADE;
      this.compute();
    },
    splitValue(val) {
      if (Utils.inRange(val, 0, MAX_TRADE)) {
        this.$data.errors.splitValue = false;
        this.compute();
      } else {
        this.$data.errors.splitValue = true;
      }
    },
  },
  methods: {
    /**
     * Set value of each inputs at 0 except for input corresponding to the age in parameter
     * @param currentAge Age where we not set value to 0
     */
    resetForm(currentAge) {
      for (const age in agesGoods) {
        if (currentAge !== age) {
          Vue.set(this.$data.values, age, 0);
        }
        this.$data.results[age] = {
          show: false,
          value: 0,
          ratio: 0,
          split: "",
        };
      }
    },

    /**
     * Reset form only if all values is equal 0
     * @param currentAge Reference of current age, it is not very important here
     */
    resetFormIfAllZero(currentAge) {
      for (const age in agesGoods) {
        if (this.$data.values[age] > 0) {
          return;
        }
      }
      this.resetForm(currentAge);
    },

    haveError(key) {
      if (!(key in ages)) {
        return this.$data.errors[key] ? "is-danger" : "";
      }

      if (this.$data.values[key] > MAX_TRADE) {
        return "is-warning";
      }
    },

    compute() {
      const currentAge = this.$data.currentAge;
      for (const age in this.$props.tradeArray[currentAge]) {
        if (!Utils.inRange(this.$props.tradeArray[currentAge][age], MIN_DEFAULT_RATIO, MAX_DEFAULT_RATIO)) {
          continue;
        }

        const value = Math.round(this.$props.tradeArray[currentAge][age] * this.$data.values[currentAge]);
        let result = value;

        if (this.$data.split) {
          result = splitGoods(
            Utils.normalizeNumberValue(this.$data.values[currentAge]),
            Utils.normalizeNumberValue(this.$data.splitValue, 1000),
            this.$props.tradeArray[currentAge][age],
            this.$props.tradeArray[age][currentAge]
          );
          if (result[1].from === 0) {
            result = this.$t("components.trade.split_message.common", {
              count: this.$n(result[0].count),
              valueFrom: this.$n(result[0].from),
              ageFrom: this.$t("foe_data.age_short." + currentAge),
              valueTo: this.$n(result[0].to),
              ageTo: this.$t("foe_data.age_short." + age),
            });
          } else {
            result = this.$t("components.trade.split_message.multi", {
              count: this.$n(result[0].count),
              valueFrom: this.$n(result[0].from),
              ageFrom: this.$t("foe_data.age_short." + currentAge),
              valueTo: this.$n(result[0].to),
              ageTo: this.$t("foe_data.age_short." + age),
              secondPart: this.$t(i18nPrefix + "split_message.common", {
                count: 1,
                valueFrom: this.$n(result[1].from),
                valueTo: this.$n(result[1].to),
                ageFrom: this.$t("foe_data.age_short." + currentAge),
                ageTo: this.$t("foe_data.age_short." + age),
              }),
            });
          }
        }

        Vue.set(this.$data.results[age], "show", true);
        this.$data.results[age].value = this.$n(value);
        this.$data.results[age].split = result;
        this.$data.results[age].ratio = Utils.roundTo(this.$props.tradeArray[currentAge][age], 2);
      }
    },

    getBestRates(currentAge) {
      this.resetForm(currentAge);
      this.$data.currentAge = currentAge;
      this.compute();
    },
  },
  components: {
    YesNo,
    numberinput,
  },
};
