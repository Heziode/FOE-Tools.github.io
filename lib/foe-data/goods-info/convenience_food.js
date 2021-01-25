import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ModernEra.key;

export default {
  key: "convenience_food",
  age,
  building: {
    resources: {
      coins: 66000,
      supplies: 155000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 6,
    },
    population: 1360,
    connection: 2,
  },
  unrefined: "coffee",
};
