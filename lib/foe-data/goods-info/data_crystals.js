import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.VirtualFuture.key;

export default {
  key: "data_crystals",
  age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 6,
      width: 5,
    },
    population: 5640,
    connection: 2,
  },
  unrefined: "superconductors",
};
