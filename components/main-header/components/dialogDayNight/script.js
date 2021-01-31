const i18nPrefix = "components.site_layout.day_night";
const dayStartHour = 7;
const dayStartMinutes = 0;
const nightStartHour = 18;
const nightStartMinutes = 30;

export default {
  data() {
    const regexTime = /([0-9]{2}):([0-9]{2})/;
    let storeDayStart = this.$store.get("global/dayStart");
    let storeNightStart = this.$store.get("global/nightStart");

    const dS = new Date();
    if (!storeDayStart || !regexTime.test(storeDayStart)) {
      dS.setHours(dayStartHour);
      dS.setMinutes(dayStartMinutes);

      this.$store.set("global/dayStart", this.$moment(dS).format("HH:mm"));
      storeDayStart = this.$store.get("global/dayStart");
    }

    const nS = new Date();
    if (!storeNightStart || !regexTime.test(storeNightStart)) {
      nS.setHours(nightStartHour);
      nS.setMinutes(nightStartMinutes);
      this.$store.set("global/nightStart", this.$moment(nS).format("HH:mm"));
      storeNightStart = this.$store.get("global/nightStart");
    }

    return {
      i18nPrefix,
      dayStart: storeDayStart,
      nightStart: storeNightStart,
    };
  },
  watch: {
    dayStart(val) {
      this.$store.set("global/dayStart", val);
    },
    nightStart(val) {
      this.$store.set("global/nightStart", val);
    },
  },
  methods: {
    resetNightDay() {
      const dS = new Date();
      dS.setHours(7);
      dS.setMinutes(0);
      const nS = new Date();
      nS.setHours(18);
      nS.setMinutes(30);
      this.dayStart = dS;
      this.nightStart = nS;
    },
  },
};
