import * as ValueTypes from './constants';
import axios from 'axios';

export const valueChangeFocus = ()=>{
    const arr={
        type: ValueTypes.VALUE_CHANGE_FOCUS
    };
    return arr;
}

export const valueChangeBlur = ()=>{
    const arr={
        type: ValueTypes.VALUE_CHANGE_BLUR
    };
    return arr;
}

export const mouseEnter = ()=>{
    const arr={
        type: ValueTypes.MOUSE_ENTER
    };
    return arr;
}

export const mouseLeave = ()=>{
    const arr={
        type: ValueTypes.MOUSE_LEAVE
    };
    return arr;
}

export const changValue = (val)=>{
    const arr={
        type: ValueTypes.CHANGE_VALUE,
        value:val
    };
    return arr;
}

export const defaultListArr = ()=>{
    return (dispatch)=>{
        axios.get('/api/index.json').then( (res)=>{
            const arr={
                type:ValueTypes.DEFAULT_LIST_ARR,
                data:res.data.data,
                totalPage: Math.ceil(res.data.data.length / 10)
            }
            dispatch(arr);
        } ).catch( ()=>{
            console.log('获取失败');
        } )
    }  
}