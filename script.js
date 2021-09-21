const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// Event Listener

let isValid = false;

function passMatch(isMatch) {
  if (isMatch) {
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
  }
}

function isNotValid(isNotValid, sentence) {
  if (isNotValid) {
    message.textContent = sentence;
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  } else {
    message.textContent = sentence;
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function ValidateForm() {
  // Using Constraint API

  isValid = form.checkValidity();
  console.log(isValid);

  if (!isValid) {
    isNotValid(!isValid, "Please fill out all fields.");
    return;
  } else {
    let match = false;
    if (password1El.value === password2El.value) {
      match = true;
      passMatch(match);
      isNotValid(!isValid, "Thanks, you can sign in now.");
      return;
    } else {
      match = false;
      passMatch(match);
      isNotValid(isValid, "please make sure passwords match.");
      return;
    }
  }
}

function processFormData(e) {
  console.log(e);

  e.preventDefault();
  ValidateForm();
}

form.addEventListener("submit", (e) => processFormData(e));
