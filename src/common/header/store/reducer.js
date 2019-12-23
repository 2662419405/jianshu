import { fromJS } from 'immutable';
import * as ValueTypes from '../../../store/constants';

const defaultData = fromJS({
    demo: '这是头部组件测试数据'
})

export default ( state = defaultData, action )=>{
    switch(action.type){
        case ValueTypes.HEADER_DEMO:
            return state.set('demo',action.value)
        default:
            return state;
    }
}