export default {
  name: "TMessage",
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    title: String,
    closable: {
      type: Boolean,
      default: true,
    },
    message: String,
    type: String,
    hasIcon: Boolean,
    size: String,
    icon: String,
    iconPack: String,
    iconSize: String,
    autoClose: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    ariaCloseLabel: String,
  },
  data() {
    return {
      isActive: this.active,
      newIconSize: this.iconSize || this.size || "is-large",
    };
  },
  watch: {
    active(value) {
      this.isActive = value;
    },
    isActive(value) {
      if (value) {
        this.setAutoClose();
      } else if (this.timer) {
        clearTimeout(this.timer);
      }
    },
  },
  computed: {
    /**
     * Icon name (MDI) based on type.
     */
    computedIcon() {
      if (this.icon) {
        return this.icon;
      }
      switch (this.type) {
        case "is-info":
          return "fas fa-info-circle";
        case "is-success":
          return "check-circle";
        case "is-warning":
          return "alert";
        case "is-danger":
          return "alert-circle";
        default:
          return null;
      }
    },
    computedArticleBg() {
      switch (this.type) {
        case "is-info":
          return "bg-blue-100";
        case "is-success":
          return "bg-green-100";
        case "is-warning":
          return "bg-yellow-100";
        case "is-danger":
          return "bg-red-100";
        default:
          return null;
      }
    },
    computedHeaderBg() {
      switch (this.type) {
        case "is-info":
          return "bg-blue-500";
        case "is-success":
          return "bg-green-500";
        case "is-warning":
          return "bg-yellow-500";
        case "is-danger":
          return "bg-red-500";
        default:
          return null;
      }
    },
    computedTextColor() {
      switch (this.type) {
        case "is-info":
          return "text-blue-900";
        case "is-success":
          return "text-green-900";
        case "is-warning":
          return "text-yellow-900";
        case "is-danger":
          return "text-red-900";
        default:
          return null;
      }
    },
    computedBorderColor() {
      switch (this.type) {
        case "is-info":
          return "border-blue-500";
        case "is-success":
          return "border-green-500";
        case "is-warning":
          return "border-yellow-500";
        case "is-danger":
          return "border-red-500";
        default:
          return null;
      }
    },
  },
  methods: {
    /**
     * Close the Message and emit events.
     */
    close() {
      this.isActive = false;
      this.$emit("close");
      this.$emit("update:active", false);
    },
    /**
     * Set timer to auto close message
     */
    setAutoClose() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          if (this.isActive) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.setAutoClose();
  },
};
