const { bonus } = require("../bonus");

module.exports = {
  Dunarsund: {
    key: "Dunarsund",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50 }],
        cost: [{ key: "stone", value: 2, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 60 }],
        cost: [{ key: "wine", value: 2, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 60 }],
        cost: [{ key: "dye", value: 2, type: bonus.good }],
      },
    ],
  },
  Tyr: {
    key: "Tyr",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [{ key: "marble", value: 3, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [{ key: "lumber", value: 5, type: bonus.good }],
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [{ key: "dye", value: 5, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [{ key: "wine", value: 5, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [{ key: "stone", value: 5, type: bonus.good }],
      },
    ],
  },
  Fel_Dranghyr: {
    key: "Fel_Dranghyr",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75 }],
        cost: [{ key: "marble", value: 5, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 75 }],
        cost: [{ key: "lumber", value: 4, type: bonus.good }],
      },
      {
        reward: [{ type: "coin", value: 75 }],
        cost: [
          { key: "stone", value: 2, type: bonus.good },
          { key: "wine", value: 2, type: bonus.good },
        ],
      },
    ],
  },
  Hymir: {
    key: "Hymir",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "stone", value: 3, type: bonus.good },
          { key: "marble", value: 5, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "marble", value: 5, type: bonus.good },
          { key: "wine", value: 3, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "lumber", value: 5, type: bonus.good },
          { key: "dye", value: 5, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [
          { key: "lumber", value: 3, type: bonus.good },
          { key: "wine", value: 3, type: bonus.good },
        ],
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [
          { key: "stone", value: 3, type: bonus.good },
          { key: "dye", value: 3, type: bonus.good },
        ],
      },
    ],
  },
};
