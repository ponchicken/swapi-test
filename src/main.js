import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.scss'

Vue.config.productionTip = false

Vue.filter('truncate', function (text, stop, clamp) {
	return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
