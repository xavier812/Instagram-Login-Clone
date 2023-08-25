
const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login");

function changeCursor() {
  if (usernameInput.value === "" || passwordInput.value === "") {
    loginButton.style.cursor = "not-allowed";
  } else {
    loginButton.style.cursor = "pointer";
  }
}

usernameInput.addEventListener("input", changeCursor);
passwordInput.addEventListener("input", changeCursor);

