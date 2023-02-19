class sectionViewer {
  constructor() {
    this.sections = [
      document.getElementById("personal-info-form"),
      document.getElementById("select-your-plan-form"),
      document.getElementById("add-ons-form"),
      document.getElementById("summary-section"),
      document.getElementById("thank-you-section"),
    ];
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
}

export default new sectionViewer();