import { v4 as uuidv4 } from "uuid";
import yesNo from "~/components/yes-no/YesNo";
import numberinput from "~/components/number-input/NumberInput";
import * as PMBuilder from "~/scripts/promotion-message-builder";
import Observatory from "~/lib/foe-data/gbs-data/Observatory";

const i18nPrefix = "components.promotion_message_builder.";
const defaultTemplateNameRegex = /Default\s\d+/;

export default {
  name: "PromotionMessageBuilder",
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
    const defaultTemplates = PMBuilder.defaultPromotionMessages;
    const customTemplates = this.$clone(this.$store.get("global/customPromotionMessagesTemplates"));
    const data = {
      i18nPrefix,
      tooltips: {
        config: false,
      },
      action: "create",
      templateName: "",
      startFromTemplate: "",
      defaultTemplates,
      customTemplates,
      IdEditedTemplate: "",
      addFieldName: "",
      addFieldValue: "",
      result: {
        prefix: "",
        suffix: "",
        useShortGbName: false,
        reversePlacesOrder: false,
        showLevel: true,
        placeSeparator: "",
        place: "",
        message: "",
        customFields: {},
      },
      errors: {
        templateName: { found: false, message: "" },
        addFieldName: { found: false, message: "" },
      },
    };

    return data;
  },
  computed: {
    lang() {
      return this.$store.get("locale");
    },
    resultString() {
      return JSON.stringify(this.result);
    },
    customFields() {
      return !this.$data.result.customFields
        ? []
        : Object.keys(this.$data.result.customFields).map((key) => this.$data.result.customFields[key]);
    },
    placePreview() {
      return !this.result.place || !this.result.place.length
        ? ""
        : PMBuilder.buildPlace.call(
            this,
            this.$props.gbKey,
            { displayGbName: true, ...this.result, message: this.result.place },
            this.$props.placesInterpolationValues[0]
          );
    },
    selectLabel() {
      return this.action === "create"
        ? this.$t(i18nPrefix + "start_from_template")
        : this.action === "update"
        ? this.$t(i18nPrefix + "edit_template")
        : this.$t(i18nPrefix + "delete_template");
    },
    resultMessage() {
      const data = { displayGbName: true, ...this.$clone(this.result) };
      for (const key in data.customFields) {
        data.customFields[key].value = data.customFields[key].placeholder;
      }
      return !this.result.message || !this.result.message.length
        ? ""
        : PMBuilder.buildMessage.call(
            this,
            this.$props.gbKey,
            data,
            this.$props.messageInterpolation,
            this.$props.placesInterpolationValues
          );
    },
  },
  watch: {
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
    startFromTemplate(templateID) {
      const tmp = defaultTemplateNameRegex.test(templateID)
        ? this.defaultTemplates.find((elt) => elt.id === templateID)
        : this.customTemplates.find((elt) => elt.id === templateID);
      this.result = { customFields: {}, ...this.$clone(tmp.config) };
      this.$data.IdEditedTemplate = templateID;
      if (this.action === "update") {
        this.$data.templateName = tmp.name;
      }
    },
    addFieldName(val) {
      if (Object.keys(this.$data.result.customFields).includes(val)) {
        this.$data.errors.addFieldName.found = true;
        this.$data.errors.addFieldName.message = this.$t(i18nPrefix + "errors.custom_name_already_exists");
      } else {
        this.$data.errors.addFieldName.found = false;
        this.$data.errors.addFieldName.message = "";
      }
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
    getTemplateSample(template) {
      return PMBuilder.buildMessage.call(
        this,
        this.$props.gbKey,
        { displayGbName: true, ...template },
        this.$props.messageInterpolation,
        this.$props.placesInterpolationValues
      );
    },
    save() {
      if (!this.templateName || !this.templateName.length) {
        this.errors.templateName.found = true;
        this.errors.templateName.message = this.$t("utils.errors.field_cannot_be_empty");
        return;
      } else {
        this.errors.templateName.found = false;
        this.errors.templateName.message = "";
      }
      let result = this.$clone(this.$store.get(`global/customPromotionMessagesTemplates`));
      if (!result) {
        result = [];
      }
      const ids = this.customTemplates.map((elt) => elt.id);
      let message = "";
      if (this.action === "update") {
        const index = ids.indexOf(this.IdEditedTemplate);
        if (index >= 0) {
          // Otherwise, the user try to edit an template that do not exists
          result[index] = {
            ...this.customTemplates[index],
            name: this.templateName,
            config: this.result,
          };
        }
        message = "template_updated";
      } else {
        let id;
        do {
          id = uuidv4();
        } while (ids.includes(id));
        result.push({ id, name: this.templateName, config: this.result });
        this.action = "update";
        this.startFromTemplate = id;
        message = "template_saved";
      }
      this.$store.set(`global/customPromotionMessagesTemplates`, this.$clone(result));
      this.customTemplates = result;
      this.$toast({
        description: this.$t(i18nPrefix + message),
        status: "success",
      });
    },
    deleteTemplate() {
      if (!this.startFromTemplate || !this.startFromTemplate.length) {
        return;
      }
      const index = this.customTemplates.map((elt) => elt.id).indexOf(this.startFromTemplate);
      this.customTemplates.splice(index, 1);

      this.$store.set(`global/customPromotionMessagesTemplates`, this.$clone(this.customTemplates));
      this.action = "create";
      this.$toast({
        description: this.$t(i18nPrefix + "template_deleted"),
        status: "success",
      });
    },
    addCustomField() {
      if (!this.$data.addFieldName || !this.$data.addFieldName.length) {
        this.$data.errors.addFieldName.found = true;
        this.$data.errors.addFieldName.message = this.$t(i18nPrefix + "errors.custom_name_empty");
        return;
      }
      if (Object.keys(this.$data.result.customFields).includes(this.$data.addFieldName)) {
        this.$data.errors.addFieldName.found = true;
        this.$data.errors.addFieldName.message = this.$t(i18nPrefix + "errors.custom_name_already_exists");
        return;
      }
      this.$data.errors.addFieldName.found = false;
      this.$data.errors.addFieldName.message = "";

      const obj = { ...this.$data.result.customFields };
      obj[this.$data.addFieldName] = {
        key: this.$data.addFieldName,
        value: "",
        placeholder: this.$data.addFieldValue,
        show: true,
      };
      this.$data.result.customFields = obj;
      this.$data.addFieldName = "";
      this.$data.addFieldValue = "";
    },
    removeCustomField(name) {
      const obj = { ...this.$data.result.customFields };
      delete obj[name];
      this.$data.result.customFields = obj;
    },
    nbMultiLine(src) {
      const nbLF = src.match(/\n/gi);
      return nbLF && nbLF.length > 0 ? nbLF.length + 1 : 0;
    },
    haveError(input) {
      return this.$data.errors[input].found ? "is-danger" : "";
    },
    getErrorMessage(input) {
      return this.$data.errors[input].found ? this.$data.errors[input].message : "";
    },
  },
  components: {
    yesNo,
    numberinput,
  },
};
