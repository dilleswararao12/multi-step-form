class planViewer {
  constructor() {
    this.parentElement = document.querySelector(".select-your-plan-form__cont");
    this.planOptions = Array.from(this.parentElement.childNodes).filter(
      (el) => el.nodeName === "DIV"
    );
    this.labelEl = document.querySelector(".switch");
    this.checkboxEl = document.querySelector("#monthly-yearly");
    this.monthlyEl = document.querySelector(".monthly");
    this.yearlyEl = document.querySelector(".yearly");
    this.freeParEls = document.querySelectorAll(
      ".select-your-plan-form__item-free"
    );
    this.arcadePriceEl = document.getElementById("arcade-price");
    this.advancedPriceEl = document.getElementById("advanced-price");
    this.proPriceEl = document.getElementById("pro-price");
    this.currentPlan = null;
    this.checkboxEl.checked = false;
  }

  addHandlerPlanClick(handler) {
    this.parentElement.addEventListener("click", (e) => {
      this.renderSelectPlan(e);
      handler();
    });
    this.parentElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.renderSelectPlan(e);
        handler();
      }
    });
  }

  addHandlerCheckClick(handler) {
    this.labelEl.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") return;
      handler();
    });
    this.labelEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.checkboxEl.checked = !this.checkboxEl.checked;
        handler();
      }
    });
  }

  renderSelectPlan(event) {
    const target = event.target.closest(".option-component");
    if (target) {
      for (let i = 0; i < this.planOptions.length; i++) {
        const el = this.planOptions[i];
        if (el !== target) {
          el.classList.remove("is-selected");
          el.setAttribute("aria-selected", false);
          continue;
        }
        el.classList.add("is-selected");
        el.setAttribute("aria-selected", true);
        this.setCurrentPlan(i);
      }
    }
  }

  renderMontlyYearlyEl() {
    if (this.checkboxEl.checked) {
      this.monthlyEl.classList.remove("active");
      this.yearlyEl.classList.add("active");
      this.arcadePriceEl.textContent = "$90/yr";
      this.advancedPriceEl.textContent = "$120/yr";
      this.proPriceEl.textContent = "$150/yr";
      this.renderFreeParEl(true);
    } else {
      this.monthlyEl.classList.add("active");
      this.yearlyEl.classList.remove("active");
      this.arcadePriceEl.textContent = "$9/mo";
      this.advancedPriceEl.textContent = "$12/mo";
      this.proPriceEl.textContent = "$15/mo";
      this.renderFreeParEl(false);
    }
  }

  renderFreeParEl(isYearly) {
    if (isYearly) {
      for (const el of this.freeParEls) {
        el.classList.add("active");
      }
    } else {
      for (const el of this.freeParEls) {
        el.classList.remove("active");
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
