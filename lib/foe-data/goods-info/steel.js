const moment = require("moment");
import ageData from "../ages";
const age = ageData.PostmodernEra.key;

export default {
  key: "steel",
  age: age,
  building: {
    resources: {
      coins: 79000,
      supplies: 185000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 1530,
    connection: 2,
  },
  unrefined: "coke",
};
