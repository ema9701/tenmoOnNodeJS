import axios from 'axios';
import authHeader from './dep_services/auth-header';

const API_URL = 'http://localhost:3500/test/account/';

class AccountService {
    getAccountByUserId(accountId) {
        return axios.get(API_URL + accountId, { headers: authHeader() });
    }
}

export default new AccountService();