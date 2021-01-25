/* eslint no-template-curly-in-string: "off" */

/**
 * Create common interpolation
 *
 * @param gbKey {string} Key of the GB
 * @param goodData {object} An object that must contains:
 * - showLevel {boolean}: display the level
 * - displayGbName {boolean}: display the name of a GB
 * - useShortGbName {boolean}: use short name when display the name of the GB,
 * - message {string}: message pattern, that should contains interpolationValues
 * @param interpolationValues Custom interpolation to add to common
 * @returns {{goodInterpolationValues: Array, message: string}}
 */
function interpolationBuilder(gbKey, goodData, interpolationValues) {
  let message = goodData.message;
  const findLevelRange = /\s?\${(?:FLVL|TLVL)}[^(?<!${(?:FLVL|TLVL)})]*\${(?:FLVL|TLVL)}/gi;
  if (!goodData.showLevel) {
    if (findLevelRange.test(goodData.message)) {
      message = message.replace(findLevelRange, "");
    } else {
      message = message.replace(/\s?\${(?:FLVL|TLVL)}/gi, "");
    }
  }

  const goodInterpolationValues = [...interpolationValues];

  // Manage GB name
  if (goodData.displayGbName) {
    goodInterpolationValues.push({
      key: "GBN",
      value: goodData.useShortGbName ? this.$t(`foe_data.gb_short.${gbKey}`) : this.$t(`foe_data.gb.${gbKey}`),
    });
  } else {
    goodInterpolationValues.push({
      key: "GBN",
      value: "",
    });
  }
  goodInterpolationValues.push({ key: "LF", value: `\n` });

  if (goodData.customFields) {
    Object.keys(goodData.customFields)
      .map((key) => goodData.customFields[key])
      .forEach((interpolation) => {
        if (interpolation.show) {
          goodInterpolationValues.push(interpolation);
        } else {
          goodInterpolationValues.push({ key: interpolation.key, value: "" });
        }
      });
  }

  return { goodInterpolationValues, message };
}

/**
 * Build a place for the promotion message.
 *
 * Accepted interpolations:
 * - PI {number}: place index (1, 2, 3, 4, 5)
 * - PV {number}: place value (number of FPs)
 * - PP {number}: place preparation, by the owner (number of FPs)
 * - LF {string}: line feed (managed internally)
 * @param gbKey {string} Key of the GB
 * @param data {object} An object that must contains:
 * - showLevel {boolean}: display the level
 * - displayGbName {boolean}: display the name of a GB
 * - useShortGbName {boolean}: use short name when display the name of the GB,
 * - message {string}: message pattern, that should contains interpolationValues
 * @param interpolationValues {array} An array that must contains object value that have a key and a value.
 * @returns {string} Return the place created for the promotion message
 */
export function buildPlace(gbKey, data, interpolationValues) {
  const interpolation = interpolationBuilder.call(this, gbKey, data, interpolationValues);
  const goodInterpolationValues = interpolation.goodInterpolationValues;
  let result = interpolation.message;

  // Do interpolation
  goodInterpolationValues.forEach((interpolation) => {
    result = result.replace(new RegExp(`\\\${${interpolation.key}}`, "gi"), interpolation.value);
  });

  return result;
}

/**
 * Build a GB promotion message.
 *
 * @param gbKey {string} Key of the GB
 * @param data {object} An object that must contains:
 * - prefix {string}: default prefix,
 * - suffix {string}: default suffix,
 * - showLevel {boolean}: display the level
 * - displayGbName {boolean}: display the name of a GB
 * - useShortGbName {boolean}: use short name when display the name of the GB,
 * - reversePlacesOrder {boolean}: reverse place (5,4,3,3,1) instead of (1,2,3,4,5)
 * - placeSeparator {string}: separator used to separate places
 * - place {string}: place pattern, that should contains placeInterpolationValues
 * - message {string}: message pattern, that should contains interpolationValues
 * @param interpolationValues {array} An array that must contains object value that have a key and a value.
 * Accepted interpolations:
 * - FLVL {number}: from level
 * - TLVL {number}: to level
 * - GBN {string}: GB name (managed internally, depending on useGbShort)
 * - P {string}: place (managed internally)
 * - OP {string}: total owner preparation
 * - PPx {string}: place preparation, by the owner for place "x" (number of FPs)
 * - PVx {string}: place participation, by an investor for place "x" (number of FPs)
 * - LF {string}: line feed (managed internally)
 * - LC {number}: level cost
 * @param placeInterpolationValues {array} An array that must contains object value that have a key and a value.
 * Accepted interpolations for interpolationValues:
 * - PI {number}: place index (1, 2, 3, 4, 5)
 * - PV {number}: place value (number of FPs)
 * - PP {number}: place preparation, by the owner (number of FPs)
 * - LF {string}: line feed (managed internally)
 * @returns {string} Return the promotion message created
 * @see buildPlace
 */
