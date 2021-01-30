export default {
  name: "TSelect",
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    id: String,
    borderLeft: {
      type: Boolean,
      default: true,
    },
    borderTop: {
      type: Boolean,
      default: true,
    },
    borderBottom: {
      type: Boolean,
      default: true,
    },
    borderRight: {
      type: Boolean,
      default: true,
    },
    roundedTopLeft: {
      type: Boolean,
      default: true,
    },
    roundedTopRight: {
      type: Boolean,
      default: true,
    },
    roundedBottomLeft: {
      type: Boolean,
      default: true,
    },
    roundedBottomRight: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value;
    },
    /**
     * Emit input event to update the user v-model.
     */
    newValue(value) {
      this.$emit("input", value);
    },
  },
};
