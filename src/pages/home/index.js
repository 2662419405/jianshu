import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import {
  ReturnTop,
  HomeImgTop,
  HomeWrapper,
  Row,
  HomeLeft,
  HomeRight
} from "./styled";
class Home extends PureComponent {
  // 静态页面图基本可以运行
  render() {
    const { showReturn } = this.props;
    return (
      <Fragment>
        <HomeWrapper>
          <Row>
            {/* 左侧页面 */}
            <HomeLeft>
              {/* 左侧图 */}
              <HomeImgTop></HomeImgTop>
              左侧
            </HomeLeft>
            {/* 右侧页面 */}
            <HomeRight>右侧</HomeRight>
            {showReturn}
          </Row>
          {/* 返回顶部功能 */}
          {showReturn ? (
            <ReturnTop onClick={this.getReturnTop}>
              <span>^</span>
              <div>返回顶部</div>
              <div></div>
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
}

const mapState = state => ({
  showReturn: state.get("home").get("showReturn")
});
export default connect(mapState, null)(Home);
