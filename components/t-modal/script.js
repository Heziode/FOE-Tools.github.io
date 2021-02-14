import { FocusTrap } from "focus-trap-vue";

function removeElement(el) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else if (typeof el.parentNode !== "undefined" && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}

const defaultModalCanCancel = ["escape", "x", "outside", "button"];

export default {
  name: "TModal",
  props: {
    active: Boolean,
    component: [Object, Function, String],
    content: [String, Array],
    programmatic: Boolean,
    props: Object,
    events: Object,
    width: {
      type: [String, Number],
      default: 960,
    },
    hasModalCard: Boolean,
    animation: {
      type: String,
      default: "zoom-out",
    },
    canCancel: {
      type: [Array, Boolean],
      default: () => {
        return defaultModalCanCancel;
      },
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    scroll: {
      type: String,
      default: () => {
        return "clip";
      },
      validator: (value) => {
        return ["clip", "keep"].includes(value);
      },
    },
    fullScreen: Boolean,
    trapFocus: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    autoFocus: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    customClass: String,
    ariaRole: {
      type: String,
      validator: (value) => {
        return ["dialog", "alertdialog"].includes(value);
      },
    },
    ariaModal: Boolean,
    destroyOnHide: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isActive: this.active || false,
      savedScrollTop: null,
      newWidth: typeof this.width === "number" ? this.width + "px" : this.width,
      animating: true,
      destroyed: !this.active,
    };
  },
  computed: {
    cancelOptions() {
      return typeof this.canCancel === "boolean" ? (this.canCancel ? defaultModalCanCancel : []) : this.canCancel;
    },
    showX() {
      return this.cancelOptions.includes("x") && !this.hasModalCard;
    },
    customStyle() {
      if (!this.fullScreen) {
        return { maxWidth: this.newWidth };
      }
      return null;
    },
  },
  watch: {
    active(value) {
      this.isActive = value;
    },
    isActive(value) {
      if (value) this.destroyed = false;
      this.handleScroll();
      this.$nextTick(() => {
        if (value && this.$el && this.$el.focus && this.autoFocus) {
          this.$el.focus();
        }
      });
    },
  },
  methods: {
    handleScroll() {
      if (typeof window === "undefined") return;

      if (this.scroll === "clip") {
        if (this.isActive) {
          document.documentElement.classList.add("is-clipped");
        } else {
          document.documentElement.classList.remove("is-clipped");
        }
        return;
      }

      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;

      if (this.isActive) {
        document.body.classList.add("is-noscroll");
      } else {
        document.body.classList.remove("is-noscroll");
      }

      if (this.isActive) {
        document.body.style.top = `-${this.savedScrollTop}px`;
        return;
      }

      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    },

    /**
     * Close the Modal if canCancel and call the onCancel prop (function).
     */
    cancel(method) {
      if (!this.cancelOptions.includes(method)) return;
      this.$emit("cancel", arguments);
      this.onCancel.apply(null, arguments);
      this.close();
    },

    /**
     * Call the onCancel prop (function).
     * Emit events, and destroy modal if it's programmatic.
     */
    close() {
      this.$emit("close");
      this.$emit("update:active", false);

      // Timeout for the animation complete before destroying
      if (this.programmatic) {
        this.isActive = false;
        setTimeout(() => {
          this.$destroy();
          removeElement(this.$el);
        }, 150);
      }
    },

    /**
     * Keypress event that is bound to the document.
     */
    keyPress({ key }) {
      if (this.isActive && (key === "Escape" || key === "Esc")) this.cancel("escape");
    },

    /**
     * Transition after-enter hook
     */
    afterEnter() {
      this.animating = false;
      this.$emit("after-enter");
    },

    /**
     * Transition before-leave hook
     */
    beforeLeave() {
      this.animating = true;
    },

    /**
     * Transition after-leave hook
     */
    afterLeave() {
      if (this.destroyOnHide) {
        this.destroyed = true;
      }
      this.$emit("after-leave");
    },
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeMount() {
    // Insert the Modal component in body tag
    // only if it's programmatic
    this.programmatic && document.body.appendChild(this.$el);
  },
  mounted() {
    if (this.programmatic) this.isActive = true;
    else if (this.isActive) this.handleScroll();
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
      // reset scroll
      document.documentElement.classList.remove("is-clipped");
      const savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      document.body.classList.remove("is-noscroll");
      document.documentElement.scrollTop = savedScrollTop;
      document.body.style.top = null;
    }
  },
  components: {
    FocusTrap,
  },
};
