import React, {useState} from "react";
import {Form, FormGroup} from 'react-bootstrap';
import {format} from 'date-fns';

const formatDate = (date) => {
	return format(new Date(date), 'yyyy-MM-dd');
}

const DatePicker = ({setDate, currentDate}) =>{
	const [_date, _setDate] = useState(() => {
		return formatDate(currentDate);
	});
	
	return (
		<FormGroup className={'date-picker'}>
			<Form>
				<Form.Control
					type={'date'}
					className={'date-picker-input'}
					value={_date}
					onKeyDown={(e) => e.preventDefault()}
					onChange={(e) => {
						const {value} = e.currentTarget;
						if (value) {
							_setDate(formatDate(value));
							setDate(value);
						}
					}}
				/>
			</Form>
		</FormGroup>
	)
}

export default DatePicker;
