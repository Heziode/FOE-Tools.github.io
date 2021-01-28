import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.VirtualFuture.key;

export default {
  key: "tea_silk",
  age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 7,
    },
    population: 6210,
    connection: 2,
  },
  unrefined: "algae",
};
