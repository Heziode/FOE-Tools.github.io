export default {
  name: "TTag",
  props: {
    attached: Boolean,
    closable: Boolean,
    type: {
      type: String,
      default: "default",
    },
    size: String,
    rounded: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    tabstop: {
      type: Boolean,
      default: true,
    },
    ariaCloseLabel: String,
    closeType: String,
    closeIcon: String,
    closeIconPack: String,
    closeIconType: String,
  },
  computed: {
    typeClass() {
      switch (this.$props.type) {
        case "default":
          return {
            "bg-blueGray-200 border-blueGray-200 text-gray-700": !this.$attrs.disabled,
            "bg-oldGray-200 dark:bg-oldGray-500 text-gray-400 dark:text-gray-600 cursor-not-allowed": this.$attrs
              .disabled,
          };
        case "success":
          return {
            "bg-green-500 border-green-500 text-white": !this.$attrs.disabled,
            "bg-green-400 dark:bg-green-300 text-gray-500 dark:text-gray-600 cursor-not-allowed": this.$attrs.disabled,
          };
        case "info":
          return {
            "bg-blue-500 border-blue-500 text-white": !this.$attrs.disabled,
            "bg-blue-400 dark:bg-blue-300 text-gray-200 dark:text-gray-600 cursor-not-allowed": this.$attrs.disabled,
          };
        case "danger":
          return {
            "bg-red-600 border-red-600 text-white": !this.$attrs.disabled,
            "bg-red-400 dark:bg-red-400 text-gray-100 dark:text-gray-100 cursor-not-allowed": this.$attrs.disabled,
          };
      }
      return {};
    },
  },
  methods: {
    /**
     * Emit close event when delete button is clicked
     * or delete key is pressed.
     */
    close(event) {
      if (this.disabled) return;
      this.$emit("close", event);
    },
  },
};
