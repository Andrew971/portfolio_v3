import axios from "axios";

export const apiURL =""
export const devApiURL ="http://localhost:8080"


export const devToken = axios.create({
  baseURL: `${devApiURL}/token`,
  timeout: 0,
  
});

export const productApi = axios.create({
  baseURL: `${apiURL}/products`,
  timeout: 0,
  
});
