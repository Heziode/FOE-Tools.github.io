import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    paths: ["global", "profile"],
  })(store);
};
