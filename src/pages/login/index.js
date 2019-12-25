import React, { Component } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Icon } from "antd";
import * as actionCreator from "./store/actionCreator";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginTitle,LoginButton, LoginContent } from "./styled";
class Login extends Component {
  render() {
    const {} = this.props;
    return (
      <LoginWrapper>
        <LoginTitle>
          <h4 className="title">登录 · 注册</h4>
          <LoginContent>
            <div className="from-group">
              <Icon type="user" className="from-pic" />
              <input
                type="text"
                placeholder="手机号或邮箱"
                className="from-control"
              />
            </div>
            <div className="from-group">
              <Icon type="lock" className="from-pic" />
              <input
                type="password"
                placeholder="密码"
                className="from-control-pass"
              />
            </div>
            <LoginButton>
            登录
            </LoginButton>
          </LoginContent>
        </LoginTitle>
      </LoginWrapper>
    );
  }
}


const mapState = (state)=>{
    return {
        loginStates:state.get('login').get('loginStates')
    }
}

export default connect(null, null)(Login);
