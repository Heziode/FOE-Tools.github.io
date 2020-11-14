import moment from "dayjs";
import duration from "dayjs/plugin/duration";
moment.extend(duration);

export default (_, inject) => {
  inject("moment", moment);
};
