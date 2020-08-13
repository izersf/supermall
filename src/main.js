import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false  //阻止启动生产消息，常用作指令
Vue.prototype.$bus=new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
