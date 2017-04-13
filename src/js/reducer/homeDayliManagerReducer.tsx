import initialState from './initialState';

import {homeDayliManagerAction} from '../action';

export default function homeDayliManagerReducer(state:any=initialState,action:any){
    switch(action.type){
        //等待后台接口请求
        case homeDayliManagerAction.FETCH_PENDDING:{
            return state;
        }
        //接收到后台接口请求数据
        case homeDayliManagerAction.FETCH_RECEIVE:{
            return state.set("userInfoList",action.payload); 
        }
        //没有匹配到对应的action.type
        default :{
            return state;
        }
    }
} 