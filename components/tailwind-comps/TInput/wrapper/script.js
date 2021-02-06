/*
 * Note: this components is just a Copy/Paste of Buefy numberinput.
 * The only things that has been change is the use of span instead of buttons.
 *
 * @see https://github.com/buefy/buefy/blob/dev/src/components/numberinput/Numberinput.vue
 */

import { inputProps } from "../utils/input.props";
import LegacyTNumberInput from "../index";

export default {
  name: "TInput",
  inheritAttrs: false,
  props: {
    ...inputProps,
    inputId: String,
    placeholder: String,
    type: String,
    autoComplete: String,
    maxlength: Number,
  },
  data() {
    return {
      newValue: this.value,
      inputFocused: false,
    };
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
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
  methods: {
    focused(...event) {
      this.inputFocused = true;
      this.$emit("focus", ...event);
    },
    onBlur(...event) {
      this.inputFocused = false;
      this.$emit("blur", ...event);
    },
  },
  components: {
    LegacyTNumberInput,
  },
};
