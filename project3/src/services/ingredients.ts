import axios from "axios";
const newAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
});

export default {
  getAll() {
    return newAxios.get("/ingredients").then((res) => res.data);
  }
};

