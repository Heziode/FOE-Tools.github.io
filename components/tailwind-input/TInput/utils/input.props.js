export const inputProps = {
  as: {
    type: String,
    default: "input",
  },
  _ariaLabel: String,
  _ariaDescribedby: String,
  isFullWidth: {
    type: Boolean,
    default: true,
  },
  focusStyle: {
    type: Boolean,
    default: true,
  },
  isReadOnly: Boolean,
  isDisabled: Boolean,
  isInvalid: Boolean,
  isRequired: Boolean,
  inputId: String,
  rows: Number,
  autoComplete: String,
  value: {
    type: [String, Number],
    default: undefined,
  },
};
