import Vue from "vue";
import { get } from "vuex-pathify";
import Utils from "~/scripts/utils";
import graphCanvas from "~/components/graph-canvas/GraphCanvas";
import numberinput from "~/components/number-input/NumberInput";

const i18nPrefix = "components.gb_statistics.";
const urlPrefix = "gbs_";
const queryKey = {
  statSelector: urlPrefix + "s",
  from: urlPrefix + "f",
  to: urlPrefix + "t",
  hidden: urlPrefix + "h",
};

let agesCost = {};
let gbsData = {};

export default {
  name: "GbStatistics",
  data() {
    agesCost = this.$store.get("foe/gbs@agesCost");
    gbsData = this.$store.get("foe/gbs@gbsData");

    const defaultFromGraph = 1;
    const defaultToGraph = 80;

    const obj = {
      i18nPrefix,
      graphType: {
        cost_level: {
          title: this.$t(i18nPrefix + "graph.title_1"),
          xAxesLabel: this.$t("utils.graph.gb_level"),
          yAxesLabel: this.$t("utils.graph.gb_level_cost"),
        },
        reward_level: {
          title: this.$t(i18nPrefix + "graph.title_2"),
          xAxesLabel: this.$t("utils.graph.gb_level"),
          yAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
        },
        reward_cost: {
          title: this.$t(i18nPrefix + "graph.title_3"),
          xAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
          yAxesLabel: this.$t("utils.graph.gb_level_cost"),
        },
        cost_reward: {
          title: this.$t(i18nPrefix + "graph.title_4"),
          xAxesLabel: this.$t("utils.graph.gb_level_cost"),
          yAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
        },
      },
      hidden: Array.from(new Array(Object.keys(agesCost).length), (_, x) => x !== 0),
      labels: [],
      datasets: [],
      options: {
        animation: false,
        responsive: true,
        stacked: true,
        title: {
          display: true,
          text: "",
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
                labelString: "",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "",
              },
              ticks: {
                suggestedMin: defaultFromGraph,
                suggestedMax: defaultToGraph,
              },
            },
          ],
        },
      },
      ageConfig: {
        Oracle: {
          name: this.$t("foe_data.age.Oracle"),
          color: "rgb(102,34,17)",
        },
        NoAge: {
          name: this.$t("foe_data.age.NoAge"),
          color: "rgb(102,34,17)",
        },
        BronzeAge: {
          name: this.$t("foe_data.age.BronzeAge"),
          color: "rgb(183,141,19)",
        },
        IronAge: {
          name: this.$t("foe_data.age.IronAge"),
          color: "rgb(152,68,32)",
        },
        EarlyMiddleAges: {
          name: this.$t("foe_data.age.EarlyMiddleAges"),
          color: "rgb(78,129,68)",
        },
        HighMiddleAges: {
          name: this.$t("foe_data.age.HighMiddleAges"),
          color: "rgb(47,142,142)",
        },
        LateMiddleAges: {
          name: this.$t("foe_data.age.LateMiddleAges"),
          color: "rgb(127,66,133)",
        },
        ColonialAge: {
          name: this.$t("foe_data.age.ColonialAge"),
          color: "rgb(206,100,4)",
        },
        IndustrialAge: {
          name: this.$t("foe_data.age.IndustrialAge"),
          color: "rgb(167,41,38)",
        },
        ProgressiveEra: {
          name: this.$t("foe_data.age.ProgressiveEra"),
          color: "rgb(182,137,91)",
        },
        ModernEra: {
          name: this.$t("foe_data.age.ModernEra"),
          color: "rgb(70,93,136)",
        },
        PostmodernEra: {
          name: this.$t("foe_data.age.PostmodernEra"),
          color: "rgb(141,146,146)",
        },
        ContemporaryEra: {
          name: this.$t("foe_data.age.ContemporaryEra"),
          color: "rgb(141,199,63)",
        },
        Tomorrow: {
          name: this.$t("foe_data.age.Tomorrow"),
          color: "rgb(123,137,137)",
        },
        TheFuture: {
          name: this.$t("foe_data.age.TheFuture"),
          color: "rgb(34,90,75)",
        },
        ArcticFuture: {
          name: this.$t("foe_data.age.ArcticFuture"),
          color: "rgb(67,66,66)",
        },
        OceanicFuture: {
          name: this.$t("foe_data.age.OceanicFuture"),
          color: "rgb(127,255,212)",
        },
        VirtualFuture: {
          name: this.$t("foe_data.age.VirtualFuture"),
          color: "rgb(85,271,39)",
        },
        SpaceAgeMars: {
          name: this.$t("foe_data.age.SpaceAgeMars"),
          color: "rgb(187,19,0)",
        },
        SpaceAgeAsteroidBelt: {
          name: this.$t("foe_data.age.SpaceAgeAsteroidBelt"),
          color: "rgb(9,78,189)",
        },
      },
      statSelector: "cost_level",
      maxLevelGraph: Object.keys(gbsData)
        .map((k) => gbsData[k])
        .map((item) => item.levels.length)
        .reduce((a, b) => Math.max(a, b), -Infinity),
      maxAgeCost: agesCost.VirtualFuture,
      from: defaultFromGraph,
      to: defaultToGraph,
      errors: {
        from: false,
        to: false,
      },
    };

    for (const gb in gbsData) {
      if (gbsData[gb].levels.length === obj.maxLevelGraph) {
        obj.maxAgeCost = agesCost[gbsData[gb].age];
      }
    }

    Object.assign(obj, this.checkQuery(obj));

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.statSelector,
      value: obj.statSelector,
    });

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.from,
      value: obj.from,
    });

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.to,
      value: obj.to,
    });

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.hidden,
      value: obj.hidden.map((k) => (k ? 1 : 0)).join(""),
    });

    this.updateGraphData(obj);

    return obj;
  },
  computed: {
    lang: get("locale"),
    permaLink() {
      return {
        name: "GbStatistics",
        query: this.$store.get("urlQuery"),
      };
    },
  },
  watch: {
    statSelector(val) {
      if (!Object.keys(this.$data.graphType).includes(val)) {
        return;
      }
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.statSelector,
        value: val,
      });
      this.updateGraphData();
    },
    lang() {
      Object.assign(this.$data, {
        graphType: {
          cost_level: {
            title: this.$t(i18nPrefix + "graph.title_1"),
            xAxesLabel: this.$t("utils.graph.gb_level"),
            yAxesLabel: this.$t("utils.graph.gb_level_cost"),
          },
          reward_level: {
            title: this.$t(i18nPrefix + "graph.title_2"),
            xAxesLabel: this.$t("utils.graph.gb_level"),
            yAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
          },
          reward_cost: {
            title: this.$t(i18nPrefix + "graph.title_3"),
            xAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
            yAxesLabel: this.$t("utils.graph.gb_level_cost"),
          },
          cost_reward: {
            title: this.$t(i18nPrefix + "graph.title_4"),
            xAxesLabel: this.$t("utils.graph.gb_level_cost"),
            yAxesLabel: this.$t("utils.graph.gb_reward_1st_place"),
          },
        },
        ageConfig: {
          Oracle: {
            name: this.$t("foe_data.age.Oracle"),
            color: "rgb(102,34,17)",
          },
          NoAge: {
            name: this.$t("foe_data.age.NoAge"),
            color: "rgb(102,34,17)",
          },
          BronzeAge: {
            name: this.$t("foe_data.age.BronzeAge"),
            color: "rgb(183,141,19)",
          },
          IronAge: {
            name: this.$t("foe_data.age.IronAge"),
            color: "rgb(152,68,32)",
          },
          EarlyMiddleAges: {
            name: this.$t("foe_data.age.EarlyMiddleAges"),
            color: "rgb(78,129,68)",
          },
          HighMiddleAges: {
            name: this.$t("foe_data.age.HighMiddleAges"),
            color: "rgb(47,142,142)",
          },
          LateMiddleAges: {
            name: this.$t("foe_data.age.LateMiddleAges"),
            color: "rgb(127,66,133)",
          },
          ColonialAge: {
            name: this.$t("foe_data.age.ColonialAge"),
            color: "rgb(206,100,4)",
          },
          IndustrialAge: {
            name: this.$t("foe_data.age.IndustrialAge"),
            color: "rgb(167,41,38)",
          },
          ProgressiveEra: {
            name: this.$t("foe_data.age.ProgressiveEra"),
            color: "rgb(182,137,91)",
          },
          ModernEra: {
            name: this.$t("foe_data.age.ModernEra"),
            color: "rgb(70,93,136)",
          },
          PostmodernEra: {
            name: this.$t("foe_data.age.PostmodernEra"),
            color: "rgb(141,146,146)",
          },
          ContemporaryEra: {
            name: this.$t("foe_data.age.ContemporaryEra"),
            color: "rgb(141,199,63)",
          },
          Tomorrow: {
            name: this.$t("foe_data.age.Tomorrow"),
            color: "rgb(123,137,137)",
          },
          TheFuture: {
            name: this.$t("foe_data.age.TheFuture"),
            color: "rgb(34,90,75)",
          },
          ArcticFuture: {
            name: this.$t("foe_data.age.ArcticFuture"),
            color: "rgb(67,66,66)",
          },
          OceanicFuture: {
            name: this.$t("foe_data.age.OceanicFuture"),
            color: "rgb(127,255,212)",
          },
          VirtualFuture: {
            name: this.$t("foe_data.age.VirtualFuture"),
            color: "rgb(85,271,39)",
          },
          SpaceAgeMars: {
            name: this.$t("foe_data.age.SpaceAgeMars"),
            color: "rgb(187,19,0)",
          },
          SpaceAgeAsteroidBelt: {
            name: this.$t("foe_data.age.SpaceAgeAsteroidBelt"),
            color: "rgb(9,78,189)",
          },
        },
      });

      this.updateGraphData();
    },
    from(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.from = true;
        return;
      }

      if (
        Utils.handlerForm(this, "from", !val || val.length === 0 ? 0 : val, oldVal, [1, this.normalizedTo()]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.from,
          value: val,
        });
        this.updateGraphData();
      }
    },
    to(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.to = true;
        return;
      }

      const value = !val || val.length === 0 ? 0 : val;

      if (
        Utils.handlerForm(this, "to", value, oldVal, [this.normalizedFrom(), this.$data.maxLevelGraph]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.to,
          value: val,
        });
        if (this.$data.errors.from) {
          if (value >= this.$data.errors.from) {
            this.$data.errors.from = false;
            this.updateGraphData();
          }
        } else {
          this.updateGraphData();
        }
      }
    },
    hidden(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.hidden,
        value: val.map((k) => (k ? 1 : 0)).join(""),
      });
    },
  },
  methods: {
    normalizedFrom() {
      return Utils.normalizeNumberValue(this.$data.from, 1);
    },
    normalizedTo() {
      return Utils.normalizeNumberValue(this.$data.to, 1);
    },
    updateData(
      statSelector,
      graphType,
      ageConfig,
      maxAgeCost,
      from = this.normalizedFrom(),
      to = this.normalizedTo(),
      hidden = this.$data.hidden
    ) {
      const data = {};
      const datasets = [];
      let suggestedMin = Infinity;
      let suggestedMax = -Infinity;

      const labels = Array.from(new Array(to - from + 1), (x, i) => {
        if (statSelector !== "reward_cost" && statSelector !== "cost_reward") {
          return i + from;
        }
        if (statSelector !== "reward_cost") {
          return maxAgeCost[i].cost;
        } else {
          return maxAgeCost[i].reward[0];
        }
      });

      for (const elt in agesCost) {
        data[elt] = agesCost[elt].slice(from - 1, to + 1).map((x) => {
          if (statSelector === "cost_level" || statSelector === "reward_cost") {
            suggestedMin = x.cost < suggestedMin ? x.cost : suggestedMin;
            suggestedMax = x.cost > suggestedMax ? x.cost : suggestedMax;
            return x.cost;
          } else {
            suggestedMin = x.reward[0] < suggestedMin ? x.reward[0] : suggestedMin;
            suggestedMax = x.reward[0] > suggestedMax ? x.reward[0] : suggestedMax;
            return x.reward[0];
          }
        });
      }
      let index = 0;
      for (const elt in agesCost) {
        datasets.push({
          hidden: hidden[index++],
          label: ageConfig[elt].name,
          fill: false,
          lineTension: 0,
          backgroundColor: Utils.shadeRGBColor(ageConfig[elt].color, 0.5),
          borderColor: ageConfig[elt].color,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: Utils.shadeRGBColor(ageConfig[elt].color, -0.3),
          pointBackgroundColor: Utils.shadeRGBColor(ageConfig[elt].color, 0.3),
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data[elt],
        });
      }
      return {
        title: graphType[statSelector].title,
        xAxesLabel: graphType[statSelector].xAxesLabel,
        yAxesLabel: graphType[statSelector].yAxesLabel,
        suggestedMin,
        suggestedMax,
        labels,
        datasets,
      };
    },
    updateGraphData(obj = this.$data) {
      const result = this.updateData(
        obj.statSelector,
        obj.graphType,
        obj.ageConfig,
        obj.maxAgeCost,
        obj.from,
        obj.to,
        obj.hidden
      );

      obj.options.title.text = result.title;
      obj.options.scales.xAxes[0].scaleLabel.labelString = result.xAxesLabel;
      obj.options.scales.yAxes[0].scaleLabel.labelString = result.yAxesLabel;
      obj.options.scales.yAxes[0].ticks.suggestedMin = result.suggestedMin;
      obj.options.scales.yAxes[0].ticks.suggestedMax = result.suggestedMax;
      obj.labels = result.labels;
      obj.datasets = result.datasets;
    },
    switchVisibility(index) {
      if (Utils.inRange(index, 0, this.$data.hidden.length - 1)) {
        Vue.set(this.$data.hidden, index, !this.$data.hidden[index]);
      }
    },
    checkQuery(obj) {
      const result = {};
      result.hidden = obj.hidden;
      let change = Utils.FormCheck.NO_CHANGE;

      if (this.$route.query[queryKey.statSelector] && this.$route.query[queryKey.statSelector] in obj.graphType) {
        change = Utils.FormCheck.VALID;
        result.statSelector = this.$route.query[queryKey.statSelector];
      }

      if (
        this.$route.query[queryKey.from] &&
        !isNaN(this.$route.query[queryKey.from]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.from]), 1, obj.maxLevelGraph)
      ) {
        change = Utils.FormCheck.VALID;
        result.from = parseInt(this.$route.query[queryKey.from]);
      }

      if (
        this.$route.query[queryKey.to] &&
        !isNaN(this.$route.query[queryKey.to]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.to]), 1, obj.maxLevelGraph) &&
        (parseInt(this.$route.query[queryKey.to]) >= obj.from ||
          parseInt(this.$route.query[queryKey.to]) >= result.from)
      ) {
        change = Utils.FormCheck.VALID;
        result.to = parseInt(this.$route.query[queryKey.to]);
      }

      if (this.$route.query[queryKey.hidden]) {
        change = Utils.FormCheck.VALID;
        const hidden = this.$route.query[queryKey.hidden].split("").map((k) => k !== "0");
        Array.prototype.splice.apply(obj.hidden, [0, hidden.length].concat(hidden));
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.set("isPermalink", true);
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },
  },
  components: {
    graphCanvas,
    numberinput,
  },
};
