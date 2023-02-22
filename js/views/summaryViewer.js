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

    [
      this.summaryOnlineContPrice,
      this.summaryStorageContPrice,
      this.summaryCustomContPrice,
    ] = Array.from(
      document.querySelectorAll(".summary-section__add-ons-price")
    );
  }

  renderPrimaryEl(currPlan, isMonthly, price) {
    const capitalized = currPlan?.charAt(0).toUpperCase() + currPlan?.slice(1);
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

  renderAddonPrice(onlinePrice, storagePrice, customPrice) {
    this.summaryOnlineContPrice.textContent = onlinePrice;
    this.summaryStorageContPrice.textContent = storagePrice;
    this.summaryCustomContPrice.textContent = customPrice;
  }
}

export default new summaryViewer();
