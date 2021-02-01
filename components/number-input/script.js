/*
 * Note: this components is just a Copy/Paste of Buefy numberinput.
 * The only things that has been change is the use of span instead of buttons.
 *
 * @see https://github.com/buefy/buefy/blob/dev/src/components/numberinput/Numberinput.vue
 */

import { extend, ValidationProvider } from "vee-validate";
import { between } from "vee-validate/dist/rules.umd.min";
import {
  TNumberInput,
  TNumberInputField,
  TNumberIncrementStepper,
  TNumberDecrementStepper,
} from "~/components/tailwind-comps/TNumberInput";

extend("between", between);

export default {
  name: "Numberinput",
  inheritAttrs: false,
  props: {
    ...TNumberInput.props,
    showIncDec: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
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
  components: {
    ValidationProvider,
    TNumberInput,
    TNumberInputField,
    TNumberIncrementStepper,
    TNumberDecrementStepper,
  },
};
