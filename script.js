const card = document.getElementById("card");
const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");
const leftText = document.getElementById("leftText");

document.getElementById("toRegister").onclick = () => {
  card.classList.add("register-active");
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  leftText.innerText = "WELCOME!";
};

document.getElementById("toLogin").onclick = () => {
  card.classList.remove("register-active");
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
  leftText.innerText = "WELCOME BACK!";
};