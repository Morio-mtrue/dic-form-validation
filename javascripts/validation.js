function emailValidation() {
  const emailField = document.getElementById("email");
  const emailConfirmField = document.getElementById("email_confirm");

  // The error message is built once and then added / removed as needed.
  const alertRow = document.createElement("tr");
  alertRow.setAttribute("id", "alert_row");
  alertRow.classList.add("alert_row");

  const alertCell = document.createElement("td");
  alertCell.setAttribute("colspan", "2");
  alertCell.classList.add("alert_cell");

  const alertText = document.createElement("p");
  alertText.classList.add("alert_color");
  alertText.appendChild(document.createTextNode("Emails do not match"));

  alertCell.appendChild(alertText);
  alertRow.appendChild(alertCell);

  // The <tbody> element is generated automatically by the browser, so the row
  // is reached from the input itself through parentNode instead of being
  // looked up directly.
  const confirmRow = emailConfirmField.parentNode.parentNode;

  function showAlert() {
    if (!document.getElementById("alert_row")) {
      confirmRow.parentNode.insertBefore(alertRow, confirmRow.nextSibling);
    }
    emailConfirmField.classList.add("alert_bg");
  }

  function hideAlert() {
    if (document.getElementById("alert_row")) {
      alertRow.parentNode.removeChild(alertRow);
    }
    emailConfirmField.classList.remove("alert_bg");
  }

  function validate() {
    // Nothing has been typed in the confirmation field yet: stay quiet.
    if (emailConfirmField.value === "") {
      hideAlert();
      return;
    }

    if (emailField.value !== emailConfirmField.value) {
      showAlert();
    } else {
      hideAlert();
    }
  }

  // "input" fires on every keystroke, so the result is shown in real time
  // rather than only when the send button is clicked.
  emailField.addEventListener("input", validate);
  emailConfirmField.addEventListener("input", validate);
}

window.onload = function () {
  emailValidation();
};
