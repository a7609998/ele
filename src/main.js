import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.scss'
import './assets/iconfont/iconfont.css'
import './registerServiceWorker'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
