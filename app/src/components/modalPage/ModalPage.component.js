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

const ModalPageComponent = ({db, handleClose, showModal, modal = {}, drugsList}) => {
	const {type, description, drugs, count, series, strength} = modal;
	const [show, setShow] = useState(false);
	
	const handleSubmit = async (item) => {
		item.time = new Date().getTime();
		item.date = format(new Date(), 'yyyy-MM-dd');
		await add(db, item, 'items');
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
			{description && <Description handleClose={handleClose} handleSubmit={handleSubmit} />}
			{(count && series && strength) && <Attack handleClose={handleClose} handleSubmit={handleSubmit} />}
			{drugs && <Drugs drugsList={drugsList} handleClose={handleClose} handleSubmit={handleSubmit} />}
			{/*<Modal.Body>*/}
			{/*	<Form>*/}
			{/*		{description && <Description setDescription={setDescription}/>}*/}
			{/*		*/}
			{/*		{drugs && <Drugs setDrugs={setDrugs}/>}*/}
			{/*		*/}
			{/*		{(count && series && strength) && <Attack />}*/}
			{/*	</Form>*/}
			{/*</Modal.Body>*/}
			{/*<Modal.Footer>*/}
			{/*	<Button variant="secondary" onClick={handleClose}>*/}
			{/*		Закрыть*/}
			{/*	</Button>*/}
			{/*	<Button variant="primary" onClick={() => {*/}
			{/*		const item = {*/}
			{/*			description: formDescription,*/}
			{/*			*/}
			{/*		}*/}
			{/*		handleSubmit(item)*/}
			{/*	}}>*/}
			{/*		Добавить*/}
			{/*	</Button>*/}
			{/*</Modal.Footer>*/}
		</Modal>
	)
}


// modals: [
// 	{
// 		type: 'еда',
// 		description: true,
// 		drugs: false,
// 		count: false,
// 		series: false,
// 		strength: false,
// 	},
// 	{
// 		type: 'Лекарства',
// 		drugs: true,
// 		description: false,
// 		count: false,
// 		series: false,
// 		strength: false,
// 	},
// 	{
// 		type: 'Приступы',
// 		count: true,
// 		series: true,
// 		strength: true,
// 		description: false,
// 		drugs: false
// 	}
// ]

export default ModalPageComponent;
