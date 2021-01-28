import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.TheFuture.key;

export default {
  key: "superconductors",
  age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 6,
    },
    population: 3220,
    connection: 2,
  },
  unrefined: "semiconductors",
};
