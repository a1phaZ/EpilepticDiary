import {DISABLE_BUTTON, ENABLE_BUTTON, HIDE_MODAL, SHOW_MODAL} from "./actionTypes";

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

export const showModal = (modalType) => {
	return {
		type: SHOW_MODAL,
		payload: {
			modalType: modalType
		}
	}
}

export const hideModal = () => {
	return {
		type: HIDE_MODAL
	}
}