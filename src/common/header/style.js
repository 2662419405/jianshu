import styled from 'styled-components';
// 引入顶部LOGO
import LogoPic from '../../static/nav-logo.png';
// HeaderWrapper盒子
export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position: fixed;
    right: 0;
    top: 0;
    left:0;
    z-index: 1030;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    background: #fff;
    &::after{
        clear: both;
        content: " ";
        display: table;
    }
    &::before{
        content: " ";
        display: table;
    }
`

// LOGO
export const Logo = styled.div`
    height:56px;
    position:absolute;
    left:0;
    top:0;
    width:100px;
    display:block;
    background: url(${LogoPic}) no-repeat center center;
    background-size:contain;
`
// 中部菜单栏



export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
    height:100%;
    position:relative;
    &.iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

// 中部菜单栏项目
export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    margin-right:10px;
    &.left{
        float:left;
    }

    &.active{
        color:#ea6f5a;
    }

    &.right{
        float:right;
        color:#969696;
    }
    &.hold{
        font-weight:500;
    }
`

// 搜索盒子
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    margin-top:9px;
    outline:none;
    color:#666;
    box-sizing:border-box;
    transition:all .2s ease-in;
    &::placeholder{
        color:#999;
    }
    &.search-node-enter-done{
        width:220px;
    }
    &.search-node-exit-done{
        width:160px;
    }
`

// 搜索盒子的样式
export const NavbarSearch = styled.div`
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    position: absolute;
    margin-top: 9px;
    width: 250px;
    left: 175px;
    box-sizing: border-box;
    border-radius: 4px;
    opacity:0;
    visibility: hidden;
    background-color:#fff;
    &.show{
        opacity:1;
        visibility: visible;
    }
    &::before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        top: -5px;
        z-index: -1;
        position: absolute;
        background-color: #fff;
    }
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`
// 中部盒子样式
export const NavbarContent = styled.div`
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`
// 中部盒子样式头标题
export const NavbarHeader = styled.div`
    height: 20px;
    margin-bottom: 10px;
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
// 热门搜索
export const NavbarTitle = styled.span`
    float: left;
    font-size: 14px;
    color: #969696;
    line-height: 20px;
`
// 搜索按钮
export const NavBottom = styled.div`
    
`
// 换一换动画
export const NavAHref = styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    &:hover{
        color: #2f2f2f;
    }
`
// 右侧
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

// 按钮
export const Button = styled.div`
    float:left;
    margin-top:9px;
    margin-right:20px;
    line-height:38px;
    border-radius: 20px;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    padding: 6px 12px;
    line-height: 24px;
    text-align:center;
    border: 1px solid rgba(236,97,73,.7);
    &.sign-up{
        width: 80px;
        margin: 9px 5px 0 15px;
        height: 38px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
    }
    &.write-btn{
        margin: 8px 12px 0;
        width: 100px;
        height: 40px;
        color: #fff;
        background-color: #ea6f5a;
    }
`
// 容器样式
export const NavUlWarp = styled.ul`
    font-size: 0;
`
// li样式
export const NavWarpLi = styled.li`
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
`
// 每一项
export const NavSearchA = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`
