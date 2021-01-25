const moment = require("moment");
import ageData from "../ages";
const age = ageData.VirtualFuture.key;

export default {
  key: "cryptocash",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 7,
      width: 4,
    },
    population: 6210,
    connection: 2,
  },
  unrefined: "biogeochemical_data",
};
