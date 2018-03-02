import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

let myVue = new Vue({
  el: '#app',
  render: h => h(App),
})
;


