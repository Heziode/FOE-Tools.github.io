import Vue from "vue";
import TButton from "~/components/t-button/TButton";
import TCheckbox from "~/components/t-checkbox/TCheckbox";
import TInput from "~/components/tailwind-comps/TInput/wrapper/TInput";
import TSelect from "~/components/t-select/TSelect";
import * as TTabs from "~/components/tailwind-comps/TTabs";
import TLabel from "~/components/t-label/TLabel";

Vue.component("TButton", TButton);
Vue.component("TCheckbox", TCheckbox);
Vue.component("TInput", TInput);
Vue.component("TSelect", TSelect);
Vue.component("TTab", TTabs.TTab);
Vue.component("TTabs", TTabs.TTabs);
Vue.component("TTabList", TTabs.TTabList);
Vue.component("TTabPanel", TTabs.TTabPanel);
Vue.component("TTabPanels", TTabs.TTabPanels);
Vue.component("TLabel", TLabel);
