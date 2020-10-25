import Vue from "vue";
import { library, config, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faLanguage,
  faCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faTimes,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faInfoCircle,
  faTimesCircle,
  faLink,
  faArrowUp,
  faArrowDown,
  faExchangeAlt,
  faLock,
  faEye,
  faEyeSlash,
  faTrash,
  faQuestion,
  faAngleDoubleUp,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faChevronDown,
  faLanguage,
  faCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faTimes,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faInfoCircle,
  faTimesCircle,
  faLink,
  faQuestionCircle,
  faArrowUp,
  faArrowDown,
  faExchangeAlt,
  faLock,
  faEye,
  faEyeSlash,
  faTrash,
  faQuestion,
  faCopy,
  faAngleDoubleUp,
  faCog,
  faGithub
);

// Register the component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

dom.watch();
