import { sync } from "vuex-pathify";

const i18nPrefix = "components.gb_investment.gb_list_select.";

let gbs = {};
let gbList = {};

export default {
  name: "GbListSelect",
  props: {
    current: {
      type: String,
      required: true,
    },
    onlySelector: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    gbs = this.$store.get("foe/gbs@gbs");
    gbList = this.$store.get("foe/gbs@gbList");

    const gbData = Object.keys(gbs)
      .map((k) => {
        return { value: k, text: this.$t("foe_data.gb." + k) };
      })
      .sort((a, b) => (a.text > b.text ? 1 : b.text > a.text ? -1 : 0));

    return {
      i18nPrefix: i18nPrefix,
      foeGBList: gbList,
      gbData,
      selected: this.$props.current,
      name: "",
      tmpName: "",
      id: "gbList" + this._uid,
    };
  },
  computed: {
    filteredDataObj: /* istanbul ignore next */ function () {
      return this.gbData.filter((option) => {
        return option.text.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0;
      });
    },
    gbSelectModeDatalist: sync("global/gbSelectMode"),
    gbSelectSortMode: sync("global/gbSelectSortMode"),
    bookmarks: /* istanbul ignore next */ function () {
      let r = this.$store
        .get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`)
        .filter((elt) => elt.name === "GbInvestment");
      return r;
    },
  },
  watch: {
    selected(val) {
      if (val in gbs) {
        this.$nextTick(() => {
          this.$data.name = "";
        });

        this.$emit("change", val);
      }
    },
  },
  methods: {
    onSelect: /* istanbul ignore next */ function (option) {
      if (option) {
        this.selected = option.value;
      }
    },
    onFocus: /* istanbul ignore next */ function (evt) {
      evt.target.select();
    },
  },
};
