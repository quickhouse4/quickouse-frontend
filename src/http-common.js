import axios from "axios";

export default axios.create({
  baseURL: "https://quickhouse.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});