<template>
 <div class="naver">
   <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of pages" :key="index">
            <router-link :to="page.NaverContent" class="naverIcons" v-for="page in item" :key="page.id">
              <div class="iconImg">
                <img :src="page.NaverPic" class="iconImgCont">
              </div>
              <p class="iconCont">{{page.NaverContent}}</p>
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper> 
 </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data() {
        return {
            swiperOption: {
              pagination: ".swiper-pagination"
            },
            items: [
              {
                id: "001",
                NaverContent:"景点门票",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              },
              {
                id: "002",
                NaverContent:"必游榜单",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
              },
              {
                id: "003",
                NaverContent:"踏青赏花",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"
              },
              {
                id: "004",
                NaverContent:"一日游",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
              },
              {
                id: "005",
                NaverContent:"动植物园",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
              },
              {
                id: "006",
                NaverContent:"故宫",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
              },
              {
                id: "007",
                NaverContent:"主题乐园",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
              },
              {
                id: "008",
                NaverContent:"Q+精选",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png"
              },
              {
                id: "009",
                NaverContent:"演出",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png"
              },
              {
                id: "010",
                NaverContent:"自然风光",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png"
              },
              {
                id: "011",
                NaverContent:"名胜古迹",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png"
              },
              {
                id: "012",
                NaverContent:"周边游",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png"
              },
              {
                id: "013",
                NaverContent:"城市观光",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png"
              },
              {
                id: "014",
                NaverContent:"游乐场",
                NaverPic:
                  "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png"
              }
            ]
        };
    },
    components: {
        swiper,
        swiperSlide
    },
    computed:{
      pages () {
        const pages=[];
        this.items.forEach((item,index)=>{
          // index 页码 
          // item  列表 
          const page=Math.floor(index/8);
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages
      }
    }
};
</script>

<style lang="scss" scoped>

  .naver >>> .swiper-container{
      height: 3.7rem;
      background-color: #fff;
  }
  // 未生效 
  .naver >>> .swiper-pagination-bullets{
      bottom: 0 !important;
  }
  .naverIcons{
      margin-top: 10px;
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 1.5rem;
      text-align: center;
      // padding-bottom: 25%;
      .iconImg{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 44px;
        box-sizing: border-box;
        .iconImgCont{
          display: block;
          margin: 0 auto;
          width: 1.1rem;
          height: 1.1rem;
        }
      }
      .iconCont{
        position: absolute;
        left: 0; 
        right: 0;
        bottom: 0;
        line-height: .44rem;
        height: .44rem;
        color: #333;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }
</style>

