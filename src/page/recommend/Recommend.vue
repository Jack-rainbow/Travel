<template>
    <div class="redList">
        <div class="redListTit">
            <div class="redBangDan">
                <img src="../../../static/img/hot.png" class="hotIcon">
                <span class="redBangCont">本周热门榜单</span>
            </div>
            <div  class="redMoreBan">
                <router-link to="moreRed">
                    <span class="redMoreCont">全部榜单</span>
                    <i class="iconfont redMoreListTitIcon">&#xe625;</i>
                </router-link>
            </div>
        </div>
        <ul class="hotList">
            <li v-for="item of recommend" :key="item.id">
                <router-link to="1">
                    <div :class="_recommend(item.id)">
                        <img class="hotDuPic" :src="item.RecommendTopImg" alt="">
                    </div>
                    <div class="hotPic">
                        <img :src="item.RecommendContImg" alt="">
                    </div>    
                    <p class="hotCont">故宫</p>
                    <div class="hotMon">    
                        
                        <span class="hotContMoney">
                            ¥
                            <em class="hotNum">20</em>
                        </span>
                        <span class="hotContEnt">起</span>
                    </div>
                </router-link>
            </li>
             
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                recommend:[
                    {
                        id:"01",
                        RecommendTopImg:"http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg"
                    },
                    {
                        id:"02",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg"
                    },
                    {
                        id:"03",
                        RecommendTopImg:"./static/img/top3.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg"
                    },
                    {
                        id:"04",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg"
                    },
                    {
                        id:"05",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_150x150_ba1070d2.jpg"
                    },
                    {
                        id:"06",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1508/c0/0ddded36771ed10c9e03eb64794610cb.water.jpg_150x150_69bf7d53.jpg"
                    },
                    {
                        id:"07",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_150x150_2747e538.jpg"
                    },
                    {
                        id:"08",
                        RecommendTopImg:"./static/img/top2.png",
                        RecommendContImg:"http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_150x150_821b641d.jpg"
                    }
                ]
            }
        },
        components: {

        },
        methods: {
             _recommend(type){
                if(Math.floor(type) <= 3){
                    return 'hotDu'
                }else{
                    return 'hotRe'
                }
            }
        },
        mounted(){
        }
    }  
</script>

<style lang="scss" scoped>
.redList{
    background: #fff;
    margin-top: .2rem;
    position: relative;
    // padding: 24px 24px;
    .redListTit{
        padding: 24px  26px;
        .redBangDan{
            display: inline-block;
            .hotIcon{
                display: inline-block;
                overflow: hidden;
                width: 30px;
                height: 30px;
                margin-left: 20px;
                vertical-align: top;
            }
            .redListTitIcon{
                font-size: 15px;
            }
            .redBangCont{
                // display: inline-block;
                margin-left: .08rem;
                height: 44px;
                color: #212121;
                font-size:28px;
                line-height: 44px;
            }
        }
        .redMoreBan{
            position: absolute;
            top: 36px;
            right: 32px;
            line-height: 28px;
            .redMoreCont{
                color: #616161;
                font-size:24px;
            }
            .redMoreListTitIcon{
                margin-left: .04rem;
                font-size: 12px;
            }
        }
    }
    .hotList{
        padding: 0 24px;
        overflow-x: auto;
        white-space: nowrap;
        li{
            margin-right: 12px;
            position: relative;
            display: inline-block;
            padding: 6px 0 20px;
            width: 200px;
            a{
                display: block;
                width: 100%;
                height: 100%;
                .hotRe{
                    display: none;
                }
                .hotDu{
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    overflow: hidden;
                    width: 84px;
                    height: 40px;
                    .hotDuPic{
                        width: 100%;
                    }
                }
                .hotPic{
                    overflow: hidden;
                    width: 200px;
                    height: 0;
                    padding-bottom: 100%;       
                    img{
                        width: 100%;
                    }
                    
                }
                .hotCont{
                    margin-top: 12px;
                    color: #212121;
                    font-size: 24px;
                    line-height: 32px;
                    text-align: center;
                    overflow: hidden;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .hotMon{
                    color: #616161;
                    font-size:24px;
                    line-height: 36px;
                    text-align: center;
                    .hotContMoney{
                        color: #ff8300;
                        .hotNum{
                            font-size: 28px;
                        }
                    }  
                    .hotContEnt{
                        color: #616161;
                    }
                }
            }
            
        }
    }
}
 
</style>
