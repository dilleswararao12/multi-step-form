export const state = {
  currStep: 0,
  optionPlans: { 0: "arcade", 1: "advanced", 2: "pro" },
  currPlan: null,
  isMonthly: true,
  onlineServiceChecked: false,
  largerStorageChecked: false,
  customProfileChecked: false,
  arcadePrices: { monthly: 9, yearly: 90 },
  advancedPrices: { monthly: 12, yearly: 120 },
  proPrices: { monthly: 15, yearly: 150 },
  onlinePrices: { monthly: 1, yearly: 10 },
  storagePrices: { monthly: 2, yearly: 20 },
  customPrices: { monthly: 2, yearly: 20 },
  totalPrice: null,
};

export function incrementCurrStep() {
  if (state.currStep === 3) return;
  state.currStep++;
}

export function decrementCurrstep() {
  if (state.currStep === 0) return;
  state.currStep--;
}

export function changeCurrentStep(newStep) {
  state.currStep = newStep;
}

export function toggleIsMonthly() {
  state.isMonthly = !state.isMonthly;
}

export function changeCurrentPlan(key) {
  state.currPlan = state.optionPlans[key];
}

export function changeOptionCheckedState(target, checkboxStatus) {
  if (target === "online") {
    state.onlineServiceChecked = checkboxStatus;
  } else if (target === "storage") {
    state.largerStorageChecked = checkboxStatus;
  } else {
    state.customProfileChecked = checkboxStatus;
  }
}

export function totalPriceCalc() {
  state.totalPrice = 0;
  const plan = state.currPlan;
  if (state.isMonthly) {
    if (plan === "arcade") state.totalPrice += state.arcadePrices["monthly"];
    else if (plan === "advanced")
      state.totalPrice += state.advancedPrices["monthly"];
    else state.totalPrice += state.proPrices["monthly"];
    if (state.onlineServiceChecked)
      state.totalPrice += state.onlinePrices["monthly"];
    if (state.largerStorageChecked)
      state.totalPrice += state.storagePrices["monthly"];
    if (state.customProfileChecked)
      state.totalPrice += state.customPrices["monthly"];
  } else {
    if (plan === "arcade") state.totalPrice += state.arcadePrices["yearly"];
    else if (plan === "advanced")
      state.totalPrice += state.advancedPrices["yearly"];
    else state.totalPrice += state.proPrices["yearly"];
    if (state.onlineServiceChecked)
      state.totalPrice += state.onlinePrices["yearly"];
    if (state.largerStorageChecked)
      state.totalPrice += state.storagePrices["yearly"];
    if (state.customProfileChecked)
      state.totalPrice += state.customPrices["yearly"];
  }
}
