import { sync } from "vuex-pathify";
import set from "lodash.set";
import DayNight from "../dialogDayNight/DialogDayNight";
import YesNo from "~/components/yes-no/YesNo";

const i18nPrefix = "components.site_layout.global_config_dialog.";
const defaultConfig = {
  fixedMainMenu: true,
  disableUpdateNotification: false,
  gbSelectMode: "select", // datalist | select
  dayNightMode: "system", // day | night | auto | system
};

export default {
  data() {
    const gbs = this.$store.get("foe/gbs@gbs");
    const gbListAlpha = Object.keys(gbs)
      .map((k) => {
        return { value: k, text: this.$t("foe_data.gb." + k) };
      })
      .sort((a, b) => (a.text > b.text ? 1 : b.text > a.text ? -1 : 0));

    return {
      i18nPrefix,
      gbSelectModes: [
        {
          key: "datalist",
          text: this.$t(i18nPrefix + "select_gb_style_mode.datalist"),
        },
        {
          key: "select",
          text: this.$t(i18nPrefix + "select_gb_style_mode.select"),
        },
      ],
      dayNightModes: [
        { key: "day", text: this.$t(i18nPrefix + "day_night_mode.Day") },
        { key: "night", text: this.$t(i18nPrefix + "day_night_mode.Night") },
        { key: "system", text: this.$t(i18nPrefix + "day_night_mode.System") },
        { key: "auto", text: this.$t(i18nPrefix + "day_night_mode.Auto") },
      ],
      gbListAlpha,
    };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/gbs")).length) {
      const result = await app.$axios.$get("/foe-data/gbs.json");
      store.set("foe/gbs", result);
    }
  },
  computed: {
    fixedMainMenu: sync("global/fixedMainMenu"),
    disableUpdateNotification: sync("global/disableUpdateNotification"),
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
      this.fixedMainMenu = defaultConfig.fixedMainMenu;
      this.disableUpdateNotification = defaultConfig.disableUpdateNotification;
      this.gbSelectMode = defaultConfig.gbSelectMode;
      this.dayNightMode = defaultConfig.dayNightMode;

      const result = {};
      const gbs = this.$store.get(`global/customGbName`);
      for (const elt in gbs) {
        set(result, `foe_data.gb_short.${elt}`, this.$store.get(`defaultCustomGbName@foe_data.gb_short.${elt}`));
      }
      this.$store.set(`global/customGbName`, {});
      this.$i18n.mergeLocaleMessage(this.$i18n.locale, result);
    },
    updateCustomGbName(gb, value) {
      this.$store.set(`global/customGbName@${gb}`, value);

      const gbs = this.$store.get(`global/customGbName`);
      const result = {};
      for (const elt in gbs) {
        if (!this.$store.get(`defaultCustomGbName@foe_data.gb_short.${elt}`)) {
          this.$store.set(`defaultCustomGbName@foe_data.gb_short.${elt}`, this.$t(`foe_data.gb_short.${elt}`));
        }

        if (gbs[elt] && gbs[elt].length) {
          set(result, `foe_data.gb_short.${elt}`, value);
        } else {
          set(result, `foe_data.gb_short.${elt}`, this.$i18n.t(`foe_data.gb_short.${elt}`));
        }
      }
      this.$i18n.mergeLocaleMessage(this.$i18n.locale, result);
    },
  },
  mounted() {
    console.log(
      'Object.keys(this.$store.get("defaultCustomGbName")).length',
      Object.keys(this.$store.get("defaultCustomGbName")).length
    );
    if (Object.keys(this.$store.get("defaultCustomGbName")).length === 0) {
      const defaultCustomGbName = {};
      for (const elt of this.gbListAlpha) {
        set(defaultCustomGbName, `foe_data.gb_short.${elt.value}`, this.$t(`foe_data.gb_short.${elt.value}`));
      }
      this.$store.set("defaultCustomGbName", defaultCustomGbName);
    }
  },
  components: {
    YesNo,
    DayNight,
  },
};
