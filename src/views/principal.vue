<template>
  <v-container fluid class="pc">
    <v-layout fill-height :[dinamic]='true' v-resize="onResize">
      <v-flex xs12  lg3 class="bcolor_2a2a3f">
        <sidebarCompany></sidebarCompany>
      </v-flex>
      <v-flex xs3 lg3 class="grey lighten-5">
        <searchbar></searchbar>
        <menubuscador></menubuscador>
        <listmenu></listmenu>
      </v-flex>
      <v-flex xs6 class="grey lighten-4">
        <sidebarData v-if="isSelected"></sidebarData>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import sidebarCompany from '@/components/siderbarcompany'
  import sidebarData from '@/components/sidebar_data'
  import menubuscador from '@/components/menubuscador'
  import searchbar from '@/components/searchbar'
  import listmenu from '@/components/listmenu'
  import {
    mapState
  } from 'vuex';

  export default {
    components: {
      sidebarCompany,
      sidebarData,
      menubuscador,
      searchbar,
      listmenu
    },
    computed: {
      ...mapState({
        isSelected:'isSelected'

      }),

    },
    data() {
      return {
        isMobile: false,
        dinamic: 'row'
      }
    },
    methods: {
      onResize() {
        if (window.innerWidth < 1272) {
          this.isMobile = true;
          this.dinamic = 'column';
        } else {
          this.isMobile = false;
          this.dinamic = 'row';
        }
      },
    },
  }
</script>
<style scope>
   .pc{
     padding: 0px !important;
   }
</style>