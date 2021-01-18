import styleProps from "./props";

/**
 * Checks if object has a specific property.
 * @param {Object} obj
 * @param {String} prop
 */
export const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

/**
 * Checks if a value is defined
 * @param {*} v
 * @returns {Boolean}
 */
export function isDef(v) {
  return v !== undefined && v !== null;
}

export function useId(size = 3) {
  let uuid = "";
  const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < size; i++) {
    uuid += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  return uuid;
}

/**
 * Queries an element from the DOM
 * @param {String} selector Element selector
 * @param {Node} domain HTML element in which to query for element
 * @returns {Node} Node
 */
export const getElement = (selector, domain) => {
  if (!domain) {
    return document.querySelector(selector);
  } else {
    return domain.querySelector(selector);
  }
};

/**
 * @description Wraps and executes both user and internal event handlers for a single event
 * @param {Function} theirHandler Userland event handler
 * @param {*} ourHandler Internal Vue chakra event handler
 */
export const wrapEvent = (theirHandler, ourHandler) => (event) => {
  if (theirHandler) {
    theirHandler(event);
  }

  if (!event.defaultPrevented) {
    return ourHandler(event);
  }
};

/**
 * Converts a kebab-case string into camel case
 * @param {String} string
 */
export function camelize(string) {
  return string.replace(/[.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
}

/** Filter attrs and return object of chakra props */
export function extractChakraAttrs(attrs) {
  const styleAttrs = {};
  const nativeAttrs = {};

  for (const _prop in attrs) {
    const prop = camelize(_prop);
    if (styleProps[prop]) {
      styleAttrs[prop] = attrs[_prop];
    } else {
      nativeAttrs[_prop] = attrs[_prop];
    }
  }
  return { styleAttrs, nativeAttrs };
}

/**
 * Makes a cache watcher handler for data property.
 * This utility helps prevent unnecessary re-renders
 * for primitives with changes in the $parent $attrs
 * and $listeners objects
 * @param {String} property
 */
export function createWatcher(property) {
  return {
    handler(newVal, oldVal) {
      for (const key in oldVal) {
        if (!hasOwn(newVal, key)) {
          this.$delete(this.$data[property], key);
        }
      }
      for (const key in newVal) {
        this.$set(this.$data[property], key, newVal[key]);
      }
    },
    immediate: true,
  };
}

/**
 * Create mixin for style attributes
 * @param {String} name Component name
 */
export const createStyledAttrsMixin = (name) => ({
  name,
  inheritAttrs: false,
  data() {
    return {
      attrs$: {},
      listeners$: {},
    };
  },
  props: {
    as: {
      type: [String, Object],
      default: "div",
    },
    to: String,
  },
  computed: {
    /** Split style attributes and native attributes */
    splitProps() {
      const $attrs = this.$data.attrs$;
      const styles = Object.assign({}, this.componentStyles || {}, $attrs);

      const { styleAttrs, nativeAttrs } = extractChakraAttrs(styles);
      return {
        styleAttrs,
        nativeAttrs,
      };
    },
    /** Computed attributes object */
    computedAttrs() {
      return {
        ...this.splitProps.nativeAttrs,
      };
    },
    /** Computed listeners object */
    computedListeners() {
      return this.$data.listeners$;
    },
  },
  created() {
    this.$watch("$attrs", createWatcher("attrs$"));
    this.$watch("$listeners", createWatcher("listeners$"));
  },
});
