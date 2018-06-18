<template>
 <div class="movelike"> 
     <div class="likeHead">
         <img src="../../../static/img/xin.png" alt="" class="likeHeadImg">
         <span class="likeHeadCont">猜你喜欢</span>
     </div>
     <ul class="likeCont">
         
          <li class="likeItem" v-for="item of likeMore" :key="item.likeKey">
             <a href="#" class="clearfix">
                <div class="likeIcon">
                    <img :src="item.likeMore" alt="">
                </div>
               
                <div class="likeInfo">
                    <div class="liketTit">{{ item.likeText }}</div>
                    <div class="block">
                        <el-rate
                            v-model="value5"
                            disabled
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                    </div>
                    <div class="likePrice">
                        <span class="picmoney">
                            ￥
                            <em class="likeNum">{{ item.likeMoney }}</em>
                            
                        </span>
                        起
                        <span class="likeAddress">{{ item.likeAddress }}</span>
                    </div>
                </div>
             </a>
         </li>
     </ul>
     <a href="#" class="likeMore">
         查看所有产品
     </a>
 </div>
</template>

<script>
 export default {
    name:"MoveLike",
    data () {
        return {
           value5: 5,
           likeMore:[
               {
                   likeKey:"001",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"002",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"003",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"004",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"005",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"006",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"007",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               },
               {
                   likeKey:"008",
                   likeMore:"http://img1.qunarzz.com/sight/p0/1806/4f/4f448c94f180b36da3.water.jpg_200x200_9ef8867f.jpg",
                   likeText:"36kr没想到未来城",
                   likeMoney:"80",
                   likeAddress:"798艺xxx"
               }
           ]
        }
    },
    components: {

    },
    mounted(){
        
    }
 }
</script>


<style lang="scss" scoped>
    .movelike{
        margin-top: 20px;
        background: #fff;
        padding-bottom: 100px;
        .likeHead{
            position: relative;
            padding: 24px 0 0px 0;
            .likeHeadImg{
                display: inline-block;
                overflow: hidden;
                width: 30px;
                height: 30px;
                margin-left: 20px;
                vertical-align: top;
            }
            .likeHeadCont{
                display: inline-block;
                margin-left: 8px;
                height: 44px;
                color: #212121;
                font-size: 32px;
                line-height: .44rem;
            }
        }
        .likeCont{
            position: relative;
            overflow: hidden;
            padding: 0 0 0 22px;
            .likeItem{
                margin: 20px 0;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    .likeIcon{
                        float: left;
                        overflow: hidden;
                        width: 200px;
                        height: 200px;
                    }
                   
                    .likeInfo{
                        padding-left: 22px;
                        overflow: hidden;
                        .liketTit{
                            margin-top: 26px;
                            height: 44px;
                            color: #212121;
                            font-size:32px;
                            line-height: 44px;
                            margin-bottom: 10px;
                        }
                        .likeComment{
                            .likestarlevel{

                            }
                            .commentNum{

                            }
                        }
                        .likePrice{
                            position: relative;
                            margin-top:25px;
                            color: #616161;
                            font-size:24px;
                            line-height:40px;
                            .picmoney{
                                color: #ff8300;    
                                .likeNum{
                                    font-size: 40px;
                                    font-style: normal;
                                }
                            }
                            .likeAddress{
                                position: absolute;
                                right: 24px;
                                bottom: 0;
                            }
                        }
                    }
                }
            }
        }
        .likeMore{
            display: block;
            padding: .2rem 0;
            color: #00afc7;
            font-size: .28rem;
            line-height: .4rem;
            text-align: center;
        }
    }
</style>
