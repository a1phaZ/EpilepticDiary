import {DISABLE_BUTTON, ENABLE_BUTTON, HIDE_MODAL, SHOW_MODAL} from "./actionTypes";
import addItemToTimeLine from "../../_functions/addItemToTimeLine";
import {handleShowModal} from "../../_functions/handleModal";

const initialState = {
	buttons: [
		{
			type: 'Сон',
			subType: 'начало',
			icon: 'fa-bed',
			disabled: false,
			variant: 'primary',
			onClick: addItemToTimeLine
		},
		{
			type: 'Еда',
			icon: 'fa-cutlery',
			disabled: false,
			variant: 'success',
			onClick: handleShowModal
		},
		{
			type: 'Лекарства',
			icon: 'fa-medkit',
			disabled: false,
			variant: 'warning',
			onClick: handleShowModal
		},
		{
			type: 'Приступы',
			icon: 'fa-heartbeat',
			disabled: false,
			variant: 'danger',
			onClick: handleShowModal
		}
	],
	modalShow: false,
	modalType: '',
	modals: [
		{
			type: 'еда',
			description: true,
			drugs: false,
			count: false,
			series: false,
			strength: false,
		},
		{
			type: 'Лекарства',
			drugs: true,
			description: false,
			count: false,
			series: false,
			strength: false,
		},
		{
			type: 'Приступы',
			count: true,
			series: true,
			strength: true,
			description: false,
			drugs: false
		}
	]
};

export const buttonsPanelReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISABLE_BUTTON: {
			const buttons = [...state.buttons];
			const idx = buttons.findIndex((button) => button.type === action.payload.type);
			buttons[idx].disabled = true;
			return {
				...state,
				buttons: [...buttons]
			};
		}
		case ENABLE_BUTTON: {
			const buttons = [...state.buttons];
			const idx = buttons.findIndex((button) => button.type === action.payload.type);
			buttons[idx].disabled = false;
			return {
				...state,
				buttons: [...buttons]
			};
		}
		case SHOW_MODAL: {
			return {
				...state,
				modalShow: true,
				modalType: action.payload.modalType
			}
		}
		case HIDE_MODAL: {
			return {
				...state,
				modalShow: false,
				modalType: ''
			}
		}
		default: {
			return state;
		}
	}
}