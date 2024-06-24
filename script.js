
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (usernameVal, sRate, count) => {
  if (sRate === count) {
    alert("Registration Successful");
    swal("Welcome! " + usernameVal, "Registration Successful!", "success");
    location.href = `demo.html?username=${usernameVal}`;
  }
};

// for final data validation
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Email validation
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  let isValid = true;

  // Validate username
  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank");
    isValid = false;
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Username must be at least 3 characters");
    isValid = false;
  } else {
    setSuccessMsg(username);
  }

  // Validate email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid Email");
    isValid = false;
  } else {
    setSuccessMsg(email);
  }

  // Validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone cannot be blank");
    isValid = false;
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, "Not a valid phone number");
    isValid = false;
  } else {
    setSuccessMsg(phone);
  }

  // Validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
    isValid = false;
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Minimum 6 characters required");
    isValid = false;
  } else {
    setSuccessMsg(password);
  }

  // Validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Confirm password cannot be blank");
    isValid = false;
  } else if (cpasswordVal !== passwordVal) {
    setErrorMsg(cpassword, "Passwords do not match");
    isValid = false;
  } else {
    setSuccessMsg(cpassword);
  }

  if (isValid) {
    setFinalSuccessMsg(usernameVal);
  }
};

const setErrorMsg = (input, errormsgs) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
};

const setFinalSuccessMsg = (usernameVal) => {
  let formCon = document.getElementsByClassName("form-control");
  let count = formCon.length;
  let sRate = 0;

  for (let i = 0; i < count; i++) {
    if (formCon[i].classList.contains("success")) {
      sRate++;
    }
  }

  sendData(usernameVal, sRate, count);
};
