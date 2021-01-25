import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ColonialAge.key;

export default {
  key: "porcelain",
  age,
  building: {
    resources: {
      coins: 37000,
      supplies: 79000,
    },
    time: moment.duration({ hours: 13, minutes: 30 }),
    size: {
      length: 4,
      width: 4,
    },
    population: 720,
    connection: 1,
  },
  unrefined: null,
};
