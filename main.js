document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("validationForm");

    form.addEventListener("submit", function (event) {
      // Prevent form submission if invalid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Custom validation for password confirmation
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add("is-invalid");
        event.preventDefault();
        event.stopPropagation();
      } else {
        confirmPassword.classList.remove("is-invalid");
      }

      form.classList.add("was-validated");
    });
  });