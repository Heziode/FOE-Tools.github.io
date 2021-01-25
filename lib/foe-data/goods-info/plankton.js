import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.OceanicFuture.key;

export default {
  key: "plankton",
  age,
  building: {
    resources: {
      coins: 332000,
      supplies: 716000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 7,
      width: 4,
    },
    population: 5000,
    connection: 2,
  },
  unrefined: "nutrition_research",
};
