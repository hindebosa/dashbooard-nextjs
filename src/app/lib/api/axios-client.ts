import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api", // Next.js API routes base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // You can modify requests here (e.g., add auth token)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data, // Automatically unwrap data
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with a status other than 2xx
      return Promise.reject({
        message: error.response.data?.message || "An error occurred",
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject({ message: "No response received from server" });
    } else {
      // Something happened in setting up the request
      return Promise.reject({ message: error.message });
    }
  }
);

export default axiosClient;
