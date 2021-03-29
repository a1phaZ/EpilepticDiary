import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const dl = [
	{_id: 1, title: 'Название 1', dosage: 'дозировка 1'},
	{_id: 2, title: 'Название 2', dosage: 'дозировка 2'},
	{_id: 3, title: 'Название 3', dosage: 'дозировка 3'},
	{_id: 4, title: 'Название 4', dosage: 'дозировка 4'},
	{_id: 5, title: 'Название 5', dosage: 'дозировка 5'}
]

export const Drugs = ({drugsList = dl, handleClose, handleSubmit}) => {
	const [drugs, setDrugs] = useState(() => drugsList.map((drug) => {
		drug.checked = false;
		return drug;
	}));
	
	const handleChecked = (e) => {
		const {id} = e.currentTarget.dataset;
		const _drugs = [...drugs];
		const idx = _drugs.findIndex(drug => drug._id.toString() === id.toString());
		if (idx !== -1) {
			_drugs[idx].checked = !_drugs[idx].checked;
			setDrugs(_drugs);
			return true;
		}
		return false;
	}
	
	return (
		<>
			<Modal.Body>
				<Form>
					{drugs.map((drug) => (
						<Form.Group controlId={`formDrug-${drug._id}`} key={drug?._id}>
							<Form.Check
								type={'checkbox'}
								data-id={drug?._id}
								onChange={handleChecked}
								value={drug.checked}
								label={`${drug?.title} (${drug?.dosage})`}
								title={`${drug?.title} (${drug?.dosage})`}
							/>
						</Form.Group>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Закрыть
				</Button>
				<Button variant="primary" onClick={() => {
					const item = {
						type: 'Лекарства',
						drugs: drugs.filter(drug => drug.checked),
						color: 'badge-warning'
					}
					handleSubmit(item);
				}}>
					Добавить
				</Button>
			</Modal.Footer>
		</>
	)
}