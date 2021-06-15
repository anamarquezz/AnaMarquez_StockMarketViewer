<template>
    <v-container class="mt-n3" fluid v-resize="onResize">
        <v-layout row>
            <v-flex xs12>
                <v-list two-line>
                    <div style="display:none">{{search}}</div>
                    <template v-for="(item, index) in search_item">
                      

                        <v-list-tile v-if="!show && isMobile "
                            :key="item.action" ripple class="elevation">
                            <v-list-tile-action v-if="selected.indexOf(index) != -1" class="ml-n3">
                                <div class="bcolor_efcd60 h-100 w-50 inline">

                                    <v-btn flat  @click="back(index)" class="ml-n5 mt-4" >                                        
                                        <v-icon right dark>fas fa-chevron-left</v-icon>
                                    </v-btn>
                                   
                                    <h1 class="ml-5 mt-n5 f-w100">|</h1>
                                    <h1 class="ml-5 mt-n5 f-w100">|</h1>

                                </div>
                            </v-list-tile-action>

                            <v-list-tile-content avatar @click="selected_item(index,item)">

                                <v-list-tile-title class="font-weight-bold text-uppercase">| {{ item.title }}
                                </v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text class="mt-5">{{ item.action }}</v-list-tile-action-text>
                            </v-list-tile-action>

                        </v-list-tile>


                        <v-list-tile v-if="show" :key="item.action" avatar ripple @click="selected_item(index,item)"
                            class="elevation">
                            <v-list-tile-action v-if="selected.indexOf(index) != -1" class="ml-n3">
                                <div class="bcolor_efcd60 h-100 w-50 inline">
                                    <h1 class="ml-5 mt-2 f-w100">|</h1>
                                    <h1 class="ml-5 mt-n5 f-w100">|</h1>
                                </div>
                            </v-list-tile-action>

                            <v-list-tile-content>

                                <v-list-tile-title class="font-weight-bold text-uppercase">                                     
                                     {{ item.title }}                                                                  
                                </v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text class="mt-5">{{ item.action }}</v-list-tile-action-text>
                            </v-list-tile-action>

                        </v-list-tile>

                    </template>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    export default {
        computed: {
            search: {
                get() {
                    var esto = this;
                    var value = esto.$store.getters.g_search.title;     
                    if(value == undefined ){
                        esto.show = true;
                        esto.selected = [];
                        esto.$store.dispatch("ACTION_SET_ISSELECTED",false);
                    }
                          
                    return value;
                },
            },
            ...mapState({
                search_item: 'search_item',
                selected_items:'selected_items',
                items: 'items' ,                
            }),
             
        },
        data() {
            return {
                selected: '',
                isMobile: false,
                show: true
            }
        },

        methods: {
            selected_item(index, item) {
                this.selected = []
                this.selected.push(index)
                this.$store.dispatch('ACTION_SELECTED_ITEM', item);
                if(this.isMobile){
                    this.show =false;
                }
                this.$store.dispatch("ACTION_SET_ISSELECTED",true);
               
            },
            onResize() {
                if (window.innerWidth < 1272) {
                    this.isMobile = true;
                    this.dinamic = 'column';
                     this.show =false;
                } else {
                    this.isMobile = false;
                    this.dinamic = 'row';
                     this.show =true;
                  
                }
            },
            back(index) {
                if (this.isMobile && this.selected.indexOf(index) != -1) {
                    this.show = true;
                    this.selected = []
                     this.$store.dispatch("ACTION_SET_ISSELECTED",false);
                }else{
                    this.show=false;
                }
            },
            selecteed(){
                this.$store.dispatch('ACTION_SELECTED_ITEM', this.items[this.selected[0]]);
                 this.$store.dispatch("ACTION_SET_ISSELECTED",true);
            }


        },
        mounted() {
            //  this.selecteed();
        },
    }
</script>
<style scope>
    .elevation {
        box-shadow: 0 7px 2px -8px rgba(0, 0, 0, .2), 0 -7px 24px 0 rgba(0, 0, 0, 0.01), 0 -2px 12px 0 rgba(0, 0, 0, .08) !important;
    }
</style>