import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

Vue.component('machine', {
  props: ['machine'],
  template: "<li>   La machine nommée <span v-bind:class=\"{red: !machine.enabled}\">{{machine.name}}</span> est\n" +
  "        <toggle-button class=\"changed-font\" v-bind:color=\"{checked: '#1fd615', unchecked: '#d61e14'}\" v-bind:labels=\"{checked: 'Active', unchecked: 'En panne'}\" v-bind:width=\"110\" v-bind:height=\"30\" v-model='machine.enabled' :toggled='machine.enabled'/>\n" +
  "  </li>",
});

Vue.component('ajout-machine',{
  props: ['machineAajouter'],
  template:"<div>"+
  "<div class=\"row justify-content-center\">"+
  "<label for=\"nouvelleMachine\" class=\"col-lg-1\">Nom :</label>\n" +
  "      <input class=\"form-control col-lg-4\" type=\"text\" id=\"nouvelleMachine\" v-model=\"machineAajouter.name\">\n" +
  "      <toggle-button class=\"changed-font\" v-bind:color=\"{checked: '#1fd615', unchecked: '#855bd6'}\" v-bind:labels=\"{checked: 'Active', unchecked: 'En panne'}\" v-bind:width=\"110\" v-bind:height=\"30\" v-model=\"machineAajouter.enabled\"/>" +
    "</div>"+
  "<button v-on:click =\"add\" class=\"btn btn-success\">Ajouter aux machines</button>" +
  "</div>",
  methods:{
    add(){
      this.$emit('add')
    }
  }
});

let myVue = new Vue({
    el: '#app',
    render: h => h(App),
  })
;


