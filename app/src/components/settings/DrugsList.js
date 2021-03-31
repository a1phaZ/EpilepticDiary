import React from 'react';
import {Badge, Card, ListGroup} from "react-bootstrap";

const DrugList = ({data}) => {
	const _renderedList = data.map(drug => {
		return <ListGroup.Item key={drug._id}>{drug.title} <Badge variant={'info'}>{drug.dosage}</Badge></ListGroup.Item>
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
