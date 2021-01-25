const moment = require("moment");
import ageData from "../ages";
const age = ageData.TheFuture.key;

export default {
  key: "algae",
  age: age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 5020,
    connection: 2,
  },
  unrefined: "genome_data",
};
