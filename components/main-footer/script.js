import packageConfig from "~/package.json";
import EquilateralTriangle from "~/assets/equilateral-triangle.svg?inline";

export default {
  name: "MainFooter",
  data() {
    return {
      siteVersion: packageConfig.version,
      footerLinks: [
        this.$store.get("routes@about"),
        this.$store.get("routes@contact"),
        this.$store.get("routes@cookie_policy"),
        this.$store.get("routes@privacy_policy"),
        this.$store.get("routes@contributors"),
        this.$store.get("routes@changelog"),
      ],
    };
  },
  methods: {
    isActive(key) {
      return this.$route.name.startsWith(`${key}___`);
    },
  },
  components: {
    EquilateralTriangle,
  },
};
