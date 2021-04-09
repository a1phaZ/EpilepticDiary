import {RESET_ITEM, SET_DATE, SET_ITEM, SET_ITEMS, SET_DB} from "./actionTypes";

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

export const setDate = (date) => {
	return {
		type: SET_DATE,
		payload: {
			date
		}
	}
}

export const setDB = (db) => {
	return {
		type: SET_DB,
		payload: {
			db
		}
	}
}