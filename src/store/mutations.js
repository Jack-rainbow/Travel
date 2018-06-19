//定义state数据的修改操作,接受commit
import * as types from './mutation-type'

export const matutaions={
    //dispatch的0.
    [types.SET_CHANGECITY](state,data){
        state.city = data;
    },
    [types.SET_CITY](state,cityAddress){
        //state是状态值 state
        //第二个参数为自己传入的
        state.city = cityAddress;
    }
   

}
export default matutaions