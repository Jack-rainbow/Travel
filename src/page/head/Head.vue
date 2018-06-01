<template>
    <header class="head">
        <div class="headLeft">
            <span>
                <i class="iconfont">&#xe625;</i>
            </span>
        </div>
        <div class="headCont">
            <a href="" class="headSe">
                <i class="iconfont headIconSe">&#xe632;</i>
                <span class="headSearch">输入城市/景点/游玩主题</span>
            </a>
        </div>
        <div class="headRight">
           <a href="" class="cityMore">
                北京
                <span class="city">
                    <i class="iconfont cityDownArrow">&#xe62d;</i>
                </span>
           </a>
        </div>
        <div class="homeI8n">
           <a href="" class="iconI8n" :style="iconI8n">     
           </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "Head",
    data() {
        return {
            iconI8n:{
                background:"url(" + require("assets/img/header-phoneicon.png") + ")",
                backgroundRepeat: "no-repeat",
                height: "19px",
                width:"40px",
                backgroundPosition:" 12px -83px",
                display: "inline-block"
            }
        };
    },
    methods: {
        switchChinese() {
            // 中英文切换
          this.$i18n.locale  == "cn" ? this.$i18n.locale  = "en": this.$i18n.locale  = "cn"
        }
    }
};
</script>

<style lang="scss" scoped>

    @import '~common/css/base';
    @import '~common/css/compatibility';
    .head{
        background: $headBg;
        @include displayFlex;
        position: relative;
        width: 100%;
        height: 88px;
        text-align: center;
        color: #fff;
        .headLeft{
            display: inline-block;
            width: 40px;
            line-height: 88px;
            padding:0 20px;
            color: #fff;
            font-size: 36px;
            text-align: left;
            float:left;
        }
        .headCont{
            @include displayFlex;
            @include displayFlexwebkitFlex(1);
            position: relative;
            height: 60px;
            margin: 14px 0;
            background: #fff;
            line-height: 6px;
            border-radius: 6px;
            margin-left: 20px;
            .headSe{
                position: absolute;
                left: .2rem;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                color: #e4e7ea;
                .headIconSe{
                    
                }
                .headSearch{
                    // display: inline-block;
                    overflow: hidden;
                    // position: absolute;
                    // left: 30px;
                    // top: 0;
                    // width: 360px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                
            }
        }
        .headRight{
            padding:0 0  0 22px ;
            height: 100%;
            @include justifyContentFlexEnd;
            .cityMore{
                display: inline-block;
                line-height: 88px;
                margin-right: 4px;
                color: #fff;
                .city{
                    
                    .cityDownArrow{
                        font-size: 24px;
                        margin-left: 4px;
                    }
                }
            }
        }
        .homeI8n{
            line-height: 88px;
            padding: 12px 0;
            .iconI8n{
                
            }
        }
    }
</style>
