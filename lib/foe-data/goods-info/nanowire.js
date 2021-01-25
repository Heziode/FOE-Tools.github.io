const moment = require("moment");
import ageData from "../ages";
const age = ageData.ArcticFuture.key;

export default {
  key: "nanowire",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 7,
    },
    population: 4610,
    connection: 2,
  },
  unrefined: "bionics_data",
};
