import { Enum } from "enumify";
import PriorityQueue from "js-priority-queue";
import clone from "lodash.clonedeep";
import allAges from "~/lib/foe-data/ages";
import { agesCost } from "~/lib/foe-data/goods";
import * as Errors from "~/scripts/errors";

class TradeArray extends Enum {}
TradeArray.initEnum(["SIMPLE", "FAIR"]);
const ages = clone(allAges);
delete ages.NoAge;
delete ages.SpaceAgeAsteroidBelt; // TODO: to be deleted when fair trade ratio found

const goods = clone(agesCost);
delete goods.SpaceAgeAsteroidBelt; // TODO: to be deleted when fair trade ratio found

/**
 * Compute total cost (coins plus supplies) for a good. From "Modern Era" it
 * add the cost of required good to make this good.
 *
 * @param good Good to compute de cost
 * @returns {number} Return the cost of this good
 */
function getTotalGoodCostFairTrade(good) {
  let result = 0;
  let currentGood;

  do {
    currentGood = result === 0 ? good : goods[currentGood.unrefined][0];
    result += (currentGood.coins + currentGood.supplies) / currentGood.quantity;
  } while (currentGood.unrefined !== null);

  return result;
}

/**
 * Compute the fair trade rates.
 * To access cost just call with of this array, juts to something like: From.To
 * Example: To get the rate of Modern Era with Industrial Age, you can do this: IndustrialAge.ModernEra
 *
 * @return {Object} Return an object of object.
 */
function getFairTradeArray() {
  const fairTradeObj = {};

  for (const key1 in goods) {
    fairTradeObj[key1] = {};
    for (const key2 in goods) {
      fairTradeObj[key1][key2] = getTotalGoodCostFairTrade(goods[key1][0]) / getTotalGoodCostFairTrade(goods[key2][0]);
    }
  }

  return fairTradeObj;
}

/**
 * Generate an array like getFairTradeArray but with simple ratio: 0.5, 1, 2
 *
 * @return {Object} Return an object of object.
 */
function getSimpleTradeArray() {
  const simpleTradeObj = {};

  for (const key1 in goods) {
    simpleTradeObj[key1] = {};
    const currentIndex = Object.keys(goods).indexOf(key1);
    for (const key2 in goods) {
      const tmpIndex = Object.keys(goods).indexOf(key2);
      if (tmpIndex === currentIndex - 1) {
        simpleTradeObj[key1][key2] = 2;
      } else if (tmpIndex === currentIndex + 1) {
        simpleTradeObj[key1][key2] = 0.5;
      } else if (tmpIndex === currentIndex) {
        simpleTradeObj[key1][key2] = 1;
      } else {
        simpleTradeObj[key1][key2] = 0;
      }
    }
  }

  return simpleTradeObj;
}

const tradeArrayValues = {
  SIMPLE: getSimpleTradeArray(),
  FAIR: getFairTradeArray(),
};

/**
 * Get neighbors of a node
 *
 * @param tradeInput Graph
 * @param node Node to get neighbors
 * @returns {Array} Return an array of object that contains:
 *  - key: the name of the node
 *  - cost: the cost to go from node to this neighbor
 */
function neighbors(tradeInput, node) {
  const result = [];

  for (const key in tradeInput[node]) {
    if (tradeInput[node][key] >= 0.5 && tradeInput[node][key] <= 2) {
      result.push({ key, cost: tradeInput[node][key] });
    }
  }

  return result;
}

/**
 * Reconstruct the path found by @uniformCostSearch
 *
 * @param graph Reference of the cost matrix
 * @param start Start node
 * @param goal Goal node
 * @returns {Array} Return an array that contains the name of each node from goal to start
 */
function reconstructPath(graph, start, goal) {
  const result = [];
  let current = goal;

  do {
    result.push(graph[current].key);
    current = graph[current].parent;
  } while (current !== start);

  if (start !== goal) {
    result.push(start);
  }

  return result;
}

/**
 * Dijkstra algorithm optimized with a priority queue.
 * It will explore graph, an matrix (2D array) of ratio.
 *
 * @param graph Reference of the cost matrix
 * @param start Start node
 * @param goal Goal node
 * @returns {Array} Return an array of object that contains for each object:
 *  - key: the name of the node
 *  - cost: the cost to go from start to this node
 *  - parent: reference of the parent node
 * @see {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#Practical_optimizations_and_infinite_graphs}
 */
function uniformCostSearch(graph, start, goal) {
  const ageArray = Object.keys(tradeArrayValues[graph.name]);
  const iHaveIndex = ageArray.indexOf(start);
  const iWantIndex = ageArray.indexOf(goal);

  const frontier = new PriorityQueue({
    comparator: (u, v) => {
      if (iHaveIndex < iWantIndex) {
        return u.cost < v.cost ? -1 : u.cost > v.cost ? 1 : 0;
      } else {
        return u.cost > v.cost ? -1 : 1;
      }
    },
  });
  frontier.queue({ key: start, cost: 0 });

  const explored = {};
  let node;

  if (iHaveIndex === iWantIndex) {
    explored[goal] = { key: goal, cost: 1, parent: goal };
    return reconstructPath(explored, start, goal);
  }

  do {
    node = frontier.dequeue();
    if (node.key === goal) {
      return reconstructPath(explored, start, goal);
    }
    for (const neighbor of neighbors(tradeArrayValues[graph.name], node.key)) {
      if (!Object.keys(explored).includes(neighbor.key)) {
        frontier.queue({ key: neighbor.key, cost: neighbor.cost + node.cost });
        explored[neighbor.key] = { key: neighbor.key, cost: neighbor.cost + node.cost, parent: node.key };
      }
    }
  } while (frontier.length !== 0);
}

