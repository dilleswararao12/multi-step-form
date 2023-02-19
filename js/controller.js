import * as model from "./model.js";
import navigationViewer from "./views/navigationViewer.js";
import sectionViewer from "./views/sectionViewer.js";

function controlRender() {
  navigationViewer.stepItemRender(null, null);
  sectionViewer.renderSection(null, null);
}

function controlNextButton() {
  const prevElPosition = model.state.currStep;
  model.incrementCurrStep();
  navigationViewer.stepItemRender(prevElPosition, model.state.currStep);
  sectionViewer.renderSection(prevElPosition, model.state.currStep);
}

function controlBackElement() {
  const prevElPosition = model.state.currStep;
  model.decrementCurrstep();
  navigationViewer.stepItemRender(prevElPosition, model.state.currStep);
  sectionViewer.renderSection(prevElPosition, model.state.currStep);
}

function init() {
  navigationViewer.addHandlerRender(controlRender);
  navigationViewer.addHandlerNextClick(controlNextButton);
  navigationViewer.addHandlerBackClick(controlBackElement);
}

init();
