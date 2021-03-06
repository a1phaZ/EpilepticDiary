import React, {useState} from 'react';
import {Badge, Button, Form, Modal} from "react-bootstrap";
import {Link, useRouteMatch} from "react-router-dom";

export const Drugs = ({drugsList = [], handleClose, handleSubmit, type, variant}) => {
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
				{drugs.length === 0 && <h3>Нет ни одного лекарства, перейдите в <CustomLink to={'/settings'} label={'настройки'}/></h3>}
				<Form>
					{drugs.map((drug,) => {
						const label = <span>{drug.title} <Badge variant={'info'}>{drug.dosage}</Badge></span>
						return (
							<Form.Group controlId={`formDrug-${drug.title}-${drug.dosage}`} key={`${drug.title}-${drug.dosage}`}>
								<Form.Check
									type={'checkbox'}
									data-id={drug?._id}
									onChange={handleChecked}
									value={drug.checked}
									label={label}
								/>
							</Form.Group>
						)
					})}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Отмена
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						const item = {
							type: type,
							drugs: drugs.filter(drug => drug.checked),
							color: `badge-${variant}`
						}
						handleSubmit(item);
					}}
					disabled={drugs.length === 0 || drugs.filter(drug => drug.checked).length === 0}
				>
					Добавить
				</Button>
			</Modal.Footer>
		</>
	)
}

function CustomLink({ label, to, activeOnlyWhenExact }) {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact
	});
	
	return (
		<span className={match ? "active" : ""}>
			{match && "> "}
			<Link to={to}>{label}</Link>
		</span>
	);
}