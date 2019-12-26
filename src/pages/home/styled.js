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

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 10px 0;
`

export const TopicItem = styled.a`
    margin:0 18px 18px 0;
    height:32px;
    line-height:32px;
    overflow:hidden;
    border:1px solid #dcdcdc;
    background-color:#f7f7f7;
    float:left;
    color:#000;
    padding-right:10px;
    vertical-align:top;
    border-radius:4px;
    .imgContent {
        display:block;
        width:32px;
        height:32px;
        float:left;
        margin-right:5px;
    }
`

export const TopicTitle = styled.a`
    color:#666;
    float:left;
    position:relative;
    top:6px;
    margin-left:20px;
`

export const WriterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
export const WriterItem = styled.li`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    line-height: 20px;
    cursor: pointer;
    .pic{
        width: 150px;
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        color: #969696;
        line-height: 1.5;
    }
    .content{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    a{
        color:#000;
        &:hover{
            text-decoration: underline;
        }
    }
`
export const HomeLoad = styled.a`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
    &:hover{
        background-color: #9b9b9b;
        color:#fff;
    }
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

// 推荐wrapper
export const TuijianWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`
// 推荐图片项
export const TuijianItem = styled.a`
    cursor: pointer;
    color: #333;
    text-decoration: none;
    .pic{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
// 二维码
export const TuijianErWeiMa = styled.a`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff; 
    float: left;
    position: relative;
    min-height: 1px;
    .pic{
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`

export const TuijianContent = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    div{
        color:#000;
    }
    span{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`
// prop和内部propdiv
export const TuijianProp = styled.div`
    top: 70px;
    left: 48px;
    opacity: 0;
    background-color: #fff!important;
    margin-top: -10px;
    position: absolute;
    z-index: 1060;
    max-width: 276px;
    padding: 1px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.42857;
    text-align: left;
    text-decoration: none;
    text-shadow: none;
    font-size: 14px;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    transition: all .2s;
    .popover-title{
        padding: 10px;
        border: none;
    }
    .pic{
        width: 160px;
        height: 160px;
        vertical-align: middle;
    }
    &.show{
        opacity: 1;
    }
`

export const TuijianDiv = styled.div`
    left:50%;
    bottom: -10px;
    content: " ";
    margin-left: -10px;
    position: absolute;
    width: 0;
    height: 0;
    border: 11px solid transparent;
    border-bottom-width: 0;
    border-top-color: #bbb;
`