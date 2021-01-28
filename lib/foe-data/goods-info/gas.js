import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ContemporaryEra.key;

export default {
  key: "gas",
  age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 1480,
    connection: 2,
  },
  unrefined: "explosives",
};
