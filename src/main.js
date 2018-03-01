import Vue from 'vue'
import App from './App.vue'

let myVue = new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    machines: {
      first: {
        enabled: true
      },
      second: {
        enabled: false
      }
    }
  }
});
