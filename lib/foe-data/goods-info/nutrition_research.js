import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.Tomorrow.key;

export default {
  key: "nutrition_research",
  age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 3,
    },
    population: 1780,
    connection: 2,
  },
  unrefined: "convenience_food",
};
