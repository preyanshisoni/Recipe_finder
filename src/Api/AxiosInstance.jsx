
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) =>{
    const token = localStorage.getItem("token");

    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error)=>{
    if(error.response?.status === 401){
      console.log("Unathorized");
    }
    if(error.response?.status === 500){
      console.log("Server Error");
    }
    return Promise.reject(error);
  }
)

export default AxiosInstance;
