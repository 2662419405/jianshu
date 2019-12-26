import { fromJS } from "immutable";
import * as Value_types from "./constants";
const DefaultData = fromJS({
  showReturn: true,
  returnTopMouse: false,
  TopicList: [],
  TuijianList: [],
  WriterList: [],
  GuanzhuList: [],
  WriterPage: 1
});
export default (state = DefaultData, action) => {
  switch (action.type) {
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
