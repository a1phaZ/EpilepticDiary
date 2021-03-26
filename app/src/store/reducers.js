import {combineReducers} from "redux";
import {buttonsPanelReducer} from "./buttonsPanel/reducers";

export default combineReducers({
	buttons: buttonsPanelReducer,
})