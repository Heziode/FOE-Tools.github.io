import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.PostmodernEra.key;

export default {
  key: "renewable_resources",
  age,
  building: {
    resources: {
      coins: 79000,
      supplies: 185000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 4,
    },
    population: 1530,
    connection: 2,
  },
  unrefined: "fertilizer",
};
