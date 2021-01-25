import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.SpaceAgeMars.key;

export default {
  key: "superalloys",
  age,
  building: {
    resources: {
      coins: 1750000,
      supplies: 2100000,
    },
    time: moment.duration(2, "hours"),
    size: {
      length: 4,
      width: 4,
    },
    population: 613,
    connection: 1,
  },
  unrefined: null,
};
