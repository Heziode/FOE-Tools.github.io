import { get } from "vuex-pathify";
import { v4 as uuidv4 } from "uuid";
import yesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";
import * as PMBuilder from "~/scripts/promotion-message-builder";
import Observatory from "~/lib/foe-data/gbs-data/Observatory";

const i18nPrefix = "components.import_promotion_message.";
const defaultTemplateNameRegex = /Default\s\d+/;

export default {
  name: "ImportPromotionMessage",
  props: {
    gbKey: {
      type: String,
      default: Observatory.key,
    },
    messageInterpolation: {
      type: Array,
      default: () => {
        return [
          { key: "FLVL", value: 9 },
          { key: "TLVL", value: 10 },
          { key: "OP", value: 430 },
          { key: "LC", value: 650 },
        ];
      },
    },
    placesInterpolationValues: {
      type: Array,
      default: () => {
        const placesInterpolationValues = [];
        const RewardsAt90Percent = [124, 67, 19, 10, 0];
        const ownerPreparation = [402, 402, 421, 421, 430];

        for (let i = 0; i < Observatory.levels[9].reward.length; i++) {
          if (Observatory.levels[9].reward[i] <= 0) {
            continue;
          }
          placesInterpolationValues.push([
            { key: "PI", value: i + 1 },
            { key: "PV", value: RewardsAt90Percent[i], free: true },
            { key: "PP", value: ownerPreparation[i] },
            { key: "FLVL", value: 9 },
            { key: "TLVL", value: 10 },
          ]);
        }
        return placesInterpolationValues;
      },
    },
  },
  data() {
    const data = {
      i18nPrefix,
      templateName: "",
      template: "",
      resultMessage: "",
      errors: {
        templateName: { found: false, message: "" },
        template: { found: false, message: "" },
      },
    };

    return data;
  },
  computed: {
    lang: get("locale"),
  },
  watch: {
    lang() {
      if (this.$data.result !== null) {
        this.updatePromotionMessage();
      }
    },
    templateName(val) {
      if (!val || !val.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
      } else if (defaultTemplateNameRegex.test(val)) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t(i18nPrefix + "errors.template_cannot_have_this_name");
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }
    },
    template(val) {
      if (!val || !val.length) {
        return "";
      }
      let template;
      try {
        template = {
          prefix: "",
          suffix: "",
          useShortGbName: false,
          reversePlacesOrder: false,
          placeSeparator: "",
          ...JSON.parse(val),
        };
      } catch (e) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        return;
      }

      const keys = Object.keys(template);
      if (!keys.includes("message") || !keys.includes("place")) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        return;
      }
      for (const customFieldName in template.customFields) {
        if (!("placeholder" in template.customFields[customFieldName])) {
          template.customFields[customFieldName].placeholder = template.customFields[customFieldName].value;
        }
        if (!("show" in template.customFields[customFieldName])) {
          template.customFields[customFieldName].show = true;
        }
      }
      for (const key in template.customFields) {
        if (
          (!template.customFields[key].value || !template.customFields[key].value.length) &&
          template.customFields[key].placeholder
        ) {
          template.customFields[key].value = template.customFields[key].placeholder;
        }
      }

      this.errors.template.found = false;
      this.errors.template.message = "";

      this.resultMessage = PMBuilder.buildMessage.call(
        this,
        this.$props.gbKey,
        template,
        this.$props.messageInterpolation,
        this.$props.placesInterpolationValues
      );
    },
  },
  methods: {
    successCopy(index) {
      this.tooltips[index] = true;
      const self = this;
      /* istanbul ignore next */
      setTimeout(function () {
        self.tooltips[index] = false;
      }, 3000);
    },
    save() {
      let error = false;
      if (!this.template || !this.template.length) {
        this.errors.template.found = true;
        this.errors.template.found = this.$t("utils.errors.field_cannot_be_empty");
        error = true;
      }
      let template;
      try {
        template = {
          prefix: "",
          suffix: "",
          useShortGbName: false,
          reversePlacesOrder: false,
          placeSeparator: "",
          ...JSON.parse(this.template),
        };
      } catch (e) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        error = true;
      }

      const keys = Object.keys(template);
      if (!keys.includes("message") || !keys.includes("place")) {
        this.errors.template.found = true;
        this.errors.template.message = this.$t(i18nPrefix + "errors.invalid_data");
        error = true;
      }

      this.errors.template.found = false;
      this.errors.template.found = "";

      if (!this.templateName || !this.templateName.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
        error = true;
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }

      if (error) {
        return;
      }

      for (const customFieldName in template.customFields) {
        if (!("placeholder" in template.customFields[customFieldName])) {
          template.customFields[customFieldName].placeholder = template.customFields[customFieldName].value;
        }
        if (!("show" in template.customFields[customFieldName])) {
          template.customFields[customFieldName].show = true;
        }
      }

      const result = this.$clone(this.$store.get(`global/customPromotionMessagesTemplates`));
      const ids = result.map((e) => e.id);
      let id;
      do {
        id = uuidv4();
      } while (ids.includes(id));
      result.push({ id, name: this.templateName, config: template });
      this.$store.set(`global/customPromotionMessagesTemplates`, this.$clone(result));
      this.$toast({
        description: this.$t(i18nPrefix + "template_imported"),
        status: "success",
      });
    },
    nbMultiLine(src) {
      const nbLF = src.match(/\n/gi);
      return nbLF && nbLF.length > 0 ? nbLF.length + 1 : 0;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    },
  },
  components: {
    yesNo,
    numberinput,
  },
};
