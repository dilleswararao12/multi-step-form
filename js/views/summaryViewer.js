class summaryViewer {
  constructor() {
    this.primarySummaryText = document.querySelector(
      ".summary-section__primary-text"
    );
    this.primarySummaryPrice = document.querySelector(
      ".summary-section__primary-summary"
    );

    this.summaryOnlineCont = document.getElementById("summary-online");
    this.summaryStorageCont = document.getElementById("summary-storage");
    this.summaryCustomCont = document.getElementById("summary-custom");
  }

  renderPrimaryEl(currPlan, isMonthly, price) {
    const capitalized = currPlan.charAt(0).toUpperCase() + currPlan.slice(1);
    const datePlan = isMonthly ? "Monthly" : "Yearly";
    this.primarySummaryText.textContent = `${capitalized} (${datePlan})`;
    this.primarySummaryPrice.textContent = price;
  }

  renderSummaryOptionCont(target, isChecked) {
    if (target === "online") {
      this.summaryOnlineCont.style.display = isChecked ? "flex" : "none";
    } else if (target === "storage") {
      this.summaryStorageCont.style.display = isChecked ? "flex" : "none";
    } else {
      this.summaryCustomCont.style.display = isChecked ? "flex" : "none";
    }
  }
}

export default new summaryViewer();
