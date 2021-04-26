import axios from 'axios';
import authHeader from './auth-header';
import api from '../API/api'
// const API_URL = 'http://localhost:8080/api/test/';

class AccountService {

  async accountAction(accountid,form,amount) {
    return await api.patch(`/accounts/${accountid}/${form}`, {amount},{ headers: authHeader() });
  }

  async transfer(fromAccountid,toAccountid,form,amount) {
    return await api.patch(`/transfer/${fromAccountid}/${toAccountid}`, {amount},{ headers: authHeader() });
  }


  

}

export default new AccountService();