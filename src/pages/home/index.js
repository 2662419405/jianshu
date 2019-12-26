import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
// 引入topic组件
import Topic from './components/Topic';
// import Writer from './components/Writer'
// import Guanzhu from './components/Guanzhu';
// import Tuijian from './components/Tuijian'
import {
  ReturnTop,
  HomeImgTop,
  HomeWrapper,
  Row,
  HomeLeft,
  HomeRight
} from "./styled";
import * as actionCreator from './store/actionCreator';
import Writer from './components/Writer';
class Home extends PureComponent {
  // 静态页面图基本可以运行
  render() {
    const {
      ReturnTopMouseEnter,
      ReturnTopMouseLeave,
      showReturn,
      returnTopMouse
    } = this.props;
    return (
      <Fragment>
        <HomeWrapper>
          <Row>
            {/* 左侧页面 */}
            <HomeLeft>
              {/* 左侧图 */}
              <HomeImgTop></HomeImgTop>

              {/* 左侧标题开始 */}
              <Topic />
              <Writer />
            </HomeLeft>

            {/* 右侧页面 */}
            <HomeRight></HomeRight>
            {showReturn}
          </Row>
          {/* 返回顶部功能 */}
          {showReturn ? (
            <ReturnTop onClick={this.getReturnTop}>
              {/* 鼠标划入显示和隐藏提示信息 */}
              <span
                onMouseEnter={ReturnTopMouseEnter}
                onMouseLeave={ReturnTopMouseLeave}
              >
                ^
              </span>
              <div className={returnTopMouse ? "show top" : "top"}>
                返回顶部
              </div>
              <div className={returnTopMouse ? "show title" : "title"}></div>
            </ReturnTop>
          ) : (
            ""
          )}
        </HomeWrapper>
      </Fragment>
    );
  }
  // 返回顶部函数
  getReturnTop() {
    window.scrollTo(0, 0);
  }
  //   声明周期,组件加载完成监听进度条
  componentDidMount() {
    this.bindEvents();
    this.props.handleMount();
  }
  // 生命周期获取数据
  bindEvents() {
    window.addEventListener("scroll", this.props.changeSrollTopShow);
  }
}

const mapState = state => ({
  // 返回顶部按钮显示隐藏
  showReturn: state.get("home").get("showReturn"),
  //   使用getIn方式(数组形式)获取store里面的数据
  returnTopMouse: state.getIn(["home", "returnTopMouse"])
});
const mapDisaptch = dispatch => ({
  // 鼠标滑入显示提示
  ReturnTopMouseEnter() {
    dispatch(actionCreator.MouseReturn(true));
  },
  // 划出隐藏提示信息
  ReturnTopMouseLeave() {
    dispatch(actionCreator.MouseReturn(false));
  },
  //   监听进度条
  changeSrollTopShow() {
    if (document.documentElement.scrollTop > 3) {
        dispatch(actionCreator.scrollTopChange(true));
    }else{
        dispatch(actionCreator.scrollTopChange(false));
    
    }
  },
  // 获取下面的数据
  handleMount(){
    dispatch(actionCreator.getDefaultArr());
  }
});
export default connect(mapState, mapDisaptch)(Home);
