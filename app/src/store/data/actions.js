import {SET_ITEM, SET_ITEMS} from "./actionTypes";

export const setItems = (items) => {
	return {
		type: SET_ITEMS,
		payload: {
			items
		}
	}
}

export const setItem = (item) => {
	return {
		type: SET_ITEM,
		payload: {
			item
		}
	}
}