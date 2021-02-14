import Vue from "vue";
import { useModalProgrammatic } from "@/components/t-modal";
import { useDialogProgrammatic } from "@/components/t-dialog";
import TAutocomplete from "~/components/t-autocomplete/TAutocomplete";
import TButton from "~/components/t-button/TButton";
import TCheckbox from "~/components/t-checkbox/TCheckbox";
import TInput from "~/components/tailwind-comps/TInput/wrapper/TInput";
import TLabel from "~/components/t-label/TLabel";
import TMessage from "~/components/t-message/TMessage";
import TSelect from "~/components/t-select/TSelect";
import * as TTabs from "~/components/tailwind-comps/TTabs";
import useToast from "~/components/tailwind-comps/TToast";

Vue.prototype.$toast = useToast();
Vue.prototype.$modal = useModalProgrammatic(Vue);
Vue.prototype.$dialog = useDialogProgrammatic(Vue);

Vue.component("TAutocomplete", TAutocomplete);
Vue.component("TButton", TButton);
Vue.component("TCheckbox", TCheckbox);
Vue.component("TInput", TInput);
Vue.component("TLabel", TLabel);
Vue.component("TMessage", TMessage);
Vue.component("TSelect", TSelect);
Vue.component("TTab", TTabs.TTab);
Vue.component("TTabs", TTabs.TTabs);
Vue.component("TTabList", TTabs.TTabList);
Vue.component("TTabPanel", TTabs.TTabPanel);
Vue.component("TTabPanels", TTabs.TTabPanels);
