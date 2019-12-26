import * as Value_types from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

//鼠标滑入返回顶部隐藏和显示信息
export const MouseReturn =(flag)=>{
    const arr = {
        type:Value_types.MOUSERETURNENTER,
        flag
    }
    return arr;

}