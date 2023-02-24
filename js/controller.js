import * as model from "./model.js";
import navigationViewer from "./views/navigationViewer.js";
import planViewer from "./views/planViewer.js";
import sectionViewer from "./views/sectionViewer.js";
import addonViewer from "./views/addonViewer.js";
import summaryViewer from "./views/summaryViewer.js";

function controlRender() {
  renderElements(null, null);
}

function controlNextButton() {
  const prevElPosition = model.state.currStep;
  model.incrementCurrStep();
  renderElements(prevElPosition, model.state.currStep);
}

function controlBackElement() {
  const prevElPosition = model.state.currStep;
  model.decrementCurrstep();
  renderElements(prevElPosition, model.state.currStep);
}

function controlConfirmButton() {
  const prevElPosition = model.state.currStep;
  navigationViewer.confirmHandler();
  sectionViewer.renderThankYou(prevElPosition);
}

function controlPlanOption() {
  const planIndex = planViewer.getCurrentPlan();
  model.changeCurrentPlan(planIndex);
  controlSummaryPrimaryEl();
  renderFinalPrice();
}

function controlMonthlyRender() {
  planViewer.renderMontlyYearlyEl();
  model.toggleIsMonthly();
  addonViewer.renderPriceEl(model.state.isMonthly);
  summaryViewer.renderFinalSummaryDate(model.state.isMonthly);
  controlSummaryPrimaryEl();
  renderFinalPrice();
  const [onlinePrice, storagePrice, customPrice] = [
    addonViewer.onlinePriceEl.textContent,
    addonViewer.storagePriceEl.textContent,
    addonViewer.customPriceEl.textContent,
  ];
  summaryViewer.renderAddonPrice(
    onlinePrice.trim(),
    storagePrice.trim(),
    customPrice.trim()
  );
}

function controlCheckBoxState(event) {
  const inputTargetID = event.target?.id ? event.target.id : event.id;
  const isChecked = event.target
    ? event.target.checked
    : (event.checked = !event.checked);
  model.changeOptionCheckedState(inputTargetID, isChecked);
  summaryViewer.renderSummaryOptionCont(inputTargetID, isChecked);
  renderFinalPrice();
}

function controlSummaryPrimaryEl() {
  const plan = model.state.currPlan;
  let planPrice = null;
  if (plan === "arcade") planPrice = planViewer.arcadePriceEl.textContent;
  else if (plan === "advanced")
    planPrice = planViewer.advancedPriceEl.textContent;
  else planPrice = planViewer.proPriceEl.textContent;
  summaryViewer.renderPrimaryEl(
    model.state.currPlan,
    model.state.isMonthly,
    planPrice.trim()
  );
}

function controlChangeEl() {
  const prevElPosition = model.state.currStep;
  model.changeCurrentStep(1);
  renderElements(prevElPosition, model.state.currStep);
}

function renderElements(prev, curr) {
  navigationViewer.stepItemRender(prev, curr);
  sectionViewer.renderSection(prev, curr);
}

function renderFinalPrice() {
  model.totalPriceCalc();
  summaryViewer.renderFinalSummaryPrice(
    model.state.totalPrice,
    model.state.isMonthly
  );
}
function init() {
  navigationViewer.addHandlerRender(controlRender);
  navigationViewer.addHandlerNextClick(controlNextButton);
  navigationViewer.addHandlerBackClick(controlBackElement);
  navigationViewer.addHandlerConfirmClick(controlConfirmButton);
  planViewer.addHandlerPlanClick(controlPlanOption);
  planViewer.addHandlerCheckClick(controlMonthlyRender);
  addonViewer.addHandlerClickCheckBox(controlCheckBoxState);
  summaryViewer.addHandlerChangeElClick(controlChangeEl);
}

init();
