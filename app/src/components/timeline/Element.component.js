import React from 'react';
import Rating from "../rating/Rating.component";
import {Button} from "react-bootstrap";

const formatTime = (time) => {
	const date = new Date(time);
	return new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute:'numeric'}).format(date);
}

const endSleepButton = (
	<Button variant={'primary'}
	        onClick={() => {console.log('end sleep')}}
	        data-type={'Сон'}
	        data-sub-type={'конец'}
	        data-color={'badge-primary'}
	>
		{'Пробуждение'}
	</Button>
)

const Element = ({type, drugs = [], subType, description, time, color, quality, strength, count, series}) => {
	const _renderedDrugs = drugs.map((drug, idx) => {
		const {title, dosage} = drug;
		return (
			<li key={idx}>{title} - {dosage}</li>
		)
	})
	return (
		<div className="vertical-timeline-item vertical-timeline-element">
			<div>
				<span className="vertical-timeline-element-icon bounce-in">
					<i className={`badge badge-dot badge-dot-xl ${color}`}> </i>
				</span>
				<div className="vertical-timeline-element-content bounce-in">
					<h4 className="timeline-title">{type}{subType && ` - ${subType}`}{count && ` - ${count}`}</h4>
					{type.toLowerCase() === 'сон' && endSleepButton}
					{description && <p>{description}</p>}
					{quality && <span>Качество сна: <Rating count={quality}/></span>}
					{series && <div><b>Серия</b></div>}
					{strength && <span>Сила приступов: <Rating count={strength}/></span>}
					{drugs && _renderedDrugs}
					<span className="vertical-timeline-element-date">{formatTime(time)}</span>
				</div>
			</div>
		</div>
	)
}

export default Element;
