const moment = require("moment");
import ageData from "../ages";
const age = ageData.Tomorrow.key;

export default {
  key: "preservatives",
  age: age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 5,
    },
    population: 2180,
    connection: 2,
  },
  unrefined: "flavorants",
};
