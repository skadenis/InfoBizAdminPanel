import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import User from './User';
import BackButton from './BackButton';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    BackButton
  },
  strict: false,
  plugins: [vuexLocal.plugin],
});
