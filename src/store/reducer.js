import HeaderStore from '../common/header/store/reducer'
import { combineReducers } from 'redux-immutable';
// 添加登录store
import LoginStore from '../pages/login/store/reducer';
export default combineReducers({
    Header: HeaderStore,
    login:LoginStore
})