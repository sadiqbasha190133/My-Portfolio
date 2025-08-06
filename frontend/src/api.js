import axios from "axios";

// Change this to your backend URL when deployed
export const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
