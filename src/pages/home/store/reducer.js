import { fromJS } from "immutable";
import * as Value_types from "./constants";
const DefaultData = fromJS({
  showReturn: true,
  returnTopMouse: false,
  TopicList: [],
  TuijianList: [],
  WriterList: [],
  GuanzhuList: [],
  WriterPage: 1,
  ErWeiMa: {
    imgUrl:
      "//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png",
    title: "下载简书手机App > ",
    content: "随时随地发现和创作内容"
  },
  MouseLeave:false,
});
export default (state = DefaultData, action) => {
  switch (action.type) {
    case Value_types.ERWEIMAENTER:
      return state.set("MouseLeave", true);
    case Value_types.ERWEIMALEAVE:
      return state.set("MouseLeave", false);
    case Value_types.MOUSERETURNENTER:
      return state.set("returnTopMouse", action.flag);
    case Value_types.SHOWRETURNTOP:
      return state.set("showReturn", action.flag);
    case Value_types.GET_HOME_DEFAULT_DATA:
      return state.merge({
        TopicList: fromJS(action.TopicList),
        WriterList: fromJS(action.WriterList),
        TuijianList: fromJS(action.TuijianList),
        GuanzhuList: fromJS(action.GuanzhuList)
      });
    case Value_types.LOADMORE:
      return state.merge({
        WriterList: state.get("WriterList").concat(action.value),
        WriterPage: action.WriterPage
      });
    default:
      return state;
  }
};
