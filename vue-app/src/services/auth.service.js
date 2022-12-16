import axios from 'axios';
// import xHeader from "@/services/x-header";

export default {
    login(user) {
        return axios.post('/auth/login', user);
    },

    register(user) {
        return axios.post('/auth/register', user);
    }
}