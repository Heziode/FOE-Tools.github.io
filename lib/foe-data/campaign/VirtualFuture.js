const { bonus } = require("../bonus");

module.exports = {
  Bytedirt_Planes: {
    key: "Bytedirt_Planes",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biolight", value: 90, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "biolight", value: 110, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biolight", value: 75, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
        ],
      },
    ],
  },
  End_of_the_Void: {
    key: "End_of_the_Void",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "biolight", value: 85, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "data_crystals", value: 45, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "pearls", value: 110, type: bonus.good },
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "data_crystals", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "plankton", value: 150, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "corals", value: 90, type: bonus.good },
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biolight", value: 80, type: bonus.good },
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "golden_rice", value: 25, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "artificial_scales", value: 80, type: bonus.good },
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "pearls", value: 70, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
    ],
  },
  Banker_s_Heaven: {
    key: "Banker_s_Heaven",
    reward: [
      { type: "coin", value: 2200000 },
      { type: "supply", value: 2200000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "tea_silk", value: 70, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "biolight", value: 60, type: bonus.good },
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "corals", value: 55, type: bonus.good },
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "promethium", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "artificial_scales", value: 65, type: bonus.good },
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "nanites", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "plankton", value: 65, type: bonus.good },
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "pearls", value: 60, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
        ],
      },
    ],
  },
  Shift_Land: {
    key: "Shift_Land",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 55000 }],
        cost: [
          { key: "data_crystals", value: 45, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "tea_silk", value: 25, type: bonus.good },
          { key: "promethium", value: 145, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanites", value: 55, type: bonus.good },
          { key: "tea_silk", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "cryptocash", value: 20, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "golden_rice", value: 20, type: bonus.good },
        ],
      },
    ],
  },
  Black_Net_Market: {
    key: "Black_Net_Market",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "corals", value: 120, type: bonus.good },
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
          { key: "promethium", value: 135, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "biolight", value: 100, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1050000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "artificial_scales", value: 110, type: bonus.good },
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "golden_rice", value: 65, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "tea_silk", value: 70, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
    ],
  },
  Pulse_City: {
    key: "Pulse_City",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "nanites", value: 35, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1200000 }],
        cost: [
          { key: "data_crystals", value: 25, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 45, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
        ],
      },
    ],
  },
  Max_s_Shelter: {
    key: "Max_s_Shelter",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "nanites", value: 60, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 105, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
          { key: "tea_silk", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "promethium", value: 190, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
        ],
      },
    ],
  },
  The_Open_Zone: {
    key: "The_Open_Zone",
    reward: [
      { type: "coin", value: 1900000 },
      { type: "supply", value: 1900000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 45, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 110, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
          { key: "orichalcum", value: 140, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 20, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
    ],
  },
  The_Warring_Towers: {
    key: "The_Warring_Towers",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 25, type: bonus.good },
          { key: "golden_rice", value: 85, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "tea_silk", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 45, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "orichalcum", value: 105, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 35, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "nanites", value: 100, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good },
        ],
      },
    ],
  },
  Forgotten_Fragments: {
    key: "Forgotten_Fragments",
    reward: [
      { type: "coin", value: 2300000 },
      { type: "supply", value: 2300000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 85, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "golden_rice", value: 65, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
        ],
      },
    ],
  },
  Backup_NET: {
    key: "Backup_NET",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [{ key: "nanites", value: 70, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "tea_silk", value: 65, type: bonus.good },
          { key: "orichalcum", value: 170, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [{ key: "cryptocash", value: 70, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 100, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "golden_rice", value: 75, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 105, type: bonus.good },
          { key: "tea_silk", value: 75, type: bonus.good },
        ],
      },
    ],
  },
  Spoiled_Resort: {
    key: "Spoiled_Resort",
    reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "tea_silk", value: 80, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 25, type: bonus.good },
          { key: "promethium", value: 85, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 45, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "cryptocash", value: 75, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "golden_rice", value: 35, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "data_crystals", value: 50, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 85, type: bonus.good },
        ],
      },
    ],
  },
  Fort_Duplex: {
    key: "Fort_Duplex",
    reward: [
      { type: "coin", value: 2800000 },
      { type: "supply", value: 2800000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "nanites", value: 40, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 20, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 35, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 65, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good },
        ],
      },
    ],
  },
  LoneHub: {
    key: "LoneHub",
    reward: [
      { type: "coin", value: 3000000 },
      { type: "supply", value: 3000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [{ key: "golden_rice", value: 75, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [{ key: "tea_silk", value: 80, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [{ key: "tea_silk", value: 75, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "tea_silk", value: 50, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [{ key: "cryptocash", value: 190, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [{ key: "data_crystals", value: 85, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [{ key: "nanites", value: 180, type: bonus.good }],
      },
    ],
  },
  Alpha_1_Omega_2: {
    key: "Alpha_1_Omega_2",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 35, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 30, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "tea_silk", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 105000 }],
        cost: [
          { key: "data_crystals", value: 25, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 50, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 95, type: bonus.good },
          { key: "nanites", value: 170, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "promethium", value: 85, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "nanites", value: 95, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "orichalcum", value: 20, type: bonus.special_good },
        ],
      },
    ],
  },
  Ray_s_Ray_s: {
    key: "Ray_s_Ray_s",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "data_crystals", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "data_crystals", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 185, type: bonus.good },
          { key: "nanites", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "nanites", value: 180, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 140, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 170, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 115000 }],
        cost: [
          { key: "data_crystals", value: 85, type: bonus.good },
          { key: "tea_silk", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "nanites", value: 130, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 125, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 50, type: bonus.good },
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
    ],
  },
  Purple_Palace: {
    key: "Purple_Palace",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 100, type: bonus.good },
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 170, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "tea_silk", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
    ],
  },
  Three_Oc3ans: {
    key: "Three_Oc3ans",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "nanites", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 175, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 100, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 125, type: bonus.good },
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "data_crystals", value: 160, type: bonus.good },
          { key: "nanites", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "cryptocash", value: 190, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
          { key: "tea_silk", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "nanites", value: 125, type: bonus.good },
        ],
      },
    ],
  },
  Vortex: {
    key: "Vortex",
    reward: [
      { type: "coin", value: 2100000 },
      { type: "supply", value: 2100000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "nanites", value: 85, type: bonus.good },
          { key: "orichalcum", value: 85, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 40, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "tea_silk", value: 30, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 95, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "orichalcum", value: 60, type: bonus.special_good },
        ],
      },
    ],
  },
  Twisted_Alps: {
    key: "Twisted_Alps",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "tea_silk", value: 185, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [{ key: "data_crystals", value: 175, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [{ key: "cryptocash", value: 125, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "nanites", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "nanites", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 125, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 105000 }],
        cost: [
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "data_crystals", value: 125, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [{ key: "cryptocash", value: 150, type: bonus.good }],
      },
    ],
  },
  Archives_of_Junkman: {
    key: "Archives_of_Junkman",
    reward: [
      { type: "coin", value: 1900000 },
      { type: "supply", value: 1900000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 170, type: bonus.good },
          { key: "data_crystals", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 155, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "cryptocash", value: 100, type: bonus.good },
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "promethium", value: 125, type: bonus.special_good },
        ],
      },
    ],
  },
  Frozen_RAM: {
    key: "Frozen_RAM",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
          { key: "orichalcum", value: 75, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 85, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 185000 }],
        cost: [
          { key: "nanites", value: 160, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 195000 }],
        cost: [
          { key: "cryptocash", value: 170, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "nanites", value: 140, type: bonus.good },
          { key: "tea_silk", value: 155, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 135, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "cryptocash", value: 145, type: bonus.good },
          { key: "data_crystals", value: 175, type: bonus.good },
          { key: "orichalcum", value: 85, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "nanites", value: 130, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good },
        ],
      },
    ],
  },
  Cas_Cade: {
    key: "Cas_Cade",
    reward: [
      { type: "coin", value: 2600000 },
      { type: "supply", value: 2600000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "data_crystals", value: 185, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "data_crystals", value: 125, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 195000 }],
        cost: [
          { key: "golden_rice", value: 210, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
          { key: "tea_silk", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
          { key: "tea_silk", value: 145, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "data_crystals", value: 100, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "promethium", value: 175, type: bonus.special_good },
        ],
      },
    ],
  },
  The_Historical_Museum: {
    key: "The_Historical_Museum",
    reward: [{ type: "good", age: "VirtualFuture", value: 25 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "nanites", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "tea_silk", value: 240, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 130, type: bonus.good },
          { key: "tea_silk", value: 230, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 175, type: bonus.good },
          { key: "data_crystals", value: 50, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "nanites", value: 250, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "nanites", value: 240, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "golden_rice", value: 190, type: bonus.good },
          { key: "nanites", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "data_crystals", value: 170, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "nanites", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "nanites", value: 250, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "tea_silk", value: 260, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
    ],
  },
  Aerial_Boulevard: {
    key: "Aerial_Boulevard",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 125, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
          { key: "orichalcum", value: 40, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 115000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "orichalcum", value: 60, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "nanites", value: 70, type: bonus.good },
          { key: "tea_silk", value: 70, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "nanites", value: 110, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "cryptocash", value: 210, type: bonus.good },
          { key: "golden_rice", value: 145, type: bonus.good },
          { key: "promethium", value: 45, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "tea_silk", value: 220, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "golden_rice", value: 130, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "cryptocash", value: 100, type: bonus.good },
          { key: "data_crystals", value: 100, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good },
        ],
      },
    ],
  },
  Slate_13: {
    key: "Slate_13",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "tea_silk", value: 200, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "data_crystals", value: 325, type: bonus.good },
          { key: "orichalcum", value: 180, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "cryptocash", value: 380, type: bonus.good },
          { key: "promethium", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "tea_silk", value: 250, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "golden_rice", value: 240, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 240000 }],
        cost: [
          { key: "nanites", value: 380, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "golden_rice", value: 280, type: bonus.good },
          { key: "promethium", value: 175, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
    ],
  },
  New_final_final_exe: {
    key: "New_final_final_exe",
    reward: [
      { type: "coin", value: 3500000 },
      { type: "supply", value: 3500000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [{ key: "golden_rice", value: 85, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [{ key: "nanites", value: 80, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [{ key: "cryptocash", value: 140, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "data_crystals", value: 80, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "orichalcum", value: 45, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [{ key: "golden_rice", value: 80, type: bonus.good }],
      },
    ],
  },
  Bizarre_Plains: {
    key: "Bizarre_Plains",
    reward: [{ type: "good", age: "VirtualFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 190, type: bonus.good },
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "tea_silk", value: 200, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 230, type: bonus.good },
          { key: "golden_rice", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "data_crystals", value: 185, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "golden_rice", value: 230, type: bonus.good },
          { key: "nanites", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "nanites", value: 195, type: bonus.good },
          { key: "tea_silk", value: 90, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "nanites", value: 210, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "data_crystals", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "nanites", value: 175, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 190000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "golden_rice", value: 190, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 205000 }],
        cost: [
          { key: "cryptocash", value: 205, type: bonus.good },
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "tea_silk", value: 175, type: bonus.good },
        ],
      },
    ],
  },
  Argus__Watch: {
    key: "Argus__Watch",
    reward: [
      { type: "coin", value: 2800000 },
      { type: "supply", value: 2800000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "biolight", value: 85, type: bonus.good },
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "nanites", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "corals", value: 100, type: bonus.good },
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "pearls", value: 110, type: bonus.good },
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "plankton", value: 95, type: bonus.good },
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "tea_silk", value: 135, type: bonus.good },
        ],
      },
    ],
  },
  Berta_s_Byte_Sauce: {
    key: "Berta_s_Byte_Sauce",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 170, type: bonus.good },
          { key: "golden_rice", value: 115, type: bonus.good },
          { key: "nanites", value: 70, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "data_crystals", value: 135, type: bonus.good },
          { key: "golden_rice", value: 75, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "golden_rice", value: 140, type: bonus.good },
          { key: "nanites", value: 125, type: bonus.good },
          { key: "tea_silk", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "data_crystals", value: 100, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
        ],
      },
    ],
  },
  Veil_of_Bits: {
    key: "Veil_of_Bits",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 200, type: bonus.good },
          { key: "tea_silk", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 200000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "nanites", value: 195, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 190000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good },
        ],
      },
    ],
  },
  Harvey_s_Low_Core: {
    key: "Harvey_s_Low_Core",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 205, type: bonus.good },
          { key: "tea_silk", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 200000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 210, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "golden_rice", value: 55, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 50, type: bonus.good },
          { key: "golden_rice", value: 130, type: bonus.good },
          { key: "tea_silk", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 50, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 230000 }],
        cost: [
          { key: "golden_rice", value: 110, type: bonus.good },
          { key: "tea_silk", value: 220, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "nanites", value: 130, type: bonus.good },
          { key: "orichalcum", value: 200, type: bonus.special_good },
        ],
      },
    ],
  },
  The_Byte_Parade: {
    key: "The_Byte_Parade",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "nanites", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "golden_rice", value: 110, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 130, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "golden_rice", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "tea_silk", value: 150, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "golden_rice", value: 200, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 175, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
    ],
  },
  Reboot_Bay: {
    key: "Reboot_Bay",
    reward: [
      { type: "coin", value: 3500000 },
      { type: "supply", value: 3500000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 100, type: bonus.good },
          { key: "nanites", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "golden_rice", value: 160, type: bonus.good },
          { key: "tea_silk", value: 170, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "cryptocash", value: 225, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "tea_silk", value: 230, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 165, type: bonus.good },
          { key: "tea_silk", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "golden_rice", value: 205, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 95, type: bonus.good },
          { key: "golden_rice", value: 195, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "nanites", value: 190, type: bonus.good },
        ],
      },
    ],
  },
  Streaming_Forest: {
    key: "Streaming_Forest",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 55, type: bonus.good },
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "nanites", value: 140, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 145, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "data_crystals", value: 40, type: bonus.good },
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 205, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 200, type: bonus.good },
          { key: "golden_rice", value: 45, type: bonus.good },
          { key: "tea_silk", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 100, type: bonus.good },
          { key: "nanites", value: 210, type: bonus.good },
          { key: "tea_silk", value: 45, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 220, type: bonus.good },
          { key: "nanites", value: 105, type: bonus.good },
        ],
      },
    ],
  },
  CMYK_Citadel: {
    key: "CMYK_Citadel",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 170, type: bonus.good },
          { key: "golden_rice", value: 155, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "nanites", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "cryptocash", value: 195, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "nanites", value: 190, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "cryptocash", value: 55, type: bonus.good },
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 185, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 195, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 170000 }],
        cost: [
          { key: "cryptocash", value: 210, type: bonus.good },
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "nanites", value: 60, type: bonus.good },
          { key: "tea_silk", value: 225, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 160, type: bonus.good },
          { key: "golden_rice", value: 230, type: bonus.good },
        ],
      },
    ],
  },
  Forgify: {
    key: "Forgify",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "data_crystals", value: 225, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "promethium", value: 140, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 185000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
          { key: "promethium", value: 190, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 180000 }],
        cost: [
          { key: "cryptocash", value: 100, type: bonus.good },
          { key: "nanites", value: 145, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "golden_rice", value: 45, type: bonus.good },
          { key: "tea_silk", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 245000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "golden_rice", value: 250, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "nanites", value: 220, type: bonus.good },
        ],
      },
    ],
  },
  Digital_Town_of_Hope: {
    key: "Digital_Town_of_Hope",
    reward: [
      { type: "coin", value: 3000000 },
      { type: "supply", value: 3000000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 105, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "nanites", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "nanites", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "golden_rice", value: 130, type: bonus.good },
          { key: "tea_silk", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "golden_rice", value: 175, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "golden_rice", value: 170, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "nanites", value: 210, type: bonus.good },
        ],
      },
    ],
  },
  Cloud_One: {
    key: "Cloud_One",
    reward: [
      { type: "coin", value: 3000000 },
      { type: "supply", value: 3000000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "golden_rice", value: 50, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 115, type: bonus.good },
          { key: "data_crystals", value: 60, type: bonus.good },
          { key: "nanites", value: 145, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "golden_rice", value: 185, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 190, type: bonus.good },
          { key: "nanites", value: 65, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "tea_silk", value: 195, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "golden_rice", value: 110, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 30, type: bonus.good },
          { key: "golden_rice", value: 200, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
    ],
  },
  Re_Birth: {
    key: "Re_Birth",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 260000 }],
        cost: [
          { key: "cryptocash", value: 230, type: bonus.good },
          { key: "tea_silk", value: 130, type: bonus.good },
          { key: "orichalcum", value: 250, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 170000 }],
        cost: [
          { key: "data_crystals", value: 145, type: bonus.good },
          { key: "golden_rice", value: 250, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 125, type: bonus.good },
          { key: "nanites", value: 240, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 240000 }],
        cost: [
          { key: "data_crystals", value: 260, type: bonus.good },
          { key: "nanites", value: 130, type: bonus.good },
          { key: "orichalcum", value: 175, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 245000 }],
        cost: [
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 235, type: bonus.good },
          { key: "promethium", value: 190, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 220, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
    ],
  },
  Castle_You_Es_Bee: {
    key: "Castle_You_Es_Bee",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "golden_rice", value: 140, type: bonus.good },
          { key: "tea_silk", value: 165, type: bonus.good },
          { key: "orichalcum", value: 140, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 120, type: bonus.good },
          { key: "data_crystals", value: 65, type: bonus.good },
          { key: "nanites", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 195000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "tea_silk", value: 130, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 150, type: bonus.good },
          { key: "golden_rice", value: 80, type: bonus.good },
          { key: "nanites", value: 105, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "golden_rice", value: 190, type: bonus.good },
          { key: "tea_silk", value: 85, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 70, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 185, type: bonus.good },
          { key: "nanites", value: 75, type: bonus.good },
          { key: "tea_silk", value: 95, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "data_crystals", value: 195, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 190, type: bonus.good },
        ],
      },
    ],
  },
  NET_MASKerade: {
    key: "NET_MASKerade",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 215, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "data_crystals", value: 160, type: bonus.good },
          { key: "golden_rice", value: 215, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 145, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 175, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "nanites", value: 180, type: bonus.good },
        ],
      },
    ],
  },
  If_Then_Whatever: {
    key: "If_Then_Whatever",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "data_crystals", value: 95, type: bonus.good },
          { key: "golden_rice", value: 225, type: bonus.good },
          { key: "nanites", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "data_crystals", value: 75, type: bonus.good },
          { key: "golden_rice", value: 45, type: bonus.good },
          { key: "tea_silk", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 190, type: bonus.good },
          { key: "golden_rice", value: 70, type: bonus.good },
          { key: "tea_silk", value: 40, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 80, type: bonus.good },
          { key: "nanites", value: 185, type: bonus.good },
          { key: "tea_silk", value: 65, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "data_crystals", value: 230, type: bonus.good },
          { key: "nanites", value: 85, type: bonus.good },
          { key: "orichalcum", value: 180, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "data_crystals", value: 180, type: bonus.good },
          { key: "nanites", value: 90, type: bonus.good },
        ],
      },
    ],
  },
  The_Virtual_Cliffs_of_G0r3: {
    key: "The_Virtual_Cliffs_of_G0r3",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 185, type: bonus.good },
          { key: "data_crystals", value: 55, type: bonus.good },
          { key: "tea_silk", value: 110, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 215000 }],
        cost: [
          { key: "cryptocash", value: 210, type: bonus.good },
          { key: "tea_silk", value: 135, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 210000 }],
        cost: [
          { key: "golden_rice", value: 150, type: bonus.good },
          { key: "tea_silk", value: 225, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 125000 }],
        cost: [
          { key: "cryptocash", value: 90, type: bonus.good },
          { key: "nanites", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 165, type: bonus.good },
          { key: "nanites", value: 120, type: bonus.good },
          { key: "tea_silk", value: 50, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 130, type: bonus.good },
          { key: "golden_rice", value: 40, type: bonus.good },
          { key: "nanites", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 205000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "nanites", value: 80, type: bonus.good },
          { key: "orichalcum", value: 190, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "data_crystals", value: 90, type: bonus.good },
          { key: "golden_rice", value: 100, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 45, type: bonus.good },
          { key: "data_crystals", value: 125, type: bonus.good },
          { key: "golden_rice", value: 170, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "golden_rice", value: 120, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 170, type: bonus.good },
        ],
      },
    ],
  },
  The_Church_of_Games: {
    key: "The_Church_of_Games",
    reward: [
      { type: "coin", value: 2500000 },
      { type: "supply", value: 2500000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 170, type: bonus.good },
          { key: "tea_silk", value: 105, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 130000 }],
        cost: [
          { key: "golden_rice", value: 90, type: bonus.good },
          { key: "tea_silk", value: 190, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "data_crystals", value: 110, type: bonus.good },
          { key: "golden_rice", value: 195, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 160, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "data_crystals", value: 165, type: bonus.good },
          { key: "nanites", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 140000 }],
        cost: [
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 140000 }],
        cost: [
          { key: "cryptocash", value: 185, type: bonus.good },
          { key: "tea_silk", value: 120, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 135000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "nanites", value: 190, type: bonus.good },
        ],
      },
    ],
  },
  The_Sacred_Database: {
    key: "The_Sacred_Database",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "data_crystals", value: 130, type: bonus.good },
          { key: "golden_rice", value: 180, type: bonus.good },
          { key: "tea_silk", value: 60, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "data_crystals", value: 190, type: bonus.good },
          { key: "golden_rice", value: 65, type: bonus.good },
          { key: "nanites", value: 155, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "cryptocash", value: 150, type: bonus.good },
          { key: "data_crystals", value: 70, type: bonus.good },
          { key: "nanites", value: 210, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 155000 }],
        cost: [
          { key: "cryptocash", value: 110, type: bonus.good },
          { key: "nanites", value: 190, type: bonus.good },
          { key: "tea_silk", value: 55, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 60, type: bonus.good },
          { key: "golden_rice", value: 130, type: bonus.good },
          { key: "tea_silk", value: 185, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 175000 }],
        cost: [
          { key: "cryptocash", value: 55, type: bonus.good },
          { key: "golden_rice", value: 125, type: bonus.good },
          { key: "tea_silk", value: 230, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 175000 }],
        cost: [
          { key: "cryptocash", value: 225, type: bonus.good },
          { key: "nanites", value: 50, type: bonus.good },
          { key: "tea_silk", value: 135, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 160000 }],
        cost: [
          { key: "cryptocash", value: 180, type: bonus.good },
          { key: "golden_rice", value: 60, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
    ],
  },
  Game_Over: {
    key: "Game_Over",
    reward: [{ type: "good", age: "VirtualFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 30, type: bonus.good },
          { key: "golden_rice", value: 110, type: bonus.good },
          { key: "tea_silk", value: 180, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 145000 }],
        cost: [
          { key: "cryptocash", value: 175, type: bonus.good },
          { key: "nanites", value: 25, type: bonus.good },
          { key: "tea_silk", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 150000 }],
        cost: [
          { key: "data_crystals", value: 115, type: bonus.good },
          { key: "golden_rice", value: 195, type: bonus.good },
          { key: "tea_silk", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 155000 }],
        cost: [
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "golden_rice", value: 30, type: bonus.good },
          { key: "nanites", value: 125, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 150000 }],
        cost: [
          { key: "cryptocash", value: 160, type: bonus.good },
          { key: "data_crystals", value: 20, type: bonus.good },
          { key: "nanites", value: 165, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 180000 }],
        cost: [
          { key: "data_crystals", value: 200, type: bonus.good },
          { key: "nanites", value: 150, type: bonus.good },
          { key: "orichalcum", value: 60, type: bonus.special_good },
        ],
      },
      {
        reward: [{ type: "coin", value: 165000 }],
        cost: [
          { key: "data_crystals", value: 120, type: bonus.good },
          { key: "golden_rice", value: 210, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good },
        ],
      },
    ],
  },
};
