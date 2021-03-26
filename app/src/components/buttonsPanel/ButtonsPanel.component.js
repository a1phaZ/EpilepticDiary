import React from 'react';
import {Button} from "react-bootstrap";
import './ButtonsPanel.styles.css';

const ButtonsPanel = ({buttons}) => {
	const _renderedButtons = buttons.map((button, idx) => {
		const {disabled, variant, onClick, icon, type, subType} = button;
		return (
			<Button key={idx}
							variant={variant}
							disabled={disabled}
							onClick={onClick}
							data-type={type}
							data-sub-type={subType}
							data-color={variant}
			>
				<i className={`fa ${icon}`} aria-hidden="true"></i>
			</Button>
		)
	})
	return (
		<div className={'buttons-panel'}>
			{_renderedButtons}
		</div>
	)
}

export default ButtonsPanel;
