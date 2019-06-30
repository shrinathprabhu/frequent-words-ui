import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const ApiService = {
    init() {
      Vue.use(VueAxios, axios);
    //   Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
          "custom-header"
        ] = 'test-app';
    },

    getFrequency(topN, isCaseInsensitive) {
        let queryString = '1=1';
        if(topN !== undefined) {
            queryString += `&topN=${topN}`;
        } else {
            queryString += `&topN=0`;
        }
        queryString += `&isCaseInsensitive=${isCaseInsensitive}`;
        return Vue.axios.get(`http://localhost:3000/frequent-words?${queryString}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }

}

export default ApiService;