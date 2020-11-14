import YesNo from "~/components/yes-no/YesNo";
import DayNight from "../dialogDayNight/DialogDayNight";
import { sync } from "vuex-pathify";

const i18nPrefix = "components.site_layout.global_config_dialog.";
const defaultConfig = {
  fixedMainMenu: true,
  gbSelectMode: "select", // datalist | select
  dayNightMode: "day", // day | night | auto
};

export default {
  data() {
    return {
      i18nPrefix,
      gbSelectModes: [
        { key: "datalist", text: this.$t(i18nPrefix + "select_gb_style_mode.datalist") },
        { key: "select", text: this.$t(i18nPrefix + "select_gb_style_mode.select") },
      ],
      dayNightModes: [
        { key: "day", text: this.$t(i18nPrefix + "day_night_mode.Day") },
        { key: "night", text: this.$t(i18nPrefix + "day_night_mode.Night") },
        { key: "auto", text: this.$t(i18nPrefix + "day_night_mode.Auto") },
      ],
    };
  },
  computed: {
    fixedMainMenu: sync("global/fixedMainMenu"),
    gbSelectMode: sync("global/gbSelectMode"),
    dayNightMode: sync("global/dayNightMode"),
  },
  watch: {
    dayNightMode(val) {
      this.$store.set("isDarkTheme", val === "night");
      this.$emit("dayNightChanged", val);
    },
  },
  methods: {
    resetSettings() {
      this.$data.fixedMainMenu = defaultConfig.fixedMainMenu;
      this.$data.gbSelectMode = defaultConfig.gbSelectMode;
      this.$data.dayNightMode = defaultConfig.dayNightMode;
    },
  },
  components: {
    YesNo,
    DayNight,
  },
};
