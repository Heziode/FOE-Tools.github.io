const moment = require("moment");
import ageData from "../ages";
const age = ageData.ArcticFuture.key;

export default {
  key: "ai_data",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 6,
    },
    population: 5110,
    connection: 2,
  },
  unrefined: "robots",
};
