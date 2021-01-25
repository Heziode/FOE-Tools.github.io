const moment = require("moment");
import ageData from "../ages";
const age = ageData.PostmodernEra.key;

export default {
  key: "semiconductors",
  age: age,
  building: {
    resources: {
      coins: 79000,
      supplies: 185000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 6,
    },
    population: 1530,
    connection: 2,
  },
  unrefined: "rubber",
};
