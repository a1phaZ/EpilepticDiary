import {combineReducers} from "redux";
import {buttonsPanelReducer} from "./buttonsPanel/reducers";
import {dataReducer} from './data/reducers';

export default combineReducers({
	buttons: buttonsPanelReducer,
	data: dataReducer,
})