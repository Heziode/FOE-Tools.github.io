/**
 * Hey! Welcome to @chakra-ui/vue Tabs
 *
 * The TTab component consists of clickable tabs, that are aligned side by side.
 *
 * @see Docs     https://vue.chakra-ui.com/tabs
 * @see Source   https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/TTabs/TTabs.js
 */

import { isDef, useId, cleanChildren, cloneVNodeElement, createStyledAttrsMixin } from "../utils";

/**
 * TTabs component
 *
 * the switch component that serves as an alternative for checkbox.
 *
 * @extends CBox
 * @see Docs https://vue.chakra-ui.com/tabs
 */
const TTabs = {
  name: "TTabs",
  mixins: [createStyledAttrsMixin("TTabs")],
  props: {
    index: Number,
    value: Number,
    defaultIndex: Number,
    isManual: Boolean,
    variant: {
      type: String,
      default: "boxed",
    },
    variantColor: {
      type: String,
      default: "blue",
    },
    align: {
      type: String,
      default: "start",
    },
    size: {
      type: String,
      default: "md",
    },
    orientation: {
      type: String,
      default: "horizontal",
    },
    isFitted: Boolean,
  },
  provide() {
    return {
      $TabContext: () => this.TabContext,
    };
  },
  data() {
    return {
      selectedPanelNode: undefined,
      selectedIndex: this.getInitialIndex(),
      oldIndex: this.value || this.index || this.defaultIndex || 0,
      manualIndex: this.value || this.index || this.defaultIndex || 0,
    };
  },
  watch: {
    value(value, oldValue) {
      this.oldIndex = oldValue;
      this.manualIndex = value;
    },
  },
  computed: {
    TabContext() {
      return {
        id: this.id,
        selectedIndex: this.selectedIndex,
        index: this.actualIdx,
        oldIndex: this.oldIndex,
        manualIndex: this.manualIdx,
        onManualTabChange: this.onManualTabChange,
        isManual: isDef(this.value) || this.isManual,
        onChangeTab: this.onChangeTab,
        selectedPanelRef: this.selectedPanelRef,
        onFocusPanel: this.onFocusPanel,
        color: this.variantColor,
        size: this.size,
        align: this.align,
        variant: this.variant,
        isFitted: this.isFitted,
        orientation: this.orientation,
        set: this.set,
      };
    },
    isControlled() {
      return isDef(this.value) || isDef(this.index);
    },
    id() {
      return `tabs-${useId()}`;
    },
    actualIdx() {
      if (!isDef(this.value) && !this.isManual) {
        return this.defaultIndex || 0;
      } else {
        return this.value || this.index || this.defaultIndex || 0;
      }
    },
    manualIdx() {
      return this.isControlled ? (isDef(this.value) ? this.value : this.index) : this.manualIndex;
    },
  },
  methods: {
    emitChange(value) {
      if (!isDef(this.value)) {
        return;
      }
      this.$emit("input", value);
    },

    /**
     * Gets initial active tab index
     */
    getInitialIndex() {
      if (!isDef(this.value) && !this.isManual) {
        return this.defaultIndex || 0;
      } else {
        return this.value || this.index || this.defaultIndex || 0;
      }
    },

    /**
     * Handles tab chage
     * @param {Number} index Index to vbe set
     */
    onChangeTab(index) {
      if (!this.isControlled) {
        this.selectedIndex = index;
      }

      if (this.isControlled && (isDef(this.value) || this.isManual)) {
        this.selectedIndex = index;
      }

      if (!isDef(this.value) && !this.isManual) {
        this.$emit("change", index);
        this.emitChange(index);
      }
    },

    /**
     * Manual tab change handler
     * @param {Number} index Index of tab to set
     */
    onManualTabChange(index) {
      if (!this.isControlled) {
        this.manualIndex = index;
      }

      if (isDef(this.value) || this.isManual) {
        this.$emit("change", index);
        this.emitChange(index);
      }
    },

    /**
     * Focuses on active tab
     */
    onFocusPanel() {
      if (this.selectedPanelNode) {
        this.selectedPanelNode.focus();
      }
    },

    /**
     * Sets the value of any component instance property.
     * This function is to be passed down to context so that consumers
     * can mutate context values with out doing it directly.
     * Serves as a temporary fix until Vue 3 comes out
     * @param {String} prop Component instance property
     * @param {Any} value Property value
     */
    set(prop, value) {
      this[prop] = value;
      return this[prop];
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: [this.className],
        attrs: this.computedAttrs,
      },
      this.$slots.default
    );
  },
};

