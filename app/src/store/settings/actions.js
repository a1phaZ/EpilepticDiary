import {SET_DRUG, SET_DRUGS} from './actionTypes';

export const setDrug = (drug) => {
	return {
		type: SET_DRUG,
		payload: {
			drug
		}
	}
}

export const setDrugs = (drugs) => {
	return {
		type: SET_DRUGS,
		payload: {
			drugs
		}
	}
}