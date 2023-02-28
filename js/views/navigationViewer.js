class navigationViewer {
  constructor() {
    this.stepsMobileItems = document.querySelectorAll(
      ".steps-list-mobile__item"
    );
    this.stepsDesktopItems = document.querySelectorAll(
      ".steps-list-desktop__item-number"
    );
    this.nextButton = document.querySelector(".next-step-btn");
    this.backEl = document.querySelector(".back-par");
    this.confirmButton = document.querySelector(".confirm-btn");
    this.navMobileEl = document.querySelector(".nav-mobile");

    this.backEl.setAttribute("tabindex", -1);
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerNextClick(handler) {
    this.nextButton.addEventListener("click", handler);
    this.nextButton.addEventListener("keypress", (event) => {
      if (event.key === "Enter") handler();
    });
  }

  addHandlerBackClick(handler) {
    this.backEl.addEventListener("click", handler);
    this.backEl.addEventListener("keypress", (event) => {
      if (event.key === "Enter") handler();
    });
  }

  addHandlerConfirmClick(handler) {
    this.confirmButton.addEventListener("click", handler);
    this.confirmButton.addEventListener("keypress", (event) => {
      if (event.key === "Enter") handler();
    });
  }

  stepItemRender(prevElIndex, currElIndex) {
    const currStepElMobile =
      prevElIndex === null ? null : this.stepsMobileItems[prevElIndex];

    const currStepElDesktop =
      prevElIndex === null ? null : this.stepsDesktopItems[prevElIndex];
    if (currStepElMobile) {
      currStepElMobile.classList.remove("active");
      currStepElDesktop.classList.remove("active");
      const nextElementPosition = currElIndex;
      this.stepsMobileItems[nextElementPosition].classList.add("active");
      this.stepsDesktopItems[nextElementPosition].classList.add("active");
      this.renderNavElements(currElIndex);
    } else {
      this.stepsMobileItems[0].classList.add("active");
      this.stepsDesktopItems[0].classList.add("active");
    }
  }

  renderNavElements(currIndex) {
    if (currIndex > 0) {
      this.backEl.classList.add("active");
      if (currIndex === 3) {
        this.confirmButton.classList.add("active");
        this.nextButton.classList.add("not-active");
      } else {
        this.confirmButton.classList.remove("active");
        this.nextButton.classList.remove("not-active");
      }
    } else {
      this.backEl.classList.remove("active");
    }
  }

  confirmHandler() {
    this.navMobileEl.style.display = "none";
  }
}

export default new navigationViewer();
