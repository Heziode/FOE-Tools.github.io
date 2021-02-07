/* eslint-disable max-len */

/**
 * Hey! Welcome to @chakra-ui/vue Number Input
 *
 * The `TNumberInput` component is similar to the `TInput` component,
 * but it has controls for incrementing or decrementing numeric values.
 *
 * @see Docs     https://vue.chakra-ui.com/numberinput
 * @see Source   https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/CNumberInput/CNumberInput.js
 * @see A11y     https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/CNumberInput/accessibility.md
 */

import { isDef, useId, getElement, wrapEvent } from "../utils";
import { inputProps } from "../TInput/utils/input.props";

import TInput from "../TInput";
import { calculatePrecision, toFloat, preventNonNumberKey } from "./utils/numberinput.utils";

/**
 * TNumberInput component
 *
 * The wrapper that provides context and logic to the components
 *
 * @extends CFlex
 * @see Docs https://vue.chakra-ui.com/numberinput
 */
const TNumberInput = {
  name: "CNumberInput",
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: [Number, String],
    defaultValue: Number,
    focusInputOnChange: {
      type: Boolean,
      default: true,
    },
    clampValueOnBlur: {
      type: Boolean,
      default: true,
    },
    keepWithinRange: {
      type: Boolean,
      default: true,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    precision: Number,
    getAriaValueText: Function,
    isReadOnly: Boolean,
    isInvalid: Boolean,
    isDisabled: Boolean,
    isFullWidth: Boolean,
    size: {
      type: String,
      default: "md",
    },
    inputId: {
      type: String,
    },
  },
  provide() {
    return {
      $NumberInputContext: () => this.NumberInputContext,
    };
  },
  data() {
    return {
      innerValue: this.defaultValue || null,
      isFocused: false,
      prevNexValue: null,
      inputNode: undefined,
      hasIncDecButtons: false,
      incrementPressed: false,
      decrementPressed: false,
      incrementEvents: {},
      decrementEvents: {},
      incrementStepperProps: undefined,
      decrementStepperProps: undefined,
      incrementTimerId: null,
      decrementTimerId: null,
    };
  },
  computed: {
    NumberInputContext() {
      return {
        size: this.size,
        value: this._value,
        isReadOnly: this.isReadOnly,
        isInvalid: this.isInvalid,
        isDisabled: this.isDisabled,
        isFocused: this.isFocused,
        toggleIncDecButton: (value) => {
          this.hasIncDecButtons = value;
        },
        hasIncDecButtons: this.$data.hasIncDecButtons,
        incrementStepper: this.incrementStepperProps,
        decrementStepper: this.decrementStepperProps,
        incrementButton: {
          nativeOn: {
            click: () => this.handleIncrement(),
          },
          attrs: {
            "aria-label": "add",
            ...(this.keepWithinRange &
              {
                disabled: this.value === this.max,
                "aria-disabled": this.value === this.max,
              }),
          },
        },
        decrementButton: {
          nativeOn: {
            click: () => this.handleDecrement(),
          },
          attrs: {
            "aria-label": "subtract",
            ...(this.keepWithinRange &
              {
                disabled: this.value === this.min,
                "aria-disabled": this.value === this.min,
              }),
          },
        },
        input: {
          value: this._value,
          onChange: this.handleChange,
          onKeydown: this.handleKeydown,
          onFocus: () => {
            this.isFocused = true;
          },
          onBlur: () => {
            this.isFocused = false;
            if (this.clampValueOnBlur) {
              this.validateAndClamp();
            }
          },
          role: "spinbutton",
          type: "text",
          "aria-valuemin": this.min,
          min: this.min,
          "aria-valuemax": this.max,
          max: this.max,
          "aria-disabled": this.isDisabled,
          "aria-valuenow": this.value,
          "aria-invalid": this.isInvalid || this.isOutOfRange,
          ...(this.getAriaValueText && {
            "aria-valuetext": this.ariaValueText,
          }),
          readOnly: this.isReadOnly,
          disabled: this.isDisabled,
          autoComplete: "off",
          step: this.step,
        },
        hiddenLabel: {
          "aria-live": "polite",
          text: this.getAriaValueText ? this.ariaValueText : this._value,
          style: {
            position: "absolute",
            clip: "rect(0px, 0px, 0px, 0px)",
            height: 1,
            width: 1,
            margin: -1,
            whiteSpace: "nowrap",
            border: 0,
            overflow: "hidden",
            padding: 0,
          },
        },
        inputId: this._inputId,
      };
    },
    isControlled() {
      return isDef(this.value);
    },
    _value: {
      get() {
        return this.isControlled ? toFloat(this.value) : this.innerValue ? toFloat(this.innerValue) : this.innerValue;
      },
      set(val) {
        if (!this.defaultValue) {
          let nextValue = this.defaultValue;
          if (this.keepWithinRange) {
            nextValue = Math.max(Math.min(nextValue, this.max), this.min);
          }
          nextValue = toFloat(nextValue);
          this.innerValue = nextValue;
        }
        this.innerValue = val;
      },
    },
    defaultPrecision() {
      return Math.max(calculatePrecision(this.step), 0);
    },
    _precision() {
      return this.precision || this.defaultPrecision;
    },
    isInteractive() {
      return !(this.isReadOnly || this.isDisabled);
    },
    isOutOfRange() {
      return this._value > this.max || this.value < this.min;
    },
    ariaValueText() {
      return this.getAriaValueText ? this.getAriaValueText(this._value) : null;
    },
    _inputId() {
      return this.inputId || `number-input-${this.inputId || useId()}`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.inputNode = getElement(`#${this._inputId}`, this.$el);
    });

    // ================================= INCREMENT WATCHER
    this.$watch(
      (vm) => [vm.incrementPressed, vm._value],
      () => {
        if (this.incrementTimerId) clearTimeout(this.incrementTimerId);
        if (this.incrementPressed) {
          this.incrementTimerId = setTimeout(this.handleIncrement, 250);
        } else {
          clearTimeout(this.incrementTimerId);
        }
      }
    );

    const startIncrement = () => {
      this.handleIncrement();
      this.incrementPressed = true;
    };
    const stopIncrement = () => {
      this.incrementPressed = false;
    };

    this.incrementStepperProps = {
      mousedown: startIncrement,
      touchstart: (e) => {
        e.preventDefault();
        startIncrement();
      },
      mouseup: stopIncrement,
      mouseleave: stopIncrement,
      touchend: stopIncrement,
      blur: stopIncrement,
      keyup: (event) => {
        if (event.key !== "Enter") {
          return;
        }
        stopIncrement();
      },
      keydown: (event) => {
        if (event.key !== "Enter") {
          return;
        }
        startIncrement();
      },
    };

    // ================================= DECREMENT WATCHER
    this.$watch(
      (vm) => [vm.decrementPressed, vm._value],
      () => {
        if (this.decrementTimerId) clearTimeout(this.decrementTimerId);
        if (this.decrementPressed) {
          this.decrementTimerId = setTimeout(this.handleDecrement, 250);
        } else {
          clearTimeout(this.decrementTimerId);
        }
      }
    );

    const startDecrement = () => {
      this.handleDecrement();
      this.decrementPressed = true;
    };
    const stopDecrement = () => {
      this.decrementPressed = false;
    };

    this.decrementStepperProps = {
      mousedown: startDecrement,
      touchstart: (e) => {
        e.preventDefault();
        startDecrement();
      },
      mouseup: stopDecrement,
      mouseleave: stopDecrement,
      touchend: stopDecrement,
      blur: stopDecrement,
      keyup: (event) => {
        if (event.key !== "Enter") {
          return;
        }
        stopDecrement();
      },
      keydown: (event) => {
        if (event.key !== "Enter") {
          return;
        }
        startDecrement();
      },
    };
  },
  methods: {
    /**
     * Validates and clamps input values
     */
    validateAndClamp() {
      const maxExists = isDef(this.max);
      const minExists = isDef(this.min);

      if (maxExists && this._value > this.max) {
        this.updateValue(this.max);
      }

      if (minExists && this._value < this.min) {
        this.updateValue(this.min);
      }
    },

    /**
     * Get increment factor
     */
    getIncrementFactor(event) {
      let ratio = 1;
      if (event.metaKey || event.ctrlKey) {
        ratio = 0.1;
      }
      if (event.shiftKey) {
        ratio = 10;
      }
      return ratio;
    },

    /**
     * Determines whether a value should be converted to number
     * @param {String} value
     */
    shouldConvertToNumber(value) {
      const _value = typeof value !== "string" ? String(value) : value;
      const hasDot = _value.includes(".");
      const hasTrailingZero = _value.substr(_value.length - 1) === "0";
      const hasTrailingDot = _value.substr(_value.length - 1) === ".";
      if (hasDot && hasTrailingZero) return false;
      if (hasDot && hasTrailingDot) return false;
      return true;
    },

    /**
     * Updates the current input value
     * @param {Number|String} nextValue value
     */
    updateValue(nextValue) {
      if (this.prevNextValue === nextValue) return;
      const shouldConvert = this.shouldConvertToNumber(nextValue);
      const converted = shouldConvert ? +nextValue : nextValue;
      if (!this.isControlled) {
        this._value = converted;
      }

      this.$emit("change", converted);

      this.prevNextValue = nextValue;
    },

    /**
     * Handles value increment
     * @param {Number} step Value to be incremented
     */
    handleIncrement(step = this.step) {
      if (!this.isInteractive) return;
      let nextValue = Number(this._value) + Number(step);

      if (this.keepWithinRange) {
        nextValue = Math.min(nextValue, this.max);
      }

      nextValue = toFloat(nextValue, this._precision);
      this.updateValue(nextValue);
      this.$emit("increment", nextValue);
    },

    /**
     * Handles value decrement
     * @param {Number} step Value to be decremented
     */
    handleDecrement(step = this.step) {
      if (!this.isInteractive) return;
      let nextValue = Number(this._value) - Number(step);

      if (this.keepWithinRange) {
        nextValue = Math.max(nextValue, this.min);
      }

      nextValue = toFloat(nextValue, this._precision);
      this.updateValue(nextValue);
      this.$emit("decrement", nextValue);
    },

    /**
     * Focus NumberInput element
     */
    focusInput() {
      const _this = this;
      requestAnimationFrame(() => {
        _this.inputNode && _this.inputNode.focus();
      });
    },

    /**
     * Handles "blur" event
     * @param {Event} event Event object
     */
    handleBlur(event) {
      this.$emit("blur", event);
    },

    /**
     * Handles "focus" event
     * @param {Event} event Event object
     */
    handleFocus(event) {
      this.$emit("focus", event);
    },

    /**
     * Handles "keydown" event
     * @param {Event} event Event object
     */
    handleKeydown(event) {
      this.$emit("keydown", event);
      preventNonNumberKey(event);
      if (!this.isInteractive) return;

      if (event.key === "ArrowUp") {
        event.preventDefault();
        const ratio = this.getIncrementFactor(event);
        this.handleIncrement(ratio * this.step);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        const ratio = this.getIncrementFactor(event);
        this.handleDecrement(ratio * this.step);
      }

      if (event.key === "End") {
        event.preventDefault();
        if (isDef(this.min)) {
          this.updateValue(this.max);
        }
      }

      if (event.key === "Home") {
        event.preventDefault();
        if (isDef(this.max)) {
          this.updateValue(this.min);
        }
      }
    },

    /**
     *
     * @param {Event} event Event object
     * @param {Any} event Value
     */
    handleChange(event) {
      let finalValue;
      const { value } = event.target;
      if (["", undefined].includes(value)) {
        finalValue = 0;
      } else {
        finalValue = +value;
      }
      this.updateValue(finalValue);
      this.$emit("change", finalValue, event);
    },
  },
  render(h) {
    const { size, ...styles } = this.$props;
    return h(
      "div",
      {
        class: {
          "inline-flex t-input ": true,
          // Animation
          "duration-100 ease-in-out transition": true,
          "w-full": this.isFullWidth,
          "ring rounded": this.isFocused,
          "ring-red-300 dark:ring-red-900 rounded": this.isFocused && this.isInvalid,
        },
        props: {
          align: "stretch",
        },
        attrs: {
          ...styles,
          w: this.isFullWidth ? "full" : null,
          pos: "relative",
        },
      },
      this.$slots.default
    );
  },
};

