<template>
    <div>
        <v-item-group class="text-center">
            <v-layout>
                <v-flex xs6x class="">
                    <v-item>
                        <v-card  slot-scope="{ active, toggle }" :color="active ? 'bcolor_bfbfbf' : 'grey lighten-4'"
                            class="d-flex align-center w-100 black---text " dark height="50" @click="toggle">
                            <v-scroll-y-transition>
                                <div v-if="active">
                                    TOP GAIN COMPANIES
                                </div>
                                <div v-else class="black--text ml-1">
                                    TOP GAIN COMPANIES
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-flex>
                <v-flex xs6 class="mr-n3">
                    <v-item>
                        <v-card  slot-scope="{ active, toggle }" :color="active ? 'bcolor_2a2a3f' : 'grey lighten-4'"
                            class="d-flex align-center w-100 black---text border-button-c ml-n3" dark height="50"
                            @click="toggle">
                            <v-scroll-y-transition>
                                <div v-if="active" class="">
                                    TOP MOST ACTIVE COMPANIES
                                </div>
                                <div v-else class="black--text ml-1">
                                    TOP MOST ACTIVE COMPANIES
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
                search: '',
               
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

    .border-button-c {
        border-radius: 0px 0px 0px 19px !important;
    }
</style>