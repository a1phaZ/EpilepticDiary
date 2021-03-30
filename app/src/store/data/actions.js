import {RESET_ITEM, SET_ITEM, SET_ITEMS} from "./actionTypes";

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

export const resetItem = (item) => {
	return {
		type: RESET_ITEM,
		payload: {
			item
		}
	}
}