/**
 * TNumberInputField component
 *
 * The `input` field itself
 *
 * @extends TInput
 * @see Docs https://vue.chakra-ui.com/numberinput
 */
const TNumberInputField = {
  name: "TNumberInputField",
  inheritAttrs: false,
  inject: ["$NumberInputContext"],
  computed: {
    context() {
      return this.$NumberInputContext();
    },
  },
  props: inputProps,
  render(h) {
    const {
      size,
      inputId,
      hasIncDecButtons,
      input: {
        value,
        onBlur: _onBlur,
        onFocus: _onFocus,
        onChange: _onChange,
        onKeydown: _onKeydown,
        disabled: isDisabled,
        readOnly: isReadOnly,
        ...otherInputAttrs
      },
    } = this.context;

    return h(TInput, {
      props: {
        ...this.$props,
        isReadOnly,
        isDisabled,
        size,
        value,
        focusStyle: false,
        hasIncDecButtons,
      },
      class: "text-center",
      attrs: {
        ...this.$attrs,
        id: inputId,
        ...otherInputAttrs,
        pattern: "[0-9]*(.[0-9]+)?",
        inputmode: "numeric",
        type: "number",
      },
      on: {
        change: wrapEvent((e) => this.$emit("change", e), _onChange),
      },
      nativeOn: {
        input: wrapEvent((e) => this.$emit("change", e), _onChange),
        blur: wrapEvent((e) => this.$emit("blur", e), _onBlur),
        focus: wrapEvent((e) => this.$emit("focus", e), _onFocus),
        keydown: wrapEvent((e) => this.$emit("keydown", e), _onKeydown),
      },
    });
  },
};

