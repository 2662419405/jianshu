import { fromJS } from 'immutable';
import * as ValueTypes from '../../../store/constants';

const defaultData = fromJS({
    demo: '这是头部组件测试数据',
    focued:false,
})

export default ( state = defaultData, action )=>{
    switch(action.type){
        case ValueTypes.HEADER_DEMO:
            return state.set('demo',action.value);
        case ValueTypes.VALUE_CHANGE_FOCUS:
            return state.set('focued',true);
        case ValueTypes.VALUE_CHANGE_BLUR:
            return state.set('focued',false);
        default:
            return state;
    }
}