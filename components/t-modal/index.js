import Modal from "./Modal";

const isObject = (item) => typeof item === "object" && !Array.isArray(item);

const merge = (target, source, deep = false) => {
  if (deep || !Object.assign) {
    const isDeep = (prop) => isObject(source[prop]) && target !== null && prop in target && isObject(target[prop]);
    const replaced = Object.getOwnPropertyNames(source)
      .map((prop) => ({ [prop]: isDeep(prop) ? merge(target[prop], source[prop], deep) : source[prop] }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    return {
      ...target,
      ...replaced,
    };
  } else {
    return Object.assign(target, source);
  }
};

function useModalProgrammatic(vue) {
  return function (params) {
    let parent;
    if (typeof params === "string") {
      params = {
        content: params,
      };
    }

    const defaultParam = {
      programmatic: true,
    };
    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }
    let slot;
    if (Array.isArray(params.content)) {
      slot = params.content;
      delete params.content;
    }
    const propsData = merge(defaultParam, params);
    const vm = typeof window !== "undefined" && window.Vue ? window.Vue : vue;
    const ModalComponent = vm.extend(Modal);
    const component = new ModalComponent({
      parent,
      el: document.createElement("div"),
      propsData,
    });
    if (slot) {
      component.$slots.default = slot;
      component.$forceUpdate();
    }
    return component;
  };
}

export { useModalProgrammatic, Modal as TModal };