/**
 * TStepperButton component
 *
 * The composable element for the stepper buttons.
 *
 * @extends CPseudoBox
 * @see Docs https://vue.chakra-ui.com/numberinput
 */
const TStepperButton = {
  name: "TStepperButton",
  inheritAttrs: false,
  inject: ["$NumberInputContext"],
  computed: {
    context() {
      return this.$NumberInputContext();
    },
  },
  render(h) {
    const { isDisabled, toggleIncDecButton } = this.context;
    toggleIncDecButton(true);
    return h(
      "button",
      {
        class: {
          // Alignment
          "align-middle": true,
          // Focus
          "focus:border focus:border-blue-300 focus:outline-none focus:ring": true,
          // Font style
          "font-bold": true,
          // Full height
          "h-full": true,
          // Center items
          "items-center justify-center text-center": true,
          // Padding
          "py-2 px-4": true,
          // Flex
          "flex-shrink-0 flex-wrap inline-flex": true,
          // Text cannot be selected
          "select-none": true,
          // Borders
          "border-t border-b": true,
          "border-red-500": this.context.isInvalid,
          "border-gray-300 dark:border-gray-600": !this.context.isInvalid,
          "bg-oldGray-200 dark:bg-oldGray-500 text-gray-400 dark:text-gray-600 cursor-not-allowed": isDisabled,
          "bg-blueGray-200 hover:bg-blueGray-300 dark:hover:bg-blueGray-100 text-gray-700": !isDisabled,
        },
        domProps: {
          disabled: isDisabled,
        },
        attrs: {
          ...this.$attrs,
          pointerEvents: isDisabled ? "none" : undefined,
        },
      },
      this.$slots.default
    );
  },
};

