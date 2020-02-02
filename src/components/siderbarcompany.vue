<template>
    <v-layout column align-center justify-center fill-height class="white--text" v-resize="onResize">
        <img v-if="!isMobile" src="@/assets/img/Asset_Logo_vertical.svg" alt="triangle with all three sides equal" width="300" />
        <img v-else src="@/assets/img/Asset_Logo_Horizontal.svg" alt="triangle with all three sides equal" width="300" height="200" />
    </v-layout>

</template>
<script>
    export default {
        data() {
            return {
                isMobile: false,
            }
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