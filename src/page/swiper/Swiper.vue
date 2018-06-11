<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in items" :key="item.id">
            <img  class="wrapperImg" :src="item.swiperPic">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  data() {
    return {
      swiperOption: {
          autoplay: 4000,
          loop:true,
          pagination: ".swiper-pagination"
      },
      items:[
        {
            id:"001",
            swiperPic:"http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg"
        },{
            id:"002",
            swiperPic:"http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg"
        },{
            id:"003",
            swiperPic:"http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        },{
            id:"004",
            swiperPic:"http://img1.qunarzz.com/piao/fusion/1803/98/0a2e0bd8eb0c0802.png_750x200_0a34d4a8.png"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
  background: rgb(173, 13, 13) !important;
}
@import "~common/css/base";
@import "~common/css/compatibility";

.wrapper{
  padding-bottom:27%;
  height:0;
  width:100%;
  overflow: hidden;
  background: #e2e2e2;
  .wrapperImg{
    width: 100%;
  }
}
</style>
