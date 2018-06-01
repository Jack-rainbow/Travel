<template>
    <div>
        <Head></Head>
        <Swiper></Swiper>
    </div>
</template>

<script>
import Head from 'page/head/Head';
import Swiper from 'page/swiper/Swiper';
export default {
    name: "Home",
    data() {
        return {
            
        };
    },
    methods: {
    },
    components:{
        Head,
        Swiper
    }
};
</script>

<style lang="scss" scoped>

    @import '~common/css/base';
    @import '~common/css/compatibility';

</style>