/**
 * Get bests offers to go from a resource to another
 * @param tradeInput {TradeArray} Reference of the matrix cost
 * @param iHave {string} The resource where I start
 * @param iWant {string} The resource where I go
 * @param amount {string} The amount of the resource that I want
 * @returns {*[]}
 *
 * @see {#uniformCostSearch}
 */
function getBestOffers(tradeInput, iHave, iWant, amount) {
  const bestOffers = uniformCostSearch(tradeInput, iHave, iWant);
  const result = [{ key: bestOffers[0], amount }];

  for (let i = 1; i < bestOffers.length; i++) {
    result.push({
      key: bestOffers[i],
      amount: Math.ceil(result[i - 1].amount * tradeArrayValues[tradeInput.name][bestOffers[i - 1]][bestOffers[i]]),
    });
  }

  return result.reverse();
}

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
  } else if (value <= 0) {
    throw new Errors.BoundExceededError({
      type: Errors.AvailableBoundTypes["<="],
      value,
      boundValue: 0,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  }
}

/**
 * Check if the value are a valid age name. Throw an error if the value are not valid.
 *
 * @param paramName {string} Name of the parameter
 * @param funcName {string} Name of the function
 * @param value Value of this parameter
 */
function checkAge(paramName, funcName, value) {
  const validAges = Object.keys(ages);
  if (!validAges.includes(value)) {
    throw new Errors.InvalidTypeError({
      expected: validAges,
      actual: value,
      additionalMessage: `for parameter "${paramName}" of ${funcName}`,
    });
  }
}

/**
 * Split goods in a subset
 *
 * @param toValue Amount of goods in target age
 * @param splitValue Max goods by subset
 * @param ratioFromTo Ratio to go from "fromValue" to "toValue"
 * @param ratioToFrom Ratio to go from "toValue" to "fromValue"
 * @returns {*} Return an toValue if toValue amount of goods (from and to) < splitValue,
 * an array otherwise. This array contains to object. The first one contains "from", "to"
 * and "times", the second contains only "from" and "to"
 */
export function splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom) {
  const funcName = "splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom)";
  checkValidNumberInputParameter("toValue", funcName, toValue);
  checkValidNumberInputParameter("splitValue", funcName, splitValue);
  checkValidNumberInputParameter("ratioFromTo", funcName, ratioFromTo);
  checkValidNumberInputParameter("ratioToFrom", funcName, ratioToFrom);

  const fromValue = Math.ceil(toValue * ratioToFrom);
  const max = ratioFromTo < 1 ? fromValue : toValue;
  const result = [];

  if (max <= splitValue) {
    result.push({ from: fromValue, to: toValue, count: 1 });
  } else {
    result.push({
      from: fromValue === max ? splitValue : Math.round(splitValue * ratioToFrom),
      to: toValue === max ? splitValue : Math.ceil(splitValue * ratioFromTo),
      count: Math.floor(max / splitValue),
    });
  }

  const resultTo = toValue - result[0].to * result[0].count;

  if (resultTo <= 0) {
    result.push({ from: 0, to: 0 });
  } else {
    result.push({ from: Math.round(resultTo * ratioToFrom), to: resultTo });
  }

  return result;
}

/**
 * Get bests offers to go from a resource to another and split it to subset of offers
 * @param tradeInput {TradeArray} Reference of the matrix cost
 * @param iHave {string} The resource where I start
 * @param iWant {string} The resource where I go
 * @param amount {number} The amount of the resource that I want
 * @param splitValue {number} Max size of an offer
 * @returns {array} Return an array of object
 *
 * @see {#splitGoods}
 */
export function getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue) {
  const funcName = "getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue)";
  if (!(tradeInput instanceof TradeArray)) {
    throw new Errors.InvalidTypeError({
      expected: "TradeArray",
      actual: typeof tradeInput,
      additionalMessage: `for parameter "tradeInput" of ${funcName}`,
    });
  }

  checkAge("iHave", funcName, iHave);
  checkAge("iWant", funcName, iWant);
  checkValidNumberInputParameter("amount", funcName, amount);
  checkValidNumberInputParameter("splitValue", funcName, splitValue);

  const bestOffers = getBestOffers(tradeInput, iHave, iWant, amount);

  if (bestOffers.length === 1) {
    bestOffers[0].split = splitGoods(1000, splitValue, 1, 1);
    return bestOffers;
  }

  for (let i = bestOffers.length - 2; i >= 0; i--) {
    bestOffers[i].split = splitGoods(
      bestOffers[i + 1].amount,
      splitValue,
      tradeArrayValues[tradeInput.name][bestOffers[i].key][bestOffers[i + 1].key],
      tradeArrayValues[tradeInput.name][bestOffers[i + 1].key][bestOffers[i].key]
    );
    if (Array.isArray(bestOffers[i].split)) {
      let r = 0;
      bestOffers[i].split
        .map((k) => {
          return { value: k.from, count: k.count ? k.count : 1 };
        })
        // eslint-disable-next-line array-callback-return
        .reduce((oldVal, val) => {
          if (oldVal !== undefined) {
            r += oldVal.value * oldVal.count;
          }

          r += val.value * val.count;
        });
      bestOffers[i].amount = r;
    }
  }

  return bestOffers;
}

export const fairTradeArray = tradeArrayValues.FAIR;
export const simpleTradeArray = tradeArrayValues.SIMPLE;
export const TradeArrayType = TradeArray;
