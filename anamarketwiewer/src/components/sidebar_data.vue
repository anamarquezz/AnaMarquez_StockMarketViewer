<template>
    <v-container class="">
        <v-layout row class="ml-2 lg-ml-5 mt-5" v-if="selectedItems !=''">
            <v-flex xs12 c>
                <v-layout column class="ml-n1">
                    <p class="display-1 font-weight-bold">{{selectedItems.title}}</p>
                    <p class="dsubheading mt-n3 grey--text text--darken-1">{{selectedItems.title}}</p>
                    <p class="subtitle font-weight-bold  grey--text text--lighten-1">STOCK VALUE</p>

                    <v-flex xs12 class="ml-2">
                        <v-layout row>
                            <p class="display-2 mt-n3 grey--text text--darken-1 ">{{selectedItems.stockvalue}}</p>
                            <p class="color_b0c466 mt-2">{{selectedItems.percent}}</p>
                            <img class="mt-n2" src="@/assets/img/Asset_Arrow_green.svg" width="10" />
                        </v-layout>
                    </v-flex>
                    <p class="subtitle mt-n3  grey--text text--darken-1">At close: {{selectedItems.close}} </p>
                    <p class="subtitle mt-5 font-weight-bold  grey--text text--lighten-1 mt-3">SECTORS</p>
                    <p class="mt-n3 subtitle"> {{selectedItems.sectors}}</p>
                    <apexchart type="area" :options="chartOptions" :series="selectedItems.series"></apexchart>
                </v-layout>
            </v-flex>


        </v-layout>
    </v-container>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    export default {
        data() {
            return {
                isMobile: false,

              
                chartOptions: {
                    chart: {
                        type: 'area',
                        height: 350,
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    colors:['#efcd60'],
                    title: {
                        text: '1D 5D 1M 6M YTD 1Y 5Y MAX',
                        align: 'left'
                    },
                    yaxis: {
                        opposite: true
                    },
                    theme: {
                        palette: 'palette1'
                    },
                    xaxis: {
                        categories: ['10 AM', '12 PM', '02 PM', '04 PM']
                    },
                    legend: {
                        horizontalAlign: 'center'
                    }
                },
            }
        },
        computed: {
            ...mapState({
                selectedItems: 'selected_items'
            }),
        },
        methods: {
            onResize() {
                if (window.innerWidth < 1272)
                    this.isMobile = true;
                else
                    this.isMobile = false;
            },
        },
    }
</script>