import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';

Vue.config.productionTip = false;

store.dispatch('auth/me').then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
})
