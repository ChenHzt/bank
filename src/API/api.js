import axios from "axios";

// let url;
// if (process.env.NODE_ENV === "development") {
//   url = "https://bank-server-chenhzt.herokuapp.com/api";
// }

// if (process.env.NODE_ENV === "production") {
//   console.log(process.env.PORT);
//   url = "https://bank-server-chenhzt.herokuapp.com/api";
// }
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
export default api;
