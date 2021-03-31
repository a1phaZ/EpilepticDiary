import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const DrugForm = ({setDrug}) => {
	const [title, setTitle] = useState('');
	const [dosage, setDosage] = useState('');
	
	const clearForm = () => {
		setTitle('');
		setDosage('');
	}
	
	return (
		<Form inline>
			<Form.Control
				className="mb-2 mr-sm-2"
				id={'title'}
				placeholder={'Название'}
				value={title}
				onChange={(e) => {setTitle(e.currentTarget.value)}}
			>
			</Form.Control>
			<Form.Control
				className="mb-2 mr-sm-2"
				type={'number'}
				id={'dosage'}
				placeholder={'Дозировка'}
				value={dosage}
				onChange={(e) => {setDosage(e.currentTarget.value)}}
			>
			</Form.Control>
			<Button
				type={'submit'}
				className={'mb-2'}
				onClick={(e) => {
					e.preventDefault();
					setDrug({type: 'drug', title, dosage, time: new Date().getTime(), archive: false});
					clearForm();
				}}
			>
				Добавить
			</Button>
		</Form>
	)
}

export default DrugForm;
