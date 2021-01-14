import Vue from 'vue'
import VueResource from "vue-resource";
import App from './App.vue'
import store from "./vuex/store";

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
