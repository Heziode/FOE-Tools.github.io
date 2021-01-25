import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ArcticFuture.key;

export default {
  key: "transester_gas",
  age,
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
    population: 4330,
    connection: 2,
  },
  unrefined: "gas",
};
