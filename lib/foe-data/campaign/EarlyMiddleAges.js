const { bonus } = require("../bonus");

module.exports = {
  Pfefferberg: {
    key: "Pfefferberg",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "ebony", value: 14, type: bonus.good },
          { key: "iron", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "cloth", value: 14, type: bonus.good },
          { key: "jewelry", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "limestone", value: 12, type: bonus.good },
          { key: "cloth", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "limestone", value: 10, type: bonus.good },
          { key: "iron", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  Dunkelwald: {
    key: "Dunkelwald",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "ebony", value: 14, type: bonus.good },
          { key: "jewelry", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "limestone", value: 8, type: bonus.good },
          { key: "iron", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "limestone", value: 14, type: bonus.good },
          { key: "cloth", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "iron", value: 10, type: bonus.good },
          { key: "cloth", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "ebony", value: 10, type: bonus.good },
          { key: "jewelry", value: 14, type: bonus.good },
        ],
      },
    ],
  },
  Greifental: {
    key: "Greifental",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [{ key: "cloth", value: 28, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [{ key: "jewelry", value: 35, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [{ key: "ebony", value: 35, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [{ key: "iron", value: 25, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [{ key: "limestone", value: 35, type: bonus.good }],
      },
    ],
  },
  Sturmhohen: {
    key: "Sturmhohen",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [{ key: "gold", value: 12, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [
          { key: "marble", value: 35, type: bonus.good },
          { key: "ebony", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [
          { key: "stone", value: 50, type: bonus.good },
          { key: "iron", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [
          { key: "wine", value: 35, type: bonus.good },
          { key: "limestone", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [
          { key: "dye", value: 40, type: bonus.good },
          { key: "cloth", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [
          { key: "lumber", value: 45, type: bonus.good },
          { key: "jewelry", value: 14, type: bonus.good },
        ],
      },
    ],
  },
  Kaltenweiher: {
    key: "Kaltenweiher",
    reward: [
      { type: "coin", value: 2500 },
      { type: "supply", value: 2500 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [
          { key: "limestone", value: 10, type: bonus.good },
          { key: "iron", value: 8, type: bonus.good },
          { key: "alabaster", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [
          { key: "ebony", value: 8, type: bonus.good },
          { key: "granite", value: 14, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [
          { key: "cloth", value: 8, type: bonus.good },
          { key: "copper", value: 8, type: bonus.good },
          { key: "honey", value: 14, type: bonus.good },
        ],
      },
    ],
  },
  Teufelsfurt: {
    key: "Teufelsfurt",
    reward: [
      { type: "coin", value: 3000 },
      { type: "supply", value: 3000 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [{ key: "granite", value: 20, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [{ key: "alabaster", value: 20, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [{ key: "copper", value: 20, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 450 }],
        cost: [{ key: "gold", value: 20, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 450 }],
        cost: [
          { key: "copper", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  Felssenke: {
    key: "Felssenke",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "copper", value: 10, type: bonus.good },
          { key: "alabaster", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "copper", value: 14, type: bonus.good },
          { key: "honey", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "gold", value: 14, type: bonus.good },
          { key: "honey", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "granite", value: 10, type: bonus.good },
          { key: "gold", value: 14, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 900 }],
        cost: [
          { key: "granite", value: 14, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
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
  Galgenschlucht: {
    key: "Galgenschlucht",
    reward: [
      { type: "coin", value: 4000 },
      { type: "supply", value: 4000 },
      { type: "medal", value: 10 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 600 }],
        cost: [
          { key: "stone", value: 12, type: bonus.good },
          { key: "jewelry", value: 12, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 600 }],
        cost: [
          { key: "wine", value: 12, type: bonus.good },
          { key: "cloth", value: 12, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 600 }],
        cost: [
          { key: "dye", value: 12, type: bonus.good },
          { key: "limestone", value: 12, type: bonus.good },
          { key: "granite", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 600 }],
        cost: [
          { key: "marble", value: 12, type: bonus.good },
          { key: "iron", value: 12, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 600 }],
        cost: [
          { key: "lumber", value: 12, type: bonus.good },
          { key: "ebony", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  Todepass: {
    key: "Todepass",
    reward: [
      { type: "coin", value: 4500 },
      { type: "supply", value: 4500 },
      { type: "medal", value: 15 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "stone", value: 12, type: bonus.good },
          { key: "jewelry", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "wine", value: 12, type: bonus.good },
          { key: "cloth", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "marble", value: 12, type: bonus.good },
          { key: "iron", value: 12, type: bonus.good },
          { key: "granite", value: 10, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "dye", value: 12, type: bonus.good },
          { key: "limestone", value: 12, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "lumber", value: 12, type: bonus.good },
          { key: "ebony", value: 12, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 900 }],
        cost: [
          { key: "stone", value: 12, type: bonus.good },
          { key: "iron", value: 12, type: bonus.good },
          { key: "granite", value: 10, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  Steilsturz: {
    key: "Steilsturz",
    reward: [
      { type: "coin", value: 5000 },
      { type: "supply", value: 5000 },
      { type: "medal", value: 15 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 1200 }],
        cost: [
          { key: "ebony", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
          { key: "granite", value: 10, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1200 }],
        cost: [
          { key: "limestone", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
          { key: "granite", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1200 }],
        cost: [
          { key: "jewelry", value: 12, type: bonus.good },
          { key: "copper", value: 10, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1200 }],
        cost: [
          { key: "cloth", value: 12, type: bonus.good },
          { key: "alabaster", value: 10, type: bonus.good },
          { key: "gold", value: 10, type: bonus.good },
          { key: "honey", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  Tarmelmann: {
    key: "Tarmelmann",
    reward: [
      { type: "coin", value: 5000 },
      { type: "supply", value: 5000 },
      { type: "medal", value: 20 },
      { type: "diamond", value: 100 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "granite", value: 18, type: bonus.good },
          { key: "alabaster", value: 12, type: bonus.good },
          { key: "honey", value: 12, type: bonus.good },
          { key: "glass", value: 4, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "granite", value: 12, type: bonus.good },
          { key: "gold", value: 12, type: bonus.good },
          { key: "honey", value: 18, type: bonus.good },
          { key: "rope", value: 8, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "granite", value: 12, type: bonus.good },
          { key: "alabaster", value: 18, type: bonus.good },
          { key: "honey", value: 12, type: bonus.good },
          { key: "dried_herbs", value: 8, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "copper", value: 12, type: bonus.good },
          { key: "granite", value: 12, type: bonus.good },
          { key: "gold", value: 18, type: bonus.good },
          { key: "salt", value: 4, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "copper", value: 18, type: bonus.good },
          { key: "granite", value: 12, type: bonus.good },
          { key: "gold", value: 12, type: bonus.good },
          { key: "brick", value: 4, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "copper", value: 12, type: bonus.good },
          { key: "gold", value: 18, type: bonus.good },
          { key: "honey", value: 12, type: bonus.good },
          { key: "brick", value: 4, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "copper", value: 12, type: bonus.good },
          { key: "alabaster", value: 18, type: bonus.good },
          { key: "honey", value: 12, type: bonus.good },
          { key: "glass", value: 4, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "copper", value: 18, type: bonus.good },
          { key: "alabaster", value: 12, type: bonus.good },
          { key: "gold", value: 12, type: bonus.good },
          { key: "salt", value: 4, type: bonus.good },
        ],
      },
    ],
  },
};
