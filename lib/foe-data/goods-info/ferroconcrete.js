const moment = require("moment");
import ageData from "../ages";
const age = ageData.ModernEra.key;

export default {
  key: "ferroconcrete",
  age: age,
  building: {
    resources: {
      coins: 66000,
      supplies: 155000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 6,
    },
    population: 1360,
    connection: 2,
  },
  unrefined: "wire",
};
