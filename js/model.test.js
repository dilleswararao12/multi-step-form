import * as model from "./model.js";

describe("incrementCurrStep()", () => {
  it("should increment currStep by one if currStep below 3", () => {
    model.incrementCurrStep();

    expect(model.state.currStep).toBe(1);
  });

  it("should not increment currStep if currStep equals 3", () => {
    model.state.currStep = 3;

    model.incrementCurrStep();

    expect(model.state.currStep).toBe(3);
  });

  it("should not increment currStep if currStep above 3", () => {
    model.state.currStep = 5;

    model.incrementCurrStep();

    expect(model.state.currStep).toBe(5);
  });
});

describe("decrementCurrStep()", () => {
  it("should decrement currStep by one if currStep above 0", () => {
    model.state.currStep = 1;

    model.decrementCurrstep();

    expect(model.state.currStep).toBe(0);
  });

  it("should not decrement currStep if currStep is equal 0", () => {
    model.state.currStep = 0;

    model.decrementCurrstep();

    expect(model.state.currStep).toBe(0);
  });

  it("should not decrement currStep if currStep is below 0", () => {
    model.state.currStep = -1;

    model.decrementCurrstep();

    expect(model.state.currStep).toBe(-1);
  });
});

describe("changeCurrentStep()", () => {
  it("should change current step to step passed as an argument", () => {
    const result = model.changeCurrentStep(2);

    expect(result).toBe(model.state.currStep);
  });
});

describe("toggleIsMonthly()", () => {
  it("should change isMonthly step to the opposite of its previous value", () => {
    model.state.isMonthly = true;
    const result = !model.state.isMonthly;

    model.toggleIsMonthly();

    expect(model.state.isMonthly).toBe(result);
  });
});

describe("changeCurrentPlan()", () => {
  it("should change currPlan to the position the user inputs", () => {
    model.changeCurrentPlan(1);

    expect(model.state.currPlan).toBe(model.state.optionPlans[1]);
  });
});

describe("changeOptionCheckedState()", () => {
  it("should set the checked status of state checkbox props", () => {
    const input1 = "storage";
    const input2 = "custom";

    model.changeOptionCheckedState(input1, true);
    model.changeOptionCheckedState(input2, true);
    expect(model.state.onlineServiceChecked).toBe(false);
  });
});

describe("totalPriceCal()", () => {
  it("should calculate totalPrice based on isMonthly, checked, and currPlan states", () => {
    model.state.isMonthly = false;
    model.state.onlineServiceChecked = true;
    model.state.customProfileChecked = false;
    model.state.largerStorageChecked = false;
    model.state.currPlan = "advanced";

    const result = model.totalPriceCalc();

    expect(result).toBe(130);
  });
});
