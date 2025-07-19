import axios from "axios";

export default axios.create({
  baseURL: "https://quickhouse-436caeb406a0.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});