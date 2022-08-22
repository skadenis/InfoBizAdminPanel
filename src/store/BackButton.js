
const state = () => ({
  back_num: -1
});

const getters = {
  goBack(state) {
    return state.back_num;
  }
};

const mutations = {
  SET_GO_BACK_NUM(state, payload) {
    state.back_num = payload;
  }
};

const actions = {
  setGoBack({ commit }, number) {
    commit('SET_GO_BACK_NUM', number);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
