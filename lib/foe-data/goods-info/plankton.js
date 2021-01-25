const moment = require("moment");
import ageData from "../ages";
const age = ageData.OceanicFuture.key;

export default {
  key: "plankton",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 7,
      width: 4,
    },
    population: 5000,
    connection: 2,
  },
  unrefined: "nutrition_research",
};
