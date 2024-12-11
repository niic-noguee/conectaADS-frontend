const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Abre/Fecha o menu ao clicar no botão
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Fecha o menu ao clicar em um link
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Configuração do ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".news__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".events__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Configuração do Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
});

// Redirecionamento para páginas ao clicar nos botões
const loginButton = document.getElementById("login-btn");
const registerButton = document.getElementById("register-btn");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html"; 
  });
}

if (registerButton) {
  registerButton.addEventListener("click", () => {
    window.location.href = "login.html"; 
  });
}