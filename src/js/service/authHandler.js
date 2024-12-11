import { signup, login } from "./authService.js";

// Exibe mensagens de feedback
const showFeedback = (elementId, message, isSuccess = false) => {
   const feedbackElement = document.getElementById(elementId);
   feedbackElement.textContent = message;
   feedbackElement.style.display = "block";
   feedbackElement.classList.toggle("success", isSuccess);

   setTimeout(() => {
       feedbackElement.style.display = "none"; // Ocultar após 5 segundos
   }, 5000);
};

// Cadastro
export const handleSignup = async (form) => {
   const name = form.querySelector('input[placeholder="Name"]').value;
   const email = form.querySelector('input[placeholder="Email"]').value;
   const password = form.querySelector('input[placeholder="Password"]').value;

   if (!name || !email || !password) {
       showFeedback("signup-feedback", "Preencha todos os campos.");
       return;
   }

   try {
       const result = await signup({ name, email, password });
       if (result.error) {
           showFeedback("signup-feedback", result.error);
       } else {
           showFeedback("signup-feedback", "Cadastro realizado com sucesso!", true);
       }
   } catch (error) {
       console.error("Erro ao realizar cadastro:", error);
       showFeedback("signup-feedback", "Erro interno. Tente novamente.");
   }
};

// Login
export const handleLogin = async (form) => {
   const email = form.querySelector('input[placeholder="Email"]').value;
   const password = form.querySelector('input[placeholder="Password"]').value;

   if (!email || !password) {
       showFeedback("signin-feedback", "Preencha todos os campos.");
       return;
   }

   try {
       const result = await login({ email, password });
       if (result.error) {
           showFeedback("signin-feedback", result.error);
       } else {
           localStorage.setItem("token", result.token);
           showFeedback("signin-feedback", "Login realizado com sucesso!", true);
       }
   } catch (error) {
       console.error("Erro ao realizar login:", error);
       showFeedback("signin-feedback", "Erro interno. Tente novamente.");
   }
};
