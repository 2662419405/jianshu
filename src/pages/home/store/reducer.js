import { fromJS } from "immutable";
import * as Value_types from "./constants";
const DefaultData = fromJS({
  showReturn: false,
  returnTopMouse: false
});
export default (state = DefaultData, action) => {
  switch (action.type) {
    case Value_types.MOUSERETURNENTER:
      return state.set("returnTopMouse", action.flag);
    case Value_types.SHOWRETURNTOP:
        return state.set('showReturn',action.flag)
    default:
      return state;
  }
};
