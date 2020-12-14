export default {
  name: "CookieConsent",
  props: {
    cm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      customize: false,
      showDialog: !this.$props.cm.confirmed,
      dialogOpened: false,
      consents: this.$props.cm.consents,
    };
  },
  computed: {
    translatedPurposes() {
      const result = [];
      for (const purpose of this.$props.cm.config.purposes) {
        result.push(this.$t(`cookieConsent.purposes.${purpose}.title`));
      }
      return result.sort();
    },
    formattedPurposes() {
      let result = "";
      for (const purpose of this.translatedPurposes) {
        result += `${result.length ? ", " : ""}<strong>${purpose}</strong>`;
      }
      return result;
    },
    purposes() {
      const purposes = {};

      for (const service of this.$props.cm.config.services) {
        for (const purpose of service.purposes) {
          if (purposes[purpose] === undefined) purposes[purpose] = [];
          purposes[purpose].push(service);
        }
      }
      return purposes;
    },
    togglablePurposes() {
      return Object.keys(this.purposes).filter((purpose) => {
        for (const service of this.purposes[purpose]) {
          if (!service.required) return true;
        }
        return false;
      });
    },
    purposeItems() {
      return Object.keys(this.purposes)
        .sort((a, b) => this.purposeOrder.indexOf(a) - this.purposeOrder.indexOf(b))
        .map((purpose) => {
          const togglePurpose = (value) => {
            this.toggle([purpose], value);
          };
          const status = this.checkServices(this.purposes[purpose]);
          return {
            key: purpose,
            allEnabled: status.allEnabled,
            allDisabled: status.allDisabled,
            onlyRequiredEnabled: status.onlyRequiredEnabled,
            required: status.allRequired,
            consents: this.$data.consents,
            name: this.purpose,
            config: this.$props.cm.config,
            manager: this.$props.cm,
            onToggle: togglePurpose,
            services: this.purposes[purpose],
          };
        });
    },
    purposeOrder() {
      return this.$props.cm.config.purposeOrder || [];
    },
  },
  watch: {
    showDialog(val) {
      if (val) {
        this.dialogOpened = true;
      }
    },
  },
  methods: {
    acceptAll() {
      this.$data.showDialog = false;
      this.$data.customize = false;
      this.$props.cm.changeAll(true);
      this.$props.cm.saveAndApplyConsents();
    },
    acceptSelected() {
      this.$data.showDialog = false;
      this.$data.customize = false;
      this.$props.cm.saveAndApplyConsents();
    },
    toggle(purposeKeys, value) {
      purposeKeys.map((purpose) => {
        const purposeServices = this.purposes[purpose];
        for (const service of purposeServices) {
          if (!service.required) {
            this.$props.cm.updateConsent(service.name, value);
          }
        }
      });
    },
    toggleAll(value) {
      this.toggle(Object.keys(this.purposes), value);
    },
    toggleServices(services, value) {
      services.map((service) => {
        if (!service.required) {
          this.$props.cm.updateConsent(service.name, value);
        }
      });
    },
    toggleService(service, value) {
      this.toggleServices([service], value);
    },
    checkServices(services) {
      const status = {
        allEnabled: true,
        onlyRequiredEnabled: true,
        allDisabled: true,
        allRequired: true,
      };
      for (const service of services) {
        if (!service.required) status.allRequired = false;
        if (this.consents[service.name]) {
          if (!service.required) status.onlyRequiredEnabled = false;
          status.allDisabled = false;
        } else if (!service.required) status.allEnabled = false;
      }
      if (status.allDisabled) status.onlyRequiredEnabled = false;
      return status;
    },
    acceptConsent() {
      if (this.$props.cm.confirmed || this.$data.dialogOpened) {
        this.acceptSelected();
      } else {
        this.acceptAll();
      }
    },
  },
};
