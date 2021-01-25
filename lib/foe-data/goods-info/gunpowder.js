import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.LateMiddleAges.key;

export default {
  key: "gunpowder",
  age,
  building: {
    resources: {
      coins: 27000,
      supplies: 54000,
    },
    time: moment.duration({ hours: 11, minutes: 20 }),
    size: {
      length: 3,
      width: 3,
    },
    population: 580,
    connection: 1,
  },
  unrefined: null,
};
