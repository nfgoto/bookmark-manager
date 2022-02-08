import axios from "axios";

let API_HOST = process.env.REACT_APP_API_HOST;
API_HOST = API_HOST ? API_HOST : "localhost";

let API_PORT = process.env.REACT_APP_API_PORT;
API_PORT = API_PORT && parseInt(API_PORT) ? API_PORT : "3000";

export const axiosInstance = axios.create({
  baseURL: `http://${API_HOST}:${API_PORT}`,
});
