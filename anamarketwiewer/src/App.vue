<template>
  <v-app>
    <v-container fluid>
      <v-layout row fill-height>
        <v-flex xs3 class="color_2a2a3f">
          <sidebarCompanty></sidebarCompanty>
        </v-flex>
        <v-flex xs4 class="yellow">
          <menubuscador></menubuscador>
        </v-flex>
        <v-flex xs5 class="blue">
          <sidebarCompanty></sidebarCompanty>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>


</template>

<script>
  import sidebarCompanty from '@/views/siderbarcompany'
  import menubuscador from '@/views/menubuscador'
  export default {
    components: {
      sidebarCompanty,
      menubuscador
    }
  }
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