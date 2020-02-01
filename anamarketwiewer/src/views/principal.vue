<template>
    <v-container fluid>
      <v-layout row fill-height>
        <v-flex xs3 class="color_2a2a3f">
          <sidebarCompanty></sidebarCompanty>
        </v-flex>
        <v-flex xs4 class="yellow">
          <searchbar></searchbar>
        <menubuscador></menubuscador>
        </v-flex>
        <v-flex xs5 class="blue">
          <sidebarCompanty></sidebarCompanty>
        </v-flex>
      </v-layout>
    </v-container>
</template>


<script>
  import sidebarCompanty from '@/components/siderbarcompany'
  import menubuscador from '@/components/menubuscador'
  import searchbar from '@/components/searchbar'

  export default {
    components: {
      sidebarCompanty,
      menubuscador,
      searchbar
    
    }
  }
</script>