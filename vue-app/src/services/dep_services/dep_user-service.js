import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3500/test/user/';

class UserService {
    listUsers() {
        return axios.get(API_URL, { headers: authHeader() });
    }
    findByUsername(username) {
        return axios.get(API_URL + username, { headers: authHeader() });
    }

}
export default new UserService();