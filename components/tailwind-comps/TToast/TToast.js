/**
 * Hey! Welcome to @chakra-ui/vue Toast
 *
 * The toast is used to show alerts on top of an overlay.
 *
 * @see Docs     https://vue.chakra-ui.com/toast
 * @see Source   https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/CToast/CToast.js
 */

import Breadstick from "breadstick";
import TToast from "./TToastComponent/TToastComponent";

// Create breadstick instance.
const breadstick = new Breadstick();

/**
 * @description Toast initialization API
 * TODO: In Vue 3 this should be exposed as a hook of it's own so as to
 * to inject theme and icons variables provided by theme provider component.
 */
function useToast() {
  /**
   * @description Notify Method for Kiwi
   * @param {Object} options
   * @property {String} position
   * @property {Number} duration
   * @property {Function} render
   * @property {String} title
   * @property {String} description
   * @property {String} status
   * @property {String} variant
   * @property {Boolean} isClosable
   */
  function notify({
    position = "top-right",
    duration = 5000,
    render,
    title,
    description,
    status,
    variant = "solid",
    isClosable,
  }) {
    const options = {
      position,
      duration,
    };

    if (render) {
      return breadstick.notify(({ h, onClose, id }) => {
        return h(render({ onClose, id }));
      }, options);
    }

    /**
     * @todo Need to battletest breadstick to RELIABLY support JSX API and render function API globally.
     */
    breadstick.notify(({ h, onClose, id }) => {
      return h(TToast, {
        props: {
          status,
          variant,
          id: `${id}`,
          title,
          isClosable,
          onClose,
          description,
        },
      });
    }, options);
  }

  return notify;
}

export default useToast;
