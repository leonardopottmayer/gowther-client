import axios from "axios";
import { clearApplicationLocalStorage } from "../utils/clearApplicationLocalStorage";

const api = axios.create({
  baseURL: import.meta.env["VITE_BASE_API_URL"],
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@gowther::auth::token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const unauthorizedError = error.response?.status === 401;

    if (unauthorizedError) {
      clearApplicationLocalStorage();

      // window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default api;
