import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.OceanicFuture.key;

export default {
  key: "artificial_scales",
  age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 6,
    },
    population: 4450,
    connection: 2,
  },
  unrefined: "preservatives",
};
