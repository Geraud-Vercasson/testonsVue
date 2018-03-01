<template>
  <div id="app">
    <img src="./assets/logo.png">q
    <ol>
      <li v-for="(machine,index) in machines">
        La machine nommée <span v-bind:class="{red: !machine.enabled}">{{machine.name}}</span> est <span v-bind:class="{red: !machine.enabled}">{{machine.enabled? 'ACTIVE': 'EN PANNE'}}</span>
        <button class="btn btn-info" v-on:click="edit(index)">Modifier le statut</button>
      </li>
    </ol>
    <h2>Ajouter une machine</h2>
    <div class="row justify-content-center">
      <label for="nouvelleMachine" class="col-lg-1">Nom :</label>
      <input class="form-control col-lg-4" type="text" id="nouvelleMachine" v-model="machineTemporaire.name">
      <label for="nouvelleMachineEnabled" class="col-lg-1">Active?</label>
      <input id="nouvelleMachineEnabled" type="checkbox" v-model="machineTemporaire.enabled">
    </div>
    <button v-on:click ="addToMachines" class="btn btn-success">Ajouter aux machines</button>
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
        test: true
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

  /* Bootstrap Toggle v2.2.2 corrections for Bootsrtap 4*/
  .toggle-off {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
  .toggle.off {
    border-color: rgba(0, 0, 0, .25);
  }

  .toggle-handle {
    background-color: white;
    border: thin rgba(0, 0, 0, .25) solid;
  }

  .red{
    color: red;
  }
</style>
