document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signup_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailField = document.getElementById("email");
      const errorMessage = document.getElementById("error-message");

      const email = emailField.value.trim();

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        errorMessage.style.display = "flex";
        emailField.classList.add("invalid");
      } else {
        const successPopup = document.querySelector(".popup");
        const signupForm = document.getElementById("signup_form");
        const attribution = document.querySelector(".attribution");

        successPopup.style.display = "flex";
        signupForm.style.display = "none";
        attribution.style.display = "none";
      }
    });

  document.getElementById("email").addEventListener("input", function () {
    const emailField = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";
    emailField.classList.remove("invalid");
  });

  document
    .querySelector(".popup button")
    .addEventListener("click", function () {
      const successPopup = document.querySelector(".popup");
      const signupForm = document.getElementById("signup_form");
      const attribution = document.querySelector(".attribution");

      document.getElementById("email").value = "";
      successPopup.style.display = "none";
      signupForm.style.display = "block";
      attribution.style.display = "block";
    });
});
