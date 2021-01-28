import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.IndustrialAge.key;

export default {
  key: "textiles",
  age,
  building: {
    resources: {
      coins: 45000,
      supplies: 102000,
    },
    time: moment.duration({ hours: 14, minutes: 30 }),
    size: {
      length: 3,
      width: 4,
    },
    population: 1020,
    connection: 1,
  },
  unrefined: null,
};
