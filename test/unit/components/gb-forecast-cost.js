import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-forecast-cost/GbForecastCost";
import { getView } from "../localVue";
import { gbsData } from "../../../lib/foe-data/gbs";
import { getDefaultStore } from "../utils";

const defaultGb = JSON.parse(JSON.stringify(gbsData.Observatory));

const factory = (mocks = {}) => {
  const { localVue, i18n, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue: localVue,
    i18n,
    store: store,
    mocks: {
      $route: {
        name: "foo",
        query: {},
        params: {
          gb: "root",
        },
      },
      ...mocks,
    },
  });
};

const defaultInvestorPercentageGlobal = 0;
const defaultInvestorPercentageCustom = [0, 0, 0, 0, 0];

describe("GbForecastCost", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });

  test("Initialize with URL query", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const wrapper = factory({
      $route: {
        name: "foo",
        query: {
          gbfc_gb: "Observatory",
          gbfc_f: 11,
          gbfc_t: 60,
          gbfc_ipg: 90,
          gbfc_cp: 1,
          gbfc_fp: 50,
          gbfc_ai: 123,
          gbfc_p1: 92,
          gbfc_p2: 91,
          gbfc_p3: 90,
          gbfc_p4: 85,
          gbfc_p5: 80,
        },
      },
    });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.gb).toEqual(defaultGb);
      expect(wrapper.vm.from).toBe(11);
      expect(wrapper.vm.to).toBe(60);
      expect(wrapper.vm.investorPercentageGlobal).toBe(90);
      expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
      expect(wrapper.vm.fpBy24h).toBe(50);
      expect(wrapper.vm.alreadyInvested).toBe(123);
    });
  });

  test('Call "duration" with "fpBy24h" set to 0', async () => {
    const wrapper = factory();
    const value = 0;
    expect(wrapper.vm.duration).toBe(0);
    wrapper.vm.fpBy24h = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.duration).toBe(0);
      wrapper.vm.fpBy24h = 42;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.duration).toBe(62);
      });
    });
  });

  test('Change "lang" value', async () => {
    const wrapper = factory();
    const value = 50;
    expect(wrapper.vm.fpBy24h).toBe(0);
    wrapper.vm.fpBy24h = value;

    // expect(wrapper.vm.estimatedTime).toBe("1 month 22 days");

    wrapper.vm.i18n.locale = "fr";
    wrapper.vm.$store.set("locale", "fr");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.estimatedTime).toBe("1 mois 22 jours");
    });
  });

  test('Change "gb" value', async () => {
    const wrapper = factory();
    const value = gbsData.Alcatraz;
    expect(wrapper.vm.gb).toEqual(defaultGb);
    wrapper.vm.gb = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.gb).toBe(value);
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_gb"]`)).toBe(value.key);
    });
  });

  test('Change "from" value', () => {
    const wrapper = factory();
    const value = 2;
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.from).toBe(value);
      expect(wrapper.vm.errors.from).toBeFalsy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_f"]`)).toBe(value);
    });
  });

  test('Change "from" invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.from).toBe(value);
      expect(wrapper.vm.errors.from).toBeTruthy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_f"]`)).toBe(1);
    });
  });

  test('Change "from" invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.from).toBe(value);
      expect(wrapper.vm.errors.from).toBeTruthy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_f"]`)).toBe(1);
    });
  });

  test('Change "to" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.to).toBe(10);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = 42;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.to).toBe(42);
      expect(wrapper.vm.errors.to).toBeFalsy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_t"]`)).toBe(42);
    });
  });

  test('Change "to" invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.to).toBe(10);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.to).toBe(value);
      expect(wrapper.vm.errors.to).toBeTruthy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_t"]`)).toBe(10);
    });
  });

  test('Change "to" invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.to).toBe(10);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = value;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.to).toBe(value);
      expect(wrapper.vm.errors.to).toBeTruthy();
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_t"]`)).toBe(10);
    });
  });

  test('Change "to" valid value and error with "from"', () => {
    const wrapper = factory();
    wrapper.vm.errors.from = 21;
    expect(wrapper.vm.to).toBe(10);
    wrapper.vm.to = 42;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.to).toBe(42);
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_t"]`)).toBe(10);
      expect(wrapper.vm.errors.from).toBeTruthy();
      expect(wrapper.vm.errors.to).toBeFalsy();
    });
  });

  test('Change "to" valid value and error with "fromInput"', () => {
    const wrapper = factory();
    wrapper.vm.fromInput = 21;
    wrapper.vm.errors.from = 21;
    expect(wrapper.vm.to).toBe(22);
    wrapper.vm.to = 42;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.to).toBe(42);
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_t"]`)).toBe(42);
      expect(wrapper.vm.errors.from).toBeFalsy();
      expect(wrapper.vm.errors.to).toBeFalsy();
    });
  });

  test('Change "investorPercentageGlobal" value', () => {
    const wrapper = factory();
    const newValue = 80;
    expect(wrapper.vm.investorPercentageGlobal).toBe(defaultInvestorPercentageGlobal);
    wrapper.vm.investorPercentageGlobal = newValue;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);

      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue);
      }
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_ipg"]`)).toBe(newValue);
    });
  });

  test('Change "investorPercentageGlobal" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.investorPercentageGlobal).toBe(defaultInvestorPercentageGlobal);
    wrapper.vm.investorPercentageGlobal = newValue;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);

      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(defaultInvestorPercentageGlobal);
      }
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_ipg"]`)).toBe(defaultInvestorPercentageGlobal);
    });
  });

  test('Change "investorPercentageGlobal" invalid type', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.investorPercentageGlobal).toBe(defaultInvestorPercentageGlobal);
    wrapper.vm.investorPercentageGlobal = newValue;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);

      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(defaultInvestorPercentageGlobal);
      }
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_ipg"]`)).toBe(defaultInvestorPercentageGlobal);
    });
  });

  test('Change "investorPercentageCustom" value', () => {
    const wrapper = factory();
    const newValue = [92, 91, 90, 85, 80];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
    }
  });

  test('Change "investorPercentageCustom" invalid value', () => {
    const wrapper = factory();
    const newValue = [90, -1, 90, 90, 90];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
    }
  });

  test('Change "investorPercentageCustom" invalid type', () => {
    const wrapper = factory();
    const newValue = [90, "foo", 90, 90, 90];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
    }
  });

  test('Change "customPercentage" value', () => {
    const wrapper = factory();
    let newValue = true;
    expect(wrapper.vm.customPercentage).toEqual(false);
    wrapper.vm.customPercentage = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(wrapper.vm.investorPercentageGlobal);
      expect(wrapper.vm.$store.get(`urlQuery@gbfc_p${i + 1}`)).toBe(defaultInvestorPercentageGlobal);
    }

    newValue = false;
    expect(wrapper.vm.customPercentage).toEqual(true);
    wrapper.vm.customPercentage = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(wrapper.vm.investorPercentageGlobal);
      expect(wrapper.vm.$store.get(`urlQuery@gbfc_p${i + 1}`)).toBe(defaultInvestorPercentageGlobal);
    }
  });

  test('Change "fpBy24h" value', () => {
    const wrapper = factory();
    const newValue = 42;
    expect(wrapper.vm.fpBy24h).toBe(0);
    wrapper.vm.fpBy24h = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_fp"]`)).toBe(newValue);
    });
  });

  test('Change "fpBy24h" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.fpBy24h).toBe(0);
    wrapper.vm.fpBy24h = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_fp"]`)).toBe(0);
      expect(wrapper.vm.estimatedTime).toBe("");
    });
  });

  test('Change "alreadyInvested" value', () => {
    const wrapper = factory();
    const newValue = 42;
    wrapper.vm.fpBy24h = 50;

    expect(wrapper.vm.alreadyInvested).toBe(0);
    wrapper.vm.alreadyInvested = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.duration).toBe(51);
      expect(wrapper.vm.estimatedTime).toBe("1 month 21 days");
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_ai"]`)).toBe(newValue);
    });
  });

  test('Change "alreadyInvested" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.alreadyInvested).toBe(0);
    wrapper.vm.alreadyInvested = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$store.get(`urlQuery@["gbfc_ai"]`)).toBe(0);
      expect(wrapper.vm.estimatedTime).toBe("");
    });
  });

  test('Call "checkFrom" with empty value', () => {
    const wrapper = factory();
    wrapper.vm.checkFrom("");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.errors.from).toBe(true);
    });
  });

  test('Call "changeGb" with empty value', () => {
    const wrapper = factory();
    wrapper.vm.changeGb(gbsData.Alcatraz.key);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.gb).toEqual(gbsData.Alcatraz);
      expect(wrapper.vm.maxLevel).toEqual(gbsData.Alcatraz.levels.length);
      expect(wrapper.vm.from).toEqual(1);
      expect(wrapper.vm.to).toEqual(10);
    });
  });

  test('Call "calculate" with "fpBy24h" > 0', () => {
    const wrapper = factory();
    wrapper.vm.fpBy24h = 50;
    wrapper.vm.calculate();

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.estimatedTime).toBe("1 month 22 days");
    });
  });
});
