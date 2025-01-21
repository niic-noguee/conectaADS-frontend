const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Abre/Fecha o menu ao clicar no botão
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Fecha o menu ao clicar em um link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Configuração do ScrollReveal para os elementos da página "Guias"
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 300 });

// Redirecionamento para o botão de login
const loginButton = document.getElementById("login-btn");
if (loginButton) {
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html"; 
  });
}
