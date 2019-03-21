import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

interface GlobalStateInterface {
  sidebarCollapsed: boolean;
}

export default new Vuex.Store({
  state: {
    sidebarCollapsed: false,
  },
  mutations: {
    [TOGGLE_SIDEBAR]: (state: GlobalStateInterface): void => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
  actions: {

  },
});
