<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ol>
      <li>La machine 1 est {{machines.first.enabled? 'ACTIVE': 'EN PANNE'}}</li>
      <li>La machine 2 est {{machines.second.enabled? 'ACTIVE': 'EN PANNE'}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        machines: {
          first: {
            enabled: true
          },
          second: {
            enabled: false
          }
        }
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
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: firebrick;
  }
</style>
