import API_BASE_URL from "./apiConfig.js";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cadastro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    throw error;
  }
};
