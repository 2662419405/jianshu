import { fromJS } from "immutable";
import * as Value_types from "./constants";
const DefaultData = fromJS({
    showReturn: true,
    returnTopMouse:false
});
export default (state = DefaultData, action) => {
  switch (action.type) {
      case Value_types.MOUSERETURNENTER:
          return state.set('returnTopMouse',action.flag)
    default:
      return state;
  }
};
