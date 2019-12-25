import { fromJS } from 'immutable';
import * as constants from './constants';
const DefaultData = fromJS({
    loginStates:false
})

export default ( state = DefaultData , action)=>{
    switch( action.type ){
        case constants.LOGINSTATE:
            return state.set('loginState',true);
        default :
        return state;
    }
}