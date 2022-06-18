import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    product : ProductReducer,
    user : userReducer
  })
export default rootReducer