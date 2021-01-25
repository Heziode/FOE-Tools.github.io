const moment = require("moment");
import ageData from "../ages";
const age = ageData.SpaceAgeMars.key;

export default {
  key: "fusion_reactors",
  age: age,
  building: {
    resources: {
      coins: 1750000,
      supplies: 2100000,
    },
    time: moment.duration(2, "hours"),
    size: {
      length: 4,
      width: 3,
    },
    population: 817,
    connection: 1,
  },
  unrefined: null,
};
