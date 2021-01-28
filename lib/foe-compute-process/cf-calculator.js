import * as Errors from "../../scripts/errors";

export default {
  /**
   * Compute the gains that can be expected to be statistically gained
   * @param age {object} Data about the age
   * @param yourCfBoost {number} Your CF Boost, between [0;+Infinity[
   * @param coins {number} Coins to use for quests
   * @param supplies {number} Supplies to use for quests
   * @param goods {number} Goods obtain with GB, etc.
   * @param fpBy24h {number} Your 24h FP production
   * @param secondRq {boolean} True to have second quests, false otherwise
   * @param suppliesGathered {number} Your daily production of supplies
   * @param otherRq {number} Other daily accomplished quests
   * @param cumulativeQuest {number} Number of cumulative quests. Used when we gain more coins and supplies than you
   * use in quests.
   * @returns {{bp: number, medals: number, goods: number, fp: number, dailyUbq: number,
   * bonusUbq: number, secondRqCompleted: number, totalGoods: number, totalFp: number, totalRqCompleted: number,
   * coinSupplyReturn: Array, infinityGenerator: boolean, defaultCumulativeQuest: number}}
   * All awards obtained statistically.
   */
  compute(age, yourCfBoost, coins, supplies, goods, fpBy24h, secondRq, suppliesGathered, otherRq, cumulativeQuest = 0) {
    const funcName =
      "compute(age, yourCfBoost, coins, supplies, goods, fpBy24h, secondRq, " +
      "suppliesGathered, otherRq, cumulativeQuest = 0)";
    const cf_boost = yourCfBoost / 100;
    const coins_relation = Math.floor(coins / age.cost.coins);
    const supplies_relation = Math.floor(supplies / age.cost.supplies);

    const result = {
      bp: 0,
      medals: 0,
      goods: 0,
      fp: 0,
      dailyUbq: coins_relation < supplies_relation ? coins_relation : supplies_relation,
      bonusUbq: 0,
      secondRqCompleted: 0,
      totalGoods: 0,
      totalFp: 0,
      totalRqCompleted: 0,
      coinSupplyReturn: [],
      infinityGenerator: false,
      defaultCumulativeQuest: 0,
    };

    const coinsPerUBQ =
      age.cost.coins - (age.reward.small_coins * (1 + cf_boost)) / 7 - (age.reward.large_coins * (1 + cf_boost)) / 14;
    const suppliesPerUBQ =
      age.cost.supplies -
      (age.reward.small_supplies * (1 + cf_boost)) / 7 -
      (age.reward.large_supplies * (1 + cf_boost)) / 14;

    if (coinsPerUBQ <= 0 && suppliesPerUBQ <= 0) {
      result.infinityGenerator = true;
      if (cumulativeQuest <= 0) {
        return result;
      }
    }

    if (coins < 7 * age.cost.coins) {
      throw new Errors.BoundExceededError({
        type: Errors.AvailableBoundTypes["<"],
        value: coins,
        boundValue: 7 * age.cost.coins,
        additionalMessage: `for parameter "coins" of ${funcName}`,
      });
    } else if (supplies < 7 * age.cost.supplies) {
      throw new Errors.BoundExceededError({
        type: Errors.AvailableBoundTypes["<"],
        value: supplies,
        boundValue: 7 * age.cost.supplies,
        additionalMessage: `for parameter "supplies" of ${funcName}`,
      });
    }

    const nb_quest =
      Math.floor(
        (Math.floor((result.dailyUbq + otherRq) * (2 / 14)) * age.reward.small_coins * (1 + cf_boost) +
          Math.floor((result.dailyUbq + otherRq) * (1 / 14)) * age.reward.large_coins * (1 + cf_boost)) /
          age.cost.gather
      ) + Math.floor(suppliesGathered / age.cost.gather);

    const plus_quest = secondRq ? nb_quest : 0;
    let first_lap = true;
    let coin_return;
    let supply_return;
    let coin_return_by_cost;
    let supply_coin_return_by_cost;
    let supplies_return_by_gather;
    let min_between_coin_supplies;
    let final_nb_quest;
    let second_quest_Completed = nb_quest;
    let lastCumulativeNbq = 0;

    do {
      if (first_lap) {
        first_lap = false;

        coin_return =
          Math.floor((result.dailyUbq + otherRq + plus_quest) * (2 / 14)) * age.reward.small_coins * (1 + cf_boost) +
          Math.floor((result.dailyUbq + otherRq + plus_quest) * (1 / 14)) * age.reward.large_coins * (1 + cf_boost);

        supply_return =
          Math.floor((result.dailyUbq + otherRq + plus_quest) * (2 / 14)) * age.reward.small_supplies * (1 + cf_boost) +
          Math.floor((result.dailyUbq + otherRq + plus_quest) * (1 / 14)) * age.reward.large_supplies * (1 + cf_boost);
      } else {
        coin_return =
          Math.floor(lastCumulativeNbq * (1 / 14)) * age.reward.large_coins * (1 + cf_boost) +
          Math.floor(lastCumulativeNbq * (2 / 14)) * age.reward.small_coins * (1 + cf_boost) +
          Math.max(
            0,
            (result.coinSupplyReturn.length ? result.coinSupplyReturn[result.coinSupplyReturn.length - 1].coin : 0) -
              lastCumulativeNbq * age.cost.coins
          );

        supply_return =
          Math.floor(lastCumulativeNbq * (1 / 14)) * age.reward.large_supplies * (1 + cf_boost) +
          Math.floor(lastCumulativeNbq * (2 / 14)) * age.reward.small_supplies * (1 + cf_boost) +
          Math.max(
            0,
            (result.coinSupplyReturn.length ? result.coinSupplyReturn[result.coinSupplyReturn.length - 1].supply : 0) -
              lastCumulativeNbq * age.cost.supplies
          );
      }

      coin_return_by_cost = Math.floor(coin_return / age.cost.coins);
      supply_coin_return_by_cost = Math.floor(supply_return / age.cost.supplies);
      supplies_return_by_gather = Math.floor(supply_return / age.cost.gather);
      min_between_coin_supplies =
        coin_return_by_cost < supply_coin_return_by_cost ? coin_return_by_cost : supply_coin_return_by_cost;
      lastCumulativeNbq = min_between_coin_supplies;
      final_nb_quest = secondRq ? supplies_return_by_gather + min_between_coin_supplies : min_between_coin_supplies;

      result.bonusUbq += final_nb_quest;

      if (coin_return > 0 || supply_return > 0) {
        result.coinSupplyReturn.push({
          coin: coin_return,
          supply: supply_return,
        });
      }
      second_quest_Completed += supplies_return_by_gather;
    } while (
      (!result.infinityGenerator && coin_return > age.cost.coins && supply_return > age.cost.supplies) ||
      (result.infinityGenerator && cumulativeQuest > result.coinSupplyReturn.length)
    );

    if (!result.infinityGenerator) {
      result.defaultCumulativeQuest = 0;
    }

    result.secondRqCompleted = secondRq ? second_quest_Completed : 0;
    result.totalRqCompleted = result.dailyUbq + result.bonusUbq + otherRq + result.secondRqCompleted;

    result.bp = Math.floor(result.totalRqCompleted * (1 / 14) * age.reward.blueprint);
    result.medals = Math.floor(result.totalRqCompleted * (1 / 14)) * Math.round(age.reward.medals * (1 + cf_boost));
    result.goods = Math.floor(result.totalRqCompleted * (5 / 14)) * Math.round(age.reward.goods * (1 + cf_boost));
    result.fp = Math.floor(result.totalRqCompleted * (1 / 14)) * age.reward.fp;

    result.totalGoods = result.goods + goods;
    result.totalFp = result.fp + fpBy24h;

    return result;
  },
};
