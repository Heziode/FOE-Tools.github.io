import Remark from "~/components/remark/Remark";

const i18nPrefix = "routes.changelog.";

export default {
  name: "Changelog",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      url: "https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/production/CHANGELOG.md",
      markdown: "",
    };
  },
  mounted() {
    const self = this;
    this.$axios
      .$get(this.$data.url)
      .then((markdown) => {
        self.$data.markdown = markdown;
      })
      .catch((e) => {
        console.error("Error when getting changelog: ", e);
      });
  },
  components: {
    Remark,
  },
};
