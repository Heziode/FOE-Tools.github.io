const { bonus } = require("../bonus");

module.exports = {
  Psyche: {
    key: "Psyche",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "biotech_crops", value: 25, type: bonus.good },
          { key: "fusion_reactors", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 10, type: bonus.good },
          { key: "superalloys", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "fusion_reactors", value: 30, type: bonus.good },
          { key: "mars_microbes", value: 120, type: bonus.good },
          { key: "processed_materials", value: 10, type: bonus.good },
          { key: "superalloys", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "biotech_crops", value: 85, type: bonus.good },
          { key: "lubricants", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 25, type: bonus.good },
          { key: "nickel", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "bromine", value: 10, type: bonus.good },
          { key: "fusion_reactors", value: 25, type: bonus.good },
          { key: "mars_microbes", value: 95, type: bonus.good },
          { key: "superalloys", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "biotech_crops", value: 30, type: bonus.good },
          { key: "fusion_reactors", value: 50, type: bonus.good },
          { key: "processed_materials", value: 10, type: bonus.good },
          { key: "superalloys", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "bromine", value: 10, type: bonus.good },
          { key: "fusion_reactors", value: 25, type: bonus.good },
          { key: "mars_microbes", value: 85, type: bonus.good },
          { key: "superalloys", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "biotech_crops", value: 40, type: bonus.good },
          { key: "fusion_reactors", value: 130, type: bonus.good },
          { key: "lubricants", value: 25, type: bonus.good },
          { key: "nickel", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "biotech_crops", value: 115, type: bonus.good },
          { key: "compound_fluid", value: 10, type: bonus.good },
          { key: "lubricants", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "biotech_crops", value: 30, type: bonus.good },
          { key: "fusion_reactors", value: 45, type: bonus.good },
          { key: "platinum_crystals", value: 10, type: bonus.good },
          { key: "superalloys", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "biotech_crops", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 10, type: bonus.good },
          { key: "fusion_reactors", value: 95, type: bonus.good },
          { key: "lubricants", value: 25, type: bonus.good },
        ],
      },
    ],
  },
  Medea: {
    key: "Medea",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      { reward: [{ type: "supply", value: 105000 }], cost: [] },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "biotech_crops", value: 50, type: bonus.good },
          { key: "mars_microbes", value: 130, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "lubricants", value: 105, type: bonus.good },
          { key: "superalloys", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [{ key: "mars_microbes", value: 115, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "fusion_reactors", value: 90, type: bonus.good },
          { key: "lubricants", value: 80, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "mars_microbes", value: 70, type: bonus.good },
          { key: "superalloys", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "lubricants", value: 115, type: bonus.good },
          { key: "superalloys", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "biotech_crops", value: 110, type: bonus.good },
          { key: "fusion_reactors", value: 65, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "fusion_reactors", value: 135, type: bonus.good },
          { key: "lubricants", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "biotech_crops", value: 95, type: bonus.good },
          { key: "fusion_reactors", value: 75, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
    ],
  },
  Eros: {
    key: "Eros",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "fusion_reactors", value: 125, type: bonus.good },
          { key: "promethium", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "biotech_crops", value: 45, type: bonus.good },
          { key: "superalloys", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "fusion_reactors", value: 125, type: bonus.good },
          { key: "superalloys", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "mars_microbes", value: 150, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "biotech_crops", value: 110, type: bonus.good },
          { key: "lubricants", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "fusion_reactors", value: 120, type: bonus.good },
          { key: "mars_microbes", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [{ key: "biotech_crops", value: 150, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "fusion_reactors", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "superalloys", value: 115, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "lubricants", value: 130, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
    ],
  },
  Pallas_C_4: {
    key: "Pallas_C_4",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "fusion_reactors", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 145, type: bonus.good },
          { key: "superalloys", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "fusion_reactors", value: 60, type: bonus.good },
          { key: "mars_microbes", value: 220, type: bonus.good },
          { key: "superalloys", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "fusion_reactors", value: 50, type: bonus.good },
          { key: "mars_microbes", value: 190, type: bonus.good },
          { key: "superalloys", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "biotech_crops", value: 45, type: bonus.good },
          { key: "fusion_reactors", value: 80, type: bonus.good },
          { key: "superalloys", value: 205, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "lubricants", value: 155, type: bonus.good },
          { key: "mars_microbes", value: 105, type: bonus.good },
          { key: "superalloys", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "biotech_crops", value: 60, type: bonus.good },
          { key: "fusion_reactors", value: 90, type: bonus.good },
          { key: "superalloys", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "fusion_reactors", value: 45, type: bonus.good },
          { key: "mars_microbes", value: 170, type: bonus.good },
          { key: "superalloys", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "biotech_crops", value: 105, type: bonus.good },
          { key: "fusion_reactors", value: 220, type: bonus.good },
          { key: "lubricants", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "biotech_crops", value: 95, type: bonus.good },
          { key: "fusion_reactors", value: 175, type: bonus.good },
          { key: "lubricants", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "biotech_crops", value: 235, type: bonus.good },
          { key: "lubricants", value: 90, type: bonus.good },
          { key: "mars_microbes", value: 65, type: bonus.good },
        ],
      },
    ],
  },
  Pallas_D_5: {
    key: "Pallas_D_5",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "fusion_reactors", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 160, type: bonus.good },
          { key: "superalloys", value: 105, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "fusion_reactors", value: 65, type: bonus.good },
          { key: "mars_microbes", value: 205, type: bonus.good },
          { key: "superalloys", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "biotech_crops", value: 55, type: bonus.good },
          { key: "fusion_reactors", value: 115, type: bonus.good },
          { key: "superalloys", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "biotech_crops", value: 80, type: bonus.good },
          { key: "fusion_reactors", value: 255, type: bonus.good },
          { key: "lubricants", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "biotech_crops", value: 110, type: bonus.good },
          { key: "fusion_reactors", value: 175, type: bonus.good },
          { key: "lubricants", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "biotech_crops", value: 55, type: bonus.good },
          { key: "fusion_reactors", value: 95, type: bonus.good },
          { key: "superalloys", value: 185, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "biotech_crops", value: 100, type: bonus.good },
          { key: "fusion_reactors", value: 200, type: bonus.good },
          { key: "lubricants", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "lubricants", value: 205, type: bonus.good },
          { key: "mars_microbes", value: 110, type: bonus.good },
          { key: "superalloys", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "biotech_crops", value: 55, type: bonus.good },
          { key: "fusion_reactors", value: 115, type: bonus.good },
          { key: "superalloys", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "biotech_crops", value: 185, type: bonus.good },
          { key: "lubricants", value: 90, type: bonus.good },
          { key: "mars_microbes", value: 45, type: bonus.good },
        ],
      },
    ],
  },
  Eunomia: {
    key: "Eunomia",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "compound_fluid", value: 95, type: bonus.good },
          { key: "nickel", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 25, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "bromine", value: 20, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "platinum_crystals", value: 120, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 95, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 120, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "bromine", value: 100, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "nickel", value: 25, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "processed_materials", value: 105, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 80, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "nickel", value: 125, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "bromine", value: 90, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "nickel", value: 20, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
    ],
  },
  TB_15_X_7: {
    key: "TB_15_X_7",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "bromine", value: 20, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 15, type: bonus.good },
          { key: "processed_materials", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "processed_materials", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "nickel", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 35, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "bromine", value: 20, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nickel", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Interamnia: {
    key: "Interamnia",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 250000 }],
        cost: [
          { key: "compound_fluid", value: 100, type: bonus.good },
          { key: "lubricants", value: 255, type: bonus.good },
          { key: "mars_microbes", value: 115, type: bonus.good },
          { key: "superalloys", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 255000 }],
        cost: [
          { key: "lubricants", value: 240, type: bonus.good },
          { key: "mars_microbes", value: 155, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "superalloys", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 260000 }],
        cost: [
          { key: "biotech_crops", value: 265, type: bonus.good },
          { key: "lubricants", value: 150, type: bonus.good },
          { key: "mars_microbes", value: 65, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "biotech_crops", value: 245, type: bonus.good },
          { key: "lubricants", value: 100, type: bonus.good },
          { key: "mars_microbes", value: 75, type: bonus.good },
          { key: "platinum_crystals", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "biotech_crops", value: 115, type: bonus.good },
          { key: "bromine", value: 100, type: bonus.good },
          { key: "fusion_reactors", value: 260, type: bonus.good },
          { key: "lubricants", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 260000 }],
        cost: [
          { key: "fusion_reactors", value: 50, type: bonus.good },
          { key: "mars_microbes", value: 285, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "superalloys", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 250000 }],
        cost: [
          { key: "bromine", value: 100, type: bonus.good },
          { key: "fusion_reactors", value: 55, type: bonus.good },
          { key: "mars_microbes", value: 270, type: bonus.good },
          { key: "superalloys", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 260000 }],
        cost: [
          { key: "biotech_crops", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 100, type: bonus.good },
          { key: "fusion_reactors", value: 300, type: bonus.good },
          { key: "lubricants", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 225000 }],
        cost: [
          { key: "fusion_reactors", value: 60, type: bonus.good },
          { key: "mars_microbes", value: 225, type: bonus.good },
          { key: "platinum_crystals", value: 100, type: bonus.good },
          { key: "superalloys", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 255000 }],
        cost: [
          { key: "biotech_crops", value: 275, type: bonus.good },
          { key: "lubricants", value: 120, type: bonus.good },
          { key: "mars_microbes", value: 70, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
    ],
  },
  Amphitrite: {
    key: "Amphitrite",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 50 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nickel", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "nickel", value: 45, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 10, type: bonus.good },
          { key: "platinum_crystals", value: 45, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "nickel", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 55, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 15, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
          { key: "processed_materials", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
    ],
  },
  Thisbe: {
    key: "Thisbe",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 20, type: bonus.good },
          { key: "compound_fluid", value: 15, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "compound_fluid", value: 15, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bromine", value: 15, type: bonus.good },
          { key: "platinum_crystals", value: 65, type: bonus.good },
          { key: "processed_materials", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 35, type: bonus.good },
          { key: "processed_materials", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 35, type: bonus.good },
          { key: "processed_materials", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nickel", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "nickel", value: 50, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Ino: {
    key: "Ino",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 50 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 15, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "compound_fluid", value: 45, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nickel", value: 60, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "nickel", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "nickel", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
          { key: "processed_materials", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "compound_fluid", value: 10, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "compound_fluid", value: 40, type: bonus.good },
          { key: "nickel", value: 25, type: bonus.good },
          { key: "platinum_crystals", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "compound_fluid", value: 15, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "nickel", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Hektor: {
    key: "Hektor",
    reward: [{ type: "diamond", value: 250 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "lubricants", value: 140, type: bonus.good },
          { key: "mars_microbes", value: 85, type: bonus.good },
          { key: "superalloys", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "biotech_crops", value: 40, type: bonus.good },
          { key: "fusion_reactors", value: 60, type: bonus.good },
          { key: "superalloys", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "biotech_crops", value: 45, type: bonus.good },
          { key: "fusion_reactors", value: 75, type: bonus.good },
          { key: "superalloys", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "biotech_crops", value: 60, type: bonus.good },
          { key: "fusion_reactors", value: 175, type: bonus.good },
          { key: "lubricants", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biotech_crops", value: 40, type: bonus.good },
          { key: "fusion_reactors", value: 75, type: bonus.good },
          { key: "superalloys", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "biotech_crops", value: 140, type: bonus.good },
          { key: "lubricants", value: 80, type: bonus.good },
          { key: "mars_microbes", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biotech_crops", value: 75, type: bonus.good },
          { key: "fusion_reactors", value: 140, type: bonus.good },
          { key: "lubricants", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "fusion_reactors", value: 35, type: bonus.good },
          { key: "mars_microbes", value: 180, type: bonus.good },
          { key: "superalloys", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biotech_crops", value: 135, type: bonus.good },
          { key: "lubricants", value: 75, type: bonus.good },
          { key: "mars_microbes", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "biotech_crops", value: 65, type: bonus.good },
          { key: "fusion_reactors", value: 165, type: bonus.good },
          { key: "lubricants", value: 45, type: bonus.good },
        ],
      },
    ],
  },
  Metis: {
    key: "Metis",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "lubricants", value: 100, type: bonus.good },
          { key: "mars_microbes", value: 50, type: bonus.good },
          { key: "superalloys", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "biotech_crops", value: 110, type: bonus.good },
          { key: "lubricants", value: 40, type: bonus.good },
          { key: "mars_microbes", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "fusion_reactors", value: 30, type: bonus.good },
          { key: "mars_microbes", value: 120, type: bonus.good },
          { key: "superalloys", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biotech_crops", value: 85, type: bonus.good },
          { key: "lubricants", value: 65, type: bonus.good },
          { key: "mars_microbes", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "biotech_crops", value: 30, type: bonus.good },
          { key: "fusion_reactors", value: 40, type: bonus.good },
          { key: "superalloys", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "lubricants", value: 105, type: bonus.good },
          { key: "mars_microbes", value: 50, type: bonus.good },
          { key: "superalloys", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "biotech_crops", value: 25, type: bonus.good },
          { key: "fusion_reactors", value: 50, type: bonus.good },
          { key: "superalloys", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biotech_crops", value: 80, type: bonus.good },
          { key: "lubricants", value: 60, type: bonus.good },
          { key: "mars_microbes", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "fusion_reactors", value: 25, type: bonus.good },
          { key: "mars_microbes", value: 100, type: bonus.good },
          { key: "superalloys", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biotech_crops", value: 20, type: bonus.good },
          { key: "fusion_reactors", value: 45, type: bonus.good },
          { key: "superalloys", value: 85, type: bonus.good },
        ],
      },
    ],
  },
  Aletheia: {
    key: "Aletheia",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "biotech_crops", value: 130, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "superalloys", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "fusion_reactors", value: 65, type: bonus.good },
          { key: "superalloys", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "biotech_crops", value: 150, type: bonus.good },
          { key: "superalloys", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "biotech_crops", value: 85, type: bonus.good },
          { key: "lubricants", value: 140, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "fusion_reactors", value: 160, type: bonus.good },
          { key: "mars_microbes", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "lubricants", value: 60, type: bonus.good },
          { key: "mars_microbes", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 195000 }],
        cost: [
          { key: "fusion_reactors", value: 120, type: bonus.good },
          { key: "mars_microbes", value: 110, type: bonus.good },
          { key: "promethium", value: 175, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "fusion_reactors", value: 65, type: bonus.good },
          { key: "superalloys", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "biotech_crops", value: 90, type: bonus.good },
          { key: "lubricants", value: 170, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "fusion_reactors", value: 75, type: bonus.good },
          { key: "mars_microbes", value: 155, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
    ],
  },
  Diotima: {
    key: "Diotima",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "nickel", value: 90, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "nickel", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "compound_fluid", value: 100, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "compound_fluid", value: 85, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "bromine", value: 85, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bromine", value: 25, type: bonus.good },
          { key: "platinum_crystals", value: 75, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "bromine", value: 25, type: bonus.good },
          { key: "platinum_crystals", value: 115, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 80, type: bonus.good },
        ],
      },
    ],
  },
  Egeria: {
    key: "Egeria",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "bromine", value: 100, type: bonus.good },
          { key: "compound_fluid", value: 45, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "nickel", value: 110, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "bromine", value: 25, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 110, type: bonus.good },
          { key: "processed_materials", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "compound_fluid", value: 20, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bromine", value: 110, type: bonus.good },
          { key: "compound_fluid", value: 45, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "bromine", value: 85, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "nickel", value: 25, type: bonus.good },
        ],
      },
    ],
  },
  Vesta_S_1: {
    key: "Vesta_S_1",
    reward: [{ type: "diamond", value: 250 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "bromine", value: 130, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "nickel", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 140, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "nickel", value: 110, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
          { key: "processed_materials", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "nickel", value: 145, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bromine", value: 90, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "nickel", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "nickel", value: 125, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "nickel", value: 115, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
          { key: "processed_materials", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "bromine", value: 75, type: bonus.good },
          { key: "compound_fluid", value: 30, type: bonus.good },
          { key: "processed_materials", value: 130, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "compound_fluid", value: 35, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
    ],
  },
  Juno: {
    key: "Juno",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 145, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 40, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "processed_materials", value: 115, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "bromine", value: 120, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "nickel", value: 35, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "nickel", value: 115, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "platinum_crystals", value: 135, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "compound_fluid", value: 150, type: bonus.good },
          { key: "nickel", value: 75, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 45, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 70, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "bromine", value: 35, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "platinum_crystals", value: 120, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
    ],
  },
  Cybele_F_3: {
    key: "Cybele_F_3",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "bromine", value: 175, type: bonus.good },
          { key: "compound_fluid", value: 75, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 190, type: bonus.good },
          { key: "processed_materials", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "nickel", value: 195, type: bonus.good },
          { key: "platinum_crystals", value: 85, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "nickel", value: 140, type: bonus.good },
          { key: "platinum_crystals", value: 95, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 195000 }],
        cost: [
          { key: "bromine", value: 220, type: bonus.good },
          { key: "compound_fluid", value: 85, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "compound_fluid", value: 225, type: bonus.good },
          { key: "nickel", value: 105, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "nickel", value: 180, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "bromine", value: 150, type: bonus.good },
          { key: "compound_fluid", value: 75, type: bonus.good },
          { key: "nickel", value: 40, type: bonus.good },
        ],
      },
    ],
  },
  Cybele_V_4: {
    key: "Cybele_V_4",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "nickel", value: 165, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "bromine", value: 140, type: bonus.good },
          { key: "compound_fluid", value: 80, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "platinum_crystals", value: 175, type: bonus.good },
          { key: "processed_materials", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "compound_fluid", value: 170, type: bonus.good },
          { key: "nickel", value: 110, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "bromine", value: 90, type: bonus.good },
          { key: "compound_fluid", value: 40, type: bonus.good },
          { key: "processed_materials", value: 170, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "bromine", value: 225, type: bonus.good },
          { key: "compound_fluid", value: 65, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "bromine", value: 90, type: bonus.good },
          { key: "compound_fluid", value: 35, type: bonus.good },
          { key: "processed_materials", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "compound_fluid", value: 165, type: bonus.good },
          { key: "nickel", value: 85, type: bonus.good },
          { key: "platinum_crystals", value: 35, type: bonus.good },
        ],
      },
    ],
  },
  Aurora: {
    key: "Aurora",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 235000 }],
        cost: [
          { key: "bromine", value: 80, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "processed_materials", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 240000 }],
        cost: [
          { key: "nickel", value: 175, type: bonus.good },
          { key: "platinum_crystals", value: 85, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "bromine", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
          { key: "processed_materials", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 235000 }],
        cost: [
          { key: "compound_fluid", value: 175, type: bonus.good },
          { key: "nickel", value: 85, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "platinum_crystals", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 245000 }],
        cost: [
          { key: "compound_fluid", value: 180, type: bonus.good },
          { key: "nickel", value: 95, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 280000 }],
        cost: [
          { key: "bromine", value: 120, type: bonus.good },
          { key: "compound_fluid", value: 65, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "processed_materials", value: 215, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 290000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 255, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 225000 }],
        cost: [
          { key: "bromine", value: 145, type: bonus.good },
          { key: "compound_fluid", value: 125, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 270000 }],
        cost: [
          { key: "nickel", value: 235, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 150, type: bonus.good },
        ],
      },
    ],
  },
  Ceres_E_6: {
    key: "Ceres_E_6",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "bromine", value: 120, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 195, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "nickel", value: 190, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "bromine", value: 190, type: bonus.good },
          { key: "compound_fluid", value: 95, type: bonus.good },
          { key: "nickel", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "bromine", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 215, type: bonus.good },
          { key: "processed_materials", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 220000 }],
        cost: [
          { key: "compound_fluid", value: 260, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 195000 }],
        cost: [
          { key: "nickel", value: 205, type: bonus.good },
          { key: "platinum_crystals", value: 95, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "compound_fluid", value: 200, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "platinum_crystals", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "bromine", value: 115, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 210000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "platinum_crystals", value: 240, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
    ],
  },
  Ceres_G_7: {
    key: "Ceres_G_7",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "platinum_crystals", value: 205, type: bonus.good },
          { key: "processed_materials", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "bromine", value: 175, type: bonus.good },
          { key: "compound_fluid", value: 100, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "nickel", value: 205, type: bonus.good },
          { key: "platinum_crystals", value: 150, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "bromine", value: 180, type: bonus.good },
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "nickel", value: 215, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "bromine", value: 175, type: bonus.good },
          { key: "compound_fluid", value: 100, type: bonus.good },
          { key: "nickel", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 215, type: bonus.good },
          { key: "processed_materials", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "bromine", value: 180, type: bonus.good },
          { key: "compound_fluid", value: 110, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "compound_fluid", value: 175, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
        ],
      },
    ],
  },
  Pales: {
    key: "Pales",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 285000 }],
        cost: [
          { key: "bromine", value: 55, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "platinum_crystals", value: 265, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 280000 }],
        cost: [
          { key: "nickel", value: 240, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 55, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 305000 }],
        cost: [
          { key: "bromine", value: 75, type: bonus.good },
          { key: "platinum_crystals", value: 225, type: bonus.good },
          { key: "processed_materials", value: 110, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 245000 }],
        cost: [
          { key: "bromine", value: 185, type: bonus.good },
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 45, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 270000 }],
        cost: [
          { key: "bromine", value: 200, type: bonus.good },
          { key: "compound_fluid", value: 140, type: bonus.good },
          { key: "nickel", value: 45, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 285000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "processed_materials", value: 240, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 270000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 225, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "processed_materials", value: 105, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 245000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
          { key: "processed_materials", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 330000 }],
        cost: [
          { key: "bromine", value: 270, type: bonus.good },
          { key: "compound_fluid", value: 85, type: bonus.good },
          { key: "nickel", value: 70, type: bonus.good },
          { key: "promethium", value: 250, type: bonus.special_good },
        ],
      },
    ],
  },
  Loreley: {
    key: "Loreley",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "platinum_crystals", value: 205, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "bromine", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 40, type: bonus.good },
          { key: "processed_materials", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "platinum_crystals", value: 220, type: bonus.good },
          { key: "processed_materials", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "bromine", value: 220, type: bonus.good },
          { key: "compound_fluid", value: 95, type: bonus.good },
          { key: "nickel", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "compound_fluid", value: 190, type: bonus.good },
          { key: "nickel", value: 105, type: bonus.good },
          { key: "platinum_crystals", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "bromine", value: 40, type: bonus.good },
          { key: "platinum_crystals", value: 210, type: bonus.good },
          { key: "processed_materials", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "platinum_crystals", value: 170, type: bonus.good },
          { key: "processed_materials", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "bromine", value: 130, type: bonus.good },
          { key: "compound_fluid", value: 200, type: bonus.good },
          { key: "processed_materials", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "bromine", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "processed_materials", value: 210, type: bonus.good },
        ],
      },
    ],
  },
  Gyptis: {
    key: "Gyptis",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 210000 }],
        cost: [
          { key: "bromine", value: 140, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 195, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "compound_fluid", value: 165, type: bonus.good },
          { key: "nickel", value: 110, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "bromine", value: 190, type: bonus.good },
          { key: "compound_fluid", value: 135, type: bonus.good },
          { key: "nickel", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 210000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 215, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "compound_fluid", value: 185, type: bonus.good },
          { key: "nickel", value: 75, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 220000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "platinum_crystals", value: 235, type: bonus.good },
          { key: "processed_materials", value: 120, type: bonus.good },
        ],
      },
      { reward: [{ type: "coin", value: 210000 }], cost: [] },
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "nickel", value: 220, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "compound_fluid", value: 215, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "platinum_crystals", value: 65, type: bonus.good },
        ],
      },
    ],
  },
  Eunike: {
    key: "Eunike",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 245, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "bromine", value: 85, type: bonus.good },
          { key: "compound_fluid", value: 50, type: bonus.good },
          { key: "processed_materials", value: 225, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 210000 }],
        cost: [
          { key: "bromine", value: 240, type: bonus.good },
          { key: "compound_fluid", value: 90, type: bonus.good },
          { key: "nickel", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 225000 }],
        cost: [
          { key: "nickel", value: 255, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 225000 }],
        cost: [
          { key: "nickel", value: 235, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "bromine", value: 220, type: bonus.good },
          { key: "compound_fluid", value: 110, type: bonus.good },
          { key: "nickel", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "bromine", value: 175, type: bonus.good },
          { key: "compound_fluid", value: 110, type: bonus.good },
          { key: "nickel", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "bromine", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 180, type: bonus.good },
          { key: "processed_materials", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 230000 }],
        cost: [
          { key: "compound_fluid", value: 165, type: bonus.good },
          { key: "nickel", value: 125, type: bonus.good },
          { key: "platinum_crystals", value: 45, type: bonus.good },
        ],
      },
    ],
  },
  Euphrosyne_A_12: {
    key: "Euphrosyne_A_12",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 50 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 230000 }],
        cost: [
          { key: "nickel", value: 240, type: bonus.good },
          { key: "platinum_crystals", value: 115, type: bonus.good },
          { key: "processed_materials", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 225000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 260, type: bonus.good },
          { key: "processed_materials", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 240000 }],
        cost: [
          { key: "bromine", value: 265, type: bonus.good },
          { key: "compound_fluid", value: 150, type: bonus.good },
          { key: "nickel", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "bromine", value: 115, type: bonus.good },
          { key: "compound_fluid", value: 210, type: bonus.good },
          { key: "processed_materials", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 230000 }],
        cost: [
          { key: "nickel", value: 260, type: bonus.good },
          { key: "platinum_crystals", value: 110, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 235000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 255, type: bonus.good },
          { key: "processed_materials", value: 115, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "nickel", value: 175, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 230000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 235, type: bonus.good },
          { key: "processed_materials", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 220000 }],
        cost: [
          { key: "compound_fluid", value: 225, type: bonus.good },
          { key: "nickel", value: 120, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
        ],
      },
    ],
  },
  Hygiea_N_13: {
    key: "Hygiea_N_13",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 50 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "bromine", value: 270, type: bonus.good },
          { key: "compound_fluid", value: 130, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "bromine", value: 45, type: bonus.good },
          { key: "compound_fluid", value: 115, type: bonus.good },
          { key: "platinum_crystals", value: 220, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 225000 }],
        cost: [
          { key: "bromine", value: 230, type: bonus.good },
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "nickel", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "nickel", value: 235, type: bonus.good },
          { key: "platinum_crystals", value: 110, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "compound_fluid", value: 255, type: bonus.good },
          { key: "nickel", value: 150, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 250000 }],
        cost: [
          { key: "nickel", value: 285, type: bonus.good },
          { key: "platinum_crystals", value: 140, type: bonus.good },
          { key: "processed_materials", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 245000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "platinum_crystals", value: 290, type: bonus.good },
          { key: "processed_materials", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "nickel", value: 185, type: bonus.good },
          { key: "platinum_crystals", value: 95, type: bonus.good },
          { key: "processed_materials", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 230000 }],
        cost: [
          { key: "compound_fluid", value: 255, type: bonus.good },
          { key: "nickel", value: 130, type: bonus.good },
          { key: "platinum_crystals", value: 45, type: bonus.good },
        ],
      },
    ],
  },
  Hygiea_O_14: {
    key: "Hygiea_O_14",
    reward: [
      { type: "coin", value: 6000000 },
      { type: "supply", value: 6000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 255000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 310, type: bonus.good },
          { key: "processed_materials", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 260000 }],
        cost: [
          { key: "bromine", value: 75, type: bonus.good },
          { key: "platinum_crystals", value: 285, type: bonus.good },
          { key: "processed_materials", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 220000 }],
        cost: [
          { key: "nickel", value: 215, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "compound_fluid", value: 260, type: bonus.good },
          { key: "nickel", value: 125, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "nickel", value: 120, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 220000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 240, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "nickel", value: 235, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "bromine", value: 225, type: bonus.good },
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
        ],
      },
    ],
  },
  Vesta_L_15: {
    key: "Vesta_L_15",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 255000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 310, type: bonus.good },
          { key: "processed_materials", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 260000 }],
        cost: [
          { key: "bromine", value: 75, type: bonus.good },
          { key: "platinum_crystals", value: 285, type: bonus.good },
          { key: "processed_materials", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 220000 }],
        cost: [
          { key: "nickel", value: 215, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "compound_fluid", value: 260, type: bonus.good },
          { key: "nickel", value: 125, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "nickel", value: 120, type: bonus.good },
          { key: "platinum_crystals", value: 90, type: bonus.good },
          { key: "processed_materials", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 220000 }],
        cost: [
          { key: "bromine", value: 65, type: bonus.good },
          { key: "platinum_crystals", value: 240, type: bonus.good },
          { key: "processed_materials", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "nickel", value: 235, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "bromine", value: 225, type: bonus.good },
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
        ],
      },
    ],
  },
  Vesta_M_16: {
    key: "Vesta_M_16",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 50 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "nickel", value: 145, type: bonus.good },
          { key: "platinum_crystals", value: 65, type: bonus.good },
          { key: "processed_materials", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "bromine", value: 70, type: bonus.good },
          { key: "compound_fluid", value: 35, type: bonus.good },
          { key: "processed_materials", value: 115, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "nickel", value: 110, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "compound_fluid", value: 115, type: bonus.good },
          { key: "nickel", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "bromine", value: 75, type: bonus.good },
          { key: "compound_fluid", value: 25, type: bonus.good },
          { key: "processed_materials", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "compound_fluid", value: 120, type: bonus.good },
          { key: "nickel", value: 70, type: bonus.good },
          { key: "platinum_crystals", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "nickel", value: 135, type: bonus.good },
          { key: "platinum_crystals", value: 65, type: bonus.good },
          { key: "processed_materials", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "nickel", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "nickel", value: 140, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
          { key: "processed_materials", value: 30, type: bonus.good },
        ],
      },
    ],
  },
  Fides: {
    key: "Fides",
    reward: [{ type: "diamond", value: 250 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "nickel", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "nickel", value: 105, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "bromine", value: 130, type: bonus.good },
          { key: "compound_fluid", value: 80, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "bromine", value: 60, type: bonus.good },
          { key: "compound_fluid", value: 35, type: bonus.good },
          { key: "processed_materials", value: 115, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 75, type: bonus.good },
          { key: "nickel", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "nickel", value: 125, type: bonus.good },
          { key: "platinum_crystals", value: 70, type: bonus.good },
          { key: "processed_materials", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "compound_fluid", value: 180, type: bonus.good },
          { key: "nickel", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 125, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "bromine", value: 30, type: bonus.good },
          { key: "platinum_crystals", value: 120, type: bonus.good },
          { key: "processed_materials", value: 80, type: bonus.good },
        ],
      },
    ],
  },
  Ceres_K_18: {
    key: "Ceres_K_18",
    reward: [{ type: "expansion" }],
    sectors: [
      { reward: [{ type: "coin", value: 170000 }], cost: [] },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "nickel", value: 180, type: bonus.good },
          { key: "platinum_crystals", value: 110, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "bromine", value: 50, type: bonus.good },
          { key: "platinum_crystals", value: 260, type: bonus.good },
          { key: "processed_materials", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "compound_fluid", value: 245, type: bonus.good },
          { key: "nickel", value: 95, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 215000 }],
        cost: [
          { key: "bromine", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 65, type: bonus.good },
          { key: "processed_materials", value: 230, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "nickel", value: 215, type: bonus.good },
          { key: "platinum_crystals", value: 115, type: bonus.good },
          { key: "processed_materials", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "nickel", value: 230, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "bromine", value: 85, type: bonus.good },
          { key: "compound_fluid", value: 70, type: bonus.good },
          { key: "processed_materials", value: 170, type: bonus.good },
        ],
      },
    ],
  },
  Nemesis: {
    key: "Nemesis",
    reward: [{ type: "exploration_site", age: "SpaceAgeAsteroidBelt" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 330000 }],
        cost: [
          { key: "compound_fluid", value: 280, type: bonus.good },
          { key: "nickel", value: 140, type: bonus.good },
          { key: "platinum_crystals", value: 50, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 355000 }],
        cost: [
          { key: "bromine", value: 125, type: bonus.good },
          { key: "compound_fluid", value: 65, type: bonus.good },
          { key: "orichalcum", value: 250, type: bonus.special_good },
          { key: "processed_materials", value: 285, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 310000 }],
        cost: [
          { key: "bromine", value: 95, type: bonus.good },
          { key: "compound_fluid", value: 75, type: bonus.good },
          { key: "orichalcum", value: 250, type: bonus.special_good },
          { key: "processed_materials", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 315000 }],
        cost: [
          { key: "bromine", value: 135, type: bonus.good },
          { key: "compound_fluid", value: 55, type: bonus.good },
          { key: "processed_materials", value: 245, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 365000 }],
        cost: [
          { key: "bromine", value: 340, type: bonus.good },
          { key: "compound_fluid", value: 145, type: bonus.good },
          { key: "nickel", value: 65, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 310000 }],
        cost: [
          { key: "bromine", value: 105, type: bonus.good },
          { key: "compound_fluid", value: 70, type: bonus.good },
          { key: "processed_materials", value: 245, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 315000 }],
        cost: [
          { key: "nickel", value: 205, type: bonus.good },
          { key: "orichalcum", value: 250, type: bonus.special_good },
          { key: "platinum_crystals", value: 115, type: bonus.good },
          { key: "processed_materials", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 305000 }],
        cost: [
          { key: "nickel", value: 215, type: bonus.good },
          { key: "platinum_crystals", value: 140, type: bonus.good },
          { key: "processed_materials", value: 60, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 310000 }],
        cost: [
          { key: "bromine", value: 115, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "orichalcum", value: 250, type: bonus.special_good },
          { key: "processed_materials", value: 200, type: bonus.good },
        ],
      },
    ],
  },
  Euphrosyne_A_20: {
    key: "Euphrosyne_A_20",
    reward: [{ type: "good", age: "SpaceAgeMars", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 245000 }],
        cost: [
          { key: "compound_fluid", value: 300, type: bonus.good },
          { key: "nickel", value: 115, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 225000 }],
        cost: [
          { key: "bromine", value: 110, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "processed_materials", value: 250, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 230000 }],
        cost: [
          { key: "compound_fluid", value: 280, type: bonus.good },
          { key: "nickel", value: 100, type: bonus.good },
          { key: "platinum_crystals", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 225000 }],
        cost: [
          { key: "nickel", value: 250, type: bonus.good },
          { key: "platinum_crystals", value: 105, type: bonus.good },
          { key: "processed_materials", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 245000 }],
        cost: [
          { key: "bromine", value: 150, type: bonus.good },
          { key: "compound_fluid", value: 65, type: bonus.good },
          { key: "processed_materials", value: 255, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 260000 }],
        cost: [
          { key: "compound_fluid", value: 290, type: bonus.good },
          { key: "nickel", value: 150, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 240000 }],
        cost: [
          { key: "bromine", value: 145, type: bonus.good },
          { key: "compound_fluid", value: 60, type: bonus.good },
          { key: "processed_materials", value: 245, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "bromine", value: 55, type: bonus.good },
          { key: "platinum_crystals", value: 270, type: bonus.good },
          { key: "processed_materials", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 250000 }],
        cost: [
          { key: "compound_fluid", value: 275, type: bonus.good },
          { key: "nickel", value: 145, type: bonus.good },
          { key: "platinum_crystals", value: 60, type: bonus.good },
        ],
      },
    ],
  },
};
