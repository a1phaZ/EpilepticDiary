import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export const Attack = ({handleClose, handleSubmit}) => {
	const [count, setCount] = useState(1);
	const [series, setSeries] = useState(false);
	const [strength, setStrength] = useState(1);
	const [rangeDescription, setRangeDescription] = useState('Слабый приступ');
	const [textClass, setTextClass] = useState('secondary');
	
	useEffect(() => {
		switch (strength) {
			case '1': {
				setTextClass('secondary')
				setRangeDescription('Слабый приступ');
				return;
			}
			case '2': {
				setTextClass('warning')
				setRangeDescription('Средний приступ');
				return;
			}
			case '3': {
				setTextClass('danger')
				setRangeDescription('Сильный приступ');
				return;
			}
			default: {
				setTextClass('secondary')
				setRangeDescription('Слабый приступ');
				return;
			}
		}
	}, [strength]);
	
	return (
		<>
			<Modal.Body>
				<Form inline style={{justifyContent: 'space-between'}}>
					<Form.Group controlId={'formAttackSeries'} className="mb-2 mr-sm-2">
						<Form.Check
							type={'checkbox'}
							id={'checkbox-series'}
							label={'Серийные приступы?'}
							checked={series}
							onChange={() => {
								setSeries(!series)
							}}
						/>
					</Form.Group>
					
					<Form.Group controlId={'formAttackCount'} className="mb-2 mr-sm-2">
						<Form.Control
							type={'number'}
							placeholder={'Кол-во приступов'}
							value={count}
							disabled={!series}
							onChange={(e) => {
								setCount(e.currentTarget.value)
							}}/>
					</Form.Group>
					
					<Form.Group controlId="formAttackStrength" className={'mb-2'} style={{width: '100%'}}>
						<Form.Label>{`Сила приступа:`}</Form.Label>
						<Form.Control type="range" min={1} max={3} value={strength} step={1}
													onChange={(e) => setStrength(e.currentTarget.value)}/>
						<Form.Text className={`text-${textClass}`}>{rangeDescription}</Form.Text>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Отмена
				</Button>
				<Button variant="primary" onClick={() => {
					const item = {
						type: 'Приступы',
						count: count,
						series: series,
						strength: strength,
						color: 'badge-warning'
					};
					handleSubmit(item)
				}}>
					Добавить
				</Button>
			</Modal.Footer>
		</>
	)
}