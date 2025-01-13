// src/axiosInstance.js

import axios from 'axios';

// Create and export the Axios instance with a base URL
const baseUrl = axios.create({
  baseURL: 'https://asset-flow-server.vercel.app/',  // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  
});



export default baseUrl;
