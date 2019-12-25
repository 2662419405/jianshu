import axios from 'axios';
import * as constants from './constants';
// 如果登录成功之后才进行派发操作
const LoginButton = ()=>({
    type: constants.LOGINSTATE
})
// 登录鉴权
export const LoginHome = (username,password) =>{
    return (dispatch)=>{
        axios.get('/api/login.json').then((res)=>{
            const result = res.data;
            if(result.username===username&&result.password===password){
                dispatch(LoginButton());
            }else{
                alert('账号密码错误');
            }
        })
    }
}