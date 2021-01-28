import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.BronzeAge.key;

export default {
  key: "stone",
  age,
  building: {
    resources: {
      coins: 340,
      supplies: 490,
    },
    time: moment.duration(30, "minutes"),
    size: {
      length: 4,
      width: 4,
    },
    population: 108,
    connection: 1,
  },
  unrefined: null,
};
