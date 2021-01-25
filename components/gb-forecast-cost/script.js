import Vue from "vue";

import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import graphCanvas from "~/components/graph-canvas/GraphCanvas";
import YesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";

const i18nPrefix = "components.gb_forecast_cost.";
const urlPrefix = "gbfc_";
const defaultArcPercentage = 0;
const defaultFrom = 1;
const defaultTo = 10;
let oldInvestorPercentageCustom;
let oldMaxLevel = 0;
let oldFromInput = 0;
let gbsData = {};

const queryKey = {
  gb: urlPrefix + "gb",
  from: urlPrefix + "f",
  to: urlPrefix + "t",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "p",
  cp: urlPrefix + "cp",
  fpBy24h: urlPrefix + "fp",
  alreadyInvested: urlPrefix + "ai",
};

const inputComparator = {
  from: { comparator: [">=", 1], type: "int" },
  to: { comparator: [">=", 1], type: "int" },
  investorPercentageGlobal: { comparator: [">=", 0], type: "float" },
  investorPercentageCustom: { comparator: [">=", 0], type: "float" },
  fpBy24h: { comparator: [">=", 0] },
  alreadyInvested: { comparator: [">=", 0] },
};

let defaultGb = {};

export default {
  name: "GbForecastCost",
  props: {
    canPermalink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.$moment.locale(this.$store.get("locale"));
    gbsData = this.$store.get("foe/gbs@gbsData");
    defaultGb = this.$clone(gbsData[Object.keys(gbsData)[0]]);

    const data = {
      i18nPrefix,
      labels: [],
      datasets: [],
      options: {
        responsive: true,
        title: {
          display: true,
          text: this.$t(i18nPrefix + "graph.title", {
            gb: "foe_data.gb." + defaultGb.key,
          }),
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: this.$t(i18nPrefix + "graph.x_axes_label"),
              },
              ticks: {
                suggestedMin: defaultFrom,
                suggestedMax: defaultTo,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: this.$t(i18nPrefix + "graph.y_axes_label"),
              },
            },
          ],
        },
      },
      gb: defaultGb,
      maxLevel: defaultGb.levels.length,
      from: defaultFrom,
      to: defaultTo,
      investorPercentageGlobal: defaultArcPercentage,
      investorPercentageCustom: Array.from(new Array(5), () => defaultArcPercentage),
      customPercentage: false,
      fpBy24h: 0,
      alreadyInvested: 0,
      estimatedTime: "",
      estimatedTimeSwapThreads: "",
      errors: {
        from: false,
        to: false,
        percentageValueGlobal: false,
        alreadyInvested: false,
        investorPercentageCustom_0: false,
        investorPercentageCustom_1: false,
        investorPercentageCustom_2: false,
        investorPercentageCustom_3: false,
        investorPercentageCustom_4: false,
      },
      previsionResult: null,
      previsionDefault: gbProcess.ComputeLevelInvestmentRange(
        defaultFrom,
        defaultTo,
        Array.from(new Array(5), () => defaultArcPercentage),
        defaultGb.levels
      ),
    };

    Object.assign(data, this.checkQuery(data));

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.gb,
      value: data.gb.key,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.from,
      value: data.from,
    });
    this.$store.commit("ADD_URL_QUERY", { key: queryKey.to, value: data.to });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorPercentageGlobal,
      value: data.investorPercentageGlobal,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.cp,
      value: data.customPercentage ? 1 : 0,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpBy24h,
      value: data.fpBy24h,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.alreadyInvested,
      value: data.alreadyInvested,
    });

    for (let i = 0; i < 5; i++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (i + 1),
        value: data.investorPercentageCustom[i],
      });
    }

    oldInvestorPercentageCustom = JSON.parse(JSON.stringify(data.investorPercentageCustom));

    return data;
  },
  computed: {
    fromInput: {
      get() {
        return this.normalizedFrom() - 1;
      },
      set(val) {
        if (val >= this.$data.to) {
          this.$data.to = Math.min(val + 1, this.maxLevel - 1);
        }
        this.$data.from = val + 1;
        oldFromInput = val + 1;
      },
    },
    toInput: {
      get() {
        return this.normalizedTo();
      },
      set(val) {
        if (val <= this.fromInput) {
          this.fromInput = Math.max(val - 1, 0);
        }
        this.$data.to = val;
      },
    },
    lang() {
      return this.$store.get("locale");
    },
    permaLink() {
      return {
        name: "GbForecastCost",
        query: this.$store.get("urlQuery"),
      };
    },
    maxCurrentLevel() {
      return Utils.inRange(this.normalizedFrom(), 1, this.$data.gb.levels.length)
        ? this.$data.gb.levels[this.normalizedFrom()].cost
        : oldMaxLevel;
    },
    duration() {
      if (this.$data.fpBy24h > 0) {
        const result = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / this.$data.fpBy24h
        );
        return result < 0 ? 0 : result;
      } else {
        return 0;
      }
    },
  },
  watch: {
    lang() {
      this.$moment.locale(this.$store.get("locale"));
      if (this.$data.fpBy24h > 0) {
        const duration = Math.ceil(this.$data.previsionResult.global.totalPreparations / this.$data.fpBy24h);
        this.$data.estimatedTime = Utils.getFormatedDuration(this.$moment.duration(duration, "days"), this.$i18n);
        this.$data.estimatedTimeSwapThreads = Utils.getFormatedDuration(
          this.$moment.duration(Math.ceil(this.$data.previsionResult.global.cost / this.$data.fpBy24h), "days"),
          this.$i18n
        );
      }

      this.updatePrevisionGraph();
    },
    gb(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.gb,
        value: val.key,
      });
    },
    from(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.from = true;
        return;
      }

      if (
        Utils.handlerForm(this, "from", !val || val.length === 0 ? 1 : val, oldVal, [1, this.normalizedTo()]) ===
        Utils.FormCheck.VALID
      ) {
        oldMaxLevel = val;
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.from,
          value: val,
        });
        this.calculate();
      }
    },
    to(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.to = true;
        return;
      }

      if (
        Utils.handlerForm(this, "to", !val || val.length === 0 ? 0 : val, oldVal, [
          this.normalizedFrom(),
          this.$data.maxLevel,
        ]) === Utils.FormCheck.VALID
      ) {
        if (this.$data.errors.from) {
          if (this.checkFrom(oldFromInput)) {
            this.$store.commit("UPDATE_URL_QUERY", {
              key: queryKey.to,
              value: val,
            });
            this.$data.errors.from = false;
            this.calculate();
          }
        } else {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.to,
            value: val,
          });
          this.calculate();
        }
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [">=", 0],
          false,
          this.$route.params.gb + "_investorPercentageGlobal",
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val,
        });

        for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val,
          });
          this.$data.investorPercentageCustom[index] = val;
        }

        this.calculate();
      }
    },
    investorPercentageCustom(val) {
      let result = Utils.FormCheck.VALID;
      for (let index = 0; index < val.length; index++) {
        if (typeof val[index] !== "number") {
          return;
        }
        if (
          Utils.handlerForm(
            this,
            "investorPercentageCustom_" + index,
            val[index].length === 0 ? 0 : val[index],
            oldInvestorPercentageCustom[index],
            [">=", 0],
            false,
            this.$route.params.gb + "_investorPercentageCustom_" + index,
            "float"
          ) === Utils.FormCheck.INVALID
        ) {
          result = Utils.FormCheck.INVALID;
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        for (let index = 0; index < val.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val[index],
          });
        }
        this.calculate();
      }
    },
    customPercentage(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.cp,
        value: val ? 1 : 0,
      });
      for (let i = 0; i < 5; i++) {
        this.$data.investorPercentageCustom[i] = Utils.normalizeNumberValue(this.$data.investorPercentageGlobal);
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageCustom + (i + 1),
          value: Utils.normalizeNumberValue(this.$data.investorPercentageGlobal),
        });
      }
    },
    fpBy24h(val) {
      if (val > 0 && this.$data.previsionResult !== null) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: val,
        });
        this.$data.duration = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / val
        );
        this.$data.estimatedTime = Utils.getFormatedDuration(
          this.$moment.duration(this.$data.duration, "days"),
          this.$i18n
        );
        this.$data.estimatedTimeSwapThreads = Utils.getFormatedDuration(
          this.$moment.duration(
            Math.ceil((this.$data.previsionResult.global.cost - this.$data.alreadyInvested) / val),
            "days"
          ),
          this.$i18n
        );
      } else {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: 0,
        });
        this.$data.estimatedTime = "";
        this.$data.estimatedTimeSwapThreads = "";
      }
    },
    alreadyInvested(val, oldVal) {
      if (
        Utils.handlerForm(this, "alreadyInvested", val.length === 0 ? 0 : val, oldVal, [0, this.maxCurrentLevel]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.alreadyInvested,
          value: val,
        });
        this.$data.duration = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / this.$data.fpBy24h
        );
        this.$data.estimatedTime = Utils.getFormatedDuration(
          this.$moment.duration(this.$data.duration, "days"),
          this.$i18n
        );
        this.$data.estimatedTimeSwapThreads = Utils.getFormatedDuration(
          this.$moment.duration(
            Math.ceil((this.$data.previsionResult.global.cost - this.$data.alreadyInvested) / this.$data.fpBy24h),
            "days"
          ),
          this.$i18n
        );
      }
    },
  },
  methods: {
    normalizedFrom() {
      return Utils.normalizeNumberValue(this.$data.from, 1);
    },
    normalizedTo() {
      return Utils.normalizeNumberValue(this.$data.to, 1);
    },
    checkFrom(val) {
      if (val.length === 0) {
        Vue.set(this.$data.errors, "from", true);
        return false;
      }
      if (
        Utils.handlerForm(this, "from", val, this.normalizedFrom(), [1, this.normalizedTo()]) === Utils.FormCheck.VALID
      ) {
        Vue.set(this.$data.errors, "from", false);
        Vue.set(this.$data, "from", val);
        return true;
      }
      return false;
    },
    changeGb(key) {
      this.$data.gb = JSON.parse(JSON.stringify(gbsData[key]));
      this.$data.maxLevel = this.$data.gb.levels.length;
      this.$data.from = this.normalizedFrom() > this.$data.maxLevel ? defaultFrom : this.normalizedFrom();
      this.$data.to = this.normalizedTo() > this.$data.maxLevel ? this.$data.maxLevel : this.normalizedTo();
      this.calculate();
    },
    updatePrevisionGraph() {
      const datasets = [];
      const labels = Array.from(
        new Array(this.normalizedTo() - this.normalizedFrom() + 1),
        (x, i) => i + this.normalizedFrom()
      );

      const chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      };

      const defaultAlpha = 0.1;

      const chartColorsAlpha = {
        red: "rgba(255, 99, 132, " + defaultAlpha + ")",
        orange: "rgba(255, 159, 64, " + defaultAlpha + ")",
        yellow: "rgba(255, 205, 86, " + defaultAlpha + ")",
        green: "rgba(75, 192, 192, " + defaultAlpha + ")",
        blue: "rgba(54, 162, 235, " + defaultAlpha + ")",
        purple: "rgba(153, 102, 255, " + defaultAlpha + ")",
        grey: "rgba(201, 203, 207, " + defaultAlpha + ")",
      };

      const data = [
        {
          label: this.$t(i18nPrefix + "graph.label.default"),
          data: this.$data.previsionDefault.levels.map((x) => x.cost),
          color: chartColors.orange,
          color_alpha: chartColorsAlpha.orange,
        },
        {
          label: this.$t(i18nPrefix + "graph.label.default_preparation"),
          data: this.$data.previsionDefault.levels.map((x) => x.totalPreparations),
          color: chartColors.blue,
          color_alpha: chartColorsAlpha.blue,
        },
      ];

      if (
        this.$data.previsionResult !== null &&
        this.$data.previsionResult.global.totalPreparations !== this.$data.previsionDefault.global.totalPreparations
      ) {
        data.push({
          label: this.$t(i18nPrefix + "graph.label.custom_preparation"),
          data: this.$data.previsionResult.levels.map((x) => x.totalPreparations),
          color: chartColors.purple,
          color_alpha: chartColorsAlpha.purple,
        });
      }

      for (const elt of data) {
        datasets.push({
          label: elt.label,
          fill: "start",
          lineTension: 0,
          backgroundColor: elt.color_alpha,
          borderColor: elt.color,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: Utils.shadeRGBColor(elt.color, -0.3),
          pointBackgroundColor: Utils.shadeRGBColor(elt.color, 0.3),
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointRadius: 1,
          pointHitRadius: 10,
          data: elt.data,
        });
      }

      this.$data.datasets = datasets;
      this.$data.labels = labels;
      this.$data.options.title.text = this.$t(i18nPrefix + "graph.title", {
        gb: this.$t("foe_data.gb." + this.$data.gb.key),
      });
      this.$data.options.scales.xAxes[0].scaleLabel.labelString = this.$t(i18nPrefix + "graph.x_axes_label");
      this.$data.options.scales.xAxes[0].ticks.suggestedMin = this.normalizedFrom();
      this.$data.options.scales.xAxes[0].ticks.suggestedMax = this.normalizedTo();
      this.$data.options.scales.yAxes[0].scaleLabel.labelString = this.$t(i18nPrefix + "graph.y_axes_label");
    },
    calculate() {
      this.$data.previsionDefault = gbProcess.ComputeLevelInvestmentRange(
        this.normalizedFrom(),
        this.normalizedTo(),
        [0, 0, 0, 0, 0],
        this.$data.gb.levels
      );

      this.$data.previsionResult = gbProcess.ComputeLevelInvestmentRange(
        this.normalizedFrom(),
        this.normalizedTo(),
        this.$data.investorPercentageCustom.map((k) => (!k || k.length === 0 || typeof k !== "number" ? 0 : k)),
        this.$data.gb.levels
      );

      if (this.$data.fpBy24h > 0) {
        const duration = Math.ceil(this.$data.previsionResult.global.totalPreparations / this.$data.fpBy24h);
        this.$data.estimatedTime = Utils.getFormatedDuration(this.$moment.duration(duration, "days"), this.$i18n);
        this.$data.estimatedTimeSwapThreads = Utils.getFormatedDuration(
          this.$moment.duration(Math.ceil(this.$data.previsionResult.global.cost / this.$data.fpBy24h), "days"),
          this.$i18n
        );
      }
      this.updatePrevisionGraph();
    },
    checkQuery(data) {
      const noCheck = ["from", "to", "investorPercentageCustom"];
      const result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let investorPercentageCustom = Array.apply(null, Array(5)).map(() => defaultArcPercentage);
      let tmp;
      let from = data.from;
      let to = data.to;
      let fromToChange = 0;
      let customPercentage = data.customPercentage;

      if (this.$route.query[queryKey.gb] && this.$route.query[queryKey.gb] in gbsData) {
        change = Utils.FormCheck.VALID;
        result.gb = JSON.parse(JSON.stringify(gbsData[this.$route.query[queryKey.gb]]));
      }

      for (const key in inputComparator) {
        if (!(key in noCheck)) {
          tmp = Utils.checkFormNumeric(
            this.$route.query[queryKey[key]],
            -1,
            inputComparator[key].comparator,
            inputComparator[key].type
          );
          if (tmp.state === Utils.FormCheck.VALID) {
            change = Utils.FormCheck.VALID;
            result[key] = tmp.value;
            if (key === "investorPercentageGlobal") {
              investorPercentageCustom = Array.apply(null, Array(5)).map(() => tmp.value);
            }
          }
        }
      }

      if (
        this.$route.query[queryKey.from] &&
        !isNaN(this.$route.query[queryKey.from]) &&
        parseInt(this.$route.query[queryKey.from]) >= 1
      ) {
        fromToChange++;
        from = parseInt(this.$route.query[queryKey.from]);
      }

      if (
        this.$route.query[queryKey.to] &&
        !isNaN(this.$route.query[queryKey.to]) &&
        parseInt(this.$route.query[queryKey.to]) >= 1
      ) {
        fromToChange++;
        to = parseInt(this.$route.query[queryKey.to]);
      }

      if (fromToChange > 0 && from <= to) {
        change = Utils.FormCheck.VALID;
        result.from = from;
        result.to = to;
      }

      if (
        this.$route.query[queryKey.cp] &&
        !isNaN(this.$route.query[queryKey.cp]) &&
        parseInt(this.$route.query[queryKey.cp]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result.customPercentage = parseInt(this.$route.query[queryKey.cp]) === 1;
        customPercentage = result.customPercentage;
      }

      if (customPercentage) {
        for (let i = 0; i < 5; i++) {
          tmp = Utils.checkFormNumeric(
            this.$route.query[queryKey.investorPercentageCustom + (i + 1)],
            -1,
            inputComparator.investorPercentageCustom.comparator,
            inputComparator.investorPercentageCustom.type
          );
          if (tmp.state === Utils.FormCheck.VALID) {
            change = Utils.FormCheck.VALID;
            investorPercentageCustom[i] = tmp.value;
          }
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.set("isPermalink", true);
        result.investorPercentageCustom = investorPercentageCustom;
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },
  },
  mounted() {
    this.calculate();
  },
  components: {
    gbListSelect,
    graphCanvas,
    YesNo,
    numberinput,
  },
};
