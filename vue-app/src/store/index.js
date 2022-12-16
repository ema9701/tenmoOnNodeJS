import { createStore } from 'vuex';
import axios from 'axios';

const currentToken = localStorage.getItem('token');
const currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken !== null) {
    axios.defaults.headers.common['x-access-token'] = `Bearer ${currentToken}`;
}

const store = createStore({
    state: {
        accessToken: currentToken || '',
        user: currentUser || {},
        account: {
            accountId: 0,
            userId: 0,
            balance: 0
        },
        transfers: [
            {
                transferId: 0,
                amount: 0,
                status: '',
                accountFromId: 0,
                accountToId: 0
            }
        ]
    },
    mutations: {
        SET_AUTH_TOKEN(state, accessToken) {
            state.accessToken = accessToken;
            localStorage.setItem('token', accessToken);
            axios.defaults.headers.common['x-access-token'] = `${accessToken}`
        },
        SET_USER(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        SET_ACCOUNT(state, account) {
            state.account = account;
        },
        UPDATE_BALANCE(state, newBalance) {
            state.account.balance = newBalance;
        },
        LOGOUT(state) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.accessToken = '';
            state.user = {};
            state.account = {};
            axios.defaults.headers.common = {};
        }
    },
    modules: {
    }

});

export default store;