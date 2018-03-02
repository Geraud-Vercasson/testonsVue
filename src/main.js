import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

Vue.component('machine', {
  props: ['name', 'enabled'],
  template: "<div>   La machine nommée <span v-bind:class=\"{red: !enabled}\">{{name}}</span> est\n" +
  "        <toggle-button class=\"changed-font\" v-bind:color=\"{checked: '#1fd615', unchecked: '#d61e14'}\" v-bind:labels=\"{checked: 'Active', unchecked: 'En panne'}\" v-bind:width=\"110\" v-bind:height=\"30\" v-bind:value='enabled' @change='enableChanged'/>\n" +
  "  </div>",
  methods: {
    enableChanged() {
      this.$emit('enableChanged')
    }
  }
});

let myVue = new Vue({
  el: '#app',
  render: h => h(App),
})
;


