<template>
    <v-container class="bcolor_gradient_97ffdc" fluid>
        <v-layout row fill-height>
            <v-flex xs12 class=" ">
                <p class="mt-3 ml-2 white--text">Search companies by symbol.</p>
                <v-text-field id="textSearch" v-model="search" solo label="" :append-icon="icon"  :append-icon-cb="clearText" class="m-2"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
   import {
        mapState      
    } from 'vuex';

    export default {

        name: 'searchbar',
        components: {},
        computed: {
            search: {
                get() {
                    var esto = this;
                    var value = esto.$store.getters.g_search.title;
                    esto.icon = value == undefined != ''? 'search' : 'close' ;
                    return value;
                },
                set(newValue) {              
                    this.icon = newValue  == ''? 'search' : 'close' ;  
                  
                    this.customFilter(newValue);
                }
            },
             ...mapState({
               
                items:'items'             
            }),
        },
        data() {
            return {
                icon:'search',
                
            }
        },
        methods: {
            customFilter(newvalue) {     

                        
                if (!newvalue) {                    
                     this.$store.dispatch('ACTION_SEARCH', this.items);

                }
                function new_filter(val, newvalue) {
                    return val !== null && ['undefined', 'boolean'].indexOf(typeof val) === -1 &&
                        val.toString().toLowerCase().replace(/[^0-9a-zA-Z&]+/g, " ").indexOf(newvalue) !== -1
                }
                let needleAry = newvalue.toString().toLowerCase().split(",").filter(x => x);

                var searchItems = this.items.filter(row => needleAry.every(needle => Object.keys(row).some(key => new_filter(row[key],
                    needle))));                                  
                this.$store.dispatch('ACTION_SEARCH', searchItems);
            },
            clearText (){               
                    this.icon = 'search';                
                    this.$store.dispatch('ACTION_SEARCH', this.items);     
                    this.$store.dispatch('ACTION_SELECTED_ITEM', '');
                    this.$store.dispatch("ACTION_SET_ISSELECTED",false);
                    

            }
            

        }
    }
</script>