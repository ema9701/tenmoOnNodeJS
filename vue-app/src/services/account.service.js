import http from 'axios';

export default {

    getAccountById(userId) {
        return http.get(`/account/${userId}`);
    }
}