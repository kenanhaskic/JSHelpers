import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
