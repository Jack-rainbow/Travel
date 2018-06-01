<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
<img src="http://img1.qunarzz.com/piao/fusion/1805/b6/2330c92270c7e802.jpg_750x200_425e2121.jpg">
      </div>
      <div class="swiper-slide">
          <img src="http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Swiper",
    data() {
        return {
            
        };
    },
    methods: {
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: 3000,
          loop: true,
          speed: 2000
        })

    }
};
</script>

<style lang="scss" scoped>

    @import '~common/css/base';
    @import '~common/css/compatibility';
    img {
    width: 100%;
    height: auto;
    }
</style>
