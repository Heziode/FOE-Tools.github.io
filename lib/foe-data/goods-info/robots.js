const moment = require("moment");
import ageData from "../ages";
const age = ageData.ContemporaryEra.key;

export default {
  key: "robots",
  age: age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 7,
    },
    population: 2480,
    connection: 2,
  },
  unrefined: "machine_parts",
};
