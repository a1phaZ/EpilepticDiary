import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {Description} from './Description.ModalPage';
import {Attack} from './Attack.ModalPage';
import {setItem} from "../../store/data/actions";
import {store} from "../../index";
import {hideModal} from "../../store/buttonsPanel/actions";
import {Drugs} from "./Drugs.ModalPage";
import {add} from "../../_functions/db";
import {format} from 'date-fns';

const ITEMS = 'items';

const ModalPageComponent = ({db, handleClose, showModal, modal = {}, drugsList}) => {
	const {type, description, drugs, count, series, strength, variant} = modal;
	const [show, setShow] = useState(false);
	
	const handleSubmit = async (item) => {
		item.time = new Date().getTime();
		item.date = format(new Date(), 'yyyy-MM-dd');
		item._id = await add(db, item, ITEMS);
		store.dispatch(setItem(item));
		store.dispatch(hideModal());
	}
	
	useEffect(() => {
		if (show === showModal) return;
		setShow(showModal);
	}, [showModal, show]);
	
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{type}</Modal.Title>
			</Modal.Header>
			{description && <Description handleClose={handleClose} handleSubmit={handleSubmit} type={type} variant={variant} />}
			{(count && series && strength) && <Attack handleClose={handleClose} handleSubmit={handleSubmit} type={type} variant={variant} />}
			{drugs && <Drugs drugsList={drugsList} handleClose={handleClose} handleSubmit={handleSubmit} type={type} variant={variant} />}
		</Modal>
	)
}

export default ModalPageComponent;
