import React, { Component } from "react";
import { connect } from "react-redux";
import * as createActions from "../../store/actionCreators";
// header组件引入antd
import { Icon } from "antd";
import "antd/dist/antd.css";
// 路由组件
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
// 使用动画组件
import { CSSTransition } from "react-transition-group";
// 样式编写
import {
  NavUlWarp,
  NavSearchA,
  NavWarpLi,
  NavSearch,
  NavbarSearch,
  NavBottom,
  NavAHref,
  NavbarTitle,
  HeaderWrapper,
  Logo,
  Nav,
  Addition,
  Button,
  NavItem,
  NavbarContent,
  NavbarHeader
} from "./style";

class Header extends Component {
  render() {
    const {
      handleValueBlur,
      handleChangeList,
      handleValueFocus,
      demo,
      defaultList,
      handlerClickDemo,
      focued,
      mouseIn,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave
    } = this.props;
    // 定义搜索栏每一页数组
    const defaultArr = [];
    // 存放每一页的数据,数组
    if (defaultList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (defaultList[i] != null) {
          defaultArr.push(
            <NavWarpLi key={defaultList[i]}>
              <NavSearchA>{defaultList[i]}</NavSearchA>
            </NavWarpLi>
          );
        }
      }
    }

    return (
      <HeaderWrapper>
        {/* ----------左侧LOGO---------- */}
        <Link to="/">
          <Logo />
        </Link>
        {/* ----------中间菜单栏---------- */}
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left hold">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          {/* 点击动画 */}
          <CSSTransition timeout={200} classNames="search-node" in={focued}>
            {/* 获取ajax数据 */}
            <NavSearch
              onFocus={() => {
                handleValueFocus(defaultList);
              }}
              // 取消聚焦
              onBlur={handleValueBlur}
              className={focued ? "focused" : ""}
            ></NavSearch>
          </CSSTransition>
          {/* 中部盒子样式+搜索 */}
          <NavbarSearch
        //   鼠标移除隐藏搜索框
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={focued || mouseIn ? 'show' : ''}
          >
            <NavbarContent>
              <NavbarHeader>
                <NavbarTitle>热门搜索</NavbarTitle>
                <NavBottom
                  // 点击换一换切换页码数据
                  onClick={() => {
                    handleChangeList(page, totalPage);
                  }}
                >
                  <NavAHref>换一换</NavAHref>
                  <Icon
                    id="icon-ref"
                    type="redo"
                    style={{
                      transformOrigin: "center center",
                      transform: "rotate(0deg)",
                      transition: "all .3s ease-in",
                      cursor: "pointer",
                      color: "#999",
                      float: "right",
                      right: "2px",
                      top: "3px",
                      position: "relative"
                    }}
                  />
                </NavBottom>
              </NavbarHeader>
              {/* 列表数据容器 */}
              <NavUlWarp>{defaultArr}</NavUlWarp>
            </NavbarContent>
          </NavbarSearch>

          <Icon type="search" style={{ position: "relative", left: "-30px" }} />
        </Nav>

        {/* ----------右侧登录---------- */}
        <Addition>
          {/* ----------未加路由---------- */}
          <Button className="sign-up">注册</Button>
          <Button className="write-btn">
            <Icon
              type="play-circle"
              style={{ position: "relative", left: "-5px" }}
            />
            写文章
          </Button>
        </Addition>

        {/* 这是头部的组件
                <button
                    onClick={handlerClickDemo}
                >修改头部组件的数据</button>
                {demo} */}
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    demo: state.get("Header").get("demo"),
    // 搜索框聚焦方式
    focued: state.get("Header").get("focued"),
    defaultList: state.get("Header").get("list"),
    page: state.get("Header").get("page"),
    totalPage: state.get("Header").get("totalPage"),
    mouseIn:state.get("Header").get("mouseIn"),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // 框架测试
    handlerClickDemo() {
      dispatch(createActions.headerChange());
    },
    // 取消聚焦
    handleValueBlur() {
      dispatch(createActions.valueChangeBlur());
    },
    // 移入显示搜索框
    handleMouseEnter(){
        dispatch(createActions.mouseEnter());
    },
    // 移出隐藏搜索框
    handleMouseLeave(){
        dispatch(createActions.mouseLeave());
    },
    // ajax获取数据
    handleValueFocus(list) {
      list.size !== undefined && dispatch(createActions.defaultListArr());
      dispatch(createActions.valueChangeFocus());
    },
    // 切换页码数据
    handleChangeList(page, totalPage) {
      const aHref = ReactDom.findDOMNode(document.getElementById("icon-ref"));
      // 获取旋转图标,每次增加360度的角度
      // 打印aHref.style.transform
      console.log(aHref.style.transform);
      //exec返回的是一个数组
      // let originAngle = reg.exec(aHref.style.transform);
      let originAngle = aHref.style.transform.replace(/[^0-9]/gi, "");
      console.log(originAngle);
      if (originAngle) {
        // parseInt传递两个参数的话,第二个参数是进制数
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      aHref.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage - 1) {
        page++;
        dispatch(createActions.changeValue(page));
      } else {
        page = 0;
        dispatch(createActions.changeValue(page));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
