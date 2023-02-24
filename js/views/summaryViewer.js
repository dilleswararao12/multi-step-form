class summaryViewer {
  constructor() {
    this.primarySummaryText = document.querySelector(
      ".summary-section__primary-text"
    );
    this.primarySummaryPrice = document.querySelector(
      ".summary-section__primary-summary"
    );
    this.changeElement = document.querySelector(
      ".summary-section__primary-change"
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

    this.finalSummaryDate = document.querySelector(
      ".summary-section__cont-summary-date"
    );
    this.finalSummaryPrice = document.querySelector(
      ".summary-section__cont-summary-price"
    );
  }

  addHandlerChangeElClick(handler) {
    this.changeElement.addEventListener("click", handler);
    this.changeElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handler();
      }
    });
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

  renderFinalSummaryDate(isMonthly) {
    if (isMonthly) {
      this.finalSummaryDate.textContent = "Total (per month)";
    } else {
      this.finalSummaryDate.textContent = "Total (per year)";
    }
  }

  renderFinalSummaryPrice(price, isMonthly) {
    this.finalSummaryPrice.textContent = `$${price}/${isMonthly ? "mo" : "yr"}`;
  }
}

export default new summaryViewer();
