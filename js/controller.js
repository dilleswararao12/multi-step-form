import * as model from "./model.js";
import navigationViewer from "./views/navigationViewer.js";
import sectionViewer from "./views/sectionViewer.js";

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

function renderElements(prev, curr) {
  navigationViewer.stepItemRender(prev, curr);
  sectionViewer.renderSection(prev, curr);
}
function init() {
  navigationViewer.addHandlerRender(controlRender);
  navigationViewer.addHandlerNextClick(controlNextButton);
  navigationViewer.addHandlerBackClick(controlBackElement);
  navigationViewer.addHandlerConfirmClick(controlConfirmButton);
}

init();
