<template>
    <v-layout column align-center justify-center fill-height class="white--text" v-resize="onResize">
        <img v-if="!isMobile" class="img-vertical" src="@/assets/img/Asset_Logo_vertical.svg" alt="" width="300" />
        <img v-else class="img-horizontal" src="@/assets/img/Asset_Logo_Horizontal.svg" alt="" width="300" height="200" />
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
<style scoped>
.img-vertical {
    display: flex;
    height: 100vh;
}

.img-horizontal {
    display: flex;
    height: 15vh !important;
}
</style>