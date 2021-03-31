import {SET_DRUG, SET_DRUGS} from "./actionTypes";

const initialState = {
	drugs: []
}

export const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DRUGS: {
			return {
				...state,
				drugs: action.payload.drugs
			}
		}
		case SET_DRUG: {
			return {
				...state,
				drugs: [...state.drugs, action.payload.drug]
			}
		}
		default: {
			return state;
		}
	}
}