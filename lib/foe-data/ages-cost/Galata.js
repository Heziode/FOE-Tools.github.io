const rewards = require("./EarlyMiddleAges");

let currentCost = 650;

const result = [
  { cost: 20, reward: rewards[0].reward },
  { cost: 40, reward: rewards[1].reward },
  { cost: 60, reward: rewards[2].reward },
  { cost: 130, reward: rewards[3].reward },
  { cost: 210, reward: rewards[4].reward },
  { cost: 290, reward: rewards[5].reward },
  { cost: 370, reward: rewards[6].reward },
  { cost: 460, reward: rewards[7].reward },
  { cost: 550, reward: rewards[8].reward },
];

for (let i = 9; i < rewards.length; i++) {
  result.push({
    cost: Math.ceil(currentCost),
    reward: rewards[i].reward,
  });
  currentCost = currentCost * 1.025;
}

module.exports = result;
