import styled from 'styled-components';
export const HomeWrapper = styled.div`
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 55px;
    box-sizing: border-box;
    &::before{
        content: " ";
        display: table;
    }
    &::after{
        clear: both;
        content: " ";
        display: table;
    }
`
export const Row = styled.div`
    margin-left: -15px;
    margin-right: -15px;
`

export const HomeRight = styled.div`
    padding: 30px 0 0;  
    margin-left: 4.16667%;
    width: 29.16667%;
    float: left;
    position: relative;
    min-height: 1px;
`
export const HomeLeft = styled.div`
    padding-top: 30px;
    padding-right: 0;
    width: 66.66667%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
`
export const HomeImgTop = styled.img.attrs( ()=>({
    src:"//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
}) )`
    width:100%;
    position: relative;
    margin-bottom: 35px;
    border-radius: 6px;
    overflow: hidden;
    z-index: 1000;
`

// 返回顶部
export const ReturnTop = styled.div`
    position:fixed;
    bottom: 50px;
    right:50px;
    .top{
        position: relative;
        background: #000;
        color:#fff;
        padding:5px;
        border-radius: 6px;
        font-size:14px;
        left:-75px;
        top:-40px;
        opacity:0;
        transition:all .2s;
    }
    .title{
        position:relative;
        width:0;
        height:0;
        border: 5px solid transparent;
        border-left: 6px solid #000;
        left: -9px;
        top: -60px;
        opacity:0;
        transition:all .2s;
    }
    .show{
        opacity:1;
    }
    span{
        right: 50px; 
        border: 1px solid #dcdcdc;
        background-color: hsla(0,0%,71%,.1);
        transition: .1s ease-in;
        width:50px;
        height: 50px;
        display: block;
        text-align: center;
        line-height:50px;
        cursor: pointer;
        color: #2f2f2f;
        font-size:20px;
    }
`