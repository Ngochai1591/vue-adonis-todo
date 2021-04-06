import "vuetify/dist/vuetify.min.css";
import { sync } from "vuex-router-sync";

import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import Panel from './components/Panel'

Vue.config.productionTip = false;
sync(store, router);
// Vue.component('Panel', Panel)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
