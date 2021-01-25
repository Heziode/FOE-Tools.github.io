const moment = require("moment");
import ageData from "../ages";
const age = ageData.TheFuture.key;

export default {
  key: "biogeochemical_data",
  age: age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 5,
    },
    population: 3620,
    connection: 2,
  },
  unrefined: "renewable_resources",
};
