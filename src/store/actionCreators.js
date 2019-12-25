import * as ValueTypes from './constants';
import axios from 'axios';
export const headerChange = ()=>{
    return {
        type: ValueTypes.HEADER_DEMO,
        value: '这是经过action修改的测试数据'
    }
}
export const valueChangeFocus = ()=>{
    const arr = {
        type: ValueTypes.VALUE_CHANGE_FOCUS
    };
    return arr;
}
// 取消聚焦
export const valueChangeBlur = ()=>{
    const arr = {
        type:ValueTypes.VALUE_CHANGE_BLUR
    };
    return arr;
}
// 移入显示搜索框
export const mouseEnter = ()=>{
    const arr={
        type: ValueTypes.MOUSE_ENTER
    };
    return arr;
}
 // 移出隐藏搜索框
export const mouseLeave = ()=>{
    const arr={
        type: ValueTypes.MOUSE_LEAVE
    };
    return arr;
}
// 改变角度的值
export const changeValue = (val)=>{
    const arr = {
        type:ValueTypes.CHANGE_VALUE,
        value:val
    };
    return arr;
}
// 热门搜索分页AJAX查询
export const defaultListArr = ()=>{
    return (dispatch)=>{
        axios.get('/api/index.json').then((res)=>{
            const arr = {
                type:ValueTypes.DEFAULT_LIST_ARR,
                data:res.data.data,
                totalPage:Math.ceil(res.data.data.length/10)
            }
            dispatch(arr);

        }).catch(()=>{
            console.log('失败');
        })
    }
}