/**
 * TTabList component
 *
 * the list wrapper component for each tab
 *
 * @extends CBox
 * @see Docs https://vue.chakra-ui.com/tabs
 */
const TTabList = {
  name: "TTabList",
  mixins: [createStyledAttrsMixin("TTabList")],
  inject: ["$TabContext"],
  data() {
    return {
      allNodes: {},
      validChildren: [],
      focusableIndexes: [],
    };
  },
  computed: {
    context() {
      return this.$TabContext();
    },
    componentStyles() {
      // const { align, variant, orientation } = this.context;
      return {
        display: "flex",
        // TODO: support other kind of tab style
        // ...useTabListStyle({
        //   theme: this.theme,
        //   align,
        //   orientation,
        //   variant
        // })
      };
    },
    enabledSelectedIndex() {
      const { selectedIndex } = this.context;
      return this.focusableIndexes.indexOf(selectedIndex);
    },
    count() {
      return this.focusableIndexes.length;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const children = this.$el.children;
      this.allNodes = Object.assign({}, children);
    });
  },
  methods: {
    /**
     * Updates current Index
     * @param {Number} index Index
     */
    updateIndex(index) {
      const { onChangeTab } = this.context;
      const childIndex = this.focusableIndexes[index];
      this.allNodes[childIndex].focus();
      onChangeTab && onChangeTab(childIndex);
    },

    /**
     * Handles keydown event
     * @param {Event} event event
     */
    handleKeyDown(event) {
      const { onFocusPanel } = this.context;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = (this.enabledSelectedIndex + 1) % this.count;
        this.updateIndex(nextIndex);
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        const nextIndex = (this.enabledSelectedIndex - 1 + this.count) % this.count;
        this.updateIndex(nextIndex);
      }

      if (event.key === "Home") {
        event.preventDefault();
        this.updateIndex(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        this.updateIndex(this.count - 1);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        onFocusPanel && onFocusPanel();
      }

      this.$emit("keydown", event);
    },
  },
  render(h) {
    this.validChildren = cleanChildren(this.$slots.default);

    const { id, isManual, manualIndex, selectedIndex, onManualTabChange, onChangeTab, orientation } = this.context;
    const validChildren = cleanChildren(this.$slots.default);
    const clones = validChildren.map((vnode, index) => {
      const isSelected = isManual ? index === manualIndex : index === selectedIndex;

      const handleClick = (event) => {
        // Hack for Safari. Buttons don't receive focus on click on Safari
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
        this.allNodes[index].focus();

        onManualTabChange(index);
        onChangeTab(index);

        this.$emit("click", event);
      };

      const clone = cloneVNodeElement(
        vnode,
        {
          props: {
            isSelected,
          },
          nativeOn: {
            click: handleClick,
          },
          attrs: {
            id: `${id}-${index}`,
          },
        },
        h
      );

      return clone;
    });

    this.focusableIndexes = clones
      .map((child, index) => (child.componentOptions.propsData.isDisabled === true ? null : index))
      .filter((index) => index != null);

    return h(
      this.as,
      {
        class: {
          ...this.className,
          "flex bg-gray-100 dark:bg-gray-700 p-1 rounded flex-wrap w-full divide-y-4": true,
        },
        attrs: {
          role: "tablist",
          "aria-orientation": orientation,
          ...this.computedAttrs,
        },
        on: {
          ...this.computedListeners,
          keydown: this.handleKeyDown,
        },
      },
      clones
    );
  },
};

/**
 * TTab component
 *
 * the tab element component
 *
 * @extends CBox
 * @see Docs https://vue.chakra-ui.com/tabs
 */
