<template>
    <div class="posAct">
        <ul>
            <li>
                <div @click="CitySelect">
                    <i class="el-icon-location-outline  mpIconfont"></i>
                    <!-- <Addpost @citysLect="citysLect"></Addpost> -->
                    <span>{{ this.$store.state.city }}</span>
                </div>
            </li>
            <li>
                <router-link to="5z">
                    <i class="el-icon-bell mpIconfont"></i>
                    <span>5折泡温泉</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Addpost from 'common/base/Addpost'
export default {
   data () {
     return {
         cityCont:""
     }
   },
   mounted(){
        // if(sessionStorage.getItem('test')== null){
        //        this.cityCont="定位失败"
        //     }else{
        //         this.cityCont=sessionStorage.getItem('test')
        // }
   },
   computed:{
    //    test(){
    //        return sessionStorage.getItem('test')
    //    }
   },
   components: {
        Addpost
   },
   methods:{
       CitySelect(){
        // 使用路由之后将不可以在使用emit，需进一步验证
           this.$router.push({path:"Addpost"})
       },
       citySele(){
            
       }

    //    ,
    //    citysLect(data){
    //        console.log(36,data)
    //        this.cityCont = data
    //    }
   }
}
</script>

<style lang="scss" scoped>
.posAct{
    width: 100%;
    background-color: #fff;
    border-top:2px solid #e2e2e2;
    ul{
        display: flex;
        margin-left:-2px;
        li{
            border-left:2px solid #e2e2e2;
            display: inline-block;
            flex: 1;
            overflow: hidden;
            width: 0;
            height: .98rem;
            font-size: .28rem;
            span{
                color: #212121;
            }
            
            line-height: .98rem;
            text-align: center;
            .mpIconfont{
                margin-right: .05rem;
                color: #616161;
                font-size: .32rem;
            }
        }
    }
}

 
</style>
