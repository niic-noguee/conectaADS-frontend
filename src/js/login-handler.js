import { handleSignup, handleLogin } from "../js/service/authHandler.js";

const signupForm = document.querySelector(".sign-up form");
const signinForm = document.querySelector(".sign-in form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSignup(signupForm);
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLogin(signinForm);
});
