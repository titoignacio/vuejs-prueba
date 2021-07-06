<template>
  <div id="app">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <micomponente></micomponente>
    <header-component></header-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import Micomponente from './components/Micomponente.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Micomponente,
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
