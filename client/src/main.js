import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import router from './router'

Vue.use(HighchartsVue)

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
