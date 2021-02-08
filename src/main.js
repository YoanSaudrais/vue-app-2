import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import CreateOption from "@/components/CreateOption.vue";


Vue.config.productionTip = false
Vue.component('CreateOption', CreateOption)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
