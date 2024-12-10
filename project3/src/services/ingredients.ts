import axios from "axios";
const newAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export default {
  getAll() {
    return newAxios.get("/ingredients").then((res) => res.data);
  }
};

