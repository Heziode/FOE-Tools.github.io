const i18nPrefix = "components.site_layout.day_night";
const dayStartHour = 7;
const dayStartMinutes = 0;
const nightStartHour = 18;
const nightStartMinutes = 30;

export default {
  data() {
    const regexTime = /([0-9]{2}):([0-9]{2})/;
    const cookieDayStart = this.$store.get("global/dayStart");
    const cookieNightStart = this.$store.get("global/nightStart");

    const dS = new Date();
    if (cookieDayStart && regexTime.test(cookieDayStart)) {
      const match = regexTime.exec(cookieDayStart);
      dS.setHours(parseInt(match[1]));
      dS.setMinutes(parseInt(match[2]));
    } else {
      dS.setHours(dayStartHour);
      dS.setMinutes(dayStartMinutes);

      this.$store.set("global/dayStart", this.$moment(dS).format("HH:mm"));
    }

    const nS = new Date();
    if (cookieNightStart && regexTime.test(cookieNightStart)) {
      const match = regexTime.exec(cookieNightStart);
      nS.setHours(parseInt(match[1]));
      nS.setMinutes(parseInt(match[2]));
    } else {
      nS.setHours(nightStartHour);
      nS.setMinutes(nightStartMinutes);
      this.$store.set("global/nightStart", this.$moment(nS).format("HH:mm"));
    }

    return {
      i18nPrefix,
      dayStart: dS,
      nightStart: nS,
    };
  },
  computed: {
    defaultDayStart: /* istanbul ignore next */ function () {
      return this.$moment().hour(8).minute(0).toDate();
    },
    defaultNightStart: /* istanbul ignore next */ function () {
      return this.$moment().hour(19).minute(30).toDate();
    },
  },
  watch: {
    dayStart(val) {
      this.$store.set("global/dayStart", this.$moment(val || this.defaultDayStart).format("HH:mm"));
    },
    nightStart(val) {
      this.$store.set("global/nightStart", this.$moment(val || this.defaultNightStart).format("HH:mm"));
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
