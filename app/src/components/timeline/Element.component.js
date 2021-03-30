import React from 'react';
import Rating from "../rating/Rating.component";
import {Button} from "react-bootstrap";
import {getOne, put} from "../../_functions/db";
import {resetItem} from "../../store/data/actions";
import {store} from "../../index";

const formatTime = (time) => {
	const date = new Date(time);
	return new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute:'numeric'}).format(date);
}

const Element = ({db, type, drugs = [], subType, description, time, color, quality, strength, count, series, timeEnd, sleepId, setSleepId}) => {
	const _renderedDrugs = drugs.map((drug, idx) => {
		const {title, dosage} = drug;
		return (
			<li key={idx}>{title} - {dosage}</li>
		)
	});
	
	const endSleepButton = (
		<Button variant={'primary'}
						onClick={async () => {
							const item = await getOne(db, 'items', sleepId);
							item.subType = 'конец';
							item.timeEnd = new Date().getTime();
							await put(db, item);
							setSleepId(-1);
							store.dispatch(resetItem(item));
						}}
						data-type={'Сон'}
						data-sub-type={'конец'}
						data-color={'badge-primary'}
		>
			{'Пробуждение'}
		</Button>
	)
	
	return (
		<div className="vertical-timeline-item vertical-timeline-element">
			<div>
				<span className="vertical-timeline-element-icon bounce-in">
					<i className={`badge badge-dot badge-dot-xl ${color}`}> </i>
				</span>
				<div className="vertical-timeline-element-content bounce-in">
					<h4 className="timeline-title">{type}{count && ` - ${count}`}</h4>
					{(type.toLowerCase() === 'сон' && subType.toLowerCase() !== 'конец') && endSleepButton}
					{(type.toLowerCase() === 'сон' && subType.toLowerCase() === 'конец' && timeEnd) && <span><b>Пробуждение:</b> {formatTime(timeEnd)}</span>}
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
