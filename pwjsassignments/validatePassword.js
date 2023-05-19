
function validate() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error = document.getElementById("errorE");
    let isValid = true;
  
    if (!email.value.includes("@")) {
      error.innerText = "Invalid email";
      error.style.color = "red";
      isValid = false;
    }
  
    if (password.value.length < 8) {
      error.innerText = "Password must be at least 8 characters long";
      error.style.color = "red";
      isValid = false;
    }
  
    if (isValid) {
      error.innerText = "Valid email and password!";
      error.style.color = "green";
      return true;
    } else {
      return false;
    }
  }