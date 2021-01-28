const { bonus } = require("../bonus");

module.exports = {
  Cragshire: {
    key: "Cragshire",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "rope", value: 18, type: bonus.good },
          { key: "glass", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "brick", value: 18, type: bonus.good },
          { key: "glass", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "rope", value: 12, type: bonus.good },
          { key: "salt", value: 18, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "brick", value: 12, type: bonus.good },
          { key: "dried_herbs", value: 18, type: bonus.good },
        ],
      },
    ],
  },
  Cuttingham: {
    key: "Cuttingham",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "cloth", value: 30, type: bonus.good },
          { key: "alabaster", value: 35, type: bonus.good },
          { key: "rope", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "iron", value: 20, type: bonus.good },
          { key: "granite", value: 35, type: bonus.good },
          { key: "glass", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "jewelry", value: 25, type: bonus.good },
          { key: "gold", value: 45, type: bonus.good },
          { key: "brick", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "limestone", value: 35, type: bonus.good },
          { key: "copper", value: 35, type: bonus.good },
          { key: "dried_herbs", value: 35, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "iron", value: 25, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "salt", value: 35, type: bonus.good },
        ],
      },
    ],
  },
  Eldenborough: {
    key: "Eldenborough",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "rope", value: 20, type: bonus.good },
          { key: "salt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "brick", value: 12, type: bonus.good },
          { key: "dried_herbs", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2000 }],
        cost: [
          { key: "brick", value: 20, type: bonus.good },
          { key: "glass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "rope", value: 12, type: bonus.good },
          { key: "salt", value: 25, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2000 }],
        cost: [
          { key: "brick", value: 12, type: bonus.good },
          { key: "glass", value: 25, type: bonus.good },
        ],
      },
    ],
  },
  Spearth: {
    key: "Spearth",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 2500 }],
        cost: [{ key: "talc_powder", value: 15, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 2500 }],
        cost: [{ key: "basalt", value: 15, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 2500 }],
        cost: [{ key: "silk", value: 13, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [{ key: "gunpowder", value: 15, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [{ key: "brass", value: 15, type: bonus.good }],
      },
    ],
  },
  Wolvhampton: {
    key: "Wolvhampton",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [
          { key: "marble", value: 25, type: bonus.good },
          { key: "silk", value: 12, type: bonus.good },
          { key: "gunpowder", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "lumber", value: 20, type: bonus.good },
          { key: "alabaster", value: 22, type: bonus.good },
          { key: "basalt", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "wine", value: 25, type: bonus.good },
          { key: "copper", value: 25, type: bonus.good },
          { key: "talc_powder", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 3000 }],
        cost: [
          { key: "stone", value: 40, type: bonus.good },
          { key: "honey", value: 15, type: bonus.good },
          { key: "brass", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3000 }],
        cost: [
          { key: "dye", value: 25, type: bonus.good },
          { key: "granite", value: 25, type: bonus.good },
          { key: "gunpowder", value: 10, type: bonus.good },
        ],
      },
    ],
  },
  FourGallows: {
    key: "FourGallows",
    reward: [
      { type: "coin", value: 10500 },
      { type: "supply", value: 10500 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "basalt", value: 5, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
          { key: "talc_powder", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "basalt", value: 5, type: bonus.good },
          { key: "silk", value: 18, type: bonus.good },
          { key: "gunpowder", value: 10, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "silk", value: 12, type: bonus.good },
          { key: "talc_powder", value: 5, type: bonus.good },
          { key: "gunpowder", value: 6, type: bonus.good },
        ],
      },
    ],
  },
  Mount_Killmore: {
    key: "Mount_Killmore",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "talc_powder", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "brass", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "talc_powder", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "brass", value: 20, type: bonus.good },
          { key: "silk", value: 20, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "brass", value: 12, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "silk", value: 20, type: bonus.good },
          { key: "gunpowder", value: 20, type: bonus.good },
        ],
      },
    ],
  },
  RavensCreek: {
    key: "RavensCreek",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 25 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "stone", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "rope", value: 10, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "wine", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "lumber", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "dye", value: 50, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "stone", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "marble", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Zaldon_on_Sea: {
    key: "Zaldon_on_Sea",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 15 },
      { type: bonus.good, good: "coffee", value: 20 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "cloth", value: 50, type: bonus.good },
          { key: "alabaster", value: 15, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "jewelry", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "ebony", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "lumber", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "rope", value: 10, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "wine", value: 25, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "marble", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Houndsmoor: {
    key: "Houndsmoor",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 15 },
      { type: bonus.good, good: "paper", value: 20 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "limestone", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "ebony", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "cloth", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "iron", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "jewelry", value: 50, type: bonus.good },
          { key: "honey", value: 15, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "cloth", value: 50, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 10, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Grand_Cap: {
    key: "Grand_Cap",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 30 },
      { type: "diamond", value: 100 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 2500 }],
        cost: [
          { key: "limestone", value: 50, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [
          { key: "iron", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [
          { key: "wine", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [
          { key: "marble", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "silk", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 2500 }],
        cost: [
          { key: "dye", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "gunpowder", value: 30, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [
          { key: "lumber", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "brass", value: 30, type: bonus.good },
        ],
      },
    ],
  },
  Northcastle: {
    key: "Northcastle",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 25 },
      { type: bonus.good, good: "porcelain", value: 20 },
    ],
    sectors: [
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "cloth", value: 50, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "limestone", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1250 }],
        cost: [
          { key: "jewelry", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "iron", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "ebony", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "dye", value: 25, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Queenshope: {
    key: "Queenshope",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 25 },
      { type: bonus.good, good: "wire", value: 20 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "ebony", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "iron", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "jewelry", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 10, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "limestone", value: 50, type: bonus.good },
          { key: "honey", value: 30, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "cloth", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "stone", value: 50, type: bonus.good },
          { key: "alabaster", value: 15, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
    ],
  },
  Ashcrook: {
    key: "Ashcrook",
    reward: [
      { type: "coin", value: 7500 },
      { type: "supply", value: 7500 },
      { type: "medal", value: 25 },
      { type: bonus.good, good: "tar", value: 20 },
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "dye", value: 25, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "iron", value: 50, type: bonus.good },
          { key: "granite", value: 30, type: bonus.good },
          { key: "dried_herbs", value: 20, type: bonus.good },
          { key: "gunpowder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "limestone", value: 50, type: bonus.good },
          { key: "copper", value: 30, type: bonus.good },
          { key: "glass", value: 20, type: bonus.good },
          { key: "talc_powder", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "ebony", value: 50, type: bonus.good },
          { key: "gold", value: 30, type: bonus.good },
          { key: "salt", value: 20, type: bonus.good },
          { key: "silk", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "wine", value: 25, type: bonus.good },
          { key: "alabaster", value: 30, type: bonus.good },
          { key: "brick", value: 20, type: bonus.good },
          { key: "basalt", value: 15, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "jewelry", value: 50, type: bonus.good },
          { key: "honey", value: 15, type: bonus.good },
          { key: "rope", value: 20, type: bonus.good },
          { key: "brass", value: 15, type: bonus.good },
        ],
      },
    ],
  },
};
