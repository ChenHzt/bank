import axios from 'axios';
import authHeader from './auth-header';
import api from '../API/api'
// const API_URL = 'http://localhost:8080/api/test/';

class UserService {
//   getPublicContent() {
//     return api.get('all');
//   }

  async getUserData() {
    return await api.get('/users/me', { headers: authHeader() });
  }

  
  async getUserAccounts() {
    return await api.get('/accounts', { headers: authHeader() });
  }

  async getAccountTransactions(accountId) {
    return await api.get(`/accounts/${accountId}/transactions`, { headers: authHeader() });
  }



  async getAccountData(accountId) {
    return await api.get( `/accounts/${accountId}`, { headers: authHeader() });
  }

  // async deposit(accountid,form,amount) {
  //   return await api.patch(`/accounts/${accountid}/${form}`, { headers: authHeader() });
  // }


//   getModeratorBoard() {
//     return api.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return api.get('admin', { headers: authHeader() });
//   }
}

export default new UserService();