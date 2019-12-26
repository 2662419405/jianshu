import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import {
  TuijianWrapper,
  TuijianItem,
  TuijianErWeiMa,
  TuijianContent,
  TuijianProp,
  TuijianDiv
} from "../styled";
import * as DisapthAction from "../store/actionCreator";

class Tuijian extends PureComponent {
  render() {
    const { list, ErWeiMa,handleErWeiMaEnter,handleErWeiMaLeave,MouseLeave } = this.props;
    return (
      <Fragment>
        {/* 推荐图片完成 */}
        <TuijianWrapper>
          {list.map(item => {
            return (
              <TuijianItem key={item.get("title")}>
                <img
                  src="./img/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                  alt={item.get("title")}
                  className="pic"
                />
              </TuijianItem>
            );
          })}
        </TuijianWrapper>
        {/* 推荐二维码 */}
        <TuijianErWeiMa
        onMouseEnter={handleErWeiMaEnter}
        onMouseLeave={handleErWeiMaLeave}
        >
          {/* 推荐图片 */}
          <img className="pic" alt="" src="./img/1.png" />
          {/* 推荐内容 */}
          <TuijianContent>
            <div>{ErWeiMa.get("title")}</div>
            <span>{ErWeiMa.get("content")}</span>
          </TuijianContent>
          {/* 推荐内容完成 */}
        </TuijianErWeiMa>
        {/* 推荐二维码完成 */}
        {/* 推荐属性 */}
        <TuijianProp className={ MouseLeave ? 'show':''}>
          <TuijianDiv></TuijianDiv>
          <div className="popover-title">
            <img
              src="./img/1.png"
              className="pic"
              alt=""
            />
          </div>
        </TuijianProp>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.get("home").get("TuijianList"),
    ErWeiMa: state.get("home").get("ErWeiMa"),
    MouseLeave:state.get('home').get('MouseLeave')
  };
};
const mapDispatchToProps=dispatch=>{
    return{
        handleErWeiMaEnter(){
            dispatch(DisapthAction.Showerweima());
        },
        handleErWeiMaLeave(){
            dispatch(DisapthAction.Hideerweima());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tuijian);
