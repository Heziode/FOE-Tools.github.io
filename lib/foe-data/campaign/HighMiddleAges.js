const { bonus } = require("../bonus");

module.exports = {
  Canturia: {
    key: "Canturia",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "lumber", value: 10, type: bonus.good },
          { key: "dye", value: 70, type: bonus.good },
          { key: "cloth", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "marble", value: 35, type: bonus.good },
          { key: "wine", value: 30, type: bonus.good },
          { key: "ebony", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "stone", value: 40, type: bonus.good },
          { key: "iron", value: 25, type: bonus.good },
          { key: "jewelry", value: 30, type: bonus.good },
        ],
      },
    ],
  },
  Breturia: {
    key: "Breturia",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [{ key: "honey", value: 15, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [{ key: "copper", value: 25, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [{ key: "alabaster", value: 25, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [{ key: "granite", value: 22, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [{ key: "honey", value: 25, type: bonus.good }],
      },
    ],
  },
  Veletrites: {
    key: "Veletrites",
    reward: [
      { type: "coin", value: 5000 },
      { type: "supply", value: 5000 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [{ key: "jewelry", value: 35, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [{ key: "iron", value: 33, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [{ key: "limestone", value: 48, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [{ key: "ebony", value: 50, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [{ key: "cloth", value: 35, type: bonus.good }],
      },
    ],
  },
  Frathia: {
    key: "Frathia",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "marble", value: 40, type: bonus.good },
          { key: "copper", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "lumber", value: 55, type: bonus.good },
          { key: "granite", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "alabaster", value: 25, type: bonus.good },
          { key: "honey", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "wine", value: 45, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
        ],
      },
    ],
  },
  Jaims: {
    key: "Jaims",
    reward: [
      { type: "coin", value: 15000 },
      { type: "supply", value: 15000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [
          { key: "granite", value: 25, type: bonus.good },
          { key: "glass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "copper", value: 25, type: bonus.good },
          { key: "brick", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "gold", value: 35, type: bonus.good },
          { key: "rope", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "honey", value: 20, type: bonus.good },
          { key: "salt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [
          { key: "alabaster", value: 25, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
        ],
      },
    ],
  },
  Mons_Suiry: {
    key: "Mons_Suiry",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [{ key: "salt", value: 18, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [{ key: "brick", value: 15, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [{ key: "rope", value: 18, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [{ key: "glass", value: 18, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [{ key: "dried_herbs", value: 22, type: bonus.good }],
      },
    ],
  },
  Moravaria: {
    key: "Moravaria",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "salt", value: 6, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "rope", value: 14, type: bonus.good },
          { key: "glass", value: 8, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "brick", value: 20, type: bonus.good },
          { key: "salt", value: 8, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "brick", value: 20, type: bonus.good },
          { key: "salt", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "dried_herbs", value: 10, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "rope", value: 8, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
        ],
      },
    ],
  },
};
