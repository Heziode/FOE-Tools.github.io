import { get } from "vuex-pathify";
import packageConfig from "~/package.json";
import mainHeader from "~/components/main-header/MainHeader";
import mainFooter from "~/components/main-footer/MainFooter";

const i18nPrefix = "components.site_layout.";

const tagURL = "https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/git/refs/tags";

export default {
  head /* istanbul ignore next */: function () {
    return {
      link: [
        {
          hid: "icon_1",
          rel: "icon",
          type: "image/png",
          href: "/icon.png",
        },
      ],
      htmlAttrs: {
        lang: this.lang,
        class: this.$store.get("isDarkTheme") ? "bg-gray-800 dark" : "bg-white",
      },
      bodyAttrs: {
        class: "bg-coolGray-100 dark:bg-gray-700 dark:text-white transition-light-dark",
      },
    };
  },
  data() {
    if (!this.$store.get("global/lastVisitVersion").length) {
      this.$store.set("global/lastVisitVersion", packageConfig.version);
    }

    if (!this.$store.get("global/donationConversion").length) {
      this.$store.set("global/donationConversion", this.getNextConversion());
    }

    return {
      i18nPrefix,
      siteVersion: packageConfig.version,
      nbUpdateSinceLastVisit: 0,
      haveReadLocaleInfoAvailable: this.$clone(this.$store.get("global/haveReadLocaleInfoAvailable")),
    };
  },
  computed: {
    creationDate() {
      return this.$moment("2017-12-20");
    },
    isPermalink: get("isPermalink"),
    lang: get("locale"),
    isNewYear() {
      return this.$moment().format("MMDD") === this.creationDate.format("MMDD");
    },
    nbYears() {
      return this.$moment().year() - this.creationDate.year();
    },
    isConversionDate() {
      return this.$moment().isAfter(
        this.$moment(this.$clone(this.$store.get("global/donationConversion")), "YYYY-MM-DD")
      );
    },
    hasSurvey() {
      return this.$route.name !== "Survey" && this.$store.get("survey") && this.$store.get("survey").length;
    },
    localesNotCompleted() {
      return this.$store.get("localesNotCompleted");
    },
  },
  watch: {
    localesNotCompleted(val) {
      if (!val.length) {
        return;
      }
      let message = this.$t(i18nPrefix + "translation_not_completed.content") + "<ul>";
      for (const elt of val) {
        message += `<li>${this.$t("common.lang." + elt + ".en")} (${this.$t(
          "common.lang." + elt + ".original"
        )}): ${this.$store.get(`translationState@${val}`)}%</li>`;
      }
      message += "</ul>";

      this.$dialog.confirm({
        title: this.$t(i18nPrefix + "translation_not_completed.title"),
        message,
        type: "info",
        hasIcon: true,
        icon: "exclamation-circle",
        iconPack: "fa",
        cancelText: this.$t("routes.help_to_translate_the_site.hero.title"),
        confirmText: this.$t("utils.Ok"),
        canCancel: ["button"],
        ariaRole: "alertdialog",
        ariaModal: true,
        onCancel: () => {
          this.$store.set("global/haveReadLocaleNotComplete", true);
          this.$router.push(this.localePath({ name: "HelpToTranslateTheSite" }));
        },
        onConfirm: () => {
          this.$store.set("global/haveReadLocaleNotComplete", true);
        },
      });
    },
  },
  methods: {
    getNextConversion() {
      const min = 15;
      const max = 30;
      const amount = Math.random() * (max - min) + min;
      return this.$moment().add(amount, "days").format("YYYY-MM-DD");
    },
    backToTop: /* istanbul ignore next */ function () {
      window.scroll({ top: 0 });
    },
    onCloseDonationMessage: /* istanbul ignore next */ function () {
      this.$store.set("global/donationConversion", this.$clone(this.getNextConversion()));
    },
  },
  mounted: /* istanbul ignore next */ function () {
    const addToAnyScript1 = document.createElement("script");
    addToAnyScript1.textContent = `var a2a_config = {};
    a2a_config.locale = "${this.$clone(this.$store.get("locale"))}";`;
    document.head.appendChild(addToAnyScript1);
    const addToAnyScript2 = document.createElement("script");
    addToAnyScript2.setAttribute("src", "https://static.addtoany.com/menu/page.js");
    document.head.appendChild(addToAnyScript2);

    this.$store.set("locale", this.$clone(this.$store.get("global/locale")));
    this.$data.lang = this.$clone(this.$store.get("global/locale"));

    // Check updates
    if (this.$store.get("global/lastVisitVersion") !== this.$data.siteVersion) {
      const lastVisitVersion = this.$clone(this.$store.get("global/lastVisitVersion"));
      const self = this;
      this.$axios
        .$get(tagURL)
        .then((tags) => {
          let found = false;
          let nb = 0;
          tags.forEach((elt) => {
            if (!found && elt.ref.match(/v(\d+\.\d+\.\d+)$/)[1] === lastVisitVersion) {
              found = true;
            } else if (found) {
              nb += 1;
            }
            return false;
          });

          self.$data.nbUpdateSinceLastVisit = nb;

          self.$store.set("global/lastVisitVersion", self.$clone(self.$data.siteVersion));
        })
        .catch((e) => {
          console.error("Error when getting GitHub tags: ", e);
        });
    }
  },
  components: {
    mainHeader,
    mainFooter,
  },
};
