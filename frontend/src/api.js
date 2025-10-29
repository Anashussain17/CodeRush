// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://coderush-dh70.onrender.com/api", 
});

export default API;
