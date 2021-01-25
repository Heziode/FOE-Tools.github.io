const moment = require("moment");
import ageData from "../ages";
const age = ageData.Tomorrow.key;

export default {
  key: "nutrition_research",
  age: age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 3,
    },
    population: 1780,
    connection: 2,
  },
  unrefined: "convenience_food",
};
