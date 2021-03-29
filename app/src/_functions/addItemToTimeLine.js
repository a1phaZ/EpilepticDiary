import {store} from "../index";
import {disableButton, enableButton} from "../store/buttonsPanel/actions";

export default function addItemToTimeLine (e) {
	const {type, subType, color} = e.currentTarget.dataset;
	const {disabled} = e.currentTarget.disabled;
	// const item = {
	// 	type: type,
	// 	subType: subType,
	// 	time: new Date().getTime(),
	// 	color: `badge-${color}`
	// };
	if (type === 'Сон') {
		if (!disabled) {
			store.dispatch(disableButton(type))
			//TODO store.dispatch(addSleepToTimeLine(item))
		} else {
			//TODO store.dispatch(hideSleepEndButton())
			store.dispatch(enableButton(type))
		}
	}
}
