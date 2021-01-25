import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.TheFuture.key;

export default {
  key: "purified_water",
  age,
  building: {
    resources: {
      coins: 220000,
      supplies: 481000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 7,
      width: 4,
    },
    population: 4920,
    connection: 2,
  },
  unrefined: "industrial_filters",
};
