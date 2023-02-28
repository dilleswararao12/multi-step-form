class addonViewer {
  constructor() {
    this.parentElement = document.querySelector(".add-ons-form__cont");
    this.addonOptions = Array.from(this.parentElement.childNodes).filter(
      (el) => el.nodeName === "LABEL"
    );
    this.onlineCheckBox = document.getElementById("online");
    this.storageCheckBox = document.getElementById("storage");
    this.customCheckBox = document.getElementById("custom");

    [this.onlinePriceEl, this.storagePriceEl, this.customPriceEl] = Array.from(
      document.querySelectorAll(".add-ons-form__item-price")
    );

    this.onlineCheckBox.checked = false;
    this.storageCheckBox.checked = false;
    this.customCheckBox.checked = false;
  }

  addHandlerClickCheckBox(handler) {
    this.parentElement.addEventListener("click", (event) => {
      if (event.target.tagName !== "INPUT") return;
      this.renderCheckBox(event);
      handler(event);
    });
    this.parentElement.addEventListener("keypress", (event) => {
      const checkEl = event.target.childNodes[1].childNodes[1].childNodes[1];
      if (event.key === "Enter") {
        this.renderCheckBox(event);
        handler(checkEl);
      }
    });
  }

  renderCheckBox(event) {
    const target = event.target.closest(".option-component");
    const targetFor = target.getAttribute("for");
    this.attachAriaChecked(targetFor);
    if (target) {
      target.classList.toggle("is-selected");
    }
  }

  renderPriceEl(isMonthly) {
    if (isMonthly) {
      this.onlinePriceEl.textContent = "+$1/mo";
      this.storagePriceEl.textContent = "+$2/mo";
      this.customPriceEl.textContent = "+$2/mo";
    } else {
      this.onlinePriceEl.textContent = "+$10/yr";
      this.storagePriceEl.textContent = "+$20/yr";
      this.customPriceEl.textContent = "+$20/yr";
    }
  }

  attachAriaChecked(checkboxId) {
    if (checkboxId === "online")
      this.addonOptions[0].setAttribute(
        "aria-checked",
        this.onlineCheckBox.checked
      );
    if (checkboxId === "storage") {
      this.addonOptions[1].setAttribute(
        "aria-checked",
        this.storageCheckBox.checked
      );
    }
    if (checkboxId === "custom") {
      this.addonOptions[2].setAttribute(
        "aria-checked",
        this.customCheckBox.checked
      );
    }
  }
}

export default new addonViewer();
