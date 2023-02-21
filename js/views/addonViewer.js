class addonViewer {
  constructor() {
    this.parentElement = document.querySelector(".add-ons-form__cont");
    this.addonOptions = Array.from(this.parentElement.childNodes).filter(
      (el) => el.nodeName === "LABEL"
    );
    this.onlineCheckBox = document.getElementById("online");
    this.storageCheckBox = document.getElementById("storage");
    this.customCheckBox = document.getElementById("custom");

    this.onlineCheckBox.checked = false;
    this.storageCheckBox.checked = false;
    this.customCheckBox.checked = false;

    this.parentElement.addEventListener("click", (event) => {
      this.renderCheckBox(event);
    });
  }

  addHandlerClickCheckBox() {}

  renderCheckBox(event) {
    if (event.target.tagName !== "INPUT") return;
    const target = event.target.closest(".option-component");
    if (target) {
      target.classList.toggle("is-selected");
    }
  }
}

export default new addonViewer();
