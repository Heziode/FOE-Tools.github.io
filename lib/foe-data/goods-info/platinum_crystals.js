const moment = require("moment");
import ageData from "../ages";
const age = ageData.SpaceAgeAsteroidBelt.key;

export default {
  key: "platinum_crystals",
  age: age,
  building: {
    resources: {
      coins: 450000,
      supplies: 900000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 3,
      width: 3,
    },
    population: 5640,
    connection: 2,
  },
  unrefined: null,
};
