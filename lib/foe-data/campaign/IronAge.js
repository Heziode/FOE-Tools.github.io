const { bonus } = require("../bonus");

module.exports = {
  Badakus: {
    key: "Badakus",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "lumber", value: 8, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "wine", value: 6, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "stone", value: 10, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "marble", value: 8, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "dye", value: 8, type: bonus.good }],
      },
    ],
  },
  Paruuch: {
    key: "Paruuch",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "marble", value: 6, type: bonus.good },
          { key: "dye", value: 6, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "stone", value: 6, type: bonus.good },
          { key: "lumber", value: 6, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "marble", value: 6, type: bonus.good },
          { key: "wine", value: 6, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "lumber", value: 6, type: bonus.good },
          { key: "dye", value: 6, type: bonus.good },
        ],
      },
    ],
  },
  Ruug: {
    key: "Ruug",
    reward: [
      { type: "coin", value: 800 },
      { type: "supply", value: 800 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "ebony", value: 8, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "limestone", value: 6, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "iron", value: 6, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "cloth", value: 6, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "jewelry", value: 6, type: bonus.good }],
      },
    ],
  },
  Karchagu: {
    key: "Karchagu",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "stone", value: 10, type: bonus.good },
          { key: "ebony", value: 7, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "dye", value: 4, type: bonus.good },
          { key: "iron", value: 7, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "wine", value: 10, type: bonus.good },
          { key: "cloth", value: 7, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "lumber", value: 10, type: bonus.good },
          { key: "limestone", value: 7, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "lumber", value: 6, type: bonus.good },
          { key: "jewelry", value: 7, type: bonus.good },
        ],
      },
    ],
  },
  East_Nagach: {
    key: "East_Nagach",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "ebony", value: 12, type: bonus.good },
          { key: "jewelry", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "limestone", value: 6, type: bonus.good },
          { key: "cloth", value: 6, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "ebony", value: 8, type: bonus.good },
          { key: "jewelry", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "iron", value: 6, type: bonus.good },
          { key: "cloth", value: 6, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "limestone", value: 14, type: bonus.good },
          { key: "iron", value: 5, type: bonus.good },
        ],
      },
    ],
  },
  West_Nagach: {
    key: "West_Nagach",
    reward: [
      { type: "coin", value: 1400 },
      { type: "supply", value: 1400 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "lumber", value: 12, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [{ key: "wine", value: 18, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [{ key: "dye", value: 16, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "stone", value: 18, type: bonus.good },
          { key: "marble", value: 18, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "dye", value: 5, type: bonus.good },
          { key: "wine", value: 5, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "stone", value: 6, type: bonus.good },
          { key: "marble", value: 4, type: bonus.good },
        ],
      },
    ],
  },
  Maktaba: {
    key: "Maktaba",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "ebony", value: 7, type: "good" },
          { key: "iron", value: 7, type: "good" },
          { key: "jewelry", value: 7, type: "good" },
        ],
      },
      {
        reward: [{ type: "supply", value: 400 }],
        cost: [
          { key: "ebony", value: 8, type: "good" },
          { key: "cloth", value: 8, type: "good" },
          { key: "jewelry", value: 8, type: "good" },
        ],
      },
      {
        reward: [{ type: "coin", value: 400 }],
        cost: [
          { key: "limestone", value: 6, type: "good" },
          { key: "iron", value: 6, type: "good" },
          { key: "cloth", value: 6, type: "good" },
        ],
      },
    ],
  },
};
