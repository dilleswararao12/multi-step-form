export const state = {
  currStep: 0,
};

export function incrementCurrStep() {
  if (state.currStep === 3) return;
  state.currStep++;
}

export function decrementCurrstep() {
  if (state.currStep === 0) return;
  state.currStep--;
}
