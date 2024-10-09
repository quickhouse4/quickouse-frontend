import axios from "axios";

export default axios.create({
  baseURL: "http://197.243.26.162/api",
  headers: { 
    "Content-type": "application/json"
  }
});