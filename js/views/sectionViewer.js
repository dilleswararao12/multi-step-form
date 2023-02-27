class sectionViewer {
  constructor() {
    this.sections = [
      document.getElementById("personal-info-form"),
      document.getElementById("select-your-plan-form"),
      document.getElementById("add-ons-form"),
      document.getElementById("summary-section"),
      document.getElementById("thank-you-section"),
    ];

    this.formsContainer = document.querySelector(".forms-container");
    this.mainElement = document.querySelector("main");
  }

  renderSection(prevElIndex, currElIndex) {
    const currStepEl = prevElIndex === null ? null : this.sections[prevElIndex];
    if (currStepEl) {
      currStepEl.classList.remove("active");
      const nextElementPosition = currElIndex;
      this.sections[nextElementPosition].classList.add("active");
    } else {
      this.sections[0].classList.add("active");
    }
  }

  renderThankYou(prevElIndex) {
    this.sections[prevElIndex].classList.remove("active");
    this.sections[this.sections.length - 1].classList.add("active");
  }
}

export default new sectionViewer();
