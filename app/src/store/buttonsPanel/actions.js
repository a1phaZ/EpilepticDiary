import {DISABLE_BUTTON, ENABLE_BUTTON} from "./actionTypes";

export const disableButton = (buttonType) => {
	return {
		type: DISABLE_BUTTON,
		payload: {
			type: buttonType
		}
	}
}

export const enableButton = (buttonType) => {
	return {
		type: ENABLE_BUTTON,
		payload: {
			type: buttonType
		}
	}
}