/**
 * TNumberIncrementStepper component
 *
 * The button to increment the value of the input.
 *
 * @extends TStepperButton
 * @see Docs https://vue.chakra-ui.com/numberinput
 */
const TNumberIncrementStepper = {
  name: "TNumberIncrementStepper",
  inheritAttrs: false,
  inject: ["$NumberInputContext"],
  computed: {
    context() {
      return this.$NumberInputContext();
    },
  },
  render(h) {
    const { incrementStepper } = this.context;

    return h(
      TStepperButton,
      {
        class: "rounded-r border-r",
        attrs: {
          ...this.$attrs,
        },
        nativeOn: incrementStepper,
      },
      "+"
    );
  },
};

/**
 * TNumberIncrementStepper component
 *
 * The button to decrement the value of the input.
 *
 * @extends TStepperButton
 * @see Docs https://vue.chakra-ui.com/numberinput
 */
const TNumberDecrementStepper = {
  name: "TNumberDecrementStepper",
  inheritAttrs: false,
  inject: ["$NumberInputContext"],
  computed: {
    context() {
      return this.$NumberInputContext();
    },
  },
  render(h) {
    const { decrementStepper } = this.context;

    return h(
      TStepperButton,
      {
        class: "rounded-l border-l",
        attrs: {
          ...this.$attrs,
        },
        nativeOn: decrementStepper,
      },
      "-"
    );
  },
};

export { TNumberInput, TNumberInputField, TNumberIncrementStepper, TNumberDecrementStepper };
