<template>
  <div id="app">
    <img src="http://www.thelogofactory.com/wp-content/uploads/2015/08/coffee-services-unlimited-logo.png">
    <div>
      Filtrer les résultats <toggle-button class="changed-font" v-bind:width="100" v-bind:height="30" v-bind:labels="{checked: 'Toutes', unchecked: 'Actives'}" v-model="afficheInactives"/>
    </div>
    <ul>
        <machine v-for="machine in machines" v-if='afficheInactives || machine.enabled' :machine="machine"/>
    </ul>
    <h2>Ajouter une machine</h2>

    <ajout-machine :machineAajouter="machineTemporaire" @add="addToMachines"/>

    <h2>Supprimer une machine</h2>
    <div class="row justify-content-center">
      <select v-model="toRemove" id="toRemove" class="form-control col-lg-4">
        <option v-for="(machine, index) in machines" :value="index">{{machine.name}}</option>
      </select>
      <button class="btn btn-danger" v-on:click="remove(toRemove)">Supprimer</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        machines: [
          {
            name: "Starbucks' shitty coffee",
            enabled: true
          },
          {
            name: "Grand-Mère est une voleuse",
            enabled: false
          }
        ],
        machineTemporaire: {
          name:"",
          enabled:false
        },
        toRemove: null,
        afficheInactives: true
      }
    },
    methods: {
      addToMachines(){
        if(this.machineTemporaire.name != ""){
          this.machines.push({name: this.machineTemporaire.name, enabled: this.machineTemporaire.enabled});
        }
      },
      remove(selected){
        if(selected != null){
          this.machines.splice(selected,1);
        }
      },
      edit(selected){
        this.machines[selected].enabled = !this.machines[selected].enabled
      }
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: darkblue;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: firebrick;
  }

  span{
    font-weight: bold;
    color: green;
  }

  .red{
    color: red;
  }

  .vue-js-switch.changed-font{
    font-size: 16px;
  }
</style>
