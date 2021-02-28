import Vue from "vue";
import AddToHomeScreen from "~/components/add-to-home-screen/AddToHomeScreen";

export default ({ app }) => {
  const elt = document.createElement("div");
  elt.id = "#addToHomeScreen";
  document.body.appendChild(elt);

  const DialogComponent = Vue.extend(AddToHomeScreen);
  const component = new DialogComponent({
    el: elt,
    propsData: {
      app,
    },
  });
  component.$forceUpdate();
};
