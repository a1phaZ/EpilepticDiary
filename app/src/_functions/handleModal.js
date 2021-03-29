import {store} from "../index";
import {showModal, hideModal} from "../store/buttonsPanel/actions";

export function handleShowModal(e) {
	return store.dispatch(showModal(e.currentTarget.dataset.type));
}

export function handleCloseModal() {
	return store.dispatch(hideModal());
}