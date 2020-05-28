import Vue from "vue";
import App from "./App.vue";
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
