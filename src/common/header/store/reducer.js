import * as ValueTypes from '../../../store/constants';
import { fromJS } from 'immutable';

const defaultData = fromJS({
    focued:false,
    list:[],
    page:0,
    totalPage:1,
    mouseIn:false
})

export default ( state = defaultData, action )=>{

    switch( action.type ){
        case ValueTypes.VALUE_CHANGE_FOCUS:
            return state.set('focued',true);
        case ValueTypes.VALUE_CHANGE_BLUR:
            return state.set('focued',false);
        case ValueTypes.DEFAULT_LIST_ARR:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case ValueTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case ValueTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case ValueTypes.CHANGE_VALUE:
            return state.set('page',action.value); 
        default:
            return state;
    }

}