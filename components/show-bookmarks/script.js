export default {
  name: "ShowBookmarks",
  data() {
    return {};
  },
  computed: {
    bookmarks: /* istanbul ignore next */ function () {
      const r = this.$store
        .get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`)
        .filter((elt) => elt.name === "GbInvestment");
      return r;
    },
  },
};
