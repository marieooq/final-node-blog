import axios from "axios";

let accessPoint = "http://localhost:8000";

export const api = axios.create({
  baseURL: accessPoint
});
