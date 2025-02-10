import axios from "axios";

const htpp = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default htpp;