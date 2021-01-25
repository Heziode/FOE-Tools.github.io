import Vue from "vue";
import clone from "lodash.clonedeep";
import set from "lodash.set";
import lodashValues from "lodash.values";
import allAges from "~/lib/foe-data/ages";
import Utils from "~/scripts/utils";

const i18nPrefix = "components.campaign_cost.";
let agesGoods = {};
let campaignCost = {};

const ages = clone(allAges);
delete ages.NoAge;

export default {
  name: "CampaignCost",
  data() {
    campaignCost = this.$clone(this.$store.get("foe/campaignCost@campaignCost"));
    const campaignTotalCost = this.$clone(this.$store.get("foe/campaignCost@campaignTotalCost"));
    agesGoods = this.$store.get("foe/goods@agesGoods");
    const campaignConquired = this.$clone(
      this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.campaign`)
    );

    const provinces = this.sortProvinceArray(campaignCost, ages.BronzeAge.key);

    return {
      i18nPrefix,
      ages,
      agesGoods,
      campaignConquired,
      campaignCost,
      campaignTotalCost,
      currentAge: ages.BronzeAge.key,
      province: provinces[Object.keys(provinces)[0]],
      result: null,
      haveUnknownCosts: false,
      errors: {
        currentAge: false,
        province: false,
      },
    };
  },
  computed: {
    nbColumns() {
      if (this.$data.currentAge === "__all__") {
        return (
          (Object.keys(this.$data.campaignTotalCost._totalCost).length - 1) * 5 +
          Object.keys(this.$data.campaignTotalCost._totalCost._specialGoods).length +
          2
        );
      } else if (this.$data.province === "__all__") {
        return (
          (Object.keys(this.$data.campaignTotalCost[this.$data.currentAge]._totalCost).length - 1) * 5 +
          Object.keys(this.$data.campaignTotalCost[this.$data.currentAge]._totalCost._specialGoods).length +
          2
        );
      } else {
        return (
          (Object.keys(
            this.$data.campaignTotalCost[this.$data.currentAge].provinces[this.$data.province.key]._totalCost
          ).length -
            1) *
            5 +
          Object.keys(
            this.$data.campaignTotalCost[this.$data.currentAge].provinces[this.$data.province.key]._totalCost
              ._specialGoods
          ).length +
          2
        );
      }
    },
  },
  watch: {
    currentAge(val) {
      if (Object.keys(this.$data.ages).includes(val)) {
        this.$data.errors.currentAge = false;
        this.$data.province = this.sortProvinceArray(campaignCost, val)[Object.keys(campaignCost[val])[0]];
      } else this.$data.errors.currentAge = val !== "__all__";
    },

    province(val) {
      if (Object.keys(campaignCost[this.$data.currentAge]).includes(val.key)) {
        this.$data.errors.province = false;
      } else this.$data.errors.province = val !== "__all__";
    },
    campaignConquired: {
      handler() {
        this.$store.set(
          `profile/profiles@${this.$store.get("global/currentProfile")}.campaign`,
          this.$clone(this.campaignConquired)
        );
      },
      deep: true,
    },
  },
  methods: {
    haveError(key) {
      return this.$data.errors[key] ? "is-danger" : "";
    },

    sortProvinceArray(campaignCost, currentAge) {
      const ordered = {};
      Object.keys(campaignCost[currentAge])
        .sort((a, b) => {
          return this.$t("foe_data.province." + a) > this.$t("foe_data.province." + b)
            ? 1
            : this.$t("foe_data.province." + b) > this.$t("foe_data.province." + a)
            ? -1
            : 0;
        })
        .forEach(function (key) {
          ordered[key] = campaignCost[currentAge][key];
        });
      return ordered;
    },

    updateConquiredValue(campaignTotalCost, path, value) {
      const update = (info, namespace) => {
        // Update total cost of province
        campaignTotalCost[path.age].provinces[path.province]._totalCost[namespace][info.key].value +=
          info.value * (value ? -1 : 1);
        // Update total cost of age
        campaignTotalCost[path.age]._totalCost[namespace][info.key].value += info.value * (value ? -1 : 1);
        // Update total cost of all
        campaignTotalCost._totalCost[namespace][info.key].value += info.value * (value ? -1 : 1);
      };

      for (const age in campaignTotalCost[path.age].provinces[path.province].sectors[path.sector]) {
        let info;
        if (age in ages) {
          for (const good in campaignTotalCost[path.age].provinces[path.province].sectors[path.sector][age]) {
            info = campaignTotalCost[path.age].provinces[path.province].sectors[path.sector][age][good];
            update(info, info.age);
          }
        } else {
          for (const specialGood in campaignTotalCost[path.age].provinces[path.province].sectors[path.sector]
            ._specialGoods) {
            info = campaignTotalCost[path.age].provinces[path.province].sectors[path.sector]._specialGoods[specialGood];
            update(info, "_specialGoods");
          }
        }
      }
    },

    switchConquired(path, value) {
      const updateProgression = (path) => {
        const ref = this.campaignConquired[path.age][path.province].sectors[0];
        for (let i = 1; i < this.campaignConquired[path.age][path.province].sectors.length; i++) {
          if (ref !== this.campaignConquired[path.age][path.province].sectors[i]) {
            Vue.set(this.campaignConquired[path.age][path.province], "_state", -1);
            Vue.set(this.campaignConquired[path.age], "_state", -1);
            return;
          }
        }
        Vue.set(this.campaignConquired[path.age][path.province], "_state", ref ? 1 : 0);

        let previousState;
        for (const province in this.campaignConquired[path.age]) {
          if (this.campaignConquired[path.age][province]._state === -1) {
            Vue.set(this.campaignConquired[path.age], "_state", -1);
            return;
          }

          if (Utils.isNullOrUndef(previousState)) {
            previousState = this.campaignConquired[path.age][province]._state;
            continue;
          }
          if (previousState !== this.campaignConquired[path.age][province]._state) {
            Vue.set(this.campaignConquired[path.age], "_state", -1);
            return;
          }
        }

        Vue.set(this.campaignConquired[path.age], "_state", previousState);
      };

      const updateProgressionProvince = (path) => {
        Vue.set(
          this.campaignConquired[path.age][path.province],
          "sectors",
          Array.from(new Array(this.campaignConquired[path.age][path.province].sectors.length), () => !!value)
        );
        Vue.set(this.campaignConquired[path.age][path.province], "_state", value ? 1 : 0);

        // Update values
        for (let i = 0; i < this.campaignTotalCost[path.age].provinces[path.province].sectors.length; i++) {
          const previousConquiredState = this.campaignConquired[path.age][path.province].sectors[i];
          if (previousConquiredState !== value) {
            this.updateConquiredValue(this.$data.campaignTotalCost, { ...path, sector: i }, value);
          }
        }
        updateProgression(path);
      };

      if ("sector" in path) {
        Vue.set(this.campaignConquired[path.age][path.province].sectors, path.sector, !!value);

        // Update values
        this.updateConquiredValue(this.$data.campaignTotalCost, path, value);

        // Update progression
        updateProgression(path);
      } else if ("province" in path) {
        updateProgressionProvince(path);
      } else {
        for (const province in this.campaignTotalCost[path.age].provinces) {
          updateProgressionProvince({ ...path, province });
        }
      }

      this.$store.set(
        `profile/profiles@${this.$store.get("global/currentProfile")}.campaign`,
        this.$clone(this.campaignConquired)
      );
    },

    getGoodsOrSpecialGoods(getGood) {
      let obj;
      if (this.$data.currentAge === "__all__") {
        obj = this.$clone(this.$data.campaignTotalCost._totalCost);
      } else if (this.$data.province === "__all__") {
        obj = this.$clone(this.$data.campaignTotalCost[this.$data.currentAge]._totalCost);
      } else {
        obj = this.$clone(
          this.$data.campaignTotalCost[this.$data.currentAge].provinces[this.$data.province.key]._totalCost
        );
      }

      if (getGood) {
        delete obj._specialGoods;
        let result = [];
        for (const age in obj) {
          result = [...result, ...lodashValues(obj[age])];
        }
        return result;
      } else {
        return lodashValues(obj._specialGoods);
      }
    },
  },
  beforeMount() {
    if (!this.campaignConquired) {
      this.campaignConquired = {};
    }
    let campaignConquiredUpdated = false;
    for (const age in campaignCost) {
      if (!(age in this.campaignConquired)) {
        set(this.campaignConquired, age, { _state: 0 });
        campaignConquiredUpdated = true;
      }

      for (const province in campaignCost[age]) {
        if (!(province in this.campaignConquired[age])) {
          set(this.campaignConquired, `${age}.${province}`, { _state: 0, sectors: [] });
          campaignConquiredUpdated = true;
        }

        for (let sectorIndex = 0; sectorIndex < campaignCost[age][province].sectors.length; sectorIndex++) {
          if (this.campaignConquired[age][province].sectors.length <= sectorIndex) {
            set(this.campaignConquired, `${age}.${province}.sectors[${sectorIndex}]`, false);
            campaignConquiredUpdated = true;
          }
        }
      }
    }

    if (campaignConquiredUpdated) {
      this.$store.set(
        `profile/profiles@${this.$store.get("global/currentProfile")}.campaign`,
        this.$clone(this.campaignConquired)
      );
    }

    for (const age in ages) {
      for (const province in this.$data.campaignTotalCost[age].provinces) {
        for (let i = 0; i < this.$data.campaignTotalCost[age].provinces[province].sectors.length; i++) {
          if (!this.campaignConquired[age][province].sectors[i]) {
            continue;
          }
          this.updateConquiredValue(this.$data.campaignTotalCost, { age, province, sector: i }, true);
        }
      }
    }
  },
};
