import * as Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

const state = () => ({
  id: null,
  name: null,
  surname: null,
  lastname: null,
  authStatus: false,
  authToken: null,
});

const getters = {
  getUserId(state) {
    return state.id;
  },

  getUserAuthStatus(state) {
    return state.authStatus;
  },

  getUserLanguage(state) {
    return state.language === "" ? "RU" : state.language;
  },

  getUserAuthToken(state) {
    return state.authToken;
  },

  getUserInfo(state) {
    return {
      id: state.id,
      name: state.name,
      surname: state.surname,
      lastname: state.lastname,
    };
  },
};

const mutations = {
  SET_USER_DATA(state, payload) {
    state.id = payload.id;
    state.name = payload.name;
    state.surname = payload.surname;
    state.lastname = payload.lastname;
  },
  SET_USER_LANGUAGE(state, payload) {
    state.language = payload;
  },
  SET_USER_AUTH_TOKEN(state, payload) {
    state.authStatus = true;
    state.authToken = payload;
  },
  EXIT_USER(state, payload) {
    state.id = null;
    state.name = null;
    state.surname = null;
    state.lastname = null;
    state.authStatus = false;
    state.authToken = null;
  },
};

const actions = {
  changeTakeOrdersStatus({ commit }, status) {
    commit("SET_USER_TAKE_ORDERS_STATUS", status);
  },
  changeLanguage({ commit }, lang) {
    commit("SET_USER_LANGUAGE", lang);
  },
  async setAuthToken({ commit }, token) {
    await Cookie.set("token", token);
    let decoded_token = jwt_decode(token);

    commit("SET_USER_AUTH_TOKEN", token);
    commit("SET_USER_DATA", decoded_token);
  },
  exit({ commit }, status) {
    commit("EXIT_USER", status);
    Cookie.set("token", null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
