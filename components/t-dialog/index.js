import Dialog from "./Dialog";

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

function open(vue, propsData) {
  let slot;
  if (Array.isArray(propsData.message)) {
    slot = propsData.message;
    delete propsData.message;
  }
  const vm = typeof window !== "undefined" && window.Vue ? window.Vue : vue;
  const DialogComponent = vm.extend(Dialog);
  const component = new DialogComponent({
    el: document.createElement("div"),
    propsData,
  });
  if (slot) {
    component.$slots.default = slot;
    component.$forceUpdate();
  }

  return component;
}

function useDialogProgrammatic(vue) {
  return {
    alert(params) {
      if (typeof params === "string") {
        params = {
          message: params,
        };
      }
      const defaultParam = {
        canCancel: false,
      };
      const propsData = merge(defaultParam, params);
      return open(vue, propsData);
    },
    confirm(params) {
      const defaultParam = {};
      const propsData = merge(defaultParam, params);
      return open(vue, propsData);
    },
    prompt(params) {
      const defaultParam = {
        hasInput: true,
        confirmText: "utils.Confirm",
      };
      const propsData = merge(defaultParam, params);
      return open(vue, propsData);
    },
  };
}

export { useDialogProgrammatic, Dialog as TDialog };
