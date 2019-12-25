import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as createActions from '../../store/actionCreators';
// header组件引入antd
import { Icon } from 'antd';
import 'antd/dist/antd.css';
// 路由组件
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
// 使用动画组件
import { CSSTransition } from 'react-transition-group';
// 样式编写
import { NavSearch,NavbarSearch, NavBottom, NavAHref, NavbarTitle, HeaderWrapper, Logo, Nav, Addition, Button, NavItem, NavbarContent, NavbarHeader } from './style';

class Header extends Component {
    render() {

        const { demo, handlerClickDemo,focued ,mouseIn} = this.props;

        return (
            <HeaderWrapper>
                {/* ----------左侧LOGO---------- */}
                <Link to='/'>
                    <Logo />
                </Link>
                {/* ----------中间菜单栏---------- */}
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left hold'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    {/* 点击动画 */}
                    <CSSTransition
                        timeout={200}
                        classNames="search-node"
                        in={focued}
                    >

                        <NavSearch 
                            className = {focued?'focused':''}
                        >

                        </NavSearch>
                    </CSSTransition>
                    {/* 中部盒子样式+搜索 */}
                    <NavbarSearch 
                        className = {'show'}
                    >
                        <NavbarContent>
                            <NavbarHeader>
                                <NavbarTitle>热门搜索</NavbarTitle>
                                <NavBottom>
                                    <NavAHref>换一换</NavAHref>
                                    <Icon
                                        id="icon-ref"
                                        type="redo" style={
                                            { transformOrigin: 'center center', transform: 'rotate(0deg)', transition: 'all .3s ease-in', cursor: 'pointer', color: '#999', float: 'right', right: '2px', top: '3px', position: 'relative' }
                                        }
                                    />
                                </NavBottom>


                            </NavbarHeader>

                        </NavbarContent>
                    </NavbarSearch>

                    <Icon type="search" style={{ position: 'relative', left: '-30px' }} />
                </Nav>




                {/* ----------右侧登录---------- */}
                <Addition>
                    {/* ----------未加路由---------- */}
                    <Button className='sign-up'>注册</Button>
                    <Button className='write-btn'>
                        <Icon type="play-circle" style={{ position: 'relative', left: '-5px' }} />
                        写文章
                    </Button>
                </Addition>



                这是头部的组件
                <button
                    onClick={handlerClickDemo}
                >修改头部组件的数据</button>
                {demo}
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demo: state.get('Header').get('demo'),
        // 搜索框聚焦方式
        focued:state.get('Header').get("focued"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerClickDemo() {
            dispatch(createActions.headerChange())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)