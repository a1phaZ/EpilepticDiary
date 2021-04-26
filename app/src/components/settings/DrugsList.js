import React from 'react';
import {Badge, Button, Card, ListGroup} from "react-bootstrap";

import './styles.css';

const DrugList = ({data, deleteItem}) => {
	const _renderedList = data.map(drug => {
		return (
			<ListGroup.Item key={drug._id} className="drug-list justify-content-between">
				<div>
					{drug.title} <Badge variant={'info'}>{drug.dosage}</Badge>
				</div>
				<Button
					variant={'outline-danger'}
					data-id={drug._id}
					onClick={(e)=>{
						deleteItem(e.currentTarget.dataset.id);
					}}
				>
					<i className="fa fa-trash-o" aria-hidden="true"></i>
				</Button>
			</ListGroup.Item>
		)
	})
	return (
		<Card>
			<Card.Header><h6>Список лекарств</h6></Card.Header>
			<ListGroup>
				{_renderedList}
			</ListGroup>
		</Card>
	)
}

export default DrugList;
