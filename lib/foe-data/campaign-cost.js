import clone from "lodash.clonedeep";
import set from "lodash.set";
import { special_goods } from "./special_goods";
import ages from "./ages";
import { agesGoods, goodsAges } from "./goods";

const innerCampaignCost = {
  BronzeAge: require("./campaign/BronzeAge"),
  IronAge: require("./campaign/IronAge"),
  EarlyMiddleAges: require("./campaign/EarlyMiddleAges"),
  HighMiddleAges: require("./campaign/HighMiddleAges"),
  LateMiddleAges: require("./campaign/LateMiddleAges"),
  ColonialAge: require("./campaign/ColonialAge"),
  IndustrialAge: require("./campaign/IndustrialAge"),
  ProgressiveEra: require("./campaign/ProgressiveEra"),
  ModernEra: require("./campaign/ModernEra"),
  PostmodernEra: require("./campaign/PostmodernEra"),
  ContemporaryEra: require("./campaign/ContemporaryEra"),
  Tomorrow: require("./campaign/Tomorrow"),
  TheFuture: require("./campaign/TheFuture"),
  ArcticFuture: require("./campaign/ArcticFuture"),
  OceanicFuture: require("./campaign/OceanicFuture"),
  VirtualFuture: require("./campaign/VirtualFuture"),
  SpaceAgeMars: require("./campaign/SpaceAgeMars"),
  SpaceAgeAsteroidBelt: require("./campaign/SpaceAgeAsteroidBelt"),
};

function updateUsedGoods(goodNotUsed, specialGoodsNotUsed, totalCost) {
  for (const ageToDelete in goodNotUsed) {
    delete totalCost[ageToDelete];
  }
  for (const specialGoodToDelete in specialGoodsNotUsed) {
    delete totalCost._specialGoods[specialGoodToDelete];
  }
}

function getAllGoodsObjInitializedAt0() {
  const result = { _specialGoods: {} };
  for (const ageKey in agesGoods) {
    result[ageKey] = {};
    for (const goodKey in agesGoods[ageKey].goodsKey) {
      result[ageKey][goodKey] = {
        age: ageKey,
        key: goodKey,
        value: 0,
        type: "good",
      };
    }
  }

  for (const specialGoodKey in special_goods) {
    result._specialGoods[specialGoodKey] = {
      key: specialGoodKey,
      value: 0,
      type: "special_good",
    };
  }
  return result;
}

function getAgeOrSpecialGoodKey(key) {
  return key in special_goods ? "_specialGoods" : goodsAges[key];
}

const innerCampaignTotalCost = { _totalCost: getAllGoodsObjInitializedAt0() };

const allAgeGoodNotUsed = clone(ages);
const allSpecialGoodNotUsed = clone(special_goods);
for (const age in innerCampaignCost) {
  const ageTotalCost = getAllGoodsObjInitializedAt0();
  const ageAgeGoodNotUsed = clone(ages);
  const ageSpecialGoodNotUsed = clone(special_goods);

  for (const province in innerCampaignCost[age]) {
    const provinceTotalCost = getAllGoodsObjInitializedAt0();
    const provinceAgeGoodNotUsed = clone(ages);
    const provinceSpecialGoodNotUsed = clone(special_goods);

    let sectorIndex = 0;
    for (const sector of innerCampaignCost[age][province].sectors) {
      const sectorTotalCost = getAllGoodsObjInitializedAt0();
      const sectorAgeGoodNotUsed = clone(ages);
      const sectorSpecialGoodNotUsed = clone(special_goods);

      for (const good of sector.cost) {
        if (getAgeOrSpecialGoodKey(good.key) === "_specialGoods") {
          delete sectorSpecialGoodNotUsed[good.key];
          delete provinceSpecialGoodNotUsed[good.key];
          delete ageSpecialGoodNotUsed[good.key];
          delete allSpecialGoodNotUsed[good.key];
        } else {
          delete sectorAgeGoodNotUsed[getAgeOrSpecialGoodKey(good.key)];
          delete provinceAgeGoodNotUsed[getAgeOrSpecialGoodKey(good.key)];
          delete ageAgeGoodNotUsed[getAgeOrSpecialGoodKey(good.key)];
          delete allAgeGoodNotUsed[getAgeOrSpecialGoodKey(good.key)];
        }

        sectorTotalCost[getAgeOrSpecialGoodKey(good.key)][good.key].value += good.value;
        provinceTotalCost[getAgeOrSpecialGoodKey(good.key)][good.key].value += good.value;
        ageTotalCost[getAgeOrSpecialGoodKey(good.key)][good.key].value += good.value;
        innerCampaignTotalCost._totalCost[getAgeOrSpecialGoodKey(good.key)][good.key].value += good.value;
      } // end for cost of sector
      updateUsedGoods(sectorAgeGoodNotUsed, sectorSpecialGoodNotUsed, sectorTotalCost);

      set(innerCampaignTotalCost, `${age}.provinces.${province}.sectors[${sectorIndex}]`, sectorTotalCost);
      sectorIndex++;
    } // end for sectors

    updateUsedGoods(provinceAgeGoodNotUsed, provinceSpecialGoodNotUsed, provinceTotalCost);

    set(innerCampaignTotalCost, `${age}.provinces.${province}._totalCost`, provinceTotalCost);
    set(innerCampaignTotalCost, `${age}._totalCost`, ageTotalCost);
  } // end for province
  updateUsedGoods(ageAgeGoodNotUsed, ageSpecialGoodNotUsed, ageTotalCost);
}
updateUsedGoods(allAgeGoodNotUsed, allSpecialGoodNotUsed, innerCampaignTotalCost._totalCost);

export const campaignCost = innerCampaignCost;
export const campaignTotalCost = innerCampaignTotalCost;
