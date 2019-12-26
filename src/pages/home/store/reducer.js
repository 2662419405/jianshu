import { fromJS } from "immutable";
import * as Value_types from "./constants";
const DefaultData = fromJS({
    showReturn: true
});
export default (state = DefaultData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
