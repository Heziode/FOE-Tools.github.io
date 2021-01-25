import { get } from "vuex-pathify";
import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import numberinput from "~/components/number-input/NumberInput";

const i18nPrefix = "components.secure_position.";
const urlPrefix = "sp_";

const queryKey = {
  levelCost: urlPrefix + "lc",
  currentDeposits: urlPrefix + "cd",
  yourParticipation: urlPrefix + "yp",
  otherParticipation: urlPrefix + "op",
  yourArcBonus: urlPrefix + "yab",
  fpTargetReward: urlPrefix + "ftr",
};

const inputComparator = {
  levelCost: { comparator: [">", 0], type: "int" },
  currentDeposits: { comparator: [">=", 0], type: "int" },
  yourParticipation: { comparator: [">=", 0], type: "int" },
  otherParticipation: { comparator: [">=", 0], type: "int" },
  yourArcBonus: { comparator: [">=", 0], type: "float" },
  fpTargetReward: { comparator: [">=", 0], type: "int" },
};

export default {
  name: "SecurePosition",
  props: {
    levelData: {
      type: Object,
      default: null,
    },
    canPermalink: {
      type: Boolean,
      default: false,
    },
    ns: {
      type: String,
      default: "",
    },
    customYourArcBonus: {
      type: Number | Boolean,
      default: false,
    },
    canCustomYourArcBonus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const data = {
      i18nPrefix,
      fp: 0,
      yourParticipation: 0,
      otherParticipation: 0,
      levelCost: this.haveInputLevelCost() ? this.$props.levelData.cost : 0,
      currentDeposits: 0,
      yourArcBonus:
        this.$props.customYourArcBonus !== false
          ? this.$props.customYourArcBonus
          : this.$clone(
              this.$store.get(`profile/profiles@[${this.$store.get("global/currentProfile")}].yourArcBonus)`)
            ),
      fpTargetReward: 0,
      roi: 0,
      formValid: false,
      variousRate: [
        { rate: 90, displayRate: 1.9, result: null },
        { rate: 85, displayRate: 1.85, result: null },
        { rate: 80, displayRate: 1.8, result: null },
        { rate: 75, displayRate: 1.75, result: null },
        { rate: 70, displayRate: 1.7, result: null },
      ],
      errors: {
        levelCost: false,
        currentDeposits: false,
        yourParticipation: false,
        otherParticipation: false,
        yourArcBonus: false,
        fpTargetReward: false,
      },
      change: this.haveInputLevelCost(),
    };

    Object.assign(data, this.checkQuery());

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.levelCost,
      value: data.levelCost,
      ns: this.$props.ns,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.currentDeposits,
      value: data.currentDeposits,
      ns: this.$props.ns,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourParticipation,
      value: data.yourParticipation,
      ns: this.$props.ns,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.otherParticipation,
      value: data.otherParticipation,
      ns: this.$props.ns,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourArcBonus,
      value: data.yourArcBonus,
      ns: this.$props.ns,
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpTargetReward,
      value: data.fpTargetReward,
      ns: this.$props.ns,
    });

    return data;
  },
  computed: {
    isPermalink: get("isPermalink"),
    permaLink() {
      return {
        name: "SecurePosition",
        query: this.$store.getters.getUrlQuery(this.$props.ns),
      };
    },
  },
  watch: {
    levelData(val) {
      if (val) {
        this.$data.change = true;
        this.$data.levelCost = val.cost;
      }
    },
    customYourArcBonus(val) {
      if (val) {
        this.$data.change = true;
        this.yourArcBonus = val;
      }
    },
    levelCost(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "levelCost",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.levelCost.comparator
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.levelCost,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
    currentDeposits(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "currentDeposits",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.currentDeposits.comparator
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.currentDeposits,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
    yourParticipation(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "yourParticipation",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourParticipation.comparator
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourParticipation,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
    otherParticipation(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "otherParticipation",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.otherParticipation.comparator
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.otherParticipation,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
    yourArcBonus(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "yourArcBonus",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourArcBonus.comparator,
          !this.isPermalink,
          `profiles@${this.$store.get("global/currentProfile")}.yourArcBonus`,
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        if (this.$props.customYourArcBonus) {
          this.$emit("customYourArcBonus", val);
        }
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourArcBonus,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
    fpTargetReward(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      const value = !val || val.length === 0 ? 0 : val;
      this.$data.change = true;
      if (this.haveInputLevelCost()) {
        if (this.$props.levelData.investment.map((k) => k.reward).includes(value)) {
          this.$data.errors.fpTargetReward = false;
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.fpTargetReward,
            value: val,
            ns: this.$props.ns,
          });
          this.calculate();
        } else {
          this.$data.errors.fpTargetReward = true;
        }
      }
      if (
        Utils.handlerForm(this, "fpTargetReward", value, oldVal, inputComparator.fpTargetReward.comparator) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpTargetReward,
          value: val,
          ns: this.$props.ns,
        });
        this.calculate();
      }
    },
  },
  methods: {
    haveInputLevelCost() {
      return this.$props.levelData !== null;
    },

    getNumberOfRemainingPoints() {
      if (
        isNaN(this.$data.levelCost) ||
        isNaN(this.$data.currentDeposits) ||
        this.$data.levelCost - this.$data.currentDeposits < 0
      ) {
        return this.$t("components.secure_position.block_place.unknown");
      }
      return this.$data.levelCost - this.$data.currentDeposits;
    },

    calculate() {
      if (this.$data.change && this.checkFormValid()) {
        const result = gbProcess.ComputeSecurePlace(
          Utils.normalizeNumberValue(this.$data.levelCost),
          Utils.normalizeNumberValue(this.$data.currentDeposits),
          Utils.normalizeNumberValue(this.$data.yourParticipation),
          Utils.normalizeNumberValue(this.$data.otherParticipation),
          Utils.normalizeNumberValue(this.$data.yourArcBonus),
          Utils.normalizeNumberValue(this.$data.fpTargetReward)
        );

        this.$data.fp = result.fp;
        this.$data.roi = result.roi;

        for (let i = 0; i < this.$data.variousRate.length; i++) {
          this.$data.variousRate[i].result = gbProcess.ComputeSecurePlace(
            Utils.normalizeNumberValue(this.$data.levelCost),
            Utils.normalizeNumberValue(this.$data.currentDeposits),
            Utils.normalizeNumberValue(this.$data.yourParticipation),
            Utils.normalizeNumberValue(this.$data.otherParticipation),
            Utils.normalizeNumberValue(this.$data.variousRate[i].rate),
            Utils.normalizeNumberValue(this.$data.fpTargetReward)
          );
          this.$data.variousRate[i].result.fpSnipe = JSON.parse(JSON.stringify(this.$data.variousRate[i].result.fp));
          this.$data.variousRate[i].result.roiSnipe = JSON.parse(JSON.stringify(this.$data.variousRate[i].result.roi));

          this.$data.variousRate[i].result.fp = Math.min(
            Math.round(this.$data.variousRate[i].displayRate * Utils.normalizeNumberValue(this.$data.fpTargetReward)),
            this.$data.levelCost - this.$data.currentDeposits
          );
          this.$data.variousRate[i].result.roi =
            Math.round(this.$data.variousRate[i].displayRate * Utils.normalizeNumberValue(this.$data.fpTargetReward)) -
            this.$data.variousRate[i].result.fp;
        }
      }
    },

    checkFormValid() {
      this.$data.formValid = true;

      this.$data.errors.levelCost = false;
      this.$data.errors.currentDeposits = false;
      this.$data.errors.yourParticipation = false;
      this.$data.errors.otherParticipation = false;

      if (
        Utils.normalizeNumberValue(this.$data.levelCost) === Utils.normalizeNumberValue(this.$data.currentDeposits) &&
        Utils.normalizeNumberValue(this.$data.levelCost) === Utils.normalizeNumberValue(this.$data.yourParticipation) &&
        Utils.normalizeNumberValue(this.$data.levelCost) ===
          Utils.normalizeNumberValue(this.$data.otherParticipation) &&
        Utils.normalizeNumberValue(this.$data.levelCost) === 0
      ) {
        return true;
      }

      if (!(Utils.normalizeNumberValue(this.$data.levelCost) > 0)) {
        this.$data.formValid = false;
        this.$data.errors.levelCost = true;
      }

      if (
        !(Utils.normalizeNumberValue(this.$data.currentDeposits) < Utils.normalizeNumberValue(this.$data.levelCost))
      ) {
        this.$data.formValid = false;
        this.$data.errors.levelCost = true;
        this.$data.errors.currentDeposits = true;
      }

      if (
        !(Utils.normalizeNumberValue(this.$data.yourParticipation) < Utils.normalizeNumberValue(this.$data.levelCost))
      ) {
        this.$data.formValid = false;
        this.$data.errors.yourParticipation = true;
        this.$data.errors.levelCost = true;
      }

      if (
        !(Utils.normalizeNumberValue(this.$data.otherParticipation) < Utils.normalizeNumberValue(this.$data.levelCost))
      ) {
        this.$data.formValid = false;
        this.$data.errors.otherParticipation = true;
        this.$data.errors.levelCost = true;
      }

      if (
        !(
          Utils.normalizeNumberValue(this.$data.yourParticipation) +
            Utils.normalizeNumberValue(this.$data.otherParticipation) <=
          Utils.normalizeNumberValue(this.$data.currentDeposits)
        )
      ) {
        this.$data.formValid = false;
        this.$data.errors.yourParticipation = true;
        this.$data.errors.otherParticipation = true;
        this.$data.errors.currentDeposits = true;
      }

      return this.$data.formValid;
    },

    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },

    /**
     * Check URL query and return query data
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery() {
      const result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let tmp;
      for (const key in inputComparator) {
        tmp = Utils.checkFormNumeric(
          this.$route.query[queryKey[key]],
          -1,
          inputComparator[key].comparator,
          inputComparator[key].type
        );
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result[key] = tmp.value;
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.set("isPermalink", true);
        result.change = true;
      }

      return result;
    },

    resetValues() {
      this.$data.fp = 0;
      this.$data.yourParticipation = 0;
      this.$data.otherParticipation = 0;
      this.$data.levelCost = this.haveInputLevelCost() ? this.$props.levelData.cost : 0;
      this.$data.currentDeposits = 0;
      this.$data.yourArcBonus =
        this.$props.customYourArcBonus !== false
          ? this.$props.customYourArcBonus
          : this.$clone(
              this.$store.get(`profile/profiles@[${this.$store.get("global/currentProfile")}].yourArcBonus)`)
            );
      this.$data.fpTargetReward = 0;
    },
  },
  mounted() {
    this.calculate();
  },
  components: {
    numberinput,
  },
};
