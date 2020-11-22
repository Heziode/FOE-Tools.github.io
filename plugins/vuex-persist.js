import createPersistedState from "vuex-persistedstate";
import transform from "lodash.transform";
import isEqual from "lodash.isequal";
import isObject from "lodash.isobject";

const vuexKey = "vuex";

export default ({ store }) => {
  createPersistedState({
    paths: ["global", "profile"],
  })(store);

  const difference = (object, base) => {
    function changes(object, base, ancestorKey = "") {
      return transform(object, function (result, value, key) {
        if (!isEqual(value, base[key])) {
          if (isObject(value) && isObject(base[key])) {
            changes(value, base[key], `${ancestorKey}${ancestorKey.length ? "." : ""}${key}`);
          } else if (base[key]) {
            store.set(
              `${ancestorKey}${ancestorKey.length ? "." : ""}${key}`.replace(".", "/").replace(".", "@"),
              base[key]
            );
          }
        }
      });
    }
    return changes(object, base);
  };

  // If is browser context
  if (typeof window !== "undefined") {
    window.addEventListener("storage", (storageEvent) => {
      if (storageEvent.key === vuexKey) {
        difference(store.state, JSON.parse(storageEvent.newValue));
      }
    });
  }
};
