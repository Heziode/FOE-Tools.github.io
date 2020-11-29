import pathify from "vuex-pathify";

export default ({ store }) => {
  pathify.plugin(store);
};
