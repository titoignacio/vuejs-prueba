<template>
    
  <!--navbar-->

  <nav class="navbar navbar-expand-lg navbar-light bg-light navb" v-scroll-reveal.reset>
   <div class="container">
     <a class="navbar-brand" href="index.html">
   <img src="../assets/img/puente_cuantico_final.png" width="110" height="80" alt="" loading="lazy">
    </a>
     <a class="navbar-brand" href="index.html">Puente Cuántico</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav ml-auto">
   <li class="nav-item active">
     <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">¿Quiénes Somos?</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Articulos</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Videos</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Donaciones</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Contacto</a>
   </li>
 </ul>
</div>
</div>
</nav>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>
