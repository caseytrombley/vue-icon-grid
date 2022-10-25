import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('trimString', function (string, num) {
  const length = num || 10;
  return string.length > length ? string.substring(0, length) + "..." : string;
})

new Vue({
  render: h => h(App),
}).$mount('#app')
