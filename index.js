const errorMessage = document.getElementById("error");

function ValidateForm(event) {
  event.preventDefault();
  let email = document.getElementById("email").value.trim();
  console.log(email);

  // if (email === "" || ) {
  //   alert("Please enter an email");
  //   return;
  // }
}

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (!emailRegex.test(email)) {
//   alert("Please enter a valid email address");
// }

function SubmitF() {
  console.log("The Button Was Clicked");
  let userNameInput = document.getElementById("username").value;
  console.log(userNameInput);
  let emailInput = document.getElementById("email").value;
  console.log(emailInput); //let emailTextElement = document.getElementById("emailText");
  // emailInput = emailText.innerHTML;
  // const emailText = document.getElementById("emailText");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
    // email.textContent = "Please enter a valid email address";
    errorMessage.textContent = "invalid email address";
  } else {
    // window.open(
    //   "file:///C:/Users/user/Documents/Work/ThanksPage.html?email=" +
    //     emailInput,
    //   "_blank"
    // );

    window.open(`file:///C:/Users/user/Documents/Work/ThanksPage.html`);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("username", userNameInput);

    // const searchParams = new URLSearchParams(window.location.search);

    // alert(`${email} Welcome`);
  }
  // if (email.classList.contains("@gmail.com")) {
  //   console.log("invalid email");
  //   // document.getElementById("email").innerHTML = "invalid email";
  // } else {
  //   console.log("valid email");
  // }
}
