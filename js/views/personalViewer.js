class personalViewer {
  constructor() {
    this.personalForm = document.getElementById("personal-info-form");
    this.nameInput = document.getElementById("name");
    this.emailInput = document.getElementById("email");
    this.phoneInput = document.getElementById("phone");
    this.submitBtn = document.getElementById("personal-info-form-submit");

    this.nameErrorEl = document.getElementById("name-error");
    this.emailErrorEl = document.getElementById("email-error");
    this.phoneErrorEl = document.getElementById("phone-error");
  }

  renderError() {
    const isNameInputValid = this.nameInput.checkValidity();
    const isEmailInputValid = this.emailInput.checkValidity();
    const isPhoneInputValid = this.phoneInput.checkValidity();

    isNameInputValid === true ? this.nameRemoveError() : this.nameAddError();
    isEmailInputValid === true ? this.emailRemoveError() : this.emailAddError();
    isPhoneInputValid === true ? this.phoneRemoveError() : this.phoneAddError();
    if (!isNameInputValid || !isEmailInputValid || !isPhoneInputValid)
      return false;
    return true;
  }

  nameAddError() {
    this.nameInput.classList.add("error");
    this.nameErrorEl.classList.remove("hidden");
  }

  nameRemoveError() {
    this.nameInput.classList.remove("error");
    this.nameErrorEl.classList.add("hidden");
  }

  emailAddError() {
    this.emailInput.classList.add("error");
    this.emailErrorEl.classList.remove("hidden");
  }

  emailRemoveError() {
    this.emailInput.classList.remove("error");
    this.emailErrorEl.classList.add("hidden");
  }

  phoneAddError() {
    this.phoneInput.classList.add("error");
    this.phoneErrorEl.classList.remove("hidden");
  }

  phoneRemoveError() {
    this.phoneInput.classList.remove("error");
    this.phoneErrorEl.classList.add("hidden");
  }
}

export default new personalViewer();
