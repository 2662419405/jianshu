import HeaderStore from '../common/header/store/reducer'
import { combineReducers } from 'redux-immutable';

export default combineReducers({
    header: HeaderStore
})