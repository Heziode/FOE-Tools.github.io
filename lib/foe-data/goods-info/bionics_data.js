import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ContemporaryEra.key;

export default {
  key: "bionics_data",
  age,
  building: {
    resources: {
      coins: 120000,
      supplies: 278000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 4,
    },
    population: 2790,
    connection: 2,
  },
  unrefined: "asbestos",
};
