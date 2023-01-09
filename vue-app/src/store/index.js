import { createStore } from "vuex";
import axios from "axios";

const currentToken = localStorage.getItem("token");
const currentUser = JSON.parse(localStorage.getItem("user"));

if (currentToken !== null) {
  axios.defaults.headers.common["x-access-token"] = `Bearer ${currentToken}`;
}

const store = createStore({
  state: {
    accessToken: currentToken || "",
    user: currentUser || {},
    account: {
      accountId: 0,
      userId: 0,
      balance: 0,
    },
    transfer: {
      transferId: 0,
      amount: 0,
      status: "",
      accountFromId: 0,
      accountToId: 0,
    },
    users: [],
    transfers: [],
  },
  mutations: {
    SET_AUTH_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
      localStorage.setItem("token", accessToken);
      axios.defaults.headers.common["x-access-token"] = `${accessToken}`;
    },
    SET_ACTIVE_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    SET_ACTIVE_ACCOUNT(state, account) {
      state.account = account;
    },
    SET_ACTIVE_TRANSFER(state, transfer) {
      state.transfer = transfer;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_TRANSFERS(state, transfers) {
      state.transfers = transfers;
    },
    LOGOUT(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.accessToken = "";
      state.user = {};
      state.account = {};
      state.users = {};
      state.transfers = {};
      axios.defaults.headers.common = {};
    },
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    activeToken(state) {
      return state.accessToken;
    },
    activatedUsers(state) {
      return state.users;
    },
    filteredUsers(state, getters) {
      return state.users.filter((user) => {
        return user.id !== getters.currentUser.id;
      });
    },
  },
  modules: {},
});

export default store;
