import Utils from "../../scripts/utils";
import * as Errors from "../../scripts/errors";

/**
 * Check if a numeric parameter are valid. Throw an error if the value are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param value Value of this parameter
 */
function checkValidNumberInputParameter(paramName, funcName, value) {
  if (typeof value !== "number") {
    throw new Errors.InvalidTypeError({
      expected: "number",
      actual: typeof value,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  } else if (value < 0) {
    throw new Errors.BoundExceededError({
      type: Errors.AvailableBoundTypes["<"],
      value,
      boundValue: 0,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  }
}

/**
 * Check if a numeric array are valid. Throw an error if the array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param array Array of this parameter that should contains only numeric values >= 0
 */
function checkNumericArray(paramName, funcName, array) {
  if (!Array.isArray(array)) {
    throw new Errors.InvalidTypeError({
      expected: "Array",
      actual: typeof array,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  }

  array.forEach((value, index) => {
    checkValidNumberInputParameter(`${paramName}[${index}]`, funcName, value);
  });
}

/**
 * Check if a gb array are valid. Throw an error if the gb array are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param gb GB array of this parameter
 */
function checkGbData(paramName, funcName, gb) {
  if (!Array.isArray(gb)) {
    throw new Errors.InvalidTypeError({
      expected: "Array",
      actual: typeof gb,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  }

  gb.forEach((value, index) => {
    if (!("cost" in value)) {
      throw new Errors.KeyNotFoundError({
        expected: "cost",
        actual: `${paramName}[${index}]`,
        additionalMessage: `in "checkGbData" called by ${funcName}`,
      });
    }
    if (!("reward" in value)) {
      throw new Errors.KeyNotFoundError({
        expected: "reward",
        actual: `${paramName}[${index}]`,
        additionalMessage: `in "checkGbData" called by ${funcName}`,
      });
    }
    checkValidNumberInputParameter(`${paramName}[${index}].cost`, funcName, value.cost);
    checkNumericArray(`${paramName}[${index}].reward`, funcName, value.reward);
  });
}

/**
 * Compute the necessary amount of FP to secure a place.
 * @param levelCost {number}
 * @param currentDeposits {number}
 * @param yourParticipation {number}
 * @param otherParticipation {number}
 * @param yourArcBonus {number}
 * @param fpTargetReward {number}
 * @return {Object} Return an object that contains:
 *  - fp: fp needed to secure the a place
 *  - roi: Return of investment (if yourArcBonus >= 0 && fpTargetReward > 0), otherwise it is set to 0
 */
function securePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward) {
  const result =
    Math.ceil((levelCost - currentDeposits - (otherParticipation - yourParticipation)) / 2) + otherParticipation;

  if (result <= otherParticipation) {
    return {
      fp: -1,
      roi: 0,
    };
  } else {
    let roi = 0;
    if (yourArcBonus >= 0 && fpTargetReward > 0) {
      const investment = result > yourParticipation ? result : yourParticipation;
      const factor = (100 + yourArcBonus) / 100;
      roi = Math.round(factor * fpTargetReward - investment);
    } else if (fpTargetReward === 0) {
      roi = -result;
    }
    return {
      fp: result,
      roi,
    };
  }
}

/**
 * Get all data from GB for a specific level
 *
 * @param gb {object} Pointer of Great Building
 * @param currentLevel {number} Current level
 * @param investorPercentage {Array} percentage of investors (Arc)
 * @param defaultParticipation {Array} Default participation used if reward of the place is equal to 0.
 * If null, all default place participation are set to 0.
 * @param ownerPreparation {number} Current preparation of the owner
 * @param yourArcBonus {number} Your arc bonus in [0;Infinity[
 * @return {object}
 */
function levelInvestment(
  gb,
  currentLevel,
  investorPercentage,
  defaultParticipation = [],
  ownerPreparation = 0,
  yourArcBonus = 0
) {
  const result = {};
  result.cost = gb[currentLevel - 1].cost;
  result.investment = [];
  result.otherInvestment = [];
  const defaultParticipationSum = defaultParticipation.reduce((i, j) => i + j.value, 0);
  const currentPreparationInvestment = ownerPreparation + defaultParticipationSum;

  const remainingDefaultParticipation = JSON.parse(JSON.stringify(defaultParticipation));
  let levelCostReached = false;
  let cumulativeParticipation = 0;
  let maxPreparation = 0;
  let cumulativeInvestment = ownerPreparation + defaultParticipationSum;
  let lastPreparation = ownerPreparation;
  let defaultParticipationIndex = 0;
  for (let i = 0; i < gb[currentLevel - 1].reward.length && !levelCostReached; i++) {
    const investment = {
      reward: gb[currentLevel - 1].reward[i],
      expectedParticipation: Math.round(gb[currentLevel - 1].reward[i] * (1 + investorPercentage[i] / 100)),
      isInvestorParticipation: false,
      roi: 0,
      snipe: {
        fp: 0,
        roi: 0,
      },
      defaultParticipationIndex: -1,
    };
    let securePlaceYourParticipation = 0;
    let currentPreparation = lastPreparation;

    if (remainingDefaultParticipation.length > 0) {
      securePlaceYourParticipation = remainingDefaultParticipation[0].value;
    }

    const securePlaceValue = securePlace(
      result.cost,
      cumulativeInvestment,
      securePlaceYourParticipation,
      0,
      investorPercentage[i],
      investment.reward
    );

    // Compute the participation of the investor
    if (
      securePlaceYourParticipation >= investment.expectedParticipation ||
      (securePlaceValue.fp > 0 && securePlaceYourParticipation >= securePlaceValue.fp)
    ) {
      investment.participation = securePlaceYourParticipation;
      investment.isInvestorParticipation = true;
      investment.roi = investment.expectedParticipation - securePlaceYourParticipation;
      investment.defaultParticipationIndex = defaultParticipationIndex;
      defaultParticipationIndex++;
      remainingDefaultParticipation.shift();
    } else {
      const preparation = investment.expectedParticipation;
      const localCumulativeParticipation =
        cumulativeParticipation + remainingDefaultParticipation.reduce((i, j) => i + j.value, 0);
      const localMaxPreparation = Math.max(maxPreparation, preparation);
      const localCumulativeInvestment = localCumulativeParticipation + localMaxPreparation;
      investment.participation = investment.expectedParticipation;
      if (localCumulativeInvestment >= result.cost) {
        investment.participation += result.cost - localCumulativeInvestment;
      }
    }

    let securePlaceOtherParticipation = 0;
    let yourParticipation = 0;
    for (let j = 0; j < remainingDefaultParticipation.length; j++) {
      if (remainingDefaultParticipation[j].isPotentialSniper) {
        if (yourParticipation === 0) {
          yourParticipation = remainingDefaultParticipation[j].value;
        }
        for (let k = j + 1; k < remainingDefaultParticipation.length; k++) {
          securePlaceOtherParticipation += remainingDefaultParticipation[k].value;
        }
        break;
      } else {
        securePlaceOtherParticipation += remainingDefaultParticipation[j].value;
      }
    }
    currentPreparation = Math.max(
      0,
      result.cost - (cumulativeParticipation + securePlaceOtherParticipation + 2 * investment.participation)
    );

    // Compute possible snipe
    const otherParticipation = investment.isInvestorParticipation ? investment.participation : 0;
    investment.snipe = securePlace(
      result.cost,
      currentPreparationInvestment,
      yourParticipation,
      otherParticipation,
      yourArcBonus,
      investment.reward
    );

    if (investment.participation === 0) {
      levelCostReached = true;
      continue;
    }

    // Compute the cost to secure the place
    if (currentPreparation < lastPreparation) {
      currentPreparation = lastPreparation;
    }
    investment.preparation = currentPreparation;
    lastPreparation = currentPreparation;
    cumulativeParticipation += investment.participation;
    maxPreparation = Math.max(maxPreparation, investment.preparation);
    cumulativeInvestment =
      cumulativeParticipation + maxPreparation + remainingDefaultParticipation.reduce((i, j) => i + j.value, 0);
    investment.cumulativeInvestment = cumulativeInvestment;
    result.investment.push(investment);

    if (!levelCostReached && cumulativeInvestment >= result.cost) {
      levelCostReached = true;
    }
  }

  result.totalPreparations = Math.max(
    result.investment[result.investment.length - 1].preparation,
    result.cost - cumulativeParticipation - remainingDefaultParticipation.reduce((i, j) => i + j.value, 0)
  );
  result.level = currentLevel;

  // In case where level cost has been reached before added first five places, we add missing places
  for (let i = result.investment.length; i < gb[currentLevel - 1].reward.length; i++) {
    result.investment.push({
      reward: gb[currentLevel - 1].reward[i],
      expectedParticipation: Math.round(gb[currentLevel - 1].reward[i] * (1 + investorPercentage[i] / 100)),
      preparation: result.totalPreparations,
      isInvestorParticipation: false,
      roi: 0,
      snipe: {
        fp: 0,
        roi: 0,
      },
      defaultParticipationIndex: -1,
    });
    if (remainingDefaultParticipation.length) {
      result.investment[result.investment.length - 1].isInvestorParticipation = true;
      result.investment[result.investment.length - 1].roi =
        result.investment[result.investment.length - 1].expectedParticipation - remainingDefaultParticipation[0].value;
      result.investment[result.investment.length - 1].participation = remainingDefaultParticipation[0].value;
      result.investment[result.investment.length - 1].defaultParticipationIndex = defaultParticipationIndex;
      defaultParticipationIndex++;
      remainingDefaultParticipation.shift();
    }
  }

  // Add the remaining investors
  while (remainingDefaultParticipation.length) {
    result.otherInvestment.push({
      reward: 0,
      expectedParticipation: 0,
      preparation: 0,
      participation: remainingDefaultParticipation[0].value,
      defaultParticipationIndex,
      isInvestorParticipation: true,
      snipe: {
        fp: 0,
        roi: 0,
      },
    });
    defaultParticipationIndex++;
    remainingDefaultParticipation.shift();
  }

  return result;
}

export default {
  /**
   * Get all data from GB for a range of levels
   *
   * @param from {number} From this level
   * @param to {number} To this level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @return {object}
   */
  ComputeLevelInvestmentRange(from, to, investorPercentage, gb) {
    const funcName = "ComputeLevelInvestmentRange(from, to, investorPercentage, gb)";
    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(from, 1, gb.length)) {
      throw new Errors.NotInBoundsError({
        value: from,
        lowerBound: 1,
        upperBound: gb.length,
        additionalMessage: `for parameter "from" of ${funcName}`,
      });
    }
    if (!Utils.inRange(to, 1, gb.length)) {
      throw new Errors.NotInBoundsError({
        value: to,
        lowerBound: 1,
        upperBound: gb.length,
        additionalMessage: `for parameter "to" of ${funcName}`,
      });
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);

    let start;
    let end;

    if (from > to) {
      start = to;
      end = from;
    } else {
      start = from;
      end = to;
    }

    const result = {
      global: {
        cost: 0,
        totalPreparations: 0,
      },
      levels: [],
    };

    for (let i = start; i <= end; i++) {
      result.levels.push(levelInvestment(gb, i, investorPercentage));
      result.global.cost += result.levels[result.levels.length - 1].cost;
      result.global.totalPreparations += result.levels[result.levels.length - 1].totalPreparations;
    }

    return result;
  },

  /**
   * Compute the necessary amount of FP to secure a place.
   * @param levelCost {number}
   * @param currentDeposits {number}
   * @param yourParticipation {number}
   * @param otherParticipation {number}
   * @param yourArcBonus {number}
   * @param fpTargetReward {number}
   * @return {Object} Return an object that contains:
   *  - fp: fp needed to secure the a place
   *  - roi: Return of investment (if yourArcBonus >= 0 && fpTargetReward > 0), otherwise it is set to 0
   */
  ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward) {
    const funcName =
      "ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, " +
      "yourArcBonus, fpTargetReward)";
    checkValidNumberInputParameter("levelCost", funcName, levelCost);
    checkValidNumberInputParameter("currentDeposits", funcName, currentDeposits);
    checkValidNumberInputParameter("yourParticipation", funcName, yourParticipation);
    checkValidNumberInputParameter("otherParticipation", funcName, otherParticipation);
    checkValidNumberInputParameter("yourArcBonus", funcName, yourArcBonus);
    checkValidNumberInputParameter("fpTargetReward", funcName, fpTargetReward);

    return securePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward);
  },

  /**
   * Get all data from GB for a specific level
   *
   * @param currentLevel {number} Current level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @param defaultParticipation {Array} Participation of investors. This array should be sorted with greater first.
   * By default, all default place participation are set to 0.
   * @param ownerPreparation {number} Current preparation of the owner
   * @param yourArcBonus {number} Your arc bonus in [0;Infinity[
   * @return {object}
   */
  ComputeLevelInvestment(
    currentLevel,
    investorPercentage,
    gb,
    defaultParticipation = [],
    ownerPreparation = 0,
    yourArcBonus = 0
  ) {
    const funcName =
      "ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation, ownerPreparation" +
      "yourArcBonus)";

    checkGbData("gb", funcName, gb);
    if (!Utils.inRange(currentLevel, 1, gb.length)) {
      throw new Errors.NotInBoundsError({
        value: currentLevel,
        lowerBound: 1,
        upperBound: gb.length,
        additionalMessage: `for parameter "currentLevel" of ${funcName}`,
      });
    }
    checkNumericArray("investorPercentage", funcName, investorPercentage);
    checkValidNumberInputParameter("ownerPreparation", funcName, ownerPreparation);
    checkValidNumberInputParameter("yourArcBonus", funcName, yourArcBonus);

    // Check defaultParticipation
    if (!Array.isArray(defaultParticipation)) {
      throw new Errors.InvalidTypeError({
        expected: "Array",
        actual: typeof defaultParticipation,
        additionalMessage: `for parameter "defaultParticipation" of ${funcName}`,
      });
    }

    defaultParticipation.forEach((value, index) => {
      checkValidNumberInputParameter(`defaultParticipation[${index}].value`, funcName, value.value);
    });

    const participationSum = defaultParticipation.reduce((i, j) => i + j.value, 0);
    if (participationSum > gb[currentLevel - 1].cost) {
      throw new Errors.BoundExceededError({
        type: Errors.AvailableBoundTypes[">"],
        value: participationSum,
        boundValue: gb[currentLevel - 1].cost,
        additionalMessage: `for the sum of values of parameter "defaultParticipation" of ${funcName}`,
      });
    }
    if (ownerPreparation + participationSum > gb[currentLevel - 1].cost) {
      throw new Errors.BoundExceededError({
        type: Errors.AvailableBoundTypes[">"],
        value: "participationSum + ownerPreparation",
        boundValue: gb[currentLevel - 1].cost,
        additionalMessage: `for parameters "participationSum" and "ownerPreparation" of ${funcName}`,
      });
    }

    return levelInvestment(
      gb,
      currentLevel,
      investorPercentage,
      defaultParticipation.sort((a, b) => b.value - a.value),
      ownerPreparation,
      yourArcBonus
    );
  },
};
