const rewards = require("./EarlyMiddleAges");

let currentCost = 650;

const result = [
  { cost: 50, reward: rewards[0].reward },
  { cost: 70, reward: rewards[1].reward },
  { cost: 130, reward: rewards[2].reward },
  { cost: 200, reward: rewards[3].reward },
  { cost: 270, reward: rewards[4].reward },
  { cost: 330, reward: rewards[5].reward },
  { cost: 420, reward: rewards[6].reward },
  { cost: 490, reward: rewards[7].reward },
  { cost: 570, reward: rewards[8].reward },
];

for (let i = 9; i < rewards.length; i++) {
  result.push({
    cost: Math.ceil(currentCost),
    reward: rewards[i].reward,
  });
  currentCost = currentCost * 1.025;
}

module.exports = result;
