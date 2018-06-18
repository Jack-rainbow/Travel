/*入口文件-初始化*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //注册插件

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'


import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    trict:debug,// 开启严格模式（线上环境不推荐使用,耗费内存）,
    plugins: debug ? [createLogger()] : []
})