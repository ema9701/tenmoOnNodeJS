import axios from 'axios';
// import xHeader from "@/services/x-header";

export default {
    listUsers() {
        return axios.get('/user')
    },

    getUserByUsername(username) {
        return axios.get(`/user/${username}`);
    }
}