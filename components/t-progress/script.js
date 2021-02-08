export default {
  name: "TProgress",
  props: {
    type: {
      type: [String, Object],
      default: "is-darkgrey",
    },
    size: String,
    textSize: String,
    value: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: 100,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: "raw",
      validator: (value) => {
        return ["raw", "percent"].includes(value);
      },
    },
    precision: {
      type: Number,
      default: 2,
    },
    keepTrailingZeroes: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newTypeText: [this.textSize, "text-trueGray-600"],
    };
  },
  computed: {
    isIndeterminate() {
      return this.value === undefined || this.value === null;
    },
    newType() {
      return [this.size, this.type];
    },
    newValue() {
      return this.calculateValue(this.value);
    },
    isNative() {
      return this.$slots.bar === undefined;
    },
    wrapperClasses() {
      return {
        "is-not-native": !this.isNative,
        [this.size]: !this.isNative,
      };
    },
  },
  watch: {
    /**
     * When value is changed back to undefined, value of native progress get reset to 0.
     * Need to add and remove the value attribute to have the indeterminate or not.
     */
    isIndeterminate(indeterminate) {
      this.$nextTick(() => {
        if (this.$refs.progress) {
          if (indeterminate) {
            this.$refs.progress.removeAttribute("value");
          } else {
            this.$refs.progress.setAttribute("value", this.value);
          }
        }
      });
    },
    value() {
      this.setNewTypeText();
    },
  },
  methods: {
    calculateValue(value) {
      if (value === undefined || value === null || isNaN(value)) {
        return undefined;
      }

      const minimumFractionDigits = this.keepTrailingZeroes ? this.precision : 0;
      const maximumFractionDigits = this.precision;
      if (this.format === "percent") {
        return new Intl.NumberFormat(this.$i18n.locale, {
          style: "percent",
          minimumFractionDigits: minimumFractionDigits,
          maximumFractionDigits: maximumFractionDigits,
        }).format(value / this.max);
      }

      return new Intl.NumberFormat(this.$i18n.locale, {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
      }).format(value);
    },
    setNewTypeText() {
      let textColor = "text-trueGray-600";
      if (this.$refs.progress && this.$refs.content) {
        const max = this.$refs.progress.clientWidth;
        const textWidth = this.$refs.content.clientWidth;
        const endText = max / 2 + textWidth / 2;
        const valueToWidth = (this.value * max) / this.max;
        textColor = endText <= valueToWidth ? "text-white" : "text-trueGray-600";
      }

      if (this.type === "is-warning") {
        textColor = "text-trueGray-600";
      }
      this.newTypeText = [this.textSize, textColor];
    },
  },
  mounted() {
    this.setNewTypeText();
    window.addEventListener("resize", this.setNewTypeText);
  },
};
