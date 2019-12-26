import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import ReactDom from 'react-dom';
import {
  GuanzjiWarpper,
  GuanzhuTitle,
  GuanzhuFotter,
  GuanzhuUl,
  GuanzhuItem,
  GuanzhuChaoji
} from "../styled";
import { Icon } from "antd";
class Guanzhu extends PureComponent {
  render() {
    const { List,handleUpdateData } = this.props;
    return (
      <Fragment>
        {/* 盒子容器 */}
        <GuanzjiWarpper>
          {/* 关注标题 */}
          <GuanzhuTitle>
            <span>推荐作者</span>
            {/* 换一批 */}
            <a  onClick={handleUpdateData} className="page_change" href="/">
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
          <GuanzhuUl>
            {List.map(item => {
              return (
                <GuanzhuItem key={item.get("id")}>
                  <a className="avatar" href="/">
                    <img alt="" src={item.get("imgUrl")} />
                  </a>
                  <GuanzhuChaoji>
                    <Icon type="plus" />
                    关注
                  </GuanzhuChaoji>
                  <a href="/" className="name">
                    {item.get("userName")}
                  </a>
                  <p>{item.get("content")}</p>
                </GuanzhuItem>
              );
            })}
          </GuanzhuUl>
          {/* 查看全部 */}
          <GuanzhuFotter>查看全部 ></GuanzhuFotter>
        </GuanzjiWarpper>
      </Fragment>
    );
  }
}

const mapStatetoProp = state => {
  return {
    List: state.get("home").get("GuanzhuList")
  };
};


const mapDispatchToProps = (dispatch)=>({
    // 换一换动画
    handleUpdateData(e){
        e.preventDefault();
        const aHref = ReactDom.findDOMNode(document.getElementById('iconPic'));
        let originAngle = aHref.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            originAngle=parseInt(originAngle,10);
        }else{
            originAngle=0;
        }
        aHref.style.transform = 'rotate(' + (originAngle+360) + 'deg)';
    }   
})
export default connect(mapStatetoProp, mapDispatchToProps)(Guanzhu);
