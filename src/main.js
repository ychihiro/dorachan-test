import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios";

createApp(App).use(store).use(router).mount('#app')

// axios.defaults.withCredentials = true;
// axios.defaults.xsrfHeaderName = "X-CSRF-Token";
// app.prototype.$axios = axios;