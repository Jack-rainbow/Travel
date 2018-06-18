<template>
    <div class="tranvelBtn">
        <router-link to="/" >
            <div :class="iconBottomICon ? 'iconBottomICon1':'iconBottomICon' " >
                <i class="iconfont">&#xe62e;</i>
                首页
            </div>
            
                
        </router-link>
        <router-link to="/setting">
            <div :class="iconBottomICon ? 'iconBottomICon':'iconBottomICon1'">
                <i class="iconfont">&#xe62f;</i>
                我的
            </div>
            
        </router-link>
    </div>
</template>

<script>
 export default {
    data () {
        return {
            iconBottomICon:true
        }
    },
    components: {

    },
    watch:{
        '$route'(to,from){
            if(to.path == "/setting"){
                this.iconBottomICon = false;
            }
            if(to.path == "/"){
                this.iconBottomICon = true;
            }
        }
    }
    
 }
</script>

<style lang="scss" scoped>

    .tranvelBtn{
        text-align: center;
        position: fixed;
        bottom: 0;
        background: #fff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        // line-height: 50px;
        border-top: 1px solid #ccc;
        left: -2px;
        a{
            width: 50%;
            border-left: 1px solid #ccc;
            .iconBottomICon{
                color: #999;
                i{
                    display: block;
                    font-size: 40px;
                    
                }
            }
            .iconBottomICon1{
                i{
                    display: block;
                    font-size: 40px;
                    
                }
            }
        }
    }
</style>