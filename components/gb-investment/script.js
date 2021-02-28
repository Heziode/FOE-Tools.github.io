import Shepherd from "shepherd.js";
import { ContentLoader } from "vue-content-loader";
import { get } from "vuex-pathify";
import * as Errors from "../../scripts/errors";
import Utils from "~/scripts/utils";
import gbProcess from "~/lib/foe-compute-process/gb-investment";
import gbListSelect from "~/components/gb-list-select/GbListSelect";
import TTag from "~/components/t-tag/TTag";
import yesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";
import securePosition from "~/components/secure-position/SecurePosition";
import PromotionMessageBuilder from "~/components/promotion-message-builder/PromotionMessageBuilder";
import ImportPromotionMessage from "~/components/import-promotion-message/ImportPromotionMessage";
import { defaultPromotionMessages, buildMessage } from "~/scripts/promotion-message-builder";
import { getVideoTag, formatTuto } from "~/scripts/tutorial";
import TProgress from "~/components/t-progress/TProgress";

const i18nPrefix = "components.gb_investment.";

let oldInvestorPercentageCustom;
const defaultArcPercentage = 90;

const urlPrefix = "gbi_";
const defaultTemplateNameRegex = /Default\s\d+/;

const queryKey = {
  level: urlPrefix + "l",
  ownerInvestment: urlPrefix + "oi",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "p",
  investorParticipation: urlPrefix + "ip",
  placeFree: urlPrefix + "pFree",
  prefix: urlPrefix + "px",
  suffix: urlPrefix + "sx",
  displayGbName: urlPrefix + "dgbn",
  shortName: urlPrefix + "sn",
  showLevel: urlPrefix + "sl",
  showPrefix: urlPrefix + "spx",
  showSuffix: urlPrefix + "ssx",
  showSnipe: urlPrefix + "ss",
  showOnlySecuredPlaces: urlPrefix + "sosp",
  yourArcBonus: urlPrefix + "yab",
};

const inputComparator = {
  yourArcBonus: { comparator: [">=", 0], type: "float" },
};

