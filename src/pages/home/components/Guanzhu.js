import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { GuanzjiWarpper, GuanzhuTitle ,GuanzhuFotter,GuanzhuUl} from "../styled";
import { Icon } from "antd";
class Guanzhu extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* 盒子容器 */}
        <GuanzjiWarpper>
          {/* 关注标题 */}
          <GuanzhuTitle>
            <span>推荐作者</span>
            {/* 换一批 */}
            <a className="page_change" href="/">
              <Icon
                id="iconPic"
                type="redo"
                style={{
                  transformOrigin: "center center",
                  transform: "rotate(0deg)",
                  transition: "all .3s ease-in",
                  cursor: "pointer",
                  color: "#999",
                  marginRight: "3px"
                }}
              />
              换一批 >
            </a>
          </GuanzhuTitle>
          <GuanzhuUl></GuanzhuUl>
          {/* 查看全部 */}
          <GuanzhuFotter>查看全部 ></GuanzhuFotter>
        </GuanzjiWarpper>
      </Fragment>
    );
  }
}

export default connect(null, null)(Guanzhu);
