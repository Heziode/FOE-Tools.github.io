import viewGridAdd from "~/assets/view-grid-add.svg?inline";

export default {
  name: "AddToHomeScreen",
  props: {
    app: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    toggleModal(value = undefined) {
      this.showDialog = value === undefined ? !this.showDialog : value;
      this.$props.app.store.set(`global/haveReadInstallApp`, true);
    },
    dismiss() {
      this.toggleModal(false);
      this.deferredPrompt = null;
    },
    async install() {
      this.toggleModal(false);
      await this.deferredPrompt.prompt();
    },
  },
  mounted() {
    if (!this.$props.app.store.get("global/haveReadInstallApp") && this.$cookieConsentManager.confirmed) {
      this.showDialog = true;
    }
  },
  components: {
    viewGridAdd,
  },
};
