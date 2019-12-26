import { fromJS } from 'immutable';
import * as constants from './constant';

const DefaultAction = fromJS({
    title: '',
    content: ''
})  

export default (state = DefaultAction , action)=>{
    switch(action.type){
        case constants.GETDEFAULTLIST:
            return state.merge({
                title: action.value.title,
                content: action.value.content
            })
        default:
            return state
    }
}