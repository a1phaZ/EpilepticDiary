import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export const Description = ({handleClose, handleSubmit, type, variant}) => {
	const [description, setDescription] = useState('');
	const handleChange = (e) => {
		setDescription(e.currentTarget.value);
	}
	return (
		<>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formDescription">
						<Form.Label>Описание</Form.Label>
						<Form.Control as="textarea" rows={3} value={description} onChange={handleChange}/>
						<Form.Text className="text-muted">
							Введите описание
						</Form.Text>
					</Form.Group>
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
							description: description,
							type: type,
							color: `badge-${variant}`
						}
						handleSubmit(item)
					}}
					disabled={!description}
				>
					Добавить
				</Button>
			</Modal.Footer>
		</>
	)
}