<template>
    <div>
   
        <v-item-group class="grey lighten-4 ">
            <v-layout>
                <v-flex xs6x>
                    <v-item>                    
                        <v-card slot-scope="{ active, toggle }" :color="active ? 'color_2a2a3f' : 'transparent'"
                            class="d-flex align-center w-100 black---text" dark height="50" @click="toggle">
                            <v-scroll-y-transition>
                                <div v-if="active" class="">
                                    TOP GAIN COMPANIES
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-flex>
                <v-flex xs6>
                    <v-item>
                        <v-card slot-scope="{ active, toggle }" :color="active ? 'color_2a2a3f' : 'transparent'"
                            class="d-flex align-center w-100 black---text border-button-c" dark height="50" @click="toggle">
                            <v-scroll-y-transition>
                                <div v-if="active" class="">
                                    TOP GAIN COMPANIES
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-flex>
            </v-layout>

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
    .border-button-c{
            border-radius: 0px 0px 0px 19px !important;
    }
</style>