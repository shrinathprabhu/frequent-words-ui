import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const API_URL = "https://frequent-words.herokuapp.com";

const ApiService = {
    init() {
      Vue.use(VueAxios, axios);
    },

    setBaseUrlAndHeader() {
        Vue.axios.defaults.baseURL = API_URL;
        Vue.axios.defaults.headers.get["custom-header"] = "test-app";
    },

    getFrequency(topN, isCaseInsensitive) {
        let queryString = '1=1';
        if(topN !== undefined) {
            queryString += `&topN=${topN}`;
        } else {
            queryString += `&topN=0`;
        }
        if(isCaseInsensitive) {
            queryString += `&isCaseInsensitive=true`;
        } else {
            queryString += `&isCaseInsensitive=false`;
        }
        return Vue.axios.get(`frequent-words?${queryString}`);
    }

}

ApiService.setBaseUrlAndHeader();

export default ApiService;