import * as ValueTypes from './constants';

export const headerChange = ()=>{
    return {
        type: ValueTypes.HEADER_DEMO,
        value: '这是经过action修改的测试数据'
    }
}