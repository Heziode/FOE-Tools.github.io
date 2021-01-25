const moment = require("moment");
import ageData from "../ages";
const age = ageData.ArcticFuture.key;

export default {
  key: "bioplastics",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 5,
    },
    population: 5600,
    connection: 2,
  },
  unrefined: "plastics",
};
