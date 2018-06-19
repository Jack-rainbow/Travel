<template>
    <div class="city">
        <div class="cityInput">
            <div class="cityP">
                 <i class="el-icon-search"></i>
                 <input type="text" placeholder="输入你要搜索的城市" class="cityPut">
            </div>
           
        </div>
        
        <div class="citylist">
            <div class="myCity">
                <div class="myLocation">
                    我的位置
                </div>
                <div class="locationPic" >
                    {{ this.$store.state.city }}
                </div>
            </div>
            <div v-for="(item,index) of city" :key="index">
                <div class="cityTit">{{item.title}}</div>
                <ul class="cityListCont" >
                    <li 
                        v-for="(items,index) of item.item" 
                        class="cityCon" 
                        :key="index"
                        @click="locationMyJ(items.name)"
                        >
                        {{ items.name }}
                    </li>
                </ul> 
            </div>
                  
            <ul class="cityIndex" >
                <li @click="IndexSuy(item.title)" 
                    class="citySuoyin" 
                    v-for="(item,index) of city" 
                    :key="index">
                        {{item.title.substr(0,1)}}
                    </li>
            </ul>
        </div>
    </div>
</template>
                           
<script>

import City from "../../../static/js/citySelect.js"

import  { mapActions } from "vuex"
export default {
    data() {
      return {
          city:City
      }
    },
    components:{

    },
    methods:{
        locationMyJ(data){ 
        // //     //也可以用this.$strore.commit
            this.$store.dispatch('changeCity',data)
            this.$router.push({path:'/'})

        // // //    sessionStorage.setItem('test',this.locationMy = data)
        // //     // this.$emit('citysLect',this.locationMy = data);
            // setTimeout(()=>{
            //     this.$router.push({path:'/'})
            // },500)
        }
       
    },
    mounted(){

    },
    computed: {
         ...mapActions([
            'changeCity'
        ])
    }
  };
</script>

<style lang="scss" scoped>
    .city{
        .myCity{
            padding-top: 20px;
            margin-bottom: 10px;
            .myLocation{
                
            }
            .locationPic{
                margin-right: 3%;
                margin-bottom: 12px;
                margin-top: 15px;
                height: 40px;
                border: none;
                border-radius: 3px;
                font-size: 12px;
                // color: #49f;
                color: #666;
                line-height: 40px;
                width: 21%;
                background: #fff;
                display: inline-block;
                text-align:center; 
                padding: 0 12px;
            }
        }
        .cityInput{
            position: fixed;
            top: 0;
            padding: 10px;
            width: 100%;
            height: 60px;
            color: #555;
            background-color: #fff;
            .cityP{
                padding: .1rem;
                background-color: #f4f4f4;
                padding-left: 15px;
                .cityPut{
                    width: 90%;
                    padding-left: 5px;
                    border: 0;
                    font-size: 20px;
                    background-color: #f4f4f4;
                    border: none;
                    height: 100%;
                }
            }
            
        }
        .citylist{
            background: #F2F2F2;
            margin-top: 60px;
            padding: 0 20px;
            .cityTit{
                padding-top: 20px;
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 6px;
                // background:#e2e2e2;
            }
            .cityListCont{
                margin-top: 20px;
                .cityCont{
                    margin-bottom: 2px;
                    height: 40px;
                    border-radius: 3px;
                    font-size: 12px;
                    color: #666;
                    line-height: 40px;
                    width: 100%;
                    background: #fff;
                    display: inline-block;
                    padding: 0 20px;
                }
                .cityCon{
                    margin-right: 3%;
                    margin-bottom: 12px;
                    height: 40px;
                    border: none;
                    border-radius: 3px;
                    font-size: 12px;
                    // color: #49f;
                    color: #666;
                    line-height: 40px;
                    width: 21%;
                    background: #fff;
                    display: inline-block;
                    text-align:center; 
                    padding: 0 12px;
                }
            }
            .cityIndex{
                position: fixed;
                right: 20px;
                top: 50%;
                transform: translate(0,-50%);
                .citySuoyin{
                    text-align: center;
                    margin-top: 5px;
                }
            }
        }
        
    }
</style>
