import HeaderStore from '../common/header/store/reducer'
import { combineReducers } from 'redux-immutable';
import LoginStore from '../pages/login/store/reducer';
export default combineReducers({
    Header: HeaderStore,
    login:LoginStore
})