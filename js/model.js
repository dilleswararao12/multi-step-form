export const state = {
  currStep: 0,
  optionPlans: { 0: "arcade", 1: "advanced", 2: "pro" },
  currPlan: null,
  isMonthly: true,
  onlineServiceChecked: false,
  largerStorageChecked: false,
  customProfileChecked: false,
};

export function incrementCurrStep() {
  if (state.currStep === 3) return;
  state.currStep++;
}

export function decrementCurrstep() {
  if (state.currStep === 0) return;
  state.currStep--;
}

export function changeCurrentPlan(key) {
  state.currPlan = state.optionPlans[key];
}
