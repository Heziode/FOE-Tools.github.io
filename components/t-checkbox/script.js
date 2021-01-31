export default {
  name: "TCheckbox",
  props: {
    value: Boolean,
    checked: Boolean,
    indeterminate: Boolean,
  },
  data() {
    return {
      newValue: this.value || this.checked,
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
