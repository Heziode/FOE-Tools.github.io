import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-list-select/GbListSelect";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";

const defaultGb = "Observatory";

const factory = () => {
  const { localVue, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    propsData: {
      current: defaultGb,
    },
    localVue: localVue,
    store: store,
  });
};

describe("GbListSelect", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });

  test('Change "selected" value', () => {
    const wrapper = factory();
    const newGb = "Statue_of_Zeus";
    expect(wrapper.vm.selected).toBe(defaultGb);
    wrapper.vm.selected = newGb;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.selected).toBe(newGb);
      expect(wrapper.emitted().change).toBeTruthy();
      expect(wrapper.emitted().change[0]).toEqual([newGb]);
    });
  });

  test('Change "selected" invalid value', () => {
    const wrapper = factory();
    const newGb = "foo";
    expect(wrapper.vm.selected).toBe(defaultGb);
    wrapper.vm.selected = newGb;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.selected).toBe(newGb);
      expect(wrapper.emitted().change).toBeFalsy();
    });
  });
});
