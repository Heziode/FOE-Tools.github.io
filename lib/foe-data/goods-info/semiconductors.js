import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.PostmodernEra.key;

export default {
  key: "semiconductors",
  age,
  building: {
    resources: {
      coins: 79000,
      supplies: 185000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 6,
    },
    population: 1530,
    connection: 2,
  },
  unrefined: "rubber",
};
