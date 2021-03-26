import {DISABLE_BUTTON, ENABLE_BUTTON} from "./actionTypes";
import addItemToTimeLine from "../../_functions/addItemToTimeLine";

const initialState = [
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
		onClick: addItemToTimeLine
	},
	{
		type: 'Лекарства',
		icon: 'fa-medkit',
		disabled: false,
		variant: 'warning',
		onClick: addItemToTimeLine
	},
	{
		type: 'Приступы',
		icon: 'fa-heartbeat',
		disabled: false,
		variant: 'danger',
		onClick: addItemToTimeLine
	}
];

export const buttonsPanelReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISABLE_BUTTON: {
			const buttons = [...state];
			const idx = buttons.findIndex((button) => button.type === action.payload.type);
			buttons[idx].disabled = true;
			return [
				...buttons
			];
		}
		case ENABLE_BUTTON: {
			const buttons = [...state];
			const idx = buttons.findIndex((button) => button.type === action.payload.type);
			buttons[idx].disabled = false;
			return [
				...buttons
			];
		}
		default: {
			return state;
		}
	}
}