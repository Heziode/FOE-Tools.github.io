const moment = require("moment");
import ageData from "../ages";
const age = ageData.VirtualFuture.key;

export default {
  key: "golden_rice",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 6,
    },
    population: 5640,
    connection: 2,
  },
  unrefined: "purified_water",
};
