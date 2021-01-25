const moment = require("moment");
import ageData from "../ages";
const age = ageData.OceanicFuture.key;

export default {
  key: "artificial_scales",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 6,
    },
    population: 4450,
    connection: 2,
  },
  unrefined: "preservatives",
};
