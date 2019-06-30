import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from './common/api.service';

Vue.use(Vuex);

export const FETCH_DATA = "fetchData";
export const POPULATE_DATA = "populateData";
export const START_LOADING = "startLoading";
export const STOP_LOADING = "stopLoading";

export default new Vuex.Store({
  state: {
    frequency: [],
    tableLoadState: false
  },
  mutations: {
    [START_LOADING] (state) {
      state.tableLoadState = true;
    },

    [STOP_LOADING] (state) {
      state.tableLoadState = false;
    },

    [POPULATE_DATA] (state, frequency) {
      state.frequency = frequency;
    }
  },
  actions: {
    async [FETCH_DATA] (context, payload) {
      context.commit(START_LOADING);
      const response = await ApiService.getFrequency(payload.topN, payload.isCaseInsensitive);
      context.commit(POPULATE_DATA, response.data);
      context.commit(STOP_LOADING);
    }
  },
  getters: {
    loadState(state) {
      return state.tableLoadState
    },

    frequencyData(state) {
      return state.frequency
    }
  }
});
