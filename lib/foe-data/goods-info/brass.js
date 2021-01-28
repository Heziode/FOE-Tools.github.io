import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages";
moment.extend(duration);
const age = ageData.LateMiddleAges.key;

export default {
  key: "brass",
  age,
  building: {
    resources: {
      coins: 27000,
      supplies: 54000,
    },
    time: moment.duration({ hours: 11, minutes: 20 }),
    size: {
      length: 4,
      width: 4,
    },
    population: 580,
    connection: 1,
  },
  unrefined: null,
};
