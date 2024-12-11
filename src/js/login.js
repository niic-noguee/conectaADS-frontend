const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const togglePasswordButtons = document.querySelectorAll(".toggle-password");

// Troca de formulário 
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Alternar visualização de senha
togglePasswordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.getAttribute("data-target"));
    const type = target.getAttribute("type") === "password" ? "text" : "password";
    target.setAttribute("type", type);
    button.classList.toggle("fa-eye-slash", type === "text"); // Alterna o ícone
    button.classList.toggle("fa-eye", type === "password");
  });
});
