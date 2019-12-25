import { fromJS } from 'immutable';
import * as constants from './constants';
const DefaultData = fromJS({
    loginStates:false
})

export default ( state = DefaultData , action)=>{
    switch( action.type ){
        default :
        return state;
    }
}