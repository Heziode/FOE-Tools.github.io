const moment = require("moment");
import ageData from "../ages";
const age = ageData.SpaceAgeMars.key;

export default {
  key: "superalloys",
  age: age,
  building: {
    resources: {
      coins: 1750000,
      supplies: 2100000,
    },
    time: moment.duration(2, "hours"),
    size: {
      length: 4,
      width: 4,
    },
    population: 613,
    connection: 1,
  },
  unrefined: null,
};
