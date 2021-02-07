const availableTypes = ["default", "info", "danger", "success", "warning"];

export default {
  name: "TButton",
  components: {},
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => {
        return availableTypes.includes(value);
      },
    },
    size: String,
    label: String,
    iconLeft: String,
    iconRight: String,
    isInvalid: Boolean,
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
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
    nativeType: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    tag: {
      type: String,
      default: "button",
      validator: (value) => {
        return [
          "a",
          "button",
          "input",
          "router-link",
          "nuxt-link",
          "n-link",
          "RouterLink",
          "NuxtLink",
          "NLink",
        ].includes(value);
      },
    },
  },
  computed: {
    computedTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return "button";
      }
      return this.tag;
    },
    typeClass() {
      switch (this.$props.type) {
        case "default":
          return {
            "bg-blueGray-200 hover:bg-blueGray-300 dark:hover:bg-blueGray-100 text-gray-700": !this.$attrs.disabled,
            "bg-oldGray-200 dark:bg-oldGray-500 text-gray-400 dark:text-gray-600 cursor-not-allowed": this.$attrs
              .disabled,
          };
        case "success":
          return {
            "bg-green-500 hover:bg-green-600 dark:hover:bg-green-400 text-white": !this.$attrs.disabled,
            "bg-green-400 dark:bg-green-300 text-gray-500 dark:text-gray-600 cursor-not-allowed": this.$attrs.disabled,
          };
        case "info":
          return {
            "bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400 text-white": !this.$attrs.disabled,
            "bg-blue-400 dark:bg-blue-300 text-gray-200 dark:text-gray-600 cursor-not-allowed": this.$attrs.disabled,
          };
        case "warning":
          return {
            "bg-yellow-400 hover:bg-yellow-500 dark:hover:bg-yellow-300 text-black": !this.$attrs.disabled,
            "bg-yellow-300 hover:bg-yellow-300 text-gray-100 dark:text-gray-100 cursor-not-allowed": this.$attrs
              .disabled,
          };
        case "danger":
          return {
            "bg-red-600 hover:bg-red-700 dark:hover:bg-red-500 text-white": !this.$attrs.disabled,
            "bg-red-400 dark:bg-red-400 text-gray-100 dark:text-gray-100 cursor-not-allowed": this.$attrs.disabled,
          };
      }
      return {};
    },
  },
};
