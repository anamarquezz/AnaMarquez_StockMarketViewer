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

        <v-container class="grey lighten-4">
            <v-layout row fill-height >                         
                    <v-bottom-nav :active.sync="bottomNav" :value="true" >
                        <v-btn  color="teal" flat  value="recent">
                            TOP GAIN COMPANIES                     
                        </v-btn>
                        <v-btn color="teal" flat value="favorites">
                            TOP MOST ACTIVE COMPANIES                        
                        </v-btn>

                       
                    </v-bottom-nav>
                

            </v-layout>
        </v-container>
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