<template>
  <v-app>
 <router-view />
  </v-app>


</template>

<script> 
</script>

<style>
   @import url('assets/css/global.css'); 
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .resultContainer {
    height: 350px;
  }
  
</style>