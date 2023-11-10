import axios from 'axios';

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.44:3000', // Replace with your API's base URL
  timeout: 5000, // Request timeout in milliseconds (adjust as needed)
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

// Add a request interceptor to set common headers or perform actions before requests are sent
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add common headers here, such as authorization tokens
    // config.headers['Authorization'] = 'Bearer your-token';

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses or errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    // Handle response errors here
    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.error('HTTP Error:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else {
      // Something else happened while setting up the request
      console.error('Request Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
