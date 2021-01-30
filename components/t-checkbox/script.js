export default {
  name: "TCheckbox",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    indeterminate: Boolean,
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
    indeterminate(val) {
      this.$refs.element.indeterminate = val;
    },
  },
  mounted() {
    if (this.$props.indeterminate) {
      this.$refs.element.indeterminate = true;
    }
  },
};
