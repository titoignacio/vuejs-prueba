<template>
  <div id="app">
    <header-component></header-component>
    <LogoComponent></LogoComponent>
    <TituloPortada></TituloPortada>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LogoComponent from './components/LogoComponent.vue'
import TituloPortada from './components/TituloPortada.vue'




export default {
  name: 'App',
  components: {
    HeaderComponent,
    LogoComponent,
    TituloPortada
  }
}
</script>

<style>

@import './assets/styles.css'

</style>


