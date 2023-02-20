class planViewer {
  constructor() {
    this.parentElement = document.querySelector(".select-your-plan-form__cont");
    this.planOptions = Array.from(this.parentElement.childNodes).filter(
      (el) => el.nodeName === "DIV"
    );
    this.currentPlan = null;
  }

  addHandlerPlanClick(handler) {
    this.parentElement.addEventListener("click", (e) => {
      this.renderSelectPlan(e);
      handler();
    });
  }

  renderSelectPlan(event) {
    const target = event.target.closest(".option-component");
    if (target) {
      for (let i = 0; i < this.planOptions.length; i++) {
        const el = this.planOptions[i];
        if (el !== target) {
          el.classList.remove("is-selected");
          continue;
        }
        el.classList.add("is-selected");
        this.setCurrentPlan(i);
      }
    }
  }

  setCurrentPlan(index) {
    this.currentPlan = index;
  }

  getCurrentPlan() {
    return this.currentPlan.toString();
  }
}

export default new planViewer();
