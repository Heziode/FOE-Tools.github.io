import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.Tomorrow.key;

export default {
  key: "papercrete",
  age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 4,
    },
    population: 2980,
    connection: 2,
  },
  unrefined: "packaging",
};
