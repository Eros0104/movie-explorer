import axios from "axios";

const createAxios = () =>
  axios.create({
    baseURL: "http://localhost:8080",
  });

const api = createAxios();

export default api;
