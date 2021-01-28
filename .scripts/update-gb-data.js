const csv = require("csv-parser");
const download = require("download");
const fs = require("fs");
const path = require("path");
let config = require("./config.json");
const urlConfig = require("./url.json");
const locale = require("../lang/en");

const ages = [
  "BronzeAge",
  "IronAge",
  "EarlyMiddleAges",
  "HighMiddleAges",
  "LateMiddleAges",
  "ColonialAge",
  "IndustrialAge",
  "ProgressiveEra",
  "ModernEra",
  "PostmodernEra",
  "ContemporaryEra",
  "Tomorrow",
  "TheFuture",
  "ArcticFuture",
  "OceanicFuture",
  "VirtualFuture",
  "SpaceAgeMars",
  "SpaceAgeAsteroidBelt",
];

const promises = [];

let diff = {};

/**
 * Download csv file of GB Data and update files
 *
 * @param index Index of age in ages
 * @returns {Promise<any>} Return a promise than should be resolved when the csv file are downloaded and GB cost file updated
 */
function updateAge(index) {
  const age = ages[index];

  let results = [];
  let result = `const { generateReward } = require("../utils");

module.exports = [
`;
  return new Promise((resolve) => {
    download(urlConfig.url + urlConfig[age])
      .pipe(
        csv({
          mapHeaders: ({ index }) => {
            switch (index) {
              case 0:
                return "level";
              case 2:
                return "cost";
              case 3:
                return "reward";
              default:
                return null;
            }
          },
        })
      )
      .on("data", (value) => results.push(value))
      .on("end", () => {
        let counter = 0;

        for (let i = age !== "HighMiddleAges" ? 0 : 9; i < results.length; i++) {
          if (!results[i].reward) {
            break;
          }
          result += `  { cost: ${results[i].cost}, reward: generateReward(${results[i].reward}) },\n`;
          counter++;
        }
        counter += age !== "HighMiddleAges" ? 0 : 9;

        result += `];\n`;

        if (counter > config[age]) {
          fs.writeFileSync(
            path.join(__dirname, `../lib/foe-data/ages-cost/${age !== "HighMiddleAges" ? age : "defaultCost"}.js`),
            result
          );

          diff[age] = {
            age,
            from: config[age] + 1,
          };
          if (counter - config[age] > 1) {
            diff[age].to = counter;
          }
        }
        resolve();
      });
  });
}

/**
 * Generate the commit message according to new update
 *
 * @param value {object} contains an object like:
 * key: age name
 * value: object
 *   - age: age name
 *   - from: add from level
 *   - to : (optional) to level if is a range
 */
function generateCommitMessage(value) {
  if (Object.keys(value).length === 0) {
    console.log("Nothing to do.");
    return;
  }
  let commitMessage = `feat(foe-data): add levels of several ages

Add GB levels (cost and reward) of:\n`;

  for (let age of ages) {
    if (!(age in value)) {
      continue;
    }
    config[age] = value[age].to ? value[age].to : value[age].from;
    if (age === "HighMiddleAges") {
      commitMessage += `- ${locale["foe_data.age.HighMiddleAges"]} / ${locale["foe_data.age.NoAge"]}: ${
        value.HighMiddleAges.to
          ? value.HighMiddleAges.from + " to " + value.HighMiddleAges.to
          : value.HighMiddleAges.from
      }\n`;
    } else {
      commitMessage += `- ${locale[`foe_data.age.${age}`]}: ${
        value[age].to ? value[age].from + " to " + value[age].to : value[age].from
      }\n`;
    }
  }

  fs.writeFileSync(path.join(__dirname, "./config.json"), JSON.stringify(config, null, 2));
  console.log(`commitMessage:
${commitMessage}`);
}

// Main

for (let i = 0; i < ages.length; i++) {
  promises.push(updateAge(i));
}

return Promise.all(promises)
  .then(() => {
    generateCommitMessage(diff);
  })
  .catch((error) => {
    console.error("error: ", error);
  });
