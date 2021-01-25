const moment = require("moment");
import ageData from "../ages";
const age = ageData.ContemporaryEra.key;

export default {
  key: "electromagnets",
  age: age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 5,
    },
    population: 2180,
    connection: 2,
  },
  unrefined: "tinplate",
};
