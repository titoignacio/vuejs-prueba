<template>
  <div id="app">
    <header-component></header-component>
    <LogoComponent></LogoComponent>
    <TituloPortada></TituloPortada>
    <Carusel></Carusel>
    <Contenido></Contenido>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import LogoComponent from './components/LogoComponent.vue'
import TituloPortada from './components/TituloPortada.vue'
import Carusel from './components/Carusel.vue'
import Contenido from './components/Contenido.vue'




export default {
  name: 'App',
  components: {
    HeaderComponent,
    LogoComponent,
    TituloPortada,
    Carusel,
    Contenido
  }
}
</script>

<style>

@import './assets/styles.css'

</style>


