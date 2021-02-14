import { FocusTrap } from "focus-trap-vue";
import { TModal } from "../t-modal/index";

function removeElement(el) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else if (typeof el.parentNode !== "undefined" && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}

export default {
  name: "TDialog",
  extends: TModal,
  props: {
    title: String,
    message: [String, Array],
    icon: String,
    iconPack: String,
    hasIcon: Boolean,
    type: {
      type: String,
      default: "info",
    },
    size: String,
    confirmText: {
      type: String,
      default: () => {
        return "utils.Ok";
      },
    },
    cancelText: {
      type: String,
      default: () => {
        return "utils.Close";
      },
    },
    hasInput: Boolean, // Used internally to know if it's prompt
    inputAttrs: {
      type: Object,
      default: () => ({}),
    },
    onConfirm: {
      type: Function,
      default: () => {},
    },
    closeOnConfirm: {
      type: Boolean,
      default: true,
    },
    container: {
      type: String,
      default: () => {
        return null;
      },
    },
    focusOn: {
      type: String,
      default: "confirm",
    },
    trapFocus: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    ariaRole: {
      type: String,
      validator: (value) => {
        return ["dialog", "alertdialog"].includes(value);
      },
    },
    ariaModal: Boolean,
  },
  data() {
    const prompt = this.hasInput ? this.inputAttrs.value || "" : "";

    return {
      prompt,
      confirmId: "confirm-" + this._uid,
      cancelId: "cancel-" + this._uid,
      promptId: "prompt-" + this._uid,
      isActive: false,
      validationMessage: "",
    };
  },
  computed: {
    iconColor() {
      switch (this.type) {
        case "info":
          return "bg-blue-100 text-blue-600";
        case "success":
          return "bg-green-100 text-green-600";
        case "warning":
          return "bg-yellow-100 text-yellow-600";
        case "danger":
          return "bg-red-100 text-red-600";
        default:
          return null;
      }
    },
    /**
     * Icon name (MDI) based on the type.
     */
    iconByType() {
      switch (this.type) {
        case "info":
          return "fas fa-info";
        case "success":
          return "fas fa-check";
        case "warning":
          return "fas fa-exclamation";
        case "danger":
          return "fas fa-exclamation";
        default:
          return null;
      }
    },
    showCancel() {
      return this.cancelOptions.includes("button");
    },
  },
  methods: {
    /**
     * If it's a prompt Dialog, validate the input.
     * Call the onConfirm prop (function) and close the Dialog.
     */
    confirm() {
      this.$emit("confirm", this.prompt);
      this.onConfirm(this.prompt, this);
      if (this.closeOnConfirm) this.close();
    },

    /**
     * Close the Dialog.
     */
    close() {
      this.isActive = false;
      // Timeout for the animation complete before destroying
      setTimeout(() => {
        this.$destroy();
        removeElement(this.$el);
      }, 150);
    },
  },
  beforeMount() {
    // Insert the Dialog component in the element container
    if (typeof window !== "undefined") {
      this.$nextTick(() => {
        const container = document.querySelector(this.container) || document.body;
        container.appendChild(this.$el);
      });
    }
  },
  mounted() {
    this.isActive = true;

    if (typeof this.inputAttrs.required === "undefined") {
      this.$set(this.inputAttrs, "required", true);
    }

    this.$nextTick(() => {
      // Handle which element receives focus
      if (this.hasInput) {
        document.querySelector(`#${this.promptId}`).focus();
      } else if (this.focusOn === "cancel" && this.showCancel) {
        document.querySelector(`#${this.cancelId}`).focus();
      } else {
        document.querySelector(`#${this.confirmId}`).focus();
      }
    });
  },
  components: {
    FocusTrap,
  },
};