const TTab = {
  name: "TTab",
  mixins: [createStyledAttrsMixin("TTab", true)],
  inject: ["$TabContext"],
  props: {
    isSelected: Boolean,
    isDisabled: Boolean,
    id: String,
    as: {
      type: [String, Object],
      default: "button",
    },
  },
  computed: {
    context() {
      return this.$TabContext();
    },
    componentStyles() {
      // const { color, isFitted, orientation, size, variant } = this.context;
      return {
        outline: "none",
        // TODO: support other kind of tab style
        // ...useTabStyle({
        //   colorMode: this.colorMode,
        //   theme: this.theme,
        //   color,
        //   isFitted,
        //   orientation,
        //   size,
        //   variant
        // })
      };
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: {
          ...this.className,
          "px-5 min-h-8 flex-grow rounded border-transparent border-none": true,
          "bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400 text-white": this.isSelected,
          "text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white": !this.isSelected,
          // Animation
          "duration-100 ease-in-out transition": true,
          // Focus
          "focus:border focus:outline-none focus:ring": true,
        },
        attrs: {
          role: "tab",
          tabIndex: this.isSelected ? 0 : -1,
          id: `tab:${this.id}`,
          type: "button",
          disabled: this.isDisabled,
          "aria-disabled": this.isDisabled,
          "aria-selected": this.isSelected,
          "aria-controls": `panel:${this.id}`,
          ...this.computedAttrs,
        },
        on: this.computedListeners,
      },
      this.$slots.default
    );
  },
};

/**
 * TTabPanel component
 *
 * the panel element component fro tab content
 *
 * @extends CBox
 * @see Docs https://vue.chakra-ui.com/tabs
 */
const TTabPanel = {
  name: "TTabPanel",
  mixins: [createStyledAttrsMixin("TTabPanel")],
  inject: ["$TabContext"],
  props: {
    isSelected: Boolean,
    selectedPanelNode: Object,
    id: String,
    index: Number,
  },
  data() {
    return {
      transitionName: null,
    };
  },
  computed: {
    context() {
      return this.$TabContext();
    },
  },
  watch: {
    isSelected(val) {
      if (val) {
        /**
         * Activate element, alter animation name based on the index.
         */
        this.transitionName = this.index < this.context.oldIndex ? "-translate-x-full" : "translate-x-full";
      } else {
        /**
         * Deactivate element, alter animation name based on the index.
         */
        this.transitionName = this.context.index < this.index ? "translate-x-full" : "-translate-x-full";
      }
      setTimeout(() => {
        this.transitionName = "";
      }, 0);
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: {
          ...this.className,
          [this.transitionName]: true,
          "transition-transform duration-300 transform focus:outline-none pt-4": true,
        },
        attrs: {
          role: "tabpanel",
          tabIndex: -1,
          "aria-labelledby": `tab:${this.id}`,
          hidden: !this.isSelected,
          id: `panel:${this.id}`,
          outline: 0,
          ...this.computedAttrs,
        },
        on: this.computedListeners,
      },
      this.$slots.default
    );
  },
};

/**
 * TTabPanels component
 *
 * the wrapper  component fro tab panels
 *
 * @extends CBox
 * @see Docs https://vue.chakra-ui.com/tabs
 */
const TTabPanels = {
  name: "TTabPanels",
  mixins: [createStyledAttrsMixin("TTabPanels")],
  inject: ["$TabContext"],
  computed: {
    context() {
      return this.$TabContext();
    },
  },
  render(h) {
    const { selectedIndex, id, isManual, manualIndex } = this.context;

    const validChildren = cleanChildren(this.$slots.default);

    const clones = validChildren.map((child, index) => {
      const isSelected = isManual ? index === manualIndex : index === selectedIndex;
      return cloneVNodeElement(
        child,
        {
          props: {
            isSelected,
            id: `${id}-${index}`,
            index,
          },
        },
        h
      );
    });

    return h(
      this.as,
      {
        class: [this.className],
        attrs: {
          tabIndex: -1,
          ...this.computedAttrs,
        },
        on: this.computedListeners,
      },
      clones
    );
  },
};

export { TTabs, TTabList, TTab, TTabPanels, TTabPanel };
