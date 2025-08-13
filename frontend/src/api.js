import axios from "axios";

// Change this to your backend URL when deployed
export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
