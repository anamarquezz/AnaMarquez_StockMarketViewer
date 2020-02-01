<template>
    <div>
        <v-container class="color_97ffdc">
            <v-layout row fill-height>
                <v-flex xs12 class=" text-center">
                    <p lass="mt-3">Search companies by symbol.</p>
                    <v-text-field v-model="search" solo label="" append-icon="search" class="m-2"></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>         
        <v-item-group  class="grey lighten-4 "> 
            <v-container grid-list-md full>
                <v-layout>   
                    <v-flex  xs6>
                        <v-item>
                            <v-card slot-scope="{ active, toggle }" :color="active ? 'color_2a2a3f' : 'transparent'"
                                class="d-flex align-center w-100"  dark height="50" @click="toggle">
                                <v-scroll-y-transition>
                                    <div v-if="active" class="">
                                        TOP GAIN COMPANIES
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                    </v-flex>
                    <v-flex  xs6>
                        <v-item>
                            <v-card slot-scope="{ active, toggle }" :color="active ? 'color_2a2a3f' : 'transparent'"
                                class="d-flex align-center w-100" dark height="50" @click="toggle">
                                <v-scroll-y-transition>
                                    <div v-if="active" class="">
                                        TOP MOST ACTIVE COMPANIES
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-item-group>
       
    </div>
</template>
<script>
    export default {
        name: 'menubuscador',
        components: {

        },
        data() {
            return {
                search: ''
            }
        },
        methods: {

        }
    }
</script>
<style scope>
    .theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
        border-radius: 30px !important;
    }

    .v-text-field.v-text-field--solo .v-input__control {
        min-height: 35px !important;
    }

    .v-item-group.v-bottom-nav--absolute {
        position: inherit !important;
    }
</style>