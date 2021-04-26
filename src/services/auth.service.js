import axios from "axios";
import api from '../API/api'

class AuthService {
  async login(email,passportId, password) {
    try{
      const response = await api.post("/users/login", {email,passportId,password})
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }
    catch(e){
      throw new Error(e.message);
    }

  }

  async logout() {
    await api.post('users/logout',{
          headers:{
              Authentication:JSON.parse(localStorage.getItem("user")).token
          }
      })
    localStorage.removeItem("user");
  }

  async register(passportId, name,email, password) {
    return await api.post("users", {
      email,
      passportId,
      name,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();