import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/main-header/MainHeader";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";

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
      $router: {
        push: jest.fn().mockImplementation(_ => {}),
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

  test('Call "goTo"', () => {
    const wrapper = factory();
    wrapper.vm.goTo("Observatory");

    expect(wrapper.vm.$router.push.mock.calls.length).toBe(1);
    expect(wrapper.vm.$router.push.mock.calls[0][0]).toBe("https://test.foe-tools.github.io/{\"name\":\"GbInvestment\",\"params\":{\"gb\":\"Observatory\"}}");
  });
});
