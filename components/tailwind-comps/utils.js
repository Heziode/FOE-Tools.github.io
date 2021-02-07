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

/**
 * Clones a single VNode
 * @param {Vue.VNode} vnodes VNode to be cloned
 * @param {Function} createElement Render function
 * @returns {Vue.VNode} Cloned VNodes
 */
export function cloneVNode(vnode, createElement) {
  const clonedChildren = vnode.children && vnode.children.map((vnode) => cloneVNode(vnode, createElement));
  const cloned = createElement(vnode.tag, vnode.data, clonedChildren);
  cloned.text = vnode.text;
  cloned.isComment = vnode.isComment;
  cloned.componentOptions = vnode.componentOptions;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnContext = vnode.fnContext;
  cloned.elm = vnode.elm;
  cloned.context = vnode.context;
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.data = vnode.data;
  return cloned;
}

/**
 * Clones an array of VNodes
 * @param {Array<Vue.VNode>} vnodes Array of VNodes to be cloned
 * @param {Function} createElement Render function
 * @returns {Array<Vue.VNode>} Cloned VNodes Array
 */
export function cloneVNodes(vnodes, createElement) {
  const clonedVNodes = vnodes.map((vnode) => cloneVNode(vnode, createElement));
  return clonedVNodes;
}

/**
 * Clones VNode with merged data
 * @param {Vue.VNode} vnode VNode
 * @param {Object} data VNode data
 * @param {Function} h Render function
 */
export function cloneVNodeElement(vnode, { props, attrs, children, ...rest }, h) {
  const cloned = cloneVNode(vnode, h);
  return h(
    cloned.componentOptions.Ctor,
    {
      ...cloned.data,
      ...(cloned.componentOptions.listeners || {}),
      props: {
        ...(cloned.data.props || {}),
        ...cloned.componentOptions.propsData,
        ...props,
      },
      attrs: {
        ...(cloned.data.attrs || {}),
        ...attrs,
      },
      ...rest,
    },
    cloned.componentOptions.children || children
  );
}

/**
 * Checks whether a vnode is an async placeholder
 * @param {Vue.VNode} node
 * @returns {Boolean}
 */
function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/**
 * Get's the first child component VNode from an array of VNodes
 * @param {Array<Vue.VNode>} children
 * @returns {Vue.VNode}
 */
export function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

/**
 * Clears out all undefined or nullish vnodes
 * @param {Array<Vue.VNode>} vnodes Array of VNodes
 * @returns {Array<Vue.VNode>}
 */
export function cleanChildren(vnodes) {
  if (!vnodes) return [];
  return vnodes.filter((vnode) => vnode.tag);
}

/**
 * Extracts native and nonNative event handlers for functional components
 *
 * The returned object returns `native` object contains listeners that
 * MUST be passed to a Vue component in the render function.
 *
 * The returned `nonNative` object contains other native listeners that
 * can be passed to a native HTML element in the render function.
 *
 * @param {Object} context Render function context
 * @param {Object} nonNative Object of VNode `on` event handlers
 * @returns {{ nonNative: Object<String, Function>, native: Object<String, Function>}}
 *
 * @example
 * import Comp from 'comp'
 *
 * const newComp = {
 *  functional: true,
 *  render(h, context) {
 *    const { native, nonNative } = extractListeners(context, componentEvents)
 *    return h(Comp, {
 *      ...context.data
 *      on: nonNative,
 *      nativeOn: native,
 *    }, context.slots ? context.slots().default : context.children)
 *  }
 * }
 */
export const extractListeners = (context, nonNative = {}) => {
  const { listeners } = context;
  const native = {};

  for (const listener in listeners) {
    if (!nonNative[listener]) {
      native[listener] = listeners[listener];
    }
  }

  return { native, nonNative };
};
