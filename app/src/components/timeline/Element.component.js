import React from 'react';
import Rating from "../rating/Rating.component";
import {Button} from "react-bootstrap";
import {getOne, put} from "../../_functions/db";
import {resetItem} from "../../store/data/actions";
import {store} from "../../index";

const deleteDelay = 1000*60*30; //delay 30 min.

const formatTime = (time) => {
	const date = new Date(time);
	return new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute: 'numeric'}).format(date);
}

const getSleepDuration = (timeStart, timeEnd) => {
	const hour = 60 * 60 * 1000;
	const minute = 60 * 1000;
	const duration = timeEnd - timeStart;
	let durationStr = '';
	const hourDuration = Math.trunc(duration / hour);
	const minuteDuration = Math.trunc((duration - hourDuration * hour) / minute);
	
	if (hourDuration > 0) {
		durationStr += `${hourDuration} часов и `
	}
	durationStr += `${minuteDuration} минут`
	return durationStr
}

const Element = ({db, type, drugs = [], subType, description, time, color, quality, strength, count, series, timeEnd, sleepId, setSleepId, index, _id, deleteItem}) => {
	const _enableDelete = time + deleteDelay > new Date().getTime();
	const _renderedDeleteButton = (
		<Button
			variant={'link'}
			size={'sm'}
			data-id = {_id}
			onClick={(e) => {deleteItem(e.currentTarget.dataset.id)}}
		>
			<i className="fa fa-trash" aria-hidden="true"></i> Удалить
		</Button>
	)
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
							await put(db, item, 'items');
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
					<div>
						<h4 className="timeline-title">{type}{count && ` - ${count}`}</h4>
					
					</div>
					{(type.toLowerCase() === 'сон' && subType.toLowerCase() !== 'конец') && endSleepButton}
					{(type.toLowerCase() === 'сон' && subType.toLowerCase() === 'конец' && timeEnd) &&
					<div><b>Пробуждение:</b> {formatTime(timeEnd)}</div>}
					{(type.toLowerCase() === 'сон' && subType.toLowerCase() === 'конец' && timeEnd) &&
					<div><b>Продолжительность:</b> {getSleepDuration(time, timeEnd)}</div>}
					{description && <p>{description}</p>}
					{quality && <span>Качество сна: <Rating count={quality}/></span>}
					{series && <div><b>Серия</b></div>}
					{strength && <span>Сила приступов: <Rating count={strength}/></span>}
					{drugs && _renderedDrugs}
					<span className="vertical-timeline-element-date">{formatTime(time)}</span>
					{
						(index === 0 && _enableDelete) && _renderedDeleteButton
					}
				</div>
			</div>
		</div>
	)
}

export default Element;
