import { fromJS } from 'immutable';
import * as ValueTypes from '../../../store/constants';

const defaultData = fromJS({
    demo: '这是头部组件测试数据',
    focued:false,
    // 进行ajax数据获取,定义初始化仓库
    list:[],
    totalPage:1,
    page:0,
})

export default ( state = defaultData, action )=>{
    switch(action.type){
        case ValueTypes.HEADER_DEMO:
            return state.set('demo',action.value);
        case ValueTypes.VALUE_CHANGE_FOCUS:
            return state.set('focued',true);
        case ValueTypes.VALUE_CHANGE_BLUR:
            return state.set('focued',false);
        case ValueTypes.DEFAULT_LIST_ARR:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case ValueTypes.CHANGE_VALUE:
            return state.set('page',action.value);
        default:
            return state;
    }
}