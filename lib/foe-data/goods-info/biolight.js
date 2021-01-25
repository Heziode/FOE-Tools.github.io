const moment = require("moment");
import ageData from "../ages";
const age = ageData.OceanicFuture.key;

export default {
  key: "biolight",
  age: age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 5700,
    connection: 2,
  },
  unrefined: "smart_materials",
};