export default {
  name: "GbInvestment",
  props: {
    gb: {
      type: Object,
      required: true,
    },
    canPermalink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const data = {
      i18nPrefix,
      dataReady: true,
      level: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.level`
        )
      ),
      maxLevel: this.$props.gb.levels.length,
      ownerInvestment: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.ownerInvestment`
        )
      ),
      investorPercentageGlobal: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.investorPercentageGlobal`
        )
      ),
      investorPercentageCustom: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.investorPercentageCustom`
        )
      ),
      investorParticipation: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.investorParticipation`
        )
      ),
      lockInvestorPercentage: this.$clone(
        this.$store.get(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb[${
            this.$route.params.gb
          }].ownerView.lockInvestorPercentage`
        )
      ),
      addInvestors: 0,
      showExtraInvestors: false,
      showSnipe: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].showSnipe`)
      ),
      placeFree: Array.from(new Array(5), () => {
        return { state: true };
      }),
      prefix: this.$clone(this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbPrefix`)),
      suffix: this.$clone(this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbSuffix`)),
      displayGbName: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].displayGbName`)
      ),
      shortName: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].shortName`)
      ),
      showLevel: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].showLevel`)
      ),
      showPrefix: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowPrefix`)
      ),
      showSuffix: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowSuffix`)
      ),
      yourArcBonus: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].yourArcBonus`)
      ),
      showOnlySecuredPlaces: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].showOnlySecuredPlaces`)
      ),
      displayTableCard: this.$clone(this.$store.get("global/displayTableCard")),
      result: null,
      defaultPromotionMessagesTemplates: this.$clone(defaultPromotionMessages),
      errors: {
        level: false,
        ownerInvestment: false,
        percentageValueGlobal: false,
        investorPercentageCustom_0: false,
        investorPercentageCustom_1: false,
        investorPercentageCustom_2: false,
        investorPercentageCustom_3: false,
        investorPercentageCustom_4: false,
        addInvestors: false,
        yourArcBonus: false,
      },
      promotionMessageTab: 0,
      promotion: [],
      promotionMessageList: this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].promotionMessageList`)
      ),
      childChange: false,
      templateToAdd: "",
      tutoMode: false,
    };

    Object.assign(data, this.checkQuery(data.level, data.maxLevel));

    oldInvestorPercentageCustom = JSON.parse(JSON.stringify(data.investorPercentageCustom));

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.level,
      value: data.level,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.ownerInvestment,
      value: data.ownerInvestment,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorPercentageGlobal,
      value: data.investorPercentageGlobal,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorParticipation,
      value: JSON.stringify(data.investorParticipation),
      ns: "gbi",
    });

    for (let index = 0; index < data.investorPercentageCustom.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (index + 1),
        value: data.investorPercentageCustom[index],
        ns: "gbi",
      });
    }

    for (let index = 0; index < data.placeFree.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.placeFree + (index + 1),
        value: data.placeFree[index].state ? 1 : 0,
        ns: "gbi",
      });
    }

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.prefix,
      value: data.prefix,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suffix,
      value: data.suffix,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.shortName,
      value: data.shortName ? 1 : 0,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.displayGbName,
      value: data.displayGbName ? 1 : 0,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showLevel,
      value: data.showLevel ? 1 : 0,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showPrefix,
      value: data.showPrefix,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showSuffix,
      value: data.showSuffix,
      ns: "gbi",
    });
    this.$store.commit("UPDATE_URL_QUERY", {
      key: queryKey.showSnipe,
      value: data.showSnipe ? 1 : 0,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourArcBonus,
      value: data.yourArcBonus,
      ns: "gbi",
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.showOnlySecuredPlaces,
      value: data.showOnlySecuredPlaces,
      ns: "gbi",
    });

    return data;
  },
  computed: {
    isPermalink: get("isPermalink"),
    lang: get("locale"),
    permaLink() {
      return {
        name: "GbInvestment",
        params: {
          gb: this.gb.key,
        },
        query: this.$store.getters.getUrlQuery("gbi"),
      };
    },
    maxInvestment() {
      return !this.$data.result || !this.$data.result.cost
        ? 0
        : this.$data.result.cost - this.investorParticipationNormalizedSum - this.ownerInvestmentNormalized;
    },
    investorParticipationNormalizedSum() {
      return this.investorParticipationNormalized.reduce((i, j) => i + j.value, 0);
    },
    investorParticipationNormalized() {
      /* istanbul ignore next */
      if (!Array.isArray(this.$data.investorParticipation)) {
        throw new Errors.InvalidTypeError({
          expected: "Array",
          actual: typeof this.$data.investorParticipation,
        });
      }

      return this.$data.investorParticipation.map((k) => {
        k.value = Utils.normalizeNumberValue(k.value, 0);
        k.isPotentialSniper = !!k.isPotentialSniper;
        return k;
      });
    },
    levelNormalized() {
      return Utils.normalizeNumberValue(this.$data.level, 1);
    },
    ownerInvestmentNormalized() {
      return Utils.normalizeNumberValue(this.$data.ownerInvestment);
    },
    nbColumns() {
      return 6 + (this.$data.showSnipe ? 1 : 0) + (this.investorParticipationNormalizedSum ? 2 : 0);
    },
    maxColumns() {
      return 9;
    },
    getCustomArcBonus() {
      return Utils.normalizeNumberValue(this.$data.yourArcBonus);
    },
    customPromotionMessagesTemplates: get("global/customPromotionMessagesTemplates"),
    vueCardClass() {
      return this.$data.tutoMode ? [] : ["lg:hidden"];
    },
    isBookmarked() {
      const bookmarks = this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`);
      return !!bookmarks.find(
        (elt) => elt.name === "GbInvestment" && elt.params && elt.params.gb && elt.params.gb === this.$route.params.gb
      );
    },
  },
  watch: {
    level(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.level = true;
        return;
      }

      if (
        Utils.handlerForm(
          this,
          "level",
          !val || val.length === 0 ? 1 : val,
          oldVal,
          [1, this.$data.maxLevel],
          !this.isPermalink,
          `profiles@["${this.$store.get("global/currentProfile")}"].gb.${this.$route.params.gb}.ownerView.level`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.level,
          value: val,
          ns: "gbi",
        });
        this.$data.ownerInvestment = 0;
        this.$data.showExtraInvestors = false;
        this.$data.investorParticipation = [];
        this.$data.result = {};

        if (!this.showOnlySecuredPlaces) {
          this.$data.placeFree = Array.from(new Array(5), () => {
            return { state: true };
          });
        }

        this.calculate();
      }
    },
    ownerInvestment(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.ownerInvestment = true;
        return;
      }
      if (
        Utils.handlerForm(
          this,
          "ownerInvestment",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          [0, this.result.cost - this.investorParticipationNormalizedSum],
          !this.isPermalink,
          `profiles@["${this.$store.get("global/currentProfile")}"].gb.${
            this.$route.params.gb
          }.ownerView.ownerInvestment`
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.ownerInvestment,
          value: val,
          ns: "gbi",
        });
        this.calculate();
      }
    },
    addInvestors(val, oldVal) {
      if (val === null) {
        return;
      }
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.addInvestors = true;
        return;
      }

      if (
        Utils.handlerForm(this, "addInvestors", !val || val.length === 0 ? 0 : val, oldVal, [1, this.maxInvestment]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.addInvestors,
          value: val,
          ns: "gbi",
        });
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.investorPercentageGlobal = true;
        return;
      }

      const value = !val || val.length === 0 ? 0 : val;

      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          value,
          oldVal,
          [">=", 0],
          !this.isPermalink,
          `profiles@["${this.$store.get("global/currentProfile")}"].gb.${
            this.$route.params.gb
          }.ownerView.investorPercentageGlobal`,
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val,
          ns: "gbi",
        });

        const investorPercentageCustom = [];
        for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: Utils.normalizeNumberValue(val),
            ns: "gbi",
          });
          investorPercentageCustom.push(value);
        }
        this.$data.investorPercentageCustom = investorPercentageCustom;

        this.calculate();
      }
    },
    investorPercentageCustom(val) {
      let result = Utils.FormCheck.VALID;
      let tmp;
      for (let index = 0; index < val.length; index++) {
        tmp = Utils.handlerForm(
          this,
          "investorPercentageCustom_" + index,
          val[index].length === 0 ? 0 : val[index],
          oldInvestorPercentageCustom[index],
          [">=", 0],
          false,
          "",
          "float"
        );
        if (tmp === Utils.FormCheck.INVALID) {
          result = Utils.FormCheck.INVALID;
        } else if (tmp === Utils.FormCheck.VALID) {
          if (!this.isPermalink) {
            this.$store.set(
              `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb.${
                this.$route.params.gb
              }.ownerView.investorPercentageCustom`,
              this.$clone(val)
            );
          }
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val[index],
            ns: "gbi",
          });
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        this.calculate();
      }
    },
    lockInvestorPercentage(val) {
      this.$store.set(
        `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb.${
          this.$route.params.gb
        }.ownerView.lockInvestorPercentage`,
        !!this.$clone(val)
      );
    },
    investorParticipation(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.investorParticipation,
        value: JSON.stringify(val),
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb.${
            this.$route.params.gb
          }.ownerView.investorParticipation`,
          this.$clone(val)
        );
      }
      this.calculate();
    },
    prefix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.prefix,
        value: val,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbPrefix`, this.$clone(val));
      }
      this.updatePromotionMessage();
    },
    suffix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suffix,
        value: val,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].gbSuffix`, this.$clone(val));
      }
      this.updatePromotionMessage();
    },
    displayGbName(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.displayGbName,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].displayGbName`,
          this.$clone(val)
        );
      }
      this.updatePromotionMessage();
    },
    shortName(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.shortName,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].shortName`, this.$clone(val));
      }
      this.updatePromotionMessage();
    },
    showLevel(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showLevel,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].showLevel`, this.$clone(val));
      }
      this.updatePromotionMessage();
    },
    showPrefix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showPrefix,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowPrefix`,
          this.$clone(val)
        );
      }
      this.updatePromotionMessage();
    },
    showSuffix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showSuffix,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowSuffix`,
          this.$clone(val)
        );
      }
      this.updatePromotionMessage();
    },
    showOnlySecuredPlaces(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showOnlySecuredPlaces,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].showOnlySecuredPlaces`,
          this.$clone(val)
        );
      }
      if (!val) {
        for (let i = 0; i < this.result.investment.length; i++) {
          this.placeFree[i].state = true;
        }
        this.updatePromotionMessage();
      }
      this.updatePlaceFreeWhenOnlySecured();
    },
    showSnipe(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.showSnipe,
        value: val ? 1 : 0,
        ns: "gbi",
      });
      if (!this.isPermalink) {
        this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].showSnipe`, this.$clone(val));
      }
    },
    yourArcBonus(val, oldVal) {
      if (val && typeof val !== "number" && val.length > 0) {
        return;
      }
      this.$data.change = true;
      if (
        Utils.handlerForm(
          this,
          "yourArcBonus",
          !val || val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourArcBonus.comparator,
          !this.isPermalink,
          `profiles@["${this.$store.get("global/currentProfile")}"].yourArcBonus`,
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourArcBonus,
          value: val,
          ns: "gbi",
        });
        this.calculate();
      }
    },
    displayTableCard(val) {
      this.$store.set(`global/displayTableCard`, this.$clone(val));
    },
    result(val) {
      if (val !== null) {
        this.updatePromotionMessage();
      }
    },
    lang() {
      if (this.$data.result !== null) {
        this.updatePromotionMessage();
      }
    },
    promotionMessageList: {
      handler(val) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].promotionMessageList`,
          this.$clone(val)
        );
        this.updatePromotionMessage();
      },
      deep: true,
    },
  },
  methods: {
    goTo(val) {
      this.$router.push(this.localePath({ name: "GbInvestment", params: { gb: val } }));
    },
    calculate() {
      if (this.maxInvestment < 0) {
        // to prevent BoundExceededError
        return;
      }
      // eslint-disable-next-line no-useless-catch
      try {
        this.$data.result = gbProcess.ComputeLevelInvestment(
          this.levelNormalized,
          Utils.normalizeNumberArray(this.$data.investorPercentageCustom),
          this.$props.gb.levels,
          this.investorParticipationNormalized,
          Utils.normalizeNumberValue(this.$data.ownerInvestment),
          Utils.normalizeNumberValue(this.$data.yourArcBonus)
        );
        this.updatePlaceFreeWhenOnlySecured();
      } catch (e) {
        // TODO: error processing
        throw e;
      }
    },
    updatePromotionMessage() {
      if (!this.result || !this.result.investment) {
        return;
      }
      const result = [];
      const messageInterpolation = [
        { key: "FLVL", value: this.level - 1 },
        { key: "TLVL", value: this.level },
        { key: "OP", value: this.$data.result.totalPreparations },
        { key: "LC", value: this.$data.result.cost },
      ];
      const placesInterpolationValues = [];
      for (let i = 0; i < this.result.investment.length; i++) {
        if (!this.result.investment[i].participation || this.result.investment[i].participation <= 0) {
          continue;
        }
        placesInterpolationValues.push([
          { key: "PI", value: i + 1 },
          {
            key: "PV",
            value: this.result.investment[i].participation,
            free: this.placeFree[i].state,
          },
          { key: "PP", value: this.result.investment[i].preparation },
          { key: "FLVL", value: this.level - 1 },
          { key: "TLVL", value: this.level },
        ]);
      }

      for (const promotion of this.$data.promotionMessageList) {
        result.push({
          name: promotion.name,
          message: buildMessage.call(
            this,
            this.gb.key,
            {
              ...promotion.config,
              prefix: this.showPrefix ? this.prefix : "",
              suffix: this.showSuffix ? this.suffix : "",
              displayGbName: this.displayGbName,
              useShortGbName: this.shortName,
              showLevel: this.showLevel,
            },
            messageInterpolation,
            placesInterpolationValues
          ),
          active: false,
        });
      }

      this.$data.promotion = result;
    },
    successCopy(index) {
      this.promotion[index].active = true;
      const self = this;
      /* istanbul ignore next */
      setTimeout(function () {
        self.promotion[index].active = false;
      }, 3000);
    },
    changePlaceFree(i, value) {
      this.$data.placeFree[i].state = value;

      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.placeFree + (i + 1),
        value: value ? 1 : 0,
        ns: "gbi",
      });

      this.updatePromotionMessage();
    },
    changeIsPotentialSniper(i, value) {
      this.$data.investorParticipation[i].isPotentialSniper = !!value;

      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.investorParticipation,
        value: JSON.stringify(this.$data.investorParticipation),
        ns: "gbi",
      });

      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gb.${
            this.$route.params.gb
          }.ownerView.investorParticipation`,
          this.$clone(this.$data.investorParticipation)
        );
      }

      this.calculate();
    },

    /**
     * Check URL query and return query data
     * @param level Current selected level
     * @param maxLevel Max level of the GB
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery(level, maxLevel) {
      const result = { level };
      let investorPercentageCustom = Array.apply(null, Array(5)).map(() => defaultArcPercentage);
      let investorParticipation = [];
      const placeFree = Array.apply(null, Array(5)).map(() => {
        return { state: true };
      });
      let isPermalink = false;

      // Check level
      if (
        this.$route.query[queryKey.level] &&
        !isNaN(this.$route.query[queryKey.level]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.level]), 1, maxLevel)
      ) {
        isPermalink = true;
        result.level = parseInt(this.$route.query[queryKey.level]);
      }

      // Check owner investment
      if (
        this.$route.query[queryKey.ownerInvestment] &&
        !isNaN(this.$route.query[queryKey.ownerInvestment]) &&
        Utils.inRange(
          parseInt(this.$route.query[queryKey.ownerInvestment]),
          0,
          this.$props.gb.levels[result.level - 1].cost
        )
      ) {
        isPermalink = true;
        result.ownerInvestment = parseInt(this.$route.query[queryKey.ownerInvestment]);
      }

      // Check global investors percentage
      if (
        this.$route.query[queryKey.investorPercentageGlobal] &&
        !isNaN(this.$route.query[queryKey.investorPercentageGlobal]) &&
        parseFloat(this.$route.query[queryKey.investorPercentageGlobal]) >= 0
      ) {
        isPermalink = true;
        result.investorPercentageGlobal = parseInt(this.$route.query[queryKey.investorPercentageGlobal]);
        investorPercentageCustom = Array.apply(null, Array(5)).map(() => result.investorPercentageGlobal);
      }

      //  Check percentage value for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.investorPercentageCustom + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]) &&
          parseFloat(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          investorPercentageCustom[i] = parseFloat(this.$route.query[queryKey.investorPercentageCustom + (i + 1)]);
        }

        if (this.$route.query[queryKey.investorParticipation]) {
          const parsedParticipation = JSON.parse(this.$route.query[queryKey.investorParticipation]);
          if (Array.isArray(parsedParticipation)) {
            isPermalink = true;
            investorParticipation = parsedParticipation;
          }
        }
      }

      //  Check free place for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.placeFree + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.placeFree + (i + 1)]) &&
          parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          placeFree[i].state = parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) === 1;
        }
      }

      if (this.$route.query[queryKey.prefix]) {
        isPermalink = true;
        result.prefix = this.$route.query[queryKey.prefix];
      }

      if (this.$route.query[queryKey.suffix]) {
        isPermalink = true;
        result.suffix = this.$route.query[queryKey.suffix];
      }

      if (this.$route.query[queryKey.displayGbName]) {
        isPermalink = true;
        result.displayGbName = !!parseInt(this.$route.query[queryKey.displayGbName]);
      }

      if (this.$route.query[queryKey.shortName]) {
        isPermalink = true;
        result.shortName = !!parseInt(this.$route.query[queryKey.shortName]);
      }

      if (this.$route.query[queryKey.showLevel]) {
        isPermalink = true;
        result.showLevel = !!parseInt(this.$route.query[queryKey.showLevel]);
      }

      if (this.$route.query[queryKey.showPrefix]) {
        isPermalink = true;
        result.showPrefix = !!parseInt(this.$route.query[queryKey.showPrefix]);
      }

      if (this.$route.query[queryKey.showSuffix]) {
        isPermalink = true;
        result.showSuffix = !!parseInt(this.$route.query[queryKey.showSuffix]);
      }

      if (this.$route.query[queryKey.showSnipe]) {
        isPermalink = true;
        result.showSnipe = !!parseInt(this.$route.query[queryKey.showSnipe]);
      }

      if (this.$route.query[queryKey.showOnlySecuredPlaces]) {
        isPermalink = true;
        result.showOnlySecuredPlaces = !!parseInt(this.$route.query[queryKey.showOnlySecuredPlaces]);
      }

      const tmp = Utils.checkFormNumeric(
        this.$route.query[queryKey.yourArcBonus],
        -1,
        inputComparator.yourArcBonus.comparator,
        inputComparator.yourArcBonus.type
      );
      if (tmp.state === Utils.FormCheck.VALID) {
        isPermalink = true;
        result.yourArcBonus = tmp.value;
      }

      if (isPermalink) {
        this.$store.set("isPermalink", true);
        result.investorPercentageCustom = investorPercentageCustom;
        result.investorParticipation = investorParticipation;
        result.placeFree = placeFree;
      }

      return result;
    },
    addSpecificInvestor(val) {
      this.$data.addInvestors = val;
      this.addInvestor();
    },
    addInvestor() {
      const val = this.$data.addInvestors;
      if (val && typeof val !== "number" && val.length > 0) {
        this.$data.errors.addInvestors = true;
        return;
      }

      if (
        Utils.handlerForm(this, "addInvestors", !val || val.length === 0 ? 0 : val, 0, [1, this.maxInvestment]) ===
        Utils.FormCheck.VALID
      ) {
        const isPotentialSniper = !this.$data.result.investment
          // First, we select only free place
          .filter((elt) => !elt.isInvestorParticipation)
          // Then, we extract the expected participation
          .map((elt) => elt.expectedParticipation)
          // Finally, we check if the added investor match a value.
          // If the result is True, then the added investor is probably not a sniper
          .includes(val);
        this.$data.investorParticipation.push({
          value: val,
          isPotentialSniper,
        });
        // Not efficient, but small array
        /* istanbul ignore next */
        this.$data.investorParticipation = this.$data.investorParticipation.sort((a, b) => b.value - a.value);

        this.$data.addInvestors = "";

        this.calculate();
      }
    },
    removePromotionMessage(index) {
      this.promotionMessageList.splice(index, 1);
      this.$store.set(
        `profile/profiles@["${this.$store.get("global/currentProfile")}"].promotionMessageList`,
        this.$clone(this.promotionMessageList)
      );
      this.promotion.splice(index, 1);
    },
    getTemplateSample(template) {
      if (!this.result || !this.result.investment) {
        return;
      }
      const messageInterpolation = [
        { key: "FLVL", value: this.level - 1 },
        { key: "TLVL", value: this.level },
        { key: "OP", value: this.$data.result.totalPreparations },
        { key: "LC", value: this.$data.result.cost },
      ];
      const placesInterpolationValues = [];
      for (let i = 0; i < this.result.investment.length; i++) {
        if (!this.result.investment[i].participation || this.result.investment[i].participation <= 0) {
          continue;
        }
        placesInterpolationValues.push([
          { key: "PI", value: i + 1 },
          {
            key: "PV",
            value: this.result.investment[i].participation,
            free: this.placeFree[i].state,
          },
          { key: "PP", value: this.result.investment[i].preparation },
          { key: "FLVL", value: this.level - 1 },
          { key: "TLVL", value: this.level },
        ]);
      }

      return buildMessage.call(
        this,
        this.gb.key,
        {
          ...template,
          prefix: this.prefix,
          suffix: this.suffix,
          displayGbName: this.displayGbName,
        },
        messageInterpolation,
        placesInterpolationValues
      );
    },
    addPromotionMessageTemplate() {
      if (!this.templateToAdd || !this.templateToAdd.length) {
        return;
      }
      /* istanbul ignore next */
      const elt = defaultTemplateNameRegex.test(this.templateToAdd)
        ? this.defaultPromotionMessagesTemplates.find((elt) => elt.id === this.templateToAdd)
        : this.customPromotionMessagesTemplates.find((elt) => elt.id === this.templateToAdd);
      if (!elt) {
        return;
      }

      this.promotionMessageList.push(this.$clone(elt));

      this.$store.set(
        `profile/profiles@["${this.$store.get("global/currentProfile")}"].promotionMessageList`,
        this.$clone(this.promotionMessageList)
      );

      this.updatePromotionMessage();
      this.templateToAdd = "";
    },
    removeInvestor(index) {
      if (!Utils.inRange(index, 0, this.$data.investorParticipation.length - 1)) {
        return;
      }

      this.$data.investorParticipation.splice(index, 1);
      this.calculate();
    },
    switchPrefix() {
      this.showPrefix = !this.showPrefix;

      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowPrefix`,
          this.$clone(this.showPrefix)
        );
      }
    },
    switchSuffix() {
      this.showSuffix = !this.showSuffix;

      if (!this.isPermalink) {
        this.$store.set(
          `profile/profiles@["${this.$store.get("global/currentProfile")}"].gbShowSuffix`,
          this.$clone(this.showSuffix)
        );
      }
    },
    updatePlaceFreeWhenOnlySecured() {
      if (!this.showOnlySecuredPlaces) {
        return;
      }
      for (let i = 0; i < this.result.investment.length; i++) {
        this.placeFree[i].state =
          !this.result.investment[i].isInvestorParticipation &&
          this.result.investment[i].preparation - this.ownerInvestmentNormalized <= 0;
      }
      this.updatePromotionMessage();
    },
    getSplittedCustomFields(name) {
      const fields = this.$data.promotionMessageList[
        this.$data.promotionMessageList.map((val) => val.name).indexOf(name)
      ].config.customFields;
      const result = Object.keys(fields).map((key) => {
        return fields[key];
      });
      return Utils.splitArray(result, 2, false);
    },
    nbMultiLine(src) {
      const nbLF = src.match(/\n/gi);
      return nbLF && nbLF.length > 0 ? nbLF.length + 1 : 0;
    },
    startTour: /* istanbul ignore next */ function () {
      const tour = new Shepherd.Tour({
        defaultStepOptions: {
          classes: "buefy-theme",
          scrollTo: true,
          showCancelLink: true,
          shepherdElementMaxHeight: "100%",
          shepherdElementMaxWidth: "100%",
        },
        classPrefix: "buefy-",
        useModalOverlay: true,
      });

      const defaultOptions = {
        scrollTo: { behavior: "smooth", block: "center" },
        canClickTarget: false,
        cancelIcon: {
          enabled: true,
        },
        buttons: [
          {
            action: tour.back,
            text: this.$t("utils.Previous"),
          },
          {
            action: tour.next,
            classes: "is-margin-left-auto",
            text: this.$t("utils.Next"),
          },
        ],
      };

      const canShow = {
        rush_1_9: false,
        snipe: false,
      };

      const tutoLinks = [
        {
          id: "rush_1_9",
          stepId: "rush_1_9",
        },
        {
          id: "snipe",
          stepId: "snipe",
        },
        {
          id: "display_modes",
          stepId: "display_modes",
          attachTo: { element: "#GBInvestmentVueMode nav", on: "bottom" },
        },
      ];

      const TableColumnData = [
        {
          i18nKey: "place",
          stepId: "thPlace",
          attachTo: { element: ".tableDataPlace", on: "top" },
        },
        {
          i18nKey: "default_rewards",
          stepId: "thDefaultRewards",
          attachTo: { element: ".tableDataDefaultRewards", on: "top" },
        },
        {
          i18nKey: "fp_to_put_by_the_owner",
          stepId: "thFpToPutByTheOwner",
          attachTo: { element: ".tableDataFpToPutByTheOwner", on: "top" },
        },
        {
          i18nKey: "rewards_with_rate",
          stepId: "thRewardsWithRate",
          attachTo: { element: ".tableDataRewardsWithRate", on: "top" },
        },
        {
          i18nKey: "fp_already_putin",
          stepId: "thNumberOfFPAlreadyIn",
          attachTo: { element: ".tableDataNumberOfFPAlreadyIn", on: "top" },
        },
        {
          i18nKey: "spot_snipe",
          stepId: "thSpotSnipe",
          attachTo: { element: ".tableDataSpotSnipe", on: "top" },
        },
        {
          i18nKey: "percentage_investors",
          stepId: "thPercentageInvestors",
          attachTo: { element: ".tableDataPercentageInvestors", on: "top" },
        },
        {
          i18nKey: "is_sniper",
          stepId: "thIsSniper",
          attachTo: { element: ".tableDataIsSniper", on: "top" },
        },
        {
          i18nKey: "include_in_copy_boxes",
          stepId: "thIncludeInCopyBoxes",
          attachTo: { element: ".tableDataIncludeInCopyBoxes", on: "top" },
        },
      ];

      const promotionMessage = [
        {
          i18nKey: "tabs",
          stepId: "thDefaultRewards",
          attachTo: { element: "#giPromotionMessageTab nav", on: "top" },
        },
        {
          i18nKey: "prefix",
          stepId: "giPrefix",
          attachTo: { element: "#pmPrefix", on: "top" },
        },
        {
          i18nKey: "suffix",
          stepId: "giSuffix",
          attachTo: { element: "#pmSuffix", on: "top" },
        },
        {
          i18nKey: "display_gb_name",
          stepId: "pmDisplayGbName",
          attachTo: { element: "#pmDisplayGbName", on: "top" },
        },
        {
          i18nKey: "use_short_name",
          stepId: "pmShortName",
          attachTo: { element: "#pmShortName", on: "top" },
        },
        {
          i18nKey: "show_level",
          stepId: "pmShowLevel",
          attachTo: { element: "#pmShowLevel", on: "top" },
        },
        {
          i18nKey: "show_only_secured_places",
          stepId: "pmShowOnlySecuredPlaces",
          attachTo: { element: "#pmShowOnlySecuredPlaces", on: "top" },
        },
        {
          i18nKey: "custom_fields",
          stepId: "pmCustomField",
          attachTo: { element: ".custom_field", on: "top" },
        },
      ];

      const makeTutoLinks = () => {
        let result = "<div id='welcomePromotionMessage'><ul>";

        for (const elt of tutoLinks) {
          result +=
            "<li><a href='#' id='" +
            elt.id +
            "'>" +
            this.$t("components.gb_investment.tutorial." + elt.stepId + ".title") +
            "</a></li>";
        }

        return result + "</ul></div>";
      };

      tour.addStep({
        id: "welcomePromotionMessage",
        text: formatTuto(this.$t("components.gb_investment.tutorial.welcome")) + makeTutoLinks(),
        ...defaultOptions,
        buttons: [
          {
            action: tour.cancel,
            text: this.$t("utils.Exit"),
          },
          {
            action: tour.next,
            classes: "is-margin-left-auto",
            text: this.$t("utils.Next"),
          },
        ],
        when: {
          show() {
            const self = this;
            for (const elt of tutoLinks) {
              document.getElementById(elt.id).addEventListener("click", (e) => {
                e.preventDefault();
                canShow[elt.stepId] = true;
                self.tour.next(elt.stepId);
              });
            }
          },
        },
      });

      // Add extra steps
      for (const elt of tutoLinks) {
        let text;
        if (elt.stepId === "rush_1_9") {
          text = formatTuto(
            this.$t("components.gb_investment.tutorial.rush_1_9.content", {
              fp25: this.$tc("utils.FP", 25, { count: this.$n(25) }),
              fp50: this.$tc("utils.FP", 50, { count: this.$n(50) }),
              fp12363: this.$tc("utils.FP", 12363, { count: this.$n(12363) }),
              fp24957: this.$tc("utils.FP", 24957, { count: this.$n(24957) }),
              fp37320: this.$tc("utils.FP", 37320, { count: this.$n(37320) }),
              fp64975: this.$tc("utils.FP", 64975, { count: this.$n(64975) }),
            })
          );
        } else if (elt.stepId === "snipe") {
          text = formatTuto(
            this.$t("components.gb_investment.tutorial.snipe.content", {
              fp60: this.$tc("utils.FP", 60, { count: this.$n(60) }),
              fp1679: this.$tc("utils.FP", 1679, { count: this.$n(1679) }),
              fp1739: this.$tc("utils.FP", 1739, { count: this.$n(1739) }),
            })
          );
        } else {
          text = formatTuto(this.$t("components.gb_investment.tutorial." + elt.stepId + ".content"));
        }
        tour.addStep({
          id: elt.stepId,
          text,
          title: this.$t("components.gb_investment.tutorial." + elt.stepId + ".title"),
          showOn: () => canShow[elt.stepId],
          ...defaultOptions,
          when: {
            hide() {
              canShow[elt.stepId] = false;
            },
          },
          attachTo: elt.attachTo,
        });
      }

      tour.addStep({
        id: "gbListSelect",
        text: formatTuto(
          this.$t("components.gb_investment.tutorial.gb_select", {
            videoSelect: getVideoTag("/video/select.mp4"),
            videoAutoComplete: getVideoTag("/video/auto-complete.mp4"),
          })
        ),
        attachTo: { element: "#gbListSelect", on: "bottom" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldId",
        text: formatTuto(this.$t("components.gb_investment.tutorial.level")),
        attachTo: { element: "#fieldId", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldInvestorPercentage",
        text: formatTuto(this.$t("components.gb_investment.tutorial.investor_percentage")),
        attachTo: { element: "#fieldInvestorPercentage", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldOwnerInvestment",
        text: formatTuto(this.$t("components.gb_investment.tutorial.owner_investment")),
        attachTo: { element: "#fieldOwnerInvestment", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldAddInvestors",
        text: formatTuto(this.$t("components.gb_investment.tutorial.add_investors")),
        attachTo: { element: "#fieldAddInvestors", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldShowSnipe",
        text: formatTuto(this.$t("components.gb_investment.tutorial.show_snipe")),
        attachTo: { element: "#fieldShowSnipe", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldYourArcBonus",
        text: formatTuto(this.$t("components.gb_investment.tutorial.your_arc_bonus")),
        attachTo: { element: "#fieldYourArcBonus", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "fieldDisplayCard",
        text: formatTuto(this.$t("components.gb_investment.tutorial.display_card")),
        attachTo: { element: "#fieldDisplayCard", on: "top" },
        ...defaultOptions,
      });

      tour.addStep({
        id: "gbiTable",
        text: formatTuto(this.$t("components.gb_investment.tutorial.table.message")),
        attachTo: { element: ".gbiTable", on: "top" },
        ...defaultOptions,
      });

      for (const elt of TableColumnData) {
        tour.addStep({
          id: elt.stepId,
          text: formatTuto(this.$t("components.gb_investment.tutorial.table." + elt.i18nKey)),
          attachTo: elt.attachTo,
          ...defaultOptions,
        });
      }

      tour.addStep({
        id: "giPromotionMessage",
        text: formatTuto(this.$t("components.gb_investment.tutorial.promotion_message.message")),
        attachTo: { element: "#giPromotionMessage", on: "top" },
        ...defaultOptions,
      });

      for (const elt of promotionMessage) {
        tour.addStep({
          id: elt.stepId,
          text: formatTuto(this.$t("components.gb_investment.tutorial.promotion_message." + elt.i18nKey)),
          attachTo: elt.attachTo,
          ...defaultOptions,
        });
      }

      tour.addStep({
        id: "pmAddMessage",
        text: formatTuto(this.$t("components.gb_investment.tutorial.promotion_message.add_message")),
        attachTo: { element: "#pmAddMessage", on: "top" },
        ...defaultOptions,
        buttons: [
          {
            action: tour.back,
            classes: "is-info",
            text: this.$t("utils.Previous"),
          },
          {
            action: tour.next,
            classes: "is-margin-left-auto",
            text: this.$t("utils.Done"),
          },
        ],
      });

      const self = this;
      tour.on("cancel", () => {
        self.$data.tutoMode = false;
      });
      tour.on("complete", () => {
        self.$data.tutoMode = false;
      });
      this.$data.tutoMode = true;
      tour.start();
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },
    toggleFavourite() {
      const bookmarks = this.$clone(
        this.$store.get(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`)
      );
      if (this.isBookmarked) {
        // Remove from bookmarks
        const index = bookmarks.findIndex(
          (elt) => elt.name === "GbInvestment" && elt.params && elt.params.gb && elt.params.gb === this.$route.params.gb
        );
        bookmarks.splice(index, 1);
      } else {
        // Add in bookmarks
        bookmarks.push({
          name: this.$route.name.replace(/___.*$/, ""),
          params: this.$route.params,
        });
      }
      this.$store.set(`profile/profiles@["${this.$store.get("global/currentProfile")}"].bookmarks`, bookmarks);
    },
  },
  mounted() {
    this.calculate();
  },
  components: {
    securePosition,
    gbListSelect,
    yesNo,
    numberinput,
    PromotionMessageBuilder,
    ImportPromotionMessage,
    ContentLoader,
    TTag,
    TProgress,
  },
};
