import Vue from "vue";
import VueTippy from "vue-tippy";

Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  theme: "custom",
  flipDuration: 0,
  arrow: true,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: true,
      },
    },
  },
});
