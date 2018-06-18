<template>
    <div>
        <Head></Head>
        <Swiper></Swiper>
        <Naver></Naver>
        <Address></Address>
        <Recommend></Recommend>
        <move-like></move-like>
    </div>
</template>

<script>
import Head from 'page/head/Head'
import Swiper from 'page/swiper/Swiper'
import Naver from 'page/naver/Naver'
import Address from 'page/address/Address'
import Recommend from 'page/recommend/Recommend'
import MoveLike from 'page/movelike/MoveLike'
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
        Swiper,
        Naver,
        Address,
        Recommend,
        MoveLike
    }
};
</script>

<style lang="scss" scoped>

    @import '~common/css/base';
    @import '~common/css/compatibility';

</style>
