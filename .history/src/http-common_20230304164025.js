import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:300/api",
  headers: {
    "Content-type": "application/json"
  }
});