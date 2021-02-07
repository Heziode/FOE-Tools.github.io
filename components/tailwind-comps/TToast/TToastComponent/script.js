export default {
  name: "TToastComponent",
  props: {
    status: {
      type: String,
      default: "info",
    },
    variant: {
      type: String,
      default: "solid",
    },
    id: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    isClosable: {
      type: Boolean,
      default: true,
    },
    onClose: {
      type: Function,
      default: () => null,
    },
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    bgColor() {
      let result = "";
      switch (this.status) {
        case "success":
          result = "bg-green-500";
          break;
        case "info":
          result = "bg-blue-500";
          break;
        case "error":
          result = "bg-red-500";
          break;
        case "warning":
          result = "bg-yellow-400";
          break;
      }
      return result;
    },
    textColor() {
      let result = "";
      switch (this.status) {
        case "success":
          result = "text-green-500 dark:text-green-400";
          break;
        case "info":
          result = "text-blue-500 dark:text-blue-400";
          break;
        case "error":
          result = "text-red-500 dark:text-red-400";
          break;
        case "warning":
          result = "text-yellow-400 dark:text-yellow-300";
          break;
      }
      return result;
    },
  },
};
