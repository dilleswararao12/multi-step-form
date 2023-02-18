class navigationViewer {
  constructor() {
    this.stepsMobileItems = document.querySelectorAll(
      ".steps-list-mobile__item"
    );
    this.nextButton = document.querySelector(".next-step-btn");
    this.backEl = document.querySelector(".back-par");
    this.confirmButton = document.querySelector(".confirm-btn");
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerNextClick(handler) {
    this.nextButton.addEventListener("click", handler);
  }

  addHandlerBackClick(handler) {
    this.backEl.addEventListener("click", handler);
  }

  stepItemRender(prevElIndex, currElIndex) {
    const currStepEl =
      prevElIndex === null ? null : this.stepsMobileItems[prevElIndex];
    if (currStepEl) {
      currStepEl.classList.remove("active");
      const nextElementPosition = currElIndex;
      this.stepsMobileItems[nextElementPosition].classList.add("active");
    } else {
      this.stepsMobileItems[0].classList.add("active");
    }
  }
}

export default new navigationViewer();
