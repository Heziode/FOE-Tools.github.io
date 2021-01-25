import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.SpaceAgeMars.key;

export default {
  key: "biotech_crops",
  age,
  building: {
    resources: {
      coins: 1750000,
      supplies: 2100000,
    },
    time: moment.duration(2, "hours"),
    size: {
      length: 3,
      width: 4,
    },
    population: 817,
    connection: 1,
  },
  unrefined: null,
};
