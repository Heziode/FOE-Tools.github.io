function dayNightMode(store, $clone, $moment) {
  const dayNightWatchdogTimeout = 60000;

  const updateDayNightMode = () => {
    if (store.get("global/dayNightMode") !== "auto") {
      dayNightWatchdog.stop();
      store.set("isDarkTheme", store.get("global/dayNightMode") === "night");
      return;
    } else {
      dayNightWatchdog.start();
    }
    const current = $moment().format("HH:mm");
    const dayStart = $clone(store.get("global/dayStart"));
    const nightStart = $clone(store.get("global/nightStart"));
    const isDay = current >= dayStart && current < nightStart;

    store.set("isDarkTheme", !isDay);
  };

  const dayNightWatchdog = (() => {
    let timeout;
    return {
      start: () => {
        if (!timeout) {
          timeout = setInterval(updateDayNightMode, dayNightWatchdogTimeout);
        }
      },
      stop: () => {
        clearInterval(timeout);
        timeout = undefined;
      },
    };
  })();

  store.subscribe((mutation) => {
    if (mutation.type === "global/SET_DAY_NIGHT_MODE") {
      switch (mutation.payload) {
        case "day":
          dayNightWatchdog.stop();
          store.set("isDarkTheme", false);
          break;
        case "night":
          dayNightWatchdog.stop();
          store.set("isDarkTheme", true);
          break;
        case "auto":
          setTimeout(updateDayNightMode, 0);
          break;
      }
    } else if (["global/SET_NIGHT_START", "global/SET_DAY_START"].indexOf(mutation.type) >= 0) {
      updateDayNightMode();
    }
  });

  if (store.get("global/dayNightMode") === "auto") {
    dayNightWatchdog.start();
  }
  updateDayNightMode();
}

async function getSurvey(store, $axios) {
  let urlParam = "";

  if (store.get("global/survey").length) {
    urlParam = "?_id_nin=" + store.get("global/survey").join("&_id_nin=");
  }
  try {
    const { data } = await $axios.get(`${process.env.surveyURL}${urlParam}`);
    if (data && data instanceof Array) {
      store.set("survey", data);
    }
  } catch (e) {
    // Probably Network Error
    // Survey is not critical, so this error can be ignored
  }
}

export default function ({ store, $clone, $moment, $axios }) {
  dayNightMode(store, $clone, $moment);
  getSurvey(store, $axios);
}
