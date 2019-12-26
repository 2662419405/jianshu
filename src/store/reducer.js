import HeaderStore from '../common/header/store/reducer'
import { combineReducers } from 'redux-immutable';
// 添加登录store
import LoginStore from '../pages/login/store/reducer';
// 添加Home-store
import HomeStore from '../pages/home/store/reducer';
// 详情页
import DetailStore from '../pages/detail/store/reducer';
export default combineReducers({
    Header: HeaderStore,
    login:LoginStore,
    home:HomeStore,
    detail: DetailStore,
})