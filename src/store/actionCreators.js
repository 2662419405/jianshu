import * as ValueTypes from './constants';

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
export const valueChangeBlur = ()=>{
    const arr = {
        type:ValueTypes.VALUE_CHANGE_BLUR
    };
    return arr;
}