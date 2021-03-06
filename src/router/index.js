import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/home/Home'
import Addpost from 'common/base/Addpost'
import Setting from 'page/setting/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path:"/Addpost",
      name:"Addpost",
      component:Addpost
    },
    {
      path: '/setting',
      name: 'Setting',
      component:Setting
    }
  ]
})
