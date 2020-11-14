import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import { config, shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_default/Default";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";
import clone from "lodash.clonedeep";

const factory = (mocks = {}) => {
  const { localVue, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
    mocks: {
      $route: {
        name: "foo",
        path: "foo",
      },
      ...mocks,
    },
  });
};

describe("Default", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Change route", () => {
    const wrapper = factory();
    wrapper.vm.burgerMenuVisible = true;

    wrapper.vm.$route.path = "bar";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.burgerMenuVisible).toBe(false);
      done();
    });
  });

  test('Call "toggleMenu"', () => {
    const wrapper = factory();
    expect(wrapper.vm.burgerMenuVisible).toBe(false);
    wrapper.vm.toggleMenu();
    expect(wrapper.vm.burgerMenuVisible).toBe(true);
  });
});
