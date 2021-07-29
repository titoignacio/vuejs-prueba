import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue . use ( VueScrollReveal ,  { 
  class : 'v-scroll-revel' ,  // Una clase CSS aplicada a elementos con la directiva v-scroll-revel; útil para anulaciones de animación. 
  duración : 3000 , 
  escala : 1 , 
  distancia: '100px' , 
  
} ) ;