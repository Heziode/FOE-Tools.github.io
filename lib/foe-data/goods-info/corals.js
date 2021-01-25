import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.OceanicFuture.key;

export default {
  key: "corals",
  age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 6250,
    connection: 2,
  },
  unrefined: "papercrete",
};
