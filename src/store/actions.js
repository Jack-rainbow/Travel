import * as types from './mutation-type'

export const actions= function({commit,state},{city,index}){
    //当需要改数据时去mutations,actions调用mutations用commit
    commit("types.SET_CHANGECITY",city)
}