import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.ArcticFuture.key;

export default {
  key: "nanowire",
  age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 4,
      width: 7,
    },
    population: 4610,
    connection: 2,
  },
  unrefined: "bionics_data",
};
