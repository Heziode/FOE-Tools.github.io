/**
 * Hey! Welcome to @chakra-ui/vue Input
 *
 * TInput component is a component that is used to get user input in a text field
 *
 * It is usually used together with the FormControl to provide an accessible label, validation messages, etc.
 *
 * @see Docs     https://vue.chakra-ui.com/input
 * @see Source   https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/CInput/CInput.js
 * @see WAI      https://www.w3.org/WAI/tutorials/forms/
 */

import { createStyledAttrsMixin } from "../utils";
import { inputProps } from "./utils/input.props";

/**
 * TInput component
 *
 * Gets user input in a text field
 *
 * @extends CPseudoBox
 * @see Docs https://vue.chakra-ui.com/input
 */
const TInput = {
  name: "TInput",
  mixins: [createStyledAttrsMixin("TInput", true)],
  inject: {
    $useFormControl: {
      default: null,
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
  props: inputProps,
  computed: {
    formControl() {
      if (!this.$useFormControl) {
        return {
          isReadOnly: this.isReadOnly,
          isDisabled: this.isDisabled,
          isInvalid: this.isInvalid,
          isRequired: this.isRequired,
        };
      }
      return this.$useFormControl(this.$props);
    },
  },
  methods: {
    emitValue(event) {
      this.$emit("input", event.target.value, event);
      this.$emit("change", event);
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: {
          // eslint-disable-next-line max-len
          "py-2 px-4 text-gray-700 dark:text-gray-300 border-t first:border-l first:rounded-l last:border-r last:rounded-r border-b block placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none": true,
          "border-gray-300 dark:border-gray-600 bg-white": !this.formControl.isInvalid,
          "border-red-500 dark:border-red-500 dark:bg-opacity-25 dark:bg-red-900 bg-red-100": this.formControl
            .isInvalid,
          "w-full min-w-0": this.isFullWidth,
          "bg-blueGray-50 dark:bg-blueGray-700 dark:text-gray-500 cursor-not-allowed": this.formControl.isDisabled,
          "dark:bg-blueGray-800": !this.formControl.isDisabled && !this.formControl.isInvalid,
        },
        domProps: {
          value: this.value,
          id: this.inputId,
          rows: this.as === "textarea" ? this.rows : undefined,
          autocomplete: this.autoComplete ? this.autoComplete : "off",
          maxlength: this.maxlength ? this.maxlength : undefined,
        },
        attrs: {
          "aria-readonly": this.isReadOnly,
          readonly: this.formControl.isReadOnly,
          disabled: this.formControl.isDisabled,
          "aria-disabled": this.formControl.isDisabled,
          "aria-invalid": this.formControl.isInvalid,
          required: this.formControl.isRequired,
          "aria-required": this.formControl.isRequired,
          ...this.computedAttrs,
        },
        on: {
          ...this.computedListeners,
          input: this.emitValue,
          focus: () => this.$emit("focus", true),
          blur: () => this.$emit("blur", false),
        },
        ref: "input",
      },
      this.$slots.default
    );
  },
};

export default TInput;
