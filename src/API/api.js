import axios from "axios";

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:5000/api";
}

if (process.env.NODE_ENV === "production") {
  console.log(process.env.PORT);
  url = "https://bank-server-chenhzt.herokuapp.com/api";
}
const api = axios.create({
  baseURL: url,
});
export default api;
