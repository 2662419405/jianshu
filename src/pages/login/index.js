import React, { Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Icon } from "antd";
import * as actionCreator from "./store/actionCreator";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginTitle, LoginButton, LoginContent } from "./styled";
class Login extends Component {
  render() {
    const { handleValueClick, loginStates } = this.props;
    if (!loginStates) {
      return (
        <LoginWrapper>
          <LoginTitle>
            <h4 className="title">登录 · 注册</h4>
            <LoginContent>
              <div className="from-group">
                {/* 图标 */}
                <Icon type="user" className="from-pic" />
                {/* 用户名 */}
                <input
                  ref={account => (this.account = account)}
                  type="text"
                  placeholder="手机号或邮箱"
                  className="from-control"
                />
              </div>
              <div className="from-group">
                {/* 图标 */}
                <Icon type="lock" className="from-pic" />
                {/* 密码 */}
                <input
                  ref={password => (this.password = password)}
                  type="password"
                  placeholder="密码"
                  className="from-control-pass"
                />
              </div>
              <LoginButton
                onClick={() => {
                  handleValueClick(this.account, this.password);
                }}
              >
                登录
              </LoginButton>
            </LoginContent>
          </LoginTitle>
        </LoginWrapper>
      );
    } else {
        // 登录成功,重定向到首页
      return <Redirect to="/"></Redirect>;
    }
  }
}

const mapState = state => {
  return {
    loginStates: state.get("login").get("loginState")
  };
};
const mapDispatch = dispatch => {
  return {
    handleValueClick(username, password) {
      dispatch(actionCreator.LoginHome(username.value, password.value));
    }
  };
};

export default connect(mapState, mapDispatch)(Login);
