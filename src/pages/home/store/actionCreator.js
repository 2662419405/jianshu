import * as Value_types from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const getHomeData = (res)=>{
    const newArr = {
        type: Value_types.GET_HOME_DEFAULT_DATA,
        TopicList: res.data.TopicList,
        TuijianList: res.data.TuijianList,
        GuanzhuList: res.data.GuanzhuList,
        WriterList: res.data.WriterList
    }
    return newArr;
}

//鼠标滑入返回顶部隐藏和显示信息
export const MouseReturn =(flag)=>{
    const arr = {
        type:Value_types.MOUSERETURNENTER,
        flag
    }
    return arr;
}
// 监听滚动条动画
export const scrollTopChange = (flag)=>{
    const arr = {
        type:Value_types.SHOWRETURNTOP,
        flag
    }
    return arr;
}

// 写作页面数据
const LoadMore = (res,WriterPage)=>{
    const newArr = {
        type: Value_types.LOADMORE,
        value: fromJS(res.data.WriterList),
        WriterPage
    }
    return newArr;
}   

// 获取topic的数据
export const getDefaultArr = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then( (res)=>{
            dispatch(getHomeData(res));
        } ).catch(  )
    }
}

// 写作页面数据
export const getLoadMore = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homePage.json?page='+page).then( (res)=>{
            dispatch(LoadMore(res,page+1));
        } ).catch(  )
    }
}