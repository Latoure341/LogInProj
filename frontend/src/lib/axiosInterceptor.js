import api from "./api";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error = null) => {
  failedQueue.forEach(promise => {
    if (error) promise.reject(error);
    else promise.resolve();
  });
  failedQueue = [];
};

api.interceptors.response.use(
  response => response, // just return if OK
  async error => {
    const originalRequest = error.config;

    // Only handle 401 once
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Hit refresh endpoint
        await api.post("/auth/refresh"); 
        processQueue();
        return api(originalRequest); // retry original request
      } catch (err) {
        processQueue(err);
        window.location.href = "/login"; // force logout
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
