import Utils from "~/scripts/utils";

export default {
  name: "ShowBookmarks",
  data() {
    return {};
  },
  computed: {
    bookmarks: /* istanbul ignore next */ function () {
      let r = this.$store
        .get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`)
        .filter((elt) => elt.name === "GbInvestment");
      return r;
    },
    splitBookmarks: /* istanbul ignore next */ function () {
      return Utils.transpose(Utils.splitArray(this.bookmarks, 3));
    },
  },
};
