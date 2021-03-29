import {store} from "../index";
import {disableButton, enableButton} from "../store/buttonsPanel/actions";
import {setItem} from "../store/data/actions";

export default function addItemToTimeLine (e) {
	const {type, subType, color} = e.currentTarget.dataset;
	const {disabled} = e.currentTarget.disabled;
	const item = {
		type: type,
		subType: subType,
		time: new Date().getTime(),
		color: `badge-${color}`
	};
	if (type.toLowerCase() === 'сон' && subType.toLowerCase() === 'начало') {
		if (!disabled) {
			store.dispatch(disableButton(type))
			store.dispatch(setItem(item));
		} else {
			if (type.toLowerCase() === 'сон') {
				store.dispatch(enableButton(type))
			}
		}
	}
}
