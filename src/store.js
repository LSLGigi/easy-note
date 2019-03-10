import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    lists: [],
  },
  mutations: {
    addItem(state,value){
      state.lists.push(value)
    },
  },
  actions: {

  },
});




