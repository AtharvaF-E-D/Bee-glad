import axios from "axios"
// const BASE_URL = "http://192.168.1.12:5001/api/";
// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://ioweb3.io/bgladapi/api/";

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
});

