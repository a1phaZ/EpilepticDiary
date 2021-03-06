import React from 'react';
import {Button} from "react-bootstrap";
import {add} from "../../_functions/db";
import {store} from "../../index";
import {disableButton, enableButton} from "../../store/buttonsPanel/actions";
import {setItem} from "../../store/data/actions";
import {format} from "date-fns";
import './ButtonsPanel.styles.css';

const ButtonsPanel = ({sleepId, db, buttons, setSleepId, notToday}) => {
	const _renderedButtons = buttons.map((button, idx) => {
		const {variant, onClick, icon, type, subType} = button;
		return (
			<Button key={idx}
							variant={variant}
							className={`button-${variant}`}
							disabled={(sleepId !== -1) && (type.toLowerCase() === 'сон')}
							onClick={onClick ? onClick : async (e) => {
								const {type, subType, color} = e.currentTarget.dataset;
								const {disabled} = e.currentTarget.disabled;
								const item = {
									type: type,
									subType: subType,
									time: new Date().getTime(),
									color: `badge-${color}`,
									date: format(new Date(), 'yyyy-MM-dd')
								};
				
								setSleepId(await add(db, item, 'items'));
								if (!disabled) {
									store.dispatch(disableButton(type));
									store.dispatch(setItem(item));
								} else {
									store.dispatch(enableButton(type));
								}
							}}
							data-type={type}
							data-sub-type={subType}
							data-color={variant}
			>
				<i className={`fa ${icon}`} aria-hidden="true"/>
			</Button>
		)
	})
	return (
		<div className={'buttons-panel'} style={{display: notToday&&'none'}}>
			{_renderedButtons}
		</div>
	)
}

export default ButtonsPanel;
