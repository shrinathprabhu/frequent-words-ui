import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from './common/api.service';

Vue.use(Vuex);

export const FETCH_DATA = "fetchData";
export const POPULATE_DATA = "populateData";
export const START_LOADING = "startLoading";
export const STOP_LOADING = "stopLoading";
export const SHOW_SNACKBAR = "showSnackbar";

export default new Vuex.Store({
  state: {
    frequency: [],
    tableLoadState: false,
    showSnackbar: false,
    snackBarColor: "success",
    snackBarMessage: ""
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
    },

    [SHOW_SNACKBAR] (state, data) {
      state.showSnackbar = true;
      state.snackBarColor = data.success ? "success" : "error";
      state.snackBarMessage = data.message;
    }
  },
  actions: {
    async [FETCH_DATA] (context, payload) {
      context.commit(START_LOADING);
      try {
        const response = await ApiService.getFrequency(payload.topN, payload.isCaseInsensitive);
        if(response.status == 200) {
          context.commit(SHOW_SNACKBAR, {success: true, message: "Data is loaded from https://terriblytinytales.com/test.txt"});
          context.commit(POPULATE_DATA, response.data);
        }
      } catch(e) {
        context.commit(SHOW_SNACKBAR, {success: false, message: `Error ${e.response.status}: ${e.response.statusText}`});
        context.commit(POPULATE_DATA, []);
      }
      context.commit(STOP_LOADING);
    }
  },
  getters: {
    loadState(state) {
      return state.tableLoadState;
    },

    frequencyData(state) {
      return state.frequency;
    },

    snackBarState(state) {
      return state.showSnackbar;
    },

    snackBarColorState(state) {
      return state.snackBarColor;
    },

    snackBarMessageState(state) {
      return state.snackBarMessage;
    }
  }
});
