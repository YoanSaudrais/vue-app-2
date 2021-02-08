import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CreateOption from "@/components/CreateOption.vue";

library.add(fab, fas, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.component('CreateOption', CreateOption)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
