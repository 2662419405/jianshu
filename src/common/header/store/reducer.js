import { fromJS } from 'immutable';

const defaultData = fromJS({
    demo: '这是头部组件测试数据'
})

export default ( state = defaultData, action )=>{
    switch(action.type){
        default:
            return state;
    }
}