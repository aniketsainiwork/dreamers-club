import axios from "axios";
import { axiosError } from "src/ApiService/axiosError";

const axiosInstance = axios.create({
    // baseURL: "https://foxfinity-api.signaturedev.in/vendor/v1/",

    baseURL: "https://dreamersclub.co.in/api/",
    headers: {
        // "Accept": '*/*',
        // "Content-Type": 'application/json'
    },
});

// Set Authorization Header in request
axiosInstance.interceptors.request.use(
    (request: any) => {
        let token = localStorage.getItem("authToken");
        if (token && request.headers) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error: any) => axiosError(error)
);

// Handle Responses Error
axiosInstance.interceptors.response.use(
    (res: any) => {
        return res;
    },
    (err: any) => axiosError(err)
);
export { axiosInstance };