export function buildMessage(gbKey, data, interpolationValues, placeInterpolationValues) {
  const interpolation = interpolationBuilder.call(this, gbKey, data, interpolationValues);
  const goodInterpolationValues = interpolation.goodInterpolationValues;
  let result = interpolation.message;

  // Manage places
  const goodPlaceInterpolationValues = data.reversePlacesOrder
    ? [...placeInterpolationValues].reverse()
    : placeInterpolationValues;
  let places = "";
  goodPlaceInterpolationValues.forEach((placeInterpolation, index) => {
    const placeData = {};
    placeInterpolation.forEach((e) => (placeData[e.key] = e.value));
    if (placeInterpolation[1].free) {
      places +=
        (places.length > 0 ? data.placeSeparator : "") +
        buildPlace.call(this, gbKey, { ...data, message: data.place }, placeInterpolation);
    }
    goodInterpolationValues.push({
      key: "PV" + (data.reversePlacesOrder ? 4 - index : index + 1),
      value: placeData.PV,
    });
    goodInterpolationValues.push({
      key: "PP" + (data.reversePlacesOrder ? 4 - index : index + 1),
      value: placeData.PP,
    });
  });
  for (let i = goodPlaceInterpolationValues.length; i < 5; i++) {
    goodInterpolationValues.push({ key: "PV" + (i + 1), value: "" });
    goodInterpolationValues.push({ key: "PP" + (i + 1), value: "" });
  }
  goodInterpolationValues.push({ key: "P", value: places });

  // Do interpolation
  goodInterpolationValues.forEach((interpolation) => {
    result = result.replace(new RegExp(`\\\${${interpolation.key}}`, "gi"), interpolation.value);
  });

  result = result.replace(/\${LF}/gi, `\n`);

  if (data.prefix && data.prefix.length) {
    result = `${data.prefix}${[" ", `\n`].includes(result.charAt(0)) ? result : ` ${result}`}`;
  }

  if (data.suffix && data.suffix.length) {
    result = `${[" ", `\n`].includes(result.charAt(result.length - 1)) ? result : `${result} `}${data.suffix}`;
  }

  return result;
}

export const defaultPromotionMessages = [
  {
    name: "Default 0",
    id: "Default 0",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: false,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: "  ",
      place: "${PI} (${PV})",
      message: "${GBN} ${P}",
    },
  },
  {
    name: "Default 1",
    id: "Default 1",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 2",
    id: "Default 2",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${P} ${GBN} ${FLVL} → ${TLVL}",
    },
  },
  {
    name: "Default 3",
    id: "Default 3",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 4",
    id: "Default 4",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "P${PI}(${PV})",
      message: "${P} ${GBN} ${FLVL} → ${TLVL}",
    },
  },
  {
    name: "Default 5",
    id: "Default 5",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: " ",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 6",
    id: "Default 6",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: " ",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 7",
    id: "Default 7",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 8",
    id: "Default 8",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 9",
    id: "Default 9",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: false,
      showLevel: false,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 10",
    id: "Default 10",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} → ${TLVL} ${P}",
    },
  },
  {
    name: "Default 11",
    id: "Default 11",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: false,
      placeSeparator: "${LF}",
      place: "${Your pseudo} - ${GBN} ${PI}",
      message: "${P}",
      customFields: {
        "Your pseudo": {
          key: "Your pseudo",
          value: "My pseudo",
          placeholder: "My pseudo",
          show: true,
        },
      },
    },
  },
];
