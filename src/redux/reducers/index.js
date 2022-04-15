import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
const reducers = combineReducers({
    userReducer:userReducer
})

export default reducers;