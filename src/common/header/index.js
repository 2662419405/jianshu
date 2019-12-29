import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavbarSearch,
    NavSearch,
    Addition,
    Button,
    NavbarContent,
    NavbarTitle,
    NavbarHeader,
    NavAHref,
    NavUlWarp,
    NavWarpLi,
    NavSearchA,
    NavBottom
} from './style';
import { Icon } from 'antd';
import 'antd/dist/antd.css'; 
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as createAction from '../../store/actionCreators';
import { Link } from 'react-router-dom';

class Header extends PureComponent{

    render(){

        const { focued, defaultList, page, totalPage, mouseIn, handleChangeList, handleMouseEnter, handleValueFocus, handleValueBlur, handleMouseLeave} = this.props;
        const defaultArr = [];
        if( defaultList.length ){
            for(let i = page*10 ; i < (page + 1) * 10 ; i++) {
                if(defaultList[i]!=null){
                    defaultArr.push(<NavWarpLi key={defaultList[i]}><NavSearchA>{defaultList[i]}</NavSearchA></NavWarpLi>);
                }
            }
        }

        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left hold'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <CSSTransition
                        timeout={200}
                        in={focued}
                        classNames="search-node"
                    >
                        <NavSearch
                            onFocus={()=>{handleValueFocus(defaultList)}}
                            onBlur={handleValueBlur}
                            className={focued ? 'focused' : ''}
                        ></NavSearch>
                    </CSSTransition>
                    <NavbarSearch
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={focued || mouseIn ? 'show' : ''}
                    >
                        <NavbarContent>
                            <NavbarHeader>
                                <NavbarTitle>热门搜索</NavbarTitle>
                                <NavBottom onClick={ ()=>{
                                    handleChangeList(page,totalPage)
                                } }
                                >
                                    <NavAHref>换一换</NavAHref>
                                    <Icon
                                        id="icon-ref"
                                        type="redo" style={
                                            {transformOrigin:'center center',transform:'rotate(0deg)',transition:'all .3s ease-in',cursor:'pointer',color:'#999',float:'right',right:'2px',top:'3px',position:'relative'}
                                        }
                                    />
                                </NavBottom>
                            </NavbarHeader>
                            <NavUlWarp>
                                {defaultArr}
                            </NavUlWarp>
                        </NavbarContent>
                    </NavbarSearch>
                    <Icon type="search" style={{position:'relative',left:'-30px'}}/>
                </Nav>
                <Addition>
                    <Link to={ '/login' }>
                        <Button className='sign-up'>注册</Button>
                    </Link>
                    <Button className='write-btn'>
                        <Icon type="play-circle" style={{position:'relative',left:'-5px'}}/>
                        写文章
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        focued: state.get('header').get('focued'),
        defaultList: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleValueFocus(list){
            (list.size !== undefined)&&dispatch(createAction.defaultListArr());
            dispatch(createAction.valueChangeFocus());
        },
        handleValueBlur(){
            dispatch(createAction.valueChangeBlur());
        },
        handleMouseEnter(){
            dispatch(createAction.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(createAction.mouseLeave());
        },
        handleChangeList(page,totalPage){
            
            const aHref = ReactDom.findDOMNode(document.getElementById('icon-ref'));
            let originAngle = aHref.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            aHref.style.transform = 'rotate(' + (originAngle+360) + 'deg)';
            
            if( page < totalPage-1 ){
                page++;
                dispatch(createAction.changValue(page));
            }else{
                page=0;
                dispatch(createAction.changValue(page));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);