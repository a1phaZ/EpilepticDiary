import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export const Attack = ({handleClose, handleSubmit}) => {
	const [count, setCount] = useState(1);
	const [series, setSeries] = useState(false);
	const [strength, setStrength] = useState(1);
	
	return (
		<>
			<Modal.Body>
				<Form>
					<Form.Group controlId={'formAttackSeries'}>
						<Form.Check
							type={'checkbox'}
							id={'checkbox-series'}
							label={'Серийные приступы?'}
							checked={series}
							onChange={() => {setSeries(!series)}}
						/>
					</Form.Group>
					
					{series && <Form.Group controlId={'formAttackCount'}>
						<Form.Label>Кол-во приступов</Form.Label>
						<Form.Control type={'number'} placeholder={'Кол-во приступов'} value={count} onChange={(e) => {setCount(e.currentTarget.value)}}/>
					</Form.Group>}
					
					<Form.Group controlId="formAttackStrength">
						<Form.Label>Range</Form.Label>
						<Form.Control type="range" min={1} max={3} value={strength} step={1} onChange={(e) => setStrength(e.currentTarget.value)}/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Закрыть
				</Button>
				<Button variant="primary" onClick={() => {
					const item = {
						type: 'Приступы',
						count: count,
						series: series,
						strength: strength,
						color: 'badge-danger'
					};
					handleSubmit(item)
				}}>
					Добавить
				</Button>
			</Modal.Footer>
		</>
	)
}