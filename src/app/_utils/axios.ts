// app/_common/utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your actual API base URL
  withCredentials: true, // Enable if your API requires credentials
});

export default